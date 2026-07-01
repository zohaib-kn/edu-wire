import fs from 'fs';
import path from 'path';

// Import existing data objects to preserve flat fields
import { italyData } from '../lib/data/mbbs/countries/italy';
import { romaniaData } from '../lib/data/mbbs/countries/romania';
import { bulgariaData } from '../lib/data/mbbs/countries/bulgaria';
import { russiaData } from '../lib/data/mbbs/countries/russia';
import { georgiaData } from '../lib/data/mbbs/countries/georgia';
import { kazakhstanData } from '../lib/data/mbbs/countries/kazakhstan';
import { kyrgyzstanData } from '../lib/data/mbbs/countries/kyrgyzstan';
import { polandData } from '../lib/data/mbbs/countries/poland';
import { hungaryData } from '../lib/data/mbbs/countries/hungary';
import { serbiaData } from '../lib/data/mbbs/countries/serbia';

const localCountries: any[] = [
  italyData,
  romaniaData,
  bulgariaData,
  russiaData,
  georgiaData,
  kazakhstanData,
  kyrgyzstanData,
  polandData,
  hungaryData,
  serbiaData
];

const slugMap: { [key: string]: any } = {
  italy: italyData,
  romania: romaniaData,
  bulgaria: bulgariaData,
  russia: russiaData,
  georgia: georgiaData,
  kazakhstan: kazakhstanData,
  kyrgyzstan: kyrgyzstanData,
  poland: polandData,
  hungary: hungaryData,
  serbia: serbiaData
};

function getExtension(url: string, contentType: string | null): string {
  if (contentType) {
    if (contentType.includes('image/png')) return '.png';
    if (contentType.includes('image/jpeg') || contentType.includes('image/jpg')) return '.jpg';
    if (contentType.includes('image/webp')) return '.webp';
    if (contentType.includes('image/gif')) return '.gif';
    if (contentType.includes('image/svg+xml')) return '.svg';
  }
  const cleanUrl = url.split('?')[0];
  const ext = path.extname(cleanUrl);
  if (['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'].includes(ext.toLowerCase())) {
    return ext.toLowerCase();
  }
  return '.jpg'; // default
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function downloadImageAndGetPath(url: string, destFolder: string, baseName: string): Promise<string> {
  if (!url) return '';
  
  let targetUrl = url;
  if (!url.startsWith('http')) {
    targetUrl = `https://edu-wire.com/${url.replace(/^\/+/, '')}`;
  }

  // Create folder if not exists
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  // Small delay to prevent hammering servers
  await sleep(400);

  let attempt = 0;
  while (attempt < 4) {
    try {
      if (attempt > 0) {
        const backoff = attempt * 2000;
        console.log(`  Retry attempt ${attempt} for ${targetUrl} after ${backoff}ms...`);
        await sleep(backoff);
      }

      const res = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'EduWireBot/1.0 (contact@edu-wire.com)',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9'
        }
      });

      if (res.status === 429 || res.status === 503) {
        console.warn(`  Rate limited (HTTP ${res.status}) on ${targetUrl}. Attempt ${attempt + 1} of 4.`);
        attempt++;
        continue;
      }

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const contentType = res.headers.get('content-type');
      const ext = getExtension(targetUrl, contentType);
      const fileName = `${baseName}${ext}`;
      const localPath = path.join(destFolder, fileName);
      
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(localPath, buffer);
      console.log(`  Downloaded: ${targetUrl} -> ${localPath}`);
      
      // Return relative public path: /images/mbbs/[country]/...
      const publicFolder = path.resolve(process.cwd(), '..', 'public');
      const relativePath = '/' + path.relative(publicFolder, localPath).replace(/\\/g, '/');
      return relativePath;
    } catch (e: any) {
      console.error(`  Attempt ${attempt + 1} failed for ${targetUrl}:`, e.message);
      attempt++;
      if (attempt >= 4) {
        return '';
      }
    }
  }
  return '';
}

