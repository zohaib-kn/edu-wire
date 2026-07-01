import { chromium } from 'playwright';
import fs from 'fs';

const countries = [
  'italy',
  'romania',
  'bulgaria',
  'russia',
  'georgia',
  'kazakhstan',
  'kyrgyzstan',
  'poland',
  'hungary',
  'serbia'
];

const ORIGINAL_BASE = 'https://edu-wire.com';

async function runScrape() {
  console.log('Launching browser to crawl live MBBS pages...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const scrapedResults = {};

  for (const slug of countries) {
    const url = `${ORIGINAL_BASE}/mbbs-in-${slug}.php`;
    console.log(`Scraping ${slug} from ${url}...`);

    try {
      await page.goto(url, { waitUntil: 'load', timeout: 35000 });
      await page.waitForTimeout(1000);

      const liveData = await page.evaluate(() => {
        const clean = (t) => t ? t.replace(/\s+/g, ' ').trim() : '';

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
          return h2 && (h2.textContent.toLowerCase().includes('universit') || h2.textContent.toLowerCase().includes('medical college') || h2.textContent.toLowerCase().includes('top leading'));
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
        const achImages = achSection ? Array.from(achSection.querySelectorAll('img')).map(img => img.getAttribute('src')).filter(Boolean) : [];

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

      scrapedResults[slug] = liveData;
      console.log(`Successfully scraped ${slug}`);
    } catch (e) {
      console.error(`Error scraping ${slug}:`, e.message);
    }
  }

  await browser.close();
  fs.writeFileSync('live_site_scraped.json', JSON.stringify(scrapedResults, null, 2));
  console.log('Saved all scraped data to live_site_scraped.json');
}

runScrape().catch(console.error);
