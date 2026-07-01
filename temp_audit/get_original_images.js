import { execSync } from 'child_process';
import fs from 'fs';

const countries = [
  'italy', 'romania', 'bulgaria', 'russia', 'georgia', 
  'kazakhstan', 'kyrgyzstan', 'poland', 'hungary', 'serbia'
];

for (const slug of countries) {
  try {
    const content = execSync(`git show HEAD:lib/data/mbbs/countries/${slug}.ts`).toString();
    // find all occurrences of /images/ or assets/images/
    const matches = content.match(/\/images\/[^\s\'\",\}]+/g) || [];
    console.log(slug, Array.from(new Set(matches)));
  } catch (e) {
    console.error(`Error for ${slug}:`, e.message);
  }
}