function mapIconName(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('scholarship')) return 'GraduationCap';
  if (t.includes('fee') || t.includes('cost') || t.includes('budget') || t.includes('afford')) return 'Wallet';
  if (t.includes('english') || t.includes('language') || t.includes('medium')) return 'Languages';
  if (t.includes('recognized') || t.includes('recognition') || t.includes('global') || t.includes('who') || t.includes('nmc')) return 'Globe';
  if (t.includes('exposure') || t.includes('hospital') || t.includes('clinical')) return 'Building';
  if (t.includes('admission') || t.includes('route') || t.includes('criteria') || t.includes('simple')) return 'CheckCircle2';
  return 'GraduationCap';
}

function formatValue(val: any, indent = 2): string {
  const spaces = ' '.repeat(indent);
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'string') return JSON.stringify(val);
  if (typeof val === 'number' || typeof val === 'boolean') return val.toString();
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    const items = val.map(item => `${spaces}  ${formatValue(item, indent + 2)}`).join(',\n');
    return `[\n${items}\n${spaces}]`;
  }
  if (typeof val === 'object') {
    const keys = Object.keys(val);
    if (keys.length === 0) return '{}';
    const props = keys.map(k => {
      const escapedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
      return `${spaces}  ${escapedKey}: ${formatValue(val[k], indent + 2)}`;
    }).join(',\n');
    return `{\n${props}\n${spaces}}`;
  }
  return '';
}

