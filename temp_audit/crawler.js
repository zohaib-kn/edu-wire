import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const ORIGINAL_BASE = 'https://edu-wire.com';
const NEW_BASE = 'https://edu-wire-one.vercel.app';

const originalSeeds = [
  '/index.php',
  '/about.php',
  '/contact.php',
  '/ielts.php',
  '/imat-prepration.php',
  '/scholarship.php',
  '/admission.php',
  '/financial.php',
  '/study-in-Uk.php',
  '/study-in-australia.php',
  '/study-in-germany.php',
  '/study-in-canada.php',
  '/study-in-italy.php',
  '/study-in-newzealand.php',
  '/study-in-france.php',
  '/study-in-spain.php',
  '/study-in-romania.php',
  '/study-in-ireland.php',
  '/mbbs-in-italy.php',
  '/mbbs-in-romania.php',
  '/mbbs-in-bulgaria.php',
  '/mbbs-in-russia.php',
  '/mbbs-in-georgia.php',
  '/mbbs-in-kazakhstan.php',
  '/mbbs-in-kyrgyzstan.php',
  '/mbbs-in-poland.php',
  '/mbbs-in-hungary.php',
  '/mbbs-in-serbia.php'
];

const newSeeds = [
  '/',
  '/about',
  '/contact',
  '/services/ielts',
  '/services/imat-preparation',
  '/services/scholarship-guidance',
  '/services/admission-guidance',
  '/services/financial-assistance',
  '/destinations',
  '/destinations/uk',
  '/destinations/australia',
  '/destinations/germany',
  '/destinations/canada',
  '/destinations/italy',
  '/destinations/newzealand',
  '/destinations/france',
  '/destinations/spain',
  '/destinations/romania',
  '/destinations/ireland',
  '/mbbs/italy',
  '/mbbs/romania',
  '/mbbs/bulgaria',
  '/mbbs/russia',
  '/mbbs/georgia',
  '/mbbs/kazakhstan',
  '/mbbs/kyrgyzstan',
  '/mbbs/poland',
  '/mbbs/hungary',
  '/mbbs/serbia'
];

async function crawlSite(base, seeds) {
  console.log(`Starting crawl for base: ${base}`);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const visited = new Set();
  const queue = [...seeds.map(s => new URL(s, base).toString())];
  const results = {};

  while (queue.length > 0) {
    const urlStr = queue.shift();
    if (visited.has(urlStr)) continue;
    visited.add(urlStr);
    
    const url = new URL(urlStr);
    console.log(`Crawling: ${urlStr}`);
    
    try {
      const response = await page.goto(urlStr, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(1000); // Give JS time to run / render
      
      const status = response ? response.status() : 200;
      
      if (status >= 400) {
        console.log(`  Failed to load ${urlStr} with status ${status}`);
        results[url.pathname] = {
          status,
          error: `HTTP ${status}`,
          title: '',
          text: '',
          links: []
        };
        continue;
      }
      
      const title = await page.title();
      const text = await page.evaluate(() => document.body.innerText);
      
      // Extract links
      const links = await page.evaluate((baseStr) => {
        const anchors = Array.from(document.querySelectorAll('a'));
        return anchors
          .map(a => a.getAttribute('href'))
          .filter(href => {
            if (!href) return false;
            if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
              return false;
            }
            return true;
          })
          .map(href => {
            try {
              return new URL(href, window.location.href).toString();
            } catch (e) {
              return null;
            }
          })
          .filter(h => h && h.startsWith(baseStr));
      }, base);
      
      // Filter duplicate links and add to queue if same origin
      const uniqueLinks = Array.from(new Set(links));
      for (const link of uniqueLinks) {
        if (!visited.has(link) && !queue.includes(link)) {
          queue.push(link);
        }
      }
      
      results[url.pathname] = {
        status,
        title,
        text,
        links: uniqueLinks.map(l => new URL(l).pathname)
      };
      
      console.log(`  Successfully crawled ${url.pathname}. Found ${uniqueLinks.length} links.`);
      
    } catch (error) {
      console.error(`  Error crawling ${urlStr}:`, error.message);
      results[url.pathname] = {
        status: 500,
        error: error.message,
        title: '',
        text: '',
        links: []
      };
    }
  }
  
  await browser.close();
  return results;
}

async function run() {
  const originalData = await crawlSite(ORIGINAL_BASE, originalSeeds);
  fs.writeFileSync('original_site_data.json', JSON.stringify(originalData, null, 2));
  console.log(`Saved original site data. Total pages: ${Object.keys(originalData).length}`);

  const newData = await crawlSite(NEW_BASE, newSeeds);
  fs.writeFileSync('new_site_data.json', JSON.stringify(newData, null, 2));
  console.log(`Saved new site data. Total pages: ${Object.keys(newData).length}`);
}

run().catch(console.error);
