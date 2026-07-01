import fs from 'fs';
import path from 'path';

// Import local data
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

const localCountries = [
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

function cleanText(text: string | null | undefined): string {
  if (!text) return '';
  // Replace non-breaking spaces and clean whitespace
  return text.replace(/[\s\xa0]+/g, ' ').replace(/\+/g, '').trim();
}

function normalizeFaqQuestion(q: string): string {
  return cleanText(q).replace(/[?+]$/, '').trim().toLowerCase();
}

function normalizeFaqAnswer(a: string): string {
  return cleanText(a).toLowerCase();
}

// Compare arrays of strings
function compareStringArrays(orig: string[], local: string[]): { missing: string[], extra: string[], matched: boolean } {
  const missing: string[] = [];
  const extra: string[] = [];
  
  const cleanOrig = orig.map(s => cleanText(s).toLowerCase());
  const cleanLocal = local.map(s => cleanText(s).toLowerCase());

  cleanOrig.forEach((o, i) => {
    if (!cleanLocal.includes(o)) {
      missing.push(orig[i]);
    }
  });

  cleanLocal.forEach((l, i) => {
    if (!cleanOrig.includes(l)) {
      extra.push(local[i]);
    }
  });

  return {
    missing,
    extra,
    matched: missing.length === 0 && extra.length === 0
  };
}

function runComparison() {
  const workspaceRoot = process.cwd().endsWith('temp_audit') ? path.resolve(process.cwd(), '..') : process.cwd();
  const scrapedDataPath = path.join(process.cwd(), 'live_site_scraped.json');
  if (!fs.existsSync(scrapedDataPath)) {
    console.error('Error: live_site_scraped.json not found! Run scrape_live.js first.');
    return;
  }

  const liveSiteData = JSON.parse(fs.readFileSync(scrapedDataPath, 'utf8'));
  const auditReport: any = [];

  for (const localData of localCountries) {
    const slug = localData.slug;
    const liveData = liveSiteData[slug];
    const url = `https://edu-wire.com/mbbs-in-${slug}.php`;

    if (!liveData) {
      console.warn(`No scraped data found for country: ${slug}`);
      continue;
    }

    const differences: any[] = [];
    const imageIssues: string[] = [];
    let status = 'PASS';
    let maxPriority = 'Minor';

    const addDifference = (section: string, field: string, issue: string, orig: string, local: string, priority: 'Critical' | 'Medium' | 'Minor') => {
      status = 'FAIL';
      if (priority === 'Critical') maxPriority = 'Critical';
      else if (priority === 'Medium' && maxPriority !== 'Critical') maxPriority = 'Medium';

      differences.push({
        section,
        field,
        issue,
        original: orig,
        local: local,
        priority
      });
    };

    // 1. Section: Hero
    if (cleanText(liveData.hero.heroH1) !== cleanText(localData.heroTitle)) {
      addDifference('Hero', 'heading', 'Heading text mismatched', liveData.hero.heroH1, localData.heroTitle || '', 'Critical');
    }
    if (cleanText(liveData.hero.heroP) !== cleanText(localData.heroParagraph)) {
      addDifference('Hero', 'subtitle/paragraph', 'Paragraph text mismatched', liveData.hero.heroP, localData.heroParagraph || '', 'Medium');
    }

    // Hero Image Verification
    const localHeroImg = localData.heroBgImage || '';
    const liveHeroImg = liveData.hero.heroImg || '';
    if (!localHeroImg) {
      addDifference('Hero', 'hero image path', 'Hero image is missing in local data', liveHeroImg, '', 'Critical');
      imageIssues.push('Hero image: Missing path in local TS file');
    } else {
      const fullLocalPath = path.join(workspaceRoot, 'public', localHeroImg);
      const exists = fs.existsSync(fullLocalPath);
      if (!exists) {
        addDifference('Hero', 'hero image path', `Hero image file "${localHeroImg}" does not exist under public/`, liveHeroImg, localHeroImg, 'Critical');
        imageIssues.push(`Hero image: file "${localHeroImg}" does not exist locally`);
      } else {
        // Country correctness checks
        const fileLower = localHeroImg.toLowerCase();
        if (fileLower.includes('italy') && slug !== 'italy') {
          addDifference('Hero', 'hero image country correctness', `Italy hero image "${localHeroImg}" is reused on country "${slug}"`, liveHeroImg, localHeroImg, 'Critical');
          imageIssues.push(`Hero image: Wrong image (reusing Italy image "${localHeroImg}" on "${slug}")`);
        }
      }
    }

    // 2. Section: About Country
    if (cleanText(liveData.about.aboutH2) !== cleanText(localData.aboutTitle)) {
      addDifference('About country', 'heading', 'Heading mismatched', liveData.about.aboutH2, localData.aboutTitle || '', 'Medium');
    }
    const liveBullets = liveData.about.aboutBullets || [];
    const localParas = localData.aboutParagraphs || [];
    const aboutComp = compareStringArrays(liveBullets, localParas);
    if (!aboutComp.matched) {
      if (aboutComp.missing.length > 0) {
        addDifference('About country', 'all paragraphs/bullets', `Paragraphs missing locally: ${aboutComp.missing.join('; ')}`, liveBullets.join('\n'), localParas.join('\n'), 'Critical');
      }
      if (aboutComp.extra.length > 0) {
        addDifference('About country', 'all paragraphs/bullets', `Extra paragraphs present locally: ${aboutComp.extra.join('; ')}`, liveBullets.join('\n'), localParas.join('\n'), 'Medium');
      }
    }

    // About Image Verification
    const localAboutImg = localData.aboutImage || '';
    const liveAboutImg = liveData.about.aboutImg || '';
    if (!localAboutImg) {
      addDifference('About country', 'about image', 'About image path is missing in local data', liveAboutImg, '', 'Medium');
      imageIssues.push('About image: Missing path in local TS file');
    } else if (localAboutImg.startsWith('http')) {
      addDifference('About country', 'about image', 'About image uses a remote URL (should be downloaded and placed locally)', liveAboutImg, localAboutImg, 'Medium');
      imageIssues.push(`About image: Remote URL used: "${localAboutImg}"`);
    } else {
      const fullLocalPath = path.join(workspaceRoot, 'public', localAboutImg);
      if (!fs.existsSync(fullLocalPath)) {
        addDifference('About country', 'about image', `About image file "${localAboutImg}" does not exist under public/`, liveAboutImg, localAboutImg, 'Critical');
        imageIssues.push(`About image: file "${localAboutImg}" does not exist locally`);
      } else {
        const fileLower = localAboutImg.toLowerCase();
        if (fileLower.includes('italy') && slug !== 'italy') {
          addDifference('About country', 'about image correctness', `Italy about image "${localAboutImg}" is reused on country "${slug}"`, liveAboutImg, localAboutImg, 'Critical');
          imageIssues.push(`About image: Wrong image (reusing Italy image "${localAboutImg}" on "${slug}")`);
        }
      }
    }

    // 3. Section: Why Choose
    const liveWhyCards = liveData.whyChoose.whyChooseCards || [];
    const localWhyCards = localData.whyChoose || [];
    if (liveWhyCards.length !== localWhyCards.length) {
      addDifference('Why choose', 'card titles', `Card count mismatched. Live: ${liveWhyCards.length}, Local: ${localWhyCards.length}`, `${liveWhyCards.length} cards`, `${localWhyCards.length} cards`, 'Critical');
    } else {
      liveWhyCards.forEach((c: any, idx: number) => {
        const l = localWhyCards[idx];
        if (cleanText(c.title) !== cleanText(l.title)) {
          addDifference('Why choose', `card titles [index ${idx}]`, `Card title mismatched`, c.title, l.title, 'Critical');
        }
        if (cleanText(c.desc) !== cleanText(l.description)) {
          addDifference('Why choose', `card descriptions [index ${idx}]`, `Card description mismatched`, c.desc, l.description, 'Medium');
        }
      });
    }

    // 4. Section: Top Leading Universities
    const liveUnis = liveData.universities.universities || [];
    const localUnis = localData.universitiesDetailed || [];
    if (liveUnis.length !== localUnis.length) {
      addDifference('Top Leading Universities', 'university names', `University count mismatched. Live: ${liveUnis.length}, Local: ${localUnis.length}`, `${liveUnis.length} universities`, `${localUnis.length} universities`, 'Critical');
    } else {
      liveUnis.forEach((u: any, idx: number) => {
        const lu = localUnis[idx];
        if (cleanText(u.name) !== cleanText(lu.name)) {
          addDifference('Top Leading Universities', `university names [index ${idx}]`, `University name mismatched`, u.name, lu.name, 'Critical');
        }

        // Compare descriptions
        const liveDesc = u.paragraphs.join(' ');
        const localDesc = (lu.description || []).join(' ');
        if (cleanText(liveDesc) !== cleanText(localDesc)) {
          addDifference('Top Leading Universities', `university descriptions for "${u.name}"`, 'Descriptions mismatched', liveDesc, localDesc, 'Medium');
        }

        // Compare image
        const luImg = lu.image || '';
        if (!luImg) {
          addDifference('Top Leading Universities', `university image for "${u.name}"`, 'University image path is missing locally', u.img, '', 'Medium');
          imageIssues.push(`University "${u.name}" image: Missing path in local TS file`);
        } else if (luImg.startsWith('http')) {
          addDifference('Top Leading Universities', `university image for "${u.name}"`, 'University image is a remote URL', u.img, luImg, 'Medium');
          imageIssues.push(`University "${u.name}" image: Remote URL used: "${luImg}"`);
        } else {
          const fullLocalPath = path.join(workspaceRoot, 'public', luImg);
          if (!fs.existsSync(fullLocalPath)) {
            addDifference('Top Leading Universities', `university image for "${u.name}"`, `University image file "${luImg}" does not exist under public/`, u.img, luImg, 'Critical');
            imageIssues.push(`University "${u.name}" image: file "${luImg}" does not exist locally`);
          } else {
            const fileLower = luImg.toLowerCase();
            // Check if it is reusing Italy image unless it really is Italy
            if (fileLower.includes('italy') && slug !== 'italy') {
              addDifference('Top Leading Universities', `university image for "${u.name}" correctness`, `Italy university image "${luImg}" is reused on country "${slug}"`, u.img, luImg, 'Critical');
              imageIssues.push(`University "${u.name}" image: Wrong image (reusing Italy image "${luImg}" on "${slug}")`);
            }
          }
        }

        // Compare fee tables
        const liveRows = u.rows || [];
        const localRows = lu.fees || [];
        if (liveRows.length !== localRows.length) {
          addDifference('Top Leading Universities', `annual tuition fees for "${u.name}"`, `Fee rows count mismatched. Live: ${liveRows.length}, Local: ${localRows.length}`, `${liveRows.length} rows`, `${localRows.length} rows`, 'Critical');
        } else {
          liveRows.forEach((row: any, rIdx: number) => {
            const lr = localRows[rIdx];
            const cleanRowVal = (v: string) => cleanText(v).replace(/[\s,]+/g, '').replace(/€|USD|Rubles|INR|Ruble|\/Year/gi, '').toLowerCase();

            const liveYear = cleanRowVal(row[0] || '');
            const localYear = cleanRowVal(lr.year || '');
            const liveTuition = cleanRowVal(row[1] || '');
            const localTuition = cleanRowVal(lr.tuitionFee || '');
            const liveAdmin = cleanRowVal(row[2] || '');
            const localAdmin = cleanRowVal(lr.administrativeFee || '');
            const liveApp = cleanRowVal(row[3] || '');
            const localApp = cleanRowVal(lr.applicationFee || '');
            const liveTotal = cleanRowVal(row[4] || '');
            const localTotal = cleanRowVal(lr.total || '');

            if (liveYear !== localYear) {
              addDifference('Top Leading Universities', `annual tuition fees for "${u.name}" [row ${rIdx}]`, `Fee Year mismatched`, row[0] || '', lr.year || '', 'Critical');
            }
            if (liveTuition !== localTuition) {
              addDifference('Top Leading Universities', `annual tuition fees for "${u.name}" [row ${rIdx}]`, `Tuition Fee mismatched`, row[1] || '', lr.tuitionFee || '', 'Critical');
            }
            if (liveAdmin !== localAdmin) {
              addDifference('Top Leading Universities', `annual tuition fees for "${u.name}" [row ${rIdx}]`, `Administrative Fee mismatched`, row[2] || '', lr.administrativeFee || '', 'Critical');
            }
            if (liveApp !== localApp) {
              addDifference('Top Leading Universities', `annual tuition fees for "${u.name}" [row ${rIdx}]`, `Application Fee mismatched`, row[3] || '', lr.applicationFee || '', 'Critical');
            }
            if (liveTotal !== localTotal) {
              addDifference('Top Leading Universities', `annual tuition fees for "${u.name}" [row ${rIdx}]`, `Total Fee mismatched`, row[4] || '', lr.total || '', 'Critical');
            }
          });
        }
      });
    }

    // 5. Section: Eligibility / MBBS for Indian Students
    const elDetailed = localData.eligibilityDetailed;
    if (!elDetailed) {
      addDifference('Eligibility / MBBS for Indian Students', 'all headings', 'Eligibility section detailed content is missing locally', liveData.eligibility.elTitle, '', 'Critical');
    } else {
      const liveColumns = liveData.eligibility.elColumns || [];
      const liveBasic = liveColumns.find((c: any) => c.title.toLowerCase().includes('eligibility') || c.title.toLowerCase().includes('criteria'));
      const liveDocs = liveColumns.find((c: any) => c.title.toLowerCase().includes('document'));
      const liveTest = liveColumns.find((c: any) => c.title.toLowerCase().includes('test') || c.title.toLowerCase().includes('entrance'));

      if (liveBasic) {
        const comp = compareStringArrays(liveBasic.items, elDetailed.criteria);
        if (!comp.matched) {
          if (comp.missing.length > 0) {
            addDifference('Eligibility / MBBS for Indian Students', 'Basic criteria', `Criteria missing locally: ${comp.missing.join('; ')}`, liveBasic.items.join('\n'), elDetailed.criteria.join('\n'), 'Critical');
          }
          if (comp.extra.length > 0) {
            addDifference('Eligibility / MBBS for Indian Students', 'Basic criteria', `Extra criteria locally: ${comp.extra.join('; ')}`, liveBasic.items.join('\n'), elDetailed.criteria.join('\n'), 'Medium');
          }
        }
      }
      if (liveDocs) {
        const comp = compareStringArrays(liveDocs.items, elDetailed.documents);
        if (!comp.matched) {
          if (comp.missing.length > 0) {
            addDifference('Eligibility / MBBS for Indian Students', 'documents', `Required documents missing locally: ${comp.missing.join('; ')}`, liveDocs.items.join('\n'), elDetailed.documents.join('\n'), 'Critical');
          }
          if (comp.extra.length > 0) {
            addDifference('Eligibility / MBBS for Indian Students', 'documents', `Extra documents locally: ${comp.extra.join('; ')}`, liveDocs.items.join('\n'), elDetailed.documents.join('\n'), 'Medium');
          }
        }
      }
      if (liveTest && elDetailed.entranceTest) {
        const liveTestStr = liveTest.items.join(' ');
        const localTestStr = elDetailed.entranceTest.description || '';
        if (cleanText(liveTestStr) !== cleanText(localTestStr)) {
          addDifference('Eligibility / MBBS for Indian Students', 'NEET/age/marks criteria', `Entrance test description mismatched`, liveTestStr, localTestStr, 'Critical');
        }
      }
    }

    // 6. Section: Journey / process sections
    const liveJourneySteps = liveData.journey.journeySteps || [];
    const conciseLabels = ['Apply', 'Pre-Enrol', 'Funding', 'Visa', 'Depart', 'Arrive'];
    if (liveJourneySteps.length !== conciseLabels.length) {
      addDifference('Journey / process sections', 'steps', `Journey timeline step count mismatched. Live: ${liveJourneySteps.length}, Local: ${conciseLabels.length}`, liveJourneySteps.join(', '), conciseLabels.join(', '), 'Medium');
    } else {
      liveJourneySteps.forEach((step: any, sIdx: number) => {
        if (cleanText(step) !== cleanText(conciseLabels[sIdx])) {
          addDifference('Journey / process sections', `steps [index ${sIdx}]`, `Journey timeline step title mismatched`, step, conciseLabels[sIdx], 'Medium');
        }
      });
    }

    // 7. Section: Application process accordion
    const localSteps = localData.applicationProcess?.steps || [];
    const livePhases = liveData.journey.journeyPhases || [];
    if (livePhases.length !== localSteps.length) {
      addDifference('Application process accordion', 'all stage titles', `Accordion phase count mismatched. Live: ${livePhases.length}, Local: ${localSteps.length}`, `${livePhases.length} phases`, `${localSteps.length} phases`, 'Critical');
    } else {
      livePhases.forEach((p: any, idx: number) => {
        const ls = localSteps[idx];
        if (cleanText(p.title) !== cleanText(ls.title)) {
          addDifference('Application process accordion', `phase [index ${idx}] title`, `Phase title mismatched`, p.title, ls.title, 'Critical');
        }

        const liveCards = p.cards || [];
        const localCards = ls.detailedContent || [];
        if (liveCards.length !== localCards.length) {
          addDifference('Application process accordion', `phase [index ${idx}] card count`, `Cards count mismatched. Live: ${liveCards.length}, Local: ${localCards.length}`, `${liveCards.length} cards`, `${localCards.length} cards`, 'Critical');
        } else {
          liveCards.forEach((c: any, cIdx: number) => {
            const lc = localCards[cIdx];
            if (cleanText(c.title) !== cleanText(lc.title)) {
              addDifference('Application process accordion', `phase [index ${idx}] card [index ${cIdx}] title`, `Card title mismatched`, c.title, lc.title, 'Critical');
            }

            const comp = compareStringArrays(c.listItems, lc.items);
            if (!comp.matched) {
              if (comp.missing.length > 0) {
                addDifference('Application process accordion', `phase [index ${idx}] card [index ${cIdx}] items`, `Items missing locally in card "${c.title}": ${comp.missing.join('; ')}`, c.listItems.join('\n'), lc.items.join('\n'), 'Critical');
              }
              if (comp.extra.length > 0) {
                addDifference('Application process accordion', `phase [index ${idx}] card [index ${cIdx}] items`, `Extra items present locally in card "${c.title}": ${comp.extra.join('; ')}`, c.listItems.join('\n'), lc.items.join('\n'), 'Medium');
              }
            }
          });
        }
      });
    }

    // Check mixed-country terms in Journey/ApplicationProcess
    const timelineText = JSON.stringify(localData.applicationProcess || {});
    const origTimelineText = JSON.stringify(liveData.journey || {});
    localCountries.forEach(otherCountry => {
      if (otherCountry.slug !== slug) {
        // e.g. searching for word boundaries of other country
        const otherWord = otherCountry.country;
        const regex = new RegExp(`\\b${otherWord}\\b`, 'i');
        if (regex.test(timelineText) && !regex.test(origTimelineText)) {
          addDifference('Journey / process sections', 'descriptions', `Mixed-country term "${otherWord}" found in country "${slug}" journey description but not in original source`, '', `Timeline mentions ${otherWord}`, 'Critical');
        }
      }
    });

    // 8. Section: Achievers
    const liveAch = liveData.achievers || [];
    const localAch = localData.achievers || [];
    if (liveAch.length > 0) {
      if (localAch.length === 0) {
        addDifference('Achievers', 'images', `Achievers are present in original PHP but missing locally`, `${liveAch.length} images`, '0 images', 'Medium');
      } else {
        localAch.forEach((ach: any, achIdx: number) => {
          const achImg = ach.image || '';
          if (!achImg) {
            addDifference('Achievers', `achiever [index ${achIdx}] image`, 'Achiever image path is empty', liveAch[achIdx] || '', '', 'Medium');
            imageIssues.push(`Achiever [index ${achIdx}] image: Missing path`);
          } else {
            const fullLocalPath = path.join(workspaceRoot, 'public', achImg);
            if (!fs.existsSync(fullLocalPath)) {
              addDifference('Achievers', `achiever [index ${achIdx}] image`, `Achiever image "${achImg}" does not exist under public/`, liveAch[achIdx] || '', achImg, 'Critical');
              imageIssues.push(`Achiever [index ${achIdx}] image: file "${achImg}" does not exist locally`);
            } else {
              const fileLower = achImg.toLowerCase();
              if (fileLower.includes('italy') && slug !== 'italy') {
                addDifference('Achievers', `achiever [index ${achIdx}] image correctness`, `Italy achiever image "${achImg}" is reused on country "${slug}"`, liveAch[achIdx] || '', achImg, 'Critical');
                imageIssues.push(`Achiever [index ${achIdx}] image: Wrong image (reusing Italy image "${achImg}" on "${slug}")`);
              }
            }
          }
        });
      }
    }

    // 9. Section: FAQs
    const liveFaqs = liveData.faqs || [];
    const localFaqs = localData.faqs || [];
    if (liveFaqs.length !== localFaqs.length) {
      addDifference('FAQ', 'all questions', `FAQ count mismatched. Live: ${liveFaqs.length}, Local: ${localFaqs.length}`, `${liveFaqs.length} FAQs`, `${localFaqs.length} FAQs`, 'Critical');
    } else {
      liveFaqs.forEach((faq: any, fIdx: number) => {
        const lf = localFaqs[fIdx];
        if (normalizeFaqQuestion(faq.q) !== normalizeFaqQuestion(lf.question)) {
          addDifference('FAQ', `faq question [index ${fIdx}]`, `FAQ Question mismatched`, faq.q, lf.question, 'Critical');
        }
        if (normalizeFaqAnswer(faq.a) !== normalizeFaqAnswer(lf.answer)) {
          addDifference('FAQ', `faq answer [index ${fIdx}]`, `FAQ Answer mismatched`, faq.a, lf.answer, 'Critical');
        }
      });
    }

    auditReport.push({
      country: localData.country,
      originalUrl: url,
      newRoute: `/mbbs/${slug}`,
      status,
      maxPriority,
      differences,
      imageIssues
    });
  }

  // Generate markdown report
  let md = '# MBBS Content Audit Report\n\n';
  
  // Summary Table
  md += '## Summary Table\n\n';
  md += '| Country | Content Status | Image Status | Critical Issues | Fix Needed |\n';
  md += '|---|---|---|---|---|\n';
  
  auditReport.forEach((rep: any) => {
    const contentStatus = rep.differences.length > 0 ? 'FAIL' : 'PASS';
    const imageStatus = rep.imageIssues.length > 0 ? 'FAIL' : 'OK';
    const criticalCount = rep.differences.filter((d: any) => d.priority === 'Critical').length + rep.imageIssues.length;
    const fixNeeded = rep.status === 'FAIL' ? 'Yes' : 'No';
    md += `| ${rep.country} | ${contentStatus} | ${imageStatus} | ${criticalCount} | ${fixNeeded} |\n`;
  });
  md += '\n';

  // Details for each country
  auditReport.forEach((rep: any) => {
    md += `## Country: ${rep.country}\n`;
    md += `- **Original URL**: ${rep.originalUrl}\n`;
    md += `- **New route**: ${rep.newRoute}\n`;
    md += `- **Status**: ${rep.status === 'PASS' ? 'PASS' : 'FAIL'}\n`;
    md += `- **Priority**: ${rep.maxPriority}\n\n`;

    md += `### Differences:\n`;
    if (rep.differences.length > 0) {
      rep.differences.forEach((diff: any, idx: number) => {
        md += `${idx + 1}. **Section**: ${diff.section}\n`;
        md += `   - **Field**: ${diff.field}\n`;
        md += `   - **Issue**: ${diff.issue}\n`;
        md += `   - **Original**: \`"${diff.original}"\`\n`;
        md += `   - **Local**: \`"${diff.local}"\`\n`;
        md += `   - **Priority**: ${diff.priority}\n\n`;
      });
    } else {
      md += `No visible content differences.\n\n`;
    }

    md += `### Images:\n`;
    if (rep.imageIssues.length > 0) {
      rep.imageIssues.forEach((img: string) => {
        md += `- ${img}\n`;
      });
    } else {
      md += `- Hero image: OK\n`;
      md += `- University images: OK\n`;
    }
    md += `\n---\n\n`;
  });

   const brainReportPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\f5006b32-28b5-4c9e-af05-e88f777a308c\\audit_report.md';
  const brainResultsPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\f5006b32-28b5-4c9e-af05-e88f777a308c\\audit_results.json';
  fs.writeFileSync(brainReportPath, md);
  fs.writeFileSync(brainResultsPath, JSON.stringify(auditReport, null, 2));
  fs.writeFileSync(path.join(process.cwd(), 'audit_results.json'), JSON.stringify(auditReport, null, 2));
  console.log(`Generated final markdown audit report at: ${brainReportPath}`);
  console.log(`Generated final JSON results at: ${brainResultsPath}`);
}

runComparison();