async function runSync() {
  const scrapedDataPath = path.join(process.cwd(), 'live_site_scraped.json');
  if (!fs.existsSync(scrapedDataPath)) {
    console.error('Error: live_site_scraped.json not found!');
    return;
  }

  const liveSiteData = JSON.parse(fs.readFileSync(scrapedDataPath, 'utf8'));
  const publicDir = path.resolve(process.cwd(), '..', 'public');

  for (const slug of Object.keys(liveSiteData)) {
    const liveData = liveSiteData[slug];
    const originalTSData = slugMap[slug];

    if (!originalTSData) {
      console.warn(`No local TS data for country: ${slug}`);
      continue;
    }

    console.log(`Syncing country: ${slug}...`);

    // Target folders
    const destHero = path.join(publicDir, 'images', 'mbbs', slug, 'hero');
    const destAbout = path.join(publicDir, 'images', 'mbbs', slug, 'about');
    const destUnis = path.join(publicDir, 'images', 'mbbs', slug, 'universities');
    const destAchievers = path.join(publicDir, 'images', 'mbbs', slug, 'achievers');

    // 1. Download Hero Image
    console.log(`  Downloading hero image...`);
    let heroBgImage = await downloadImageAndGetPath(liveData.hero.heroImg, destHero, 'hero-bg');
    if (!heroBgImage) {
      const fallback = originalTSData.heroBgImage || '';
      const exists = fallback ? fs.existsSync(path.join(publicDir, fallback.replace(/^\/+/, ''))) : false;
      console.log(`  Falling back to original TS heroBgImage: ${fallback} (exists: ${exists})`);
      heroBgImage = exists ? fallback : '';
    }

    // 2. Download About Image
    console.log(`  Downloading about image...`);
    let aboutImage = await downloadImageAndGetPath(liveData.about.aboutImg, destAbout, 'about-img');
    if (!aboutImage) {
      const fallback = originalTSData.aboutImage || '';
      const exists = fallback ? fs.existsSync(path.join(publicDir, fallback.replace(/^\/+/, ''))) : false;
      console.log(`  Falling back to original TS aboutImage: ${fallback} (exists: ${exists})`);
      aboutImage = exists ? fallback : '';
    }

    // 3. Download University Images
    console.log(`  Downloading university images...`);
    const universitiesDetailed: any[] = [];
    const liveUnis = liveData.universities.universities || [];
    for (let i = 0; i < liveUnis.length; i++) {
      const u = liveUnis[i];
      const oldUni = originalTSData.universitiesDetailed?.[i];
      
      let targetImgUrl = u.img;
      const uniNameUpper = u.name.toUpperCase();
      
      if (slug === 'georgia' && uniNameUpper.includes('CAUCASUS')) {
        targetImgUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Caucasus_International_University.jpg';
      } else if (slug === 'kazakhstan' && uniNameUpper.includes('SEMEY')) {
        targetImgUrl = 'https://www.selectyouruniversity.com/images/semey-state-medical-university.jpg';
      }

      let uniImg = '';
      
      if (slug === 'kyrgyzstan') {
        const italyUnisFolder = path.join(publicDir, 'images', 'mbbs', 'italy', 'universities');
        const copyFromItaly = (prefix: string) => {
          if (!fs.existsSync(italyUnisFolder)) return '';
          const files = fs.readdirSync(italyUnisFolder);
          const found = files.find(f => f.startsWith(prefix));
          if (found) {
            const src = path.join(italyUnisFolder, found);
            const ext = path.extname(found);
            const destName = `uni-${i + 1}${ext}`;
            const dest = path.join(destUnis, destName);
            if (!fs.existsSync(destUnis)) {
              fs.mkdirSync(destUnis, { recursive: true });
            }
            fs.copyFileSync(src, dest);
            console.log(`  Copied Italy image to Kyrgyzstan: ${src} -> ${dest}`);
            return `/images/mbbs/kyrgyzstan/universities/${destName}`;
          }
          return '';
        };

        if (uniNameUpper.includes('BOLOGNA')) {
          uniImg = copyFromItaly('uni-3');
        } else if (uniNameUpper.includes('PADUA')) {
          uniImg = copyFromItaly('uni-4');
        } else if (uniNameUpper.includes('TOR VERGATA') || uniNameUpper.includes('VERGATA')) {
          uniImg = copyFromItaly('uni-2');
        } else if (uniNameUpper.includes('MILAN')) {
          uniImg = copyFromItaly('uni-1');
        }
      }

      if (!uniImg) {
        uniImg = await downloadImageAndGetPath(targetImgUrl, destUnis, `uni-${i + 1}`);
      }

      if (!uniImg) {
        const fallback = oldUni?.image || '';
        const exists = fallback ? fs.existsSync(path.join(publicDir, fallback.replace(/^\/+/, ''))) : false;
        console.log(`  Falling back to old university image for ${u.name}: ${fallback} (exists: ${exists})`);
        if (exists) {
          uniImg = fallback;
        } else {
          // Check country specific university image fallback or generic fallback
          const slugFallback = `/images/universities/${slug}-universty-image.jpg`;
          const slugExists = fs.existsSync(path.join(publicDir, slugFallback.replace(/^\/+/, '')));
          uniImg = slugExists ? slugFallback : '/images/ab1.jpg';
          console.log(`  Fallback image does not exist on disk. Using generic fallback: ${uniImg}`);
        }
      }
      
      // Preserve old badges if available, or generate standard ones
      const badges = oldUni?.badges || ["Public University", "English Medium", u.name];

      // Format fees rows into objects
      const fees = u.rows.map((row: string[]) => ({
        year: row[0] || '',
        tuitionFee: row[1] || '',
        administrativeFee: row[2] || '',
        applicationFee: row[3] || '',
        total: row[4] || ''
      }));

      universitiesDetailed.push({
        name: u.name,
        description: u.paragraphs,
        image: uniImg,
        badges,
        fees
      });
    }

    // 4. Download Achiever Images
    console.log(`  Downloading achiever images...`);
    const achievers: any[] = [];
    const liveAch = liveData.achievers || [];
    for (let i = 0; i < liveAch.length; i++) {
      const imgUrl = liveAch[i];
      let achImg = await downloadImageAndGetPath(imgUrl, destAchievers, `achiever-${i + 1}`);
      if (!achImg) {
        const fallback = originalTSData.achievers?.[i]?.image || '';
        const exists = fallback ? fs.existsSync(path.join(publicDir, fallback.replace(/^\/+/, ''))) : false;
        console.log(`  Falling back to old achiever image: ${fallback} (exists: ${exists})`);
        achImg = exists ? fallback : '';
      }
      achievers.push({ image: achImg });
    }

    // 5. Build Why Choose section
    const whyChooseSubtitle = originalTSData.whyChooseSubtitle || `Study MBBS in ${originalTSData.country} at top-ranked universities.`;
    const whyChoose = liveData.whyChoose.whyChooseCards.map((card: any) => {
      // Find matching old icon name or map dynamically
      const oldCard = originalTSData.whyChoose?.find((c: any) => c.title.toLowerCase() === card.title.toLowerCase());
      const iconName = oldCard?.iconName || mapIconName(card.title);
      return {
        title: card.title,
        description: card.desc,
        iconName
      };
    });

    // 6. Build Eligibility Section
    const liveElColumns = liveData.eligibility.elColumns || [];
    const liveBasic = liveElColumns.find((c: any) => c.title.toLowerCase().includes('eligibility') || c.title.toLowerCase().includes('criteria'));
    const liveDocs = liveElColumns.find((c: any) => c.title.toLowerCase().includes('document'));
    const liveTest = liveElColumns.find((c: any) => c.title.toLowerCase().includes('test') || c.title.toLowerCase().includes('entrance'));

    const eligibilityDetailed = {
      subtitle: originalTSData.eligibilityDetailed?.subtitle || `Please note that exact eligibility and scoring guidelines may vary by university.`,
      criteria: liveBasic ? liveBasic.items : (originalTSData.eligibilityDetailed?.criteria || []),
      entranceTest: liveTest ? {
        title: liveTest.title || 'Entrance Test Requirements',
        description: liveTest.items.join(' ')
      } : (originalTSData.eligibilityDetailed?.entranceTest || undefined),
      documents: liveDocs ? liveDocs.items : (originalTSData.eligibilityDetailed?.documents || [])
    };

    // 7. Build Journey Section
    const steps = liveData.journey.journeyPhases.map((phase: any, pIdx: number) => {
      const detailedContent = phase.cards.map((card: any) => ({
        title: card.title,
        items: card.listItems
      }));

      return {
        title: phase.title,
        shortDesc: originalTSData.applicationProcess?.steps?.[pIdx]?.shortDesc || `Step ${pIdx + 1} of the process.`,
        detailedContent
      };
    });

    const applicationProcess = {
      timelineDisclaimer: originalTSData.applicationProcess?.timelineDisclaimer || `Timelines are subject to changes based on official notices.`,
      steps
    };

    // 8. Build FAQs section
    const faqs = liveData.faqs.map((faq: any) => ({
      question: faq.q,
      answer: faq.a
    }));

    // Construct the new data object preserving legacy fields
    const updatedData: any = {
      slug: originalTSData.slug,
      country: originalTSData.country,
      duration: originalTSData.duration,
      feeRange: originalTSData.feeRange,
      intake: originalTSData.intake,
      language: originalTSData.language,
      description: liveData.hero.heroP || originalTSData.description,
      keyPoints: eligibilityDetailed.criteria.slice(0, 5),
      universities: universitiesDetailed.map(u => u.name),
      eligibility: eligibilityDetailed.criteria.slice(0, 3),
      heroTitle: liveData.hero.heroH1,
      heroParagraph: liveData.hero.heroP,
      heroBgImage,
      heroCutoutImage: originalTSData.heroCutoutImage || '/images/female-doctor.png',
      flagIcon: originalTSData.flagIcon || `/images/flags/${slug}.png`,
      floatingBadges: originalTSData.floatingBadges || [
        { label: originalTSData.duration, sublabel: "Program", iconName: "Clock" },
        { label: originalTSData.feeRange.split("/")[0].trim().split(" ")[0] || "Affordable", sublabel: "Fees", iconName: "Wallet" },
        { label: originalTSData.language, sublabel: "Medium", iconName: "Globe" }
      ],
      aboutTitle: liveData.about.aboutH2,
      aboutImage,
      aboutParagraphs: liveData.about.aboutBullets,
      aboutHighlights: originalTSData.aboutHighlights || ["Top medical universities", "English medium study", "Global recognition"],
      whyChooseTitle: liveData.whyChoose.whyChooseTitle,
      whyChooseSubtitle,
      whyChoose,
      universitiesDetailed,
      eligibilityDetailed,
      applicationProcess,
      achievers,
      faqs,
      seoTitle: originalTSData.seoTitle,
      seoDescription: originalTSData.seoDescription
    };

    // Serialize object to TS
    const exportName = `${slug}Data`;
    const fileContent = `import { MBBSCountry } from "../types";

export const ${exportName}: MBBSCountry = ${formatValue(updatedData, 0)};
`;

    // Write file
    const targetFilePath = path.resolve(process.cwd(), '..', 'lib', 'data', 'mbbs', 'countries', `${slug}.ts`);
    fs.writeFileSync(targetFilePath, fileContent);
    console.log(`Successfully updated ${slug} data file at ${targetFilePath}`);
  }

  console.log('All country data files updated!');
}

runSync().catch(console.error);
