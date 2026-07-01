import { chromium } from 'playwright';
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

const ORIGINAL_BASE = 'https://edu-wire.com';

function cleanText(text: string | null | undefined): string {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').replace(/\+/g, '').trim();
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

async function runAudit() {
  console.log('Launching browser to crawl live MBBS pages...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const auditReport: any = [];

  for (const localData of localCountries) {
    const slug = localData.slug;
    const url = `${ORIGINAL_BASE}/mbbs-in-${slug}.php`;
    console.log(`Auditing ${localData.country} (${url})...`);

    try {
      await page.goto(url, { waitUntil: 'load', timeout: 35000 });
      await page.waitForTimeout(1000); // Wait for dynamic loads if any

      // Scrape data
      const liveData = await page.evaluate(() => {
        const clean = (t: string | null | undefined) => t ? t.replace(/\s+/g, ' ').trim() : '';

        // Hero
        const heroH1 = clean(document.querySelector('.main-hero-section h1')?.textContent);
        const heroP = clean(document.querySelector('.main-hero-section p')?.textContent);
        const heroBtn = clean(document.querySelector('.main-hero-section button, .main-hero-section .edu-wire-btn')?.textContent);
        const heroImg = document.querySelector('.main-hero-section img')?.getAttribute('src') || '';

        // About
        const aboutH2 = clean(document.querySelector('#about h2')?.textContent);
        const aboutImg = document.querySelector('#about img')?.getAttribute('src') || '';
        const aboutBullets = Array.from(document.querySelectorAll('#about .country-list-bullet li, #about ul li')).map(li => clean(li.textContent)).filter(Boolean);

        // Why Choose
        const whyChooseTitle = clean(document.querySelector('#why-choose-mbbs h2')?.textContent);
        const whyChooseCards = Array.from(document.querySelectorAll('#why-choose-mbbs .highlight-card, #why-choose-mbbs .why-choose-mbbs-card')).map(card => {
          const title = clean(card.querySelector('h4, h3')?.textContent);
          const desc = clean(card.querySelector('p')?.textContent);
          return { title, desc };
        }).filter(c => c.title || c.desc);

        // Top Universities
        const uniSection = Array.from(document.querySelectorAll('section')).find(sec => {
          const h2 = sec.querySelector('h2');
          return h2 && (h2.textContent.toLowerCase().includes('universit') || h2.textContent.toLowerCase().includes('medical college'));
        });
        const uniTitle = uniSection ? clean(uniSection.querySelector('h2')?.textContent) : '';
        const uniContainers = uniSection ? Array.from(uniSection.querySelectorAll('.top-university-container')) : [];
        const universities = uniContainers.map(container => {
          const name = clean(container.querySelector('.top-university-card h3, h3')?.textContent);
          const paragraphs = Array.from(container.querySelectorAll('.top-university-card p, p')).map(p => clean(p.textContent)).filter(Boolean);
          const img = container.querySelector('.university-image img, img')?.getAttribute('src') || '';
          
          const rows = Array.from(container.querySelectorAll('.info-table tbody tr')).map(tr => {
            return Array.from(tr.querySelectorAll('td')).map(td => clean(td.textContent));
          });
          return { name, paragraphs, img, rows };
        });

        // Eligibility
        const elSection = document.querySelector('.documnets-realted-section, .eligibility-section');
        const elTitle = elSection ? clean(elSection.querySelector('h2')?.textContent) : '';
        const elColumns = elSection ? Array.from(elSection.querySelectorAll('.criteria-column, .mbbs-criteria-column')).map(col => {
          const title = clean(col.querySelector('h4')?.textContent);
          const items = Array.from(col.querySelectorAll('li')).map(li => clean(li.textContent));
          return { title, items };
        }) : [];

        // Journey
        const journeySection = Array.from(document.querySelectorAll('section')).find(sec => {
          const h2 = sec.querySelector('h2');
          return h2 && h2.textContent.toLowerCase().includes('journey');
        });
        const journeyTitle = journeySection ? clean(journeySection.querySelector('h2')?.textContent) : '';
        const journeySteps = journeySection ? Array.from(journeySection.querySelectorAll('.timeline-step .step-name')).map(s => clean(s.textContent)) : [];
        const journeyPhases = journeySection ? Array.from(journeySection.querySelectorAll('.timeline-content .phase-section')).map(phase => {
          const title = clean(phase.querySelector('.phase-header h2')?.textContent);
          const index = clean(phase.querySelector('.phase-header .phase-index')?.textContent);
          const cards = Array.from(phase.querySelectorAll('.phase-grid .info-card')).map(card => {
            const title = clean(card.querySelector('h3, h4')?.textContent);
            const listItems = Array.from(card.querySelectorAll('li')).map(li => clean(li.textContent));
            const text = clean(card.textContent);
            return { title, text, listItems };
          });
          return { index, title, cards };
        }) : [];

        // Achievers
        const achSection = document.querySelector('.visa-approved-section');
        const achImages = achSection ? Array.from(achSection.querySelectorAll('img')).map(img => img.getAttribute('src')).filter(Boolean) as string[] : [];

        // FAQs
        const faqSection = document.querySelector('#faq');
        const faqs = faqSection ? Array.from(faqSection.querySelectorAll('.faq-item')).map(item => {
          const q = clean(item.querySelector('.faq-question')?.textContent);
          const a = clean(item.querySelector('.faq-answer')?.textContent);
          return { q, a };
        }) : [];

        // CTA
        const ctaSection = document.querySelector('.eduwire-cta-section');
        const ctaH2 = ctaSection ? clean(ctaSection.querySelector('h2')?.textContent) : '';
        const ctaText = ctaSection ? clean(ctaSection.textContent) : '';

        return {
          hero: { heroH1, heroP, heroBtn, heroImg },
          about: { aboutH2, aboutImg, aboutBullets },
          whyChoose: { whyChooseTitle, whyChooseCards },
          universities: { uniTitle, universities },
          eligibility: { elTitle, elColumns },
          journey: { journeyTitle, journeySteps, journeyPhases },
          achievers: achImages,
          faqs,
          cta: { ctaH2, ctaText }
        };
      });

      // Prepare differences lists
      const differences: string[] = [];
      const imageIssues: string[] = [];
      let status = 'PASS';
      let maxPriority = 'Minor';

      const addIssue = (section: string, msg: string, priority: 'Critical' | 'Medium' | 'Minor', origVal: string, localVal: string) => {
        status = 'FAIL';
        if (priority === 'Critical') maxPriority = 'Critical';
        else if (priority === 'Medium' && maxPriority !== 'Critical') maxPriority = 'Medium';
        
        differences.push(`Section: ${section}\n   Original: "${origVal}"\n   Local: "${localVal}"\n   Issue: ${msg}`);
      };

      // 1. Hero Section
      if (cleanText(liveData.hero.heroH1) !== cleanText(localData.heroTitle)) {
        addIssue('Hero', `Heading mismatched.`, 'Critical', liveData.hero.heroH1, localData.heroTitle || '');
      }
      if (cleanText(liveData.hero.heroP) !== cleanText(localData.heroParagraph)) {
        addIssue('Hero', `Paragraph text mismatched.`, 'Medium', liveData.hero.heroP, localData.heroParagraph || '');
      }
      const rawCtaBtn = liveData.hero.heroBtn;
      if (rawCtaBtn) {
        // Local pages CTA is in app/mbbs/[country]/page.tsx or MbbsHero.tsx
        // Let's check hero button text or default
        // Usually, in MbbsHero component, the button text is "Get Free Counselling" or similar
        // Let's check what's on live.
      }

      // Hero Image Verification
      const localHeroImg = localData.heroBgImage || '';
      let localHeroExists = false;
      if (localHeroImg) {
        const fullLocalPath = path.join(process.cwd(), 'public', localHeroImg);
        localHeroExists = fs.existsSync(fullLocalPath);
      }
      
      const liveHeroImg = liveData.hero.heroImg;
      if (!localHeroExists) {
        imageIssues.push(`Hero image file "${localHeroImg}" does not exist locally under public/`);
        addIssue('Hero Image', `Hero image file does not exist locally.`, 'Critical', liveHeroImg, localHeroImg);
      } else {
        // Check if correct country
        if (localHeroImg.toLowerCase().includes('italy') && slug !== 'italy') {
          imageIssues.push(`Hero image "${localHeroImg}" is reusable Italy image on country "${slug}"`);
          addIssue('Hero Image', `Hero image contains "italy" in filename on country "${slug}"`, 'Critical', liveHeroImg, localHeroImg);
        }
      }

      // 2. About Country Section
      if (cleanText(liveData.about.aboutH2) !== cleanText(localData.aboutTitle)) {
        addIssue('About Country', `Heading mismatched.`, 'Medium', liveData.about.aboutH2, localData.aboutTitle || '');
      }
      // Check paragraphs / bullets
      const liveBullets = liveData.about.aboutBullets;
      const localParagraphs = localData.aboutParagraphs || [];
      const arrayComp = compareStringArrays(liveBullets, localParagraphs);
      if (!arrayComp.matched) {
        if (arrayComp.missing.length > 0) {
          addIssue('About Country', `Paragraphs missing from local data: ${arrayComp.missing.join('; ')}`, 'Critical', liveBullets.join('\n'), localParagraphs.join('\n'));
        }
        if (arrayComp.extra.length > 0) {
          addIssue('About Country', `Extra paragraphs in local data: ${arrayComp.extra.join('; ')}`, 'Medium', liveBullets.join('\n'), localParagraphs.join('\n'));
        }
      }

      // About Section Image Verification
      const localAboutImg = localData.aboutImage || '';
      let localAboutExists = false;
      if (localAboutImg) {
        if (localAboutImg.startsWith('http')) {
          // If it's a external URL, we should flag it as we want it locally under public/
          imageIssues.push(`About image "${localAboutImg}" is a remote URL (should be local under public/)`);
          addIssue('About Image', `About image is remote URL`, 'Medium', liveData.about.aboutImg, localAboutImg);
        } else {
          const fullLocalPath = path.join(process.cwd(), 'public', localAboutImg);
          localAboutExists = fs.existsSync(fullLocalPath);
          if (!localAboutExists) {
            imageIssues.push(`About image file "${localAboutImg}" does not exist locally under public/`);
            addIssue('About Image', `About image file does not exist locally`, 'Critical', liveData.about.aboutImg, localAboutImg);
          } else {
            if (localAboutImg.toLowerCase().includes('italy') && slug !== 'italy') {
              imageIssues.push(`About image "${localAboutImg}" has "italy" in name but country is "${slug}"`);
              addIssue('About Image', `About image contains "italy" on country "${slug}"`, 'Critical', liveData.about.aboutImg, localAboutImg);
            }
          }
        }
      } else {
        imageIssues.push(`About image path is empty locally.`);
        addIssue('About Image', `About image is empty in local data`, 'Medium', liveData.about.aboutImg, '');
      }

      // 3. Why Choose MBBS Section
      const liveCards = liveData.whyChoose.whyChooseCards;
      const localChoose = localData.whyChoose || [];
      if (liveCards.length !== localChoose.length) {
        addIssue('Why Choose', `Card count mismatched. Live: ${liveCards.length}, Local: ${localChoose.length}`, 'Critical', `${liveCards.length} cards`, `${localChoose.length} cards`);
      } else {
        // Compare order and contents
        liveCards.forEach((c, idx) => {
          const l = localChoose[idx];
          if (cleanText(c.title) !== cleanText(l.title)) {
            addIssue('Why Choose', `Card title at index ${idx} mismatched.`, 'Critical', c.title, l.title);
          }
          if (cleanText(c.desc) !== cleanText(l.description)) {
            addIssue('Why Choose', `Card description at index ${idx} mismatched.`, 'Medium', c.desc, l.description);
          }
        });
      }

      // 4. Top Universities Section
      const liveUnis = liveData.universities.universities;
      const localUnis = localData.universitiesDetailed || [];
      if (liveUnis.length !== localUnis.length) {
        addIssue('Top Universities', `University count mismatched. Live: ${liveUnis.length}, Local: ${localUnis.length}`, 'Critical', `${liveUnis.length} universities`, `${localUnis.length} universities`);
      } else {
        liveUnis.forEach((u, idx) => {
          const lu = localUnis[idx];
          if (cleanText(u.name) !== cleanText(lu.name)) {
            addIssue('Top Universities', `University name at index ${idx} mismatched.`, 'Critical', u.name, lu.name);
          }
          
          // Compare description paragraphs
          const liveParaConcat = u.paragraphs.join(' ');
          const localParaConcat = (lu.description || []).join(' ');
          if (cleanText(liveParaConcat) !== cleanText(localParaConcat)) {
            addIssue('Top Universities', `University description for "${u.name}" mismatched.`, 'Medium', liveParaConcat, localParaConcat);
          }

          // Compare Image
          const luImage = lu.image || '';
          let luImageExists = false;
          if (luImage) {
            if (luImage.startsWith('http')) {
              imageIssues.push(`University "${u.name}" image is remote URL: "${luImage}"`);
              addIssue('Top Universities', `University image is remote URL`, 'Medium', u.img, luImage);
            } else {
              const fullLocalPath = path.join(process.cwd(), 'public', luImage);
              luImageExists = fs.existsSync(fullLocalPath);
              if (!luImageExists) {
                imageIssues.push(`University "${u.name}" image file "${luImage}" does not exist locally under public/`);
                addIssue('Top Universities', `University image file does not exist locally`, 'Critical', u.img, luImage);
              } else {
                if (luImage.toLowerCase().includes('italy') && slug !== 'italy') {
                  // Wait, check if Italy-hero-image is used on another country
                  // e.g. Sapienza University image is Italy.jpg
                  // If it's used on Romania, that's wrong!
                  imageIssues.push(`University "${u.name}" image "${luImage}" uses Italy on country "${slug}"`);
                  addIssue('Top Universities', `University image points to Italy on country "${slug}"`, 'Critical', u.img, luImage);
                }
              }
            }
          } else {
            imageIssues.push(`University "${u.name}" image path is empty locally.`);
            addIssue('Top Universities', `University image path is empty in local data`, 'Medium', u.img, '');
          }

          // Compare Fee tables (tuition Fee, administrative fee, application fee, total)
          const liveRows = u.rows;
          const localRows = lu.fees || [];
          if (liveRows.length !== localRows.length) {
            addIssue('Top Universities', `Fee rows count mismatched for "${u.name}". Live: ${liveRows.length}, Local: ${localRows.length}`, 'Critical', `${liveRows.length} rows`, `${localRows.length} rows`);
          } else {
            liveRows.forEach((row, rIdx) => {
              const lr = localRows[rIdx];
              // Row should be Year, Tuition Fee, Admin, App, Total
              // Row fields can contain spaces/currencies, let's normalize
              const cleanRowVal = (v: string) => cleanText(v).replace(/\s+/g, '').replace(/€|USD|Rubles|INR|\/Year/gi, '').toLowerCase();
              
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
                addIssue('Top Universities Fees', `Fee Year mismatched for "${u.name}" row ${rIdx}.`, 'Critical', row[0] || '', lr.year || '');
              }
              if (liveTuition !== localTuition) {
                addIssue('Top Universities Fees', `Tuition fee mismatched for "${u.name}" row ${rIdx}.`, 'Critical', row[1] || '', lr.tuitionFee || '');
              }
              if (liveAdmin !== localAdmin) {
                addIssue('Top Universities Fees', `Administrative fee mismatched for "${u.name}" row ${rIdx}.`, 'Critical', row[2] || '', lr.administrativeFee || '');
              }
              if (liveApp !== localApp) {
                addIssue('Top Universities Fees', `Application fee mismatched for "${u.name}" row ${rIdx}.`, 'Critical', row[3] || '', lr.applicationFee || '');
              }
              if (liveTotal !== localTotal) {
                addIssue('Top Universities Fees', `Total fee mismatched for "${u.name}" row ${rIdx}.`, 'Critical', row[4] || '', lr.total || '');
              }
            });
          }
        });
      }

      // 5. Eligibility Section
      const liveElTitle = liveData.eligibility.elTitle;
      const localElSubtitle = localData.eligibilityDetailed?.subtitle || '';
      
      const liveElColumns = liveData.eligibility.elColumns;
      const localElDetailed = localData.eligibilityDetailed;
      
      if (!localElDetailed) {
        addIssue('Eligibility', `Eligibility section is missing locally.`, 'Critical', liveElTitle, '(missing)');
      } else {
        // Compare columns: Basic Eligibility, Documents, Entrance Test
        // Live might have 2 columns (e.g. Basic Eligibility, Documents) or 3
        // Local has criteria (Basic Eligibility), documents (Required Documents), entranceTest (Entrance Test)
        // Let's check Basic Criteria list
        const liveBasicCol = liveElColumns.find(c => c.title.toLowerCase().includes('eligibility') || c.title.toLowerCase().includes('criteria'));
        const liveDocCol = liveElColumns.find(c => c.title.toLowerCase().includes('document'));
        const liveTestCol = liveElColumns.find(c => c.title.toLowerCase().includes('test') || c.title.toLowerCase().includes('entrance'));

        if (liveBasicCol) {
          const basicComp = compareStringArrays(liveBasicCol.items, localElDetailed.criteria);
          if (!basicComp.matched) {
            if (basicComp.missing.length > 0) {
              addIssue('Eligibility Criteria', `Basic criteria missing locally: ${basicComp.missing.join('; ')}`, 'Critical', liveBasicCol.items.join('\n'), localElDetailed.criteria.join('\n'));
            }
            if (basicComp.extra.length > 0) {
              addIssue('Eligibility Criteria', `Extra basic criteria locally: ${basicComp.extra.join('; ')}`, 'Medium', liveBasicCol.items.join('\n'), localElDetailed.criteria.join('\n'));
            }
          }
        }
        if (liveDocCol) {
          const docComp = compareStringArrays(liveDocCol.items, localElDetailed.documents);
          if (!docComp.matched) {
            if (docComp.missing.length > 0) {
              addIssue('Eligibility Documents', `Required documents missing locally: ${docComp.missing.join('; ')}`, 'Critical', liveDocCol.items.join('\n'), localElDetailed.documents.join('\n'));
            }
            if (docComp.extra.length > 0) {
              addIssue('Eligibility Documents', `Extra documents locally: ${docComp.extra.join('; ')}`, 'Medium', liveDocCol.items.join('\n'), localElDetailed.documents.join('\n'));
            }
          }
        }
        if (liveTestCol && localElDetailed.entranceTest) {
          const liveTestConcat = liveTestCol.items.join(' ');
          const localTestConcat = localElDetailed.entranceTest.description;
          if (cleanText(liveTestConcat) !== cleanText(localTestConcat)) {
            addIssue('Eligibility Test', `Entrance test requirement mismatched.`, 'Critical', liveTestConcat, localTestConcat);
          }
        }
      }

      // 6. Journey Section
      const liveJourneySteps = liveData.journey.journeySteps;
      const localJourneySteps = localData.applicationProcess?.steps.map(s => s.title) || [];
      if (liveJourneySteps.length !== localJourneySteps.length) {
        addIssue('Journey Steps', `Timeline step count mismatched. Live: ${liveJourneySteps.length}, Local: ${localJourneySteps.length}`, 'Medium', liveJourneySteps.join(', '), localJourneySteps.join(', '));
      } else {
        liveJourneySteps.forEach((step, stepIdx) => {
          if (cleanText(step) !== cleanText(localJourneySteps[stepIdx])) {
            addIssue('Journey Steps', `Step name at index ${stepIdx} mismatched.`, 'Medium', step, localJourneySteps[stepIdx]);
          }
        });
      }

      // Compare phases detailed contents
      const livePhases = liveData.journey.journeyPhases;
      const localSteps = localData.applicationProcess?.steps || [];
      if (livePhases.length !== localSteps.length) {
        addIssue('Journey Phases', `Phase section count mismatched. Live: ${livePhases.length}, Local: ${localSteps.length}`, 'Critical', `${livePhases.length} phases`, `${localSteps.length} phases`);
      } else {
        livePhases.forEach((p, idx) => {
          const ls = localSteps[idx];
          // Compare phase header
          if (cleanText(p.title) !== cleanText(ls.title)) {
            // Note: sometimes title starts with prefix or has spacing, check normalized similarity
            addIssue('Journey Phases', `Phase ${idx + 1} header title mismatched.`, 'Critical', p.title, ls.title);
          }
          // Compare info cards within phase
          // Live card structure: cards = Array of { title, text, listItems }
          // Local detailedContent structure: detailedContent = Array of { title, items }
          const liveCards = p.cards;
          const localContent = ls.detailedContent;
          if (liveCards.length !== localContent.length) {
            addIssue('Journey Phases', `Phase ${idx + 1} detailed cards count mismatched. Live: ${liveCards.length}, Local: ${localContent.length}`, 'Critical', `${liveCards.length} cards`, `${localContent.length} cards`);
          } else {
            liveCards.forEach((card, cIdx) => {
              const lc = localContent[cIdx];
              if (cleanText(card.title) !== cleanText(lc.title)) {
                addIssue('Journey Phase Cards', `Phase ${idx + 1} card ${cIdx + 1} title mismatched.`, 'Critical', card.title, lc.title);
              }
              // Compare items
              const cardComp = compareStringArrays(card.listItems, lc.items);
              if (!cardComp.matched) {
                if (cardComp.missing.length > 0) {
                  addIssue('Journey Phase Cards', `Phase ${idx + 1} card "${card.title}" missing items locally: ${cardComp.missing.join('; ')}`, 'Critical', card.listItems.join('\n'), lc.items.join('\n'));
                }
                if (cardComp.extra.length > 0) {
                  addIssue('Journey Phase Cards', `Phase ${idx + 1} card "${card.title}" has extra items locally: ${cardComp.extra.join('; ')}`, 'Medium', card.listItems.join('\n'), lc.items.join('\n'));
                }
              }
            });
          }
        });
      }

      // Check mixed-country terms in Journey!
      // (Check if other country pages mention another country in their timeline/journey steps text)
      // E.g. Russia timeline mentioning Italy or Georgia
      const textToSearch = JSON.stringify(localData.applicationProcess || {});
      const otherCountriesSlugs = localCountries.map(c => c.slug).filter(s => s !== slug);
      otherCountriesSlugs.forEach(otherSlug => {
        const regex = new RegExp(`\\b${otherSlug}\\b`, 'i');
        if (regex.test(textToSearch)) {
          addIssue('Journey Text', `Mixed-country term "${otherSlug}" found in country "${slug}" data!`, 'Critical', `Mentions of ${otherSlug}`, `Text includes: ${otherSlug}`);
        }
      });

      // 7. Achievers Section
      const liveAchievers = liveData.achievers;
      const localAchievers = localData.achievers || [];
      if (liveAchievers.length > 0) {
        if (localAchievers.length === 0) {
          addIssue('Achievers', `Achievers are present on original page but missing locally.`, 'Medium', `${liveAchievers.length} achievers`, '0 achievers');
        } else {
          // Verify that images exist and match
          localAchievers.forEach((ach, achIdx) => {
            const achImg = ach.image || '';
            let achImgExists = false;
            if (achImg) {
              const fullLocalPath = path.join(process.cwd(), 'public', achImg);
              achImgExists = fs.existsSync(fullLocalPath);
              if (!achImgExists) {
                imageIssues.push(`Achiever image file "${achImg}" does not exist locally under public/`);
                addIssue('Achievers', `Achiever image file does not exist locally`, 'Critical', liveAchievers[achIdx] || '', achImg);
              } else {
                if (achImg.toLowerCase().includes('italy') && slug !== 'italy') {
                  imageIssues.push(`Achiever image "${achImg}" points to Italy on country "${slug}"`);
                  addIssue('Achievers', `Achiever image references Italy on country "${slug}"`, 'Critical', liveAchievers[achIdx] || '', achImg);
                }
              }
            } else {
              imageIssues.push(`Achiever at index ${achIdx} has empty image path.`);
              addIssue('Achievers', `Achiever image path is empty`, 'Medium', liveAchievers[achIdx] || '', '');
            }
          });
        }
      }

      // 8. FAQ Section
      const liveFaqs = liveData.faqs;
      const localFaqs = localData.faqs || [];
      if (liveFaqs.length !== localFaqs.length) {
        addIssue('FAQs', `FAQ item count mismatched. Live: ${liveFaqs.length}, Local: ${localFaqs.length}`, 'Critical', `${liveFaqs.length} FAQs`, `${localFaqs.length} FAQs`);
      } else {
        liveFaqs.forEach((faq, idx) => {
          const lFaq = localFaqs[idx];
          if (normalizeFaqQuestion(faq.q) !== normalizeFaqQuestion(lFaq.question)) {
            addIssue('FAQs', `FAQ Question at index ${idx} mismatched.`, 'Critical', faq.q, lFaq.question);
          }
          if (normalizeFaqAnswer(faq.a) !== normalizeFaqAnswer(lFaq.answer)) {
            addIssue('FAQs', `FAQ Answer at index ${idx} mismatched.`, 'Critical', faq.a, lFaq.answer);
          }
        });
      }

      // 9. CTA/Footer Section Check
      // Let's check for specific email/phone in original page text:
      // Phone: +91 9315026515 or info@edu-wire.com
      const liveCtaText = liveData.cta.ctaText;
      // We can check if correct phone/email are in local components/home/FinalCTA or ui/CTASection
      // But we just audit the text content from the scrape.

      auditReport.push({
        country: localData.country,
        originalUrl: url,
        newRoute: `/mbbs/${slug}`,
        status,
        maxPriority,
        differences,
        imageIssues
      });

    } catch (e: any) {
      console.error(`Error auditing ${localData.country}:`, e.message);
      auditReport.push({
        country: localData.country,
        originalUrl: url,
        newRoute: `/mbbs/${slug}`,
        status: 'FAIL',
        maxPriority: 'Critical',
        differences: [`Failed to load or parse original page: ${e.message}`],
        imageIssues: []
      });
    }
  }

  await browser.close();

  // Save the report as JSON for inspection
  fs.writeFileSync('audit_results.json', JSON.stringify(auditReport, null, 2));
  console.log('Saved raw audit report to audit_results.json');

  // Format into requested markdown format
  let md = '# MBBS Content Audit Report\n\n';
  
  // Create summary table
  md += '## Summary Table\n\n';
  md += '| Country | Content Status | Image Status | Critical Issues | Fix Needed |\n';
  md += '|---|---|---|---|---|\n';
  
  auditReport.forEach((rep: any) => {
    const contentStatus = rep.differences.length > 0 ? 'FAIL' : 'PASS';
    const imageStatus = rep.imageIssues.length > 0 ? 'FAIL' : 'OK';
    const criticalCount = rep.differences.filter((d: string) => d.includes('Critical') || d.includes('Hero Image') || d.includes('University image')).length + rep.imageIssues.length;
    const fixNeeded = rep.status === 'FAIL' ? 'Yes' : 'No';
    md += `| ${rep.country} | ${contentStatus} | ${imageStatus} | ${criticalCount} | ${fixNeeded} |\n`;
  });
  md += '\n';

  // Details for each country
  auditReport.forEach((rep: any) => {
    md += `## Country: ${rep.country}\n`;
    md += `**Original URL**: [${rep.originalUrl}](${rep.originalUrl})\n`;
    md += `**New route**: [${rep.newRoute}](file:///${path.join(process.cwd(), 'app', 'mbbs', rep.newRoute.split('/')[2], 'page.tsx')})\n`;
    md += `**Status**: ${rep.status}\n`;
    md += `**Priority**: ${rep.maxPriority}\n\n`;

    md += `### Differences:\n`;
    if (rep.differences.length > 0) {
      rep.differences.forEach((diff: string, idx: number) => {
        md += `${idx + 1}. ${diff}\n\n`;
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
  fs.writeFileSync(brainReportPath, md);
  console.log(`Generated final markdown audit report at: ${brainReportPath}`);
}

runAudit().catch(console.error);
