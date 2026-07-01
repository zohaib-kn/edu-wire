import { chromium } from 'playwright';

async function testScrape() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const url = 'https://edu-wire.com/mbbs-in-italy.php';
  console.log('Loading page:', url);
  await page.goto(url, { waitUntil: 'load', timeout: 30000 });

  const data = await page.evaluate(() => {
    const clean = (t) => t ? t.replace(/\s+/g, ' ').trim() : '';

    // Hero
    const heroH1 = clean(document.querySelector('.main-hero-section h1')?.textContent);
    const heroP = clean(document.querySelector('.main-hero-section p')?.textContent);
    const heroBtn = clean(document.querySelector('.main-hero-section button')?.textContent);
    const heroImg = document.querySelector('.main-hero-section img')?.getAttribute('src');

    // About
    const aboutH2 = clean(document.querySelector('#about h2')?.textContent);
    const aboutImg = document.querySelector('#about img')?.getAttribute('src');
    const aboutBullets = Array.from(document.querySelectorAll('#about .country-list-bullet li, #about ul li')).map(li => clean(li.textContent));

    // Why Choose
    const whyChooseTitle = clean(document.querySelector('#why-choose-mbbs h2')?.textContent);
    const whyChooseCards = Array.from(document.querySelectorAll('#why-choose-mbbs .highlight-card, #why-choose-mbbs .why-choose-mbbs-card')).map(card => {
      const title = clean(card.querySelector('h4')?.textContent);
      const desc = clean(card.querySelector('p')?.textContent);
      return { title, desc };
    });

    // Top Universities
    const uniSection = Array.from(document.querySelectorAll('section')).find(sec => {
      const h2 = sec.querySelector('h2');
      return h2 && h2.textContent.toLowerCase().includes('universit');
    });
    const uniTitle = uniSection ? clean(uniSection.querySelector('h2')?.textContent) : '';
    const uniContainers = uniSection ? Array.from(uniSection.querySelectorAll('.top-university-container')) : [];
    const universities = uniContainers.map(container => {
      const name = clean(container.querySelector('.top-university-card h3, h3')?.textContent);
      const paragraphs = Array.from(container.querySelectorAll('.top-university-card p, p')).map(p => clean(p.textContent)).filter(Boolean);
      const img = container.querySelector('.university-image img')?.getAttribute('src');
      
      const rows = Array.from(container.querySelectorAll('.info-table tbody tr')).map(tr => {
        const tds = Array.from(tr.querySelectorAll('td')).map(td => clean(td.textContent));
        return tds;
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
        const text = clean(card.textContent);
        const listItems = Array.from(card.querySelectorAll('li')).map(li => clean(li.textContent));
        return { title, text, listItems };
      });
      return { index, title, cards };
    }) : [];

    // Achievers
    const achSection = document.querySelector('.visa-approved-section');
    const achImages = achSection ? Array.from(achSection.querySelectorAll('img')).map(img => img.getAttribute('src')) : [];

    // FAQs
    const faqSection = document.querySelector('#faq');
    const faqs = faqSection ? Array.from(faqSection.querySelectorAll('.faq-item')).map(item => {
      const q = clean(item.querySelector('.faq-question')?.textContent);
      const a = clean(item.querySelector('.faq-answer')?.textContent);
      return { q, a };
    }) : [];

    return {
      hero: { heroH1, heroP, heroBtn, heroImg },
      about: { aboutH2, aboutImg, aboutBullets },
      whyChoose: { whyChooseTitle, whyChooseCards },
      universities: { uniTitle, universities },
      eligibility: { elTitle, elColumns },
      journey: { journeyTitle, journeySteps, journeyPhases },
      achievers: achImages,
      faqs
    };
  });

  console.log('Scraped Data:', JSON.stringify(data, null, 2));
  await browser.close();
}

testScrape().catch(console.error);
