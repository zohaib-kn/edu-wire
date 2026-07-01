import fs from 'fs';
import path from 'path';

// Define the direct mapping from original to new
const routeMap = {
  '/index.php': '/',
  '/about.php': '/about',
  '/contact.php': '/contact',
  '/ielts.php': '/services/ielts',
  '/imat-prepration.php': '/services/imat-preparation',
  '/scholarship.php': '/services/scholarship-guidance',
  '/admission.php': '/services/admission-guidance',
  '/financial.php': '/services/financial-assistance',
  '/study-in-Uk.php': '/destinations/uk',
  '/study-in-australia.php': '/destinations/australia',
  '/study-in-germany.php': '/destinations/germany',
  '/study-in-canada.php': '/destinations/canada',
  '/study-in-italy.php': '/destinations/italy',
  '/study-in-newzealand.php': '/destinations/newzealand',
  '/study-in-france.php': '/destinations/france',
  '/study-in-spain.php': '/destinations/spain',
  '/study-in-romania.php': '/destinations/romania',
  '/study-in-ireland.php': '/destinations/ireland',
  '/mbbs-in-italy.php': '/mbbs/italy',
  '/mbbs-in-romania.php': '/mbbs/romania',
  '/mbbs-in-bulgaria.php': '/mbbs/bulgaria',
  '/mbbs-in-russia.php': '/mbbs/russia',
  '/mbbs-in-georgia.php': '/mbbs/georgia',
  '/mbbs-in-kazakhstan.php': '/mbbs/kazakhstan',
  '/mbbs-in-kyrgyzstan.php': '/mbbs/kyrgyzstan',
  '/mbbs-in-poland.php': '/mbbs/poland',
  '/mbbs-in-hungary.php': '/mbbs/hungary',
  '/mbbs-in-serbia.php': '/mbbs/serbia'
};

function levenshtein(a, b) {
  const tmp = [];
  let i, j, alen = a.length, blen = b.length;
  if (alen === 0) return blen;
  if (blen === 0) return alen;
  for (i = 0; i <= alen; i++) tmp[i] = [i];
  for (j = 0; j <= blen; j++) tmp[0][j] = j;
  for (i = 1; i <= alen; i++) {
    for (j = 1; j <= blen; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1,
        tmp[i][j - 1] + 1,
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return tmp[alen][blen];
}

function getSimilarity(s1, s2) {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  let longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (longerLength - levenshtein(longer, shorter)) / parseFloat(longerLength);
}

function normalizeText(text) {
  if (!text) return [];
  return text
    .split('\n')
    .map(line => {
      // Replace non-breaking spaces and tabs with standard space
      let normalized = line.replace(/[\s\xa0]+/g, ' ').trim();
      return normalized;
    })
    .filter(line => {
      if (!line) return false;
      // Filter out single character lines that might be design artifacts
      if (line === '|' || line === '>' || line === '•' || line === '-') return false;
      return true;
    });
}

function findBestPageMatch(origPath, newPaths) {
  const cleanOrig = origPath.replace(/\.php$/, '').replace(/[-_]/g, '').toLowerCase();
  for (const newPath of newPaths) {
    const cleanNew = newPath.replace(/[-_]/g, '').toLowerCase();
    if (cleanNew.endsWith(cleanOrig) || cleanOrig.endsWith(cleanNew)) {
      return newPath;
    }
  }
  return null;
}

function comparePages(origLines, newLines) {
  const diffs = [];
  const origMatched = new Array(origLines.length).fill(false);
  const newMatched = new Array(newLines.length).fill(false);

  // 1. Exact matches first (in order to avoid matching different occurrences of same strings)
  for (let i = 0; i < origLines.length; i++) {
    for (let j = 0; j < newLines.length; j++) {
      if (!newMatched[j] && origLines[i] === newLines[j]) {
        origMatched[i] = true;
        newMatched[j] = true;
        break;
      }
    }
  }

  // 2. Similar matches (for potential changed lines, wrong spelling/values)
  for (let i = 0; i < origLines.length; i++) {
    if (origMatched[i]) continue;
    let bestScore = 0;
    let bestIdx = -1;
    for (let j = 0; j < newLines.length; j++) {
      if (newMatched[j]) continue;
      const score = getSimilarity(origLines[i], newLines[j]);
      if (score > bestScore) {
        bestScore = score;
        bestIdx = j;
      }
    }
    
    // Similarity threshold 0.55
    if (bestScore >= 0.55 && bestIdx !== -1) {
      origMatched[i] = true;
      newMatched[bestIdx] = true;
      
      let issueType = 'Changed';
      const oLower = origLines[i].toLowerCase();
      const nLower = newLines[bestIdx].toLowerCase();
      
      if (oLower === nLower) {
        issueType = 'capitalization';
      } else {
        const oClean = origLines[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
        const nClean = newLines[bestIdx].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
        if (oClean === nClean) {
          issueType = 'punctuation';
        } else if (/\d+/.test(origLines[i]) && /\d+/.test(newLines[bestIdx])) {
          const oNums = (origLines[i].match(/\d+/g) || []).join(',');
          const nNums = (newLines[bestIdx].match(/\d+/g) || []).join(',');
          if (oNums !== nNums) {
            issueType = 'Wrong value';
          }
        }
      }
      
      diffs.push({
        type: 'Changed',
        subType: issueType,
        original: origLines[i],
        new: newLines[bestIdx],
        score: bestScore
      });
    }
  }

  // 3. Unmatched original lines -> Missing
  for (let i = 0; i < origLines.length; i++) {
    if (!origMatched[i]) {
      diffs.push({
        type: 'Missing',
        original: origLines[i],
        new: ''
      });
    }
  }

  // 4. Unmatched new lines -> Extra
  for (let j = 0; j < newLines.length; j++) {
    if (!newMatched[j]) {
      diffs.push({
        type: 'Extra',
        original: '',
        new: newLines[j]
      });
    }
  }

  return diffs;
}

function run() {
  const originalData = JSON.parse(fs.readFileSync('original_site_data.json', 'utf8'));
  const newData = JSON.parse(fs.readFileSync('new_site_data.json', 'utf8'));

  const origPaths = Object.keys(originalData);
  const newPaths = Object.keys(newData);

  // Map original paths to new paths
  const mapped = [];
  const unmatchedOrig = new Set(origPaths);
  const unmatchedNew = new Set(newPaths);

  // Apply routeMap
  for (const [orig, newR] of Object.entries(routeMap)) {
    if (originalData[orig] && newData[newR]) {
      mapped.push({ originalPath: orig, newPath: newR });
      unmatchedOrig.delete(orig);
      unmatchedNew.delete(newR);
    } else {
      // One of them is missing
      if (originalData[orig]) {
        mapped.push({ originalPath: orig, newPath: null, status: 'Missing' });
        unmatchedOrig.delete(orig);
      } else if (newData[newR]) {
        mapped.push({ originalPath: null, newPath: newR, status: 'Extra' });
        unmatchedNew.delete(newR);
      }
    }
  }

  // Dynamic matching for rest
  for (const orig of Array.from(unmatchedOrig)) {
    const matchedNew = findBestPageMatch(orig, Array.from(unmatchedNew));
    if (matchedNew) {
      mapped.push({ originalPath: orig, newPath: matchedNew });
      unmatchedOrig.delete(orig);
      unmatchedNew.delete(matchedNew);
    }
  }

  // Add remaining unmatched as missing/extra
  for (const orig of unmatchedOrig) {
    mapped.push({ originalPath: orig, newPath: null, status: 'Missing' });
  }
  for (const newR of unmatchedNew) {
    mapped.push({ originalPath: null, newPath: newR, status: 'Extra' });
  }

  console.log(`Matched ${mapped.length} page mapping entries.`);

  let report = '# Content Comparison Audit Report\n\n';
  report += `*Generated: ${new Date().toISOString()}*\n\n`;

  const pageDetails = [];
  const criticalDiffsList = [];
  const minorDiffsList = [];
  const missingSectionsList = [];
  const extraSectionsList = [];

  let totalChecked = 0;
  let samePagesCount = 0;
  let differentPagesCount = 0;
  let missingPagesCount = 0;
  let extraPagesCount = 0;

  for (const entry of mapped) {
    const { originalPath, newPath, status: entryStatus } = entry;
    
    if (originalPath && newPath) {
      totalChecked++;
      const origPage = originalData[originalPath];
      const newPage = newData[newPath];
      
      const origLines = normalizeText(origPage.text);
      const newLines = normalizeText(newPage.text);
      
      const diffs = comparePages(origLines, newLines);
      
      let pageStatus = 'Same';
      if (diffs.length > 0) {
        pageStatus = 'Different';
        differentPagesCount++;
      } else {
        samePagesCount++;
      }
      
      let pageReport = `Page: ${originalPath} -> ${newPath}\n`;
      pageReport += `Original URL: https://edu-wire.com${originalPath}\n`;
      pageReport += `New URL: https://edu-wire-one.vercel.app${newPath}\n`;
      pageReport += `Status: ${pageStatus}\n\n`;
      
      if (diffs.length > 0) {
        pageReport += `Differences:\n`;
        let diffCount = 1;
        
        for (const diff of diffs) {
          pageReport += `${diffCount}. Original: ${diff.original || '(none)'}\n`;
          pageReport += `   New: ${diff.new || '(none)'}\n`;
          pageReport += `   Issue type: ${diff.type === 'Changed' ? (diff.subType || 'Changed') : diff.type}\n\n`;
          
          // Categorize for summary tables
          const isCritical = /fee|ranking|country|university|phone|email|@|contact|cta|service|mbbs|ielts|imat/i.test(diff.original || diff.new) || diff.subType === 'Wrong value';
          const isMinor = diff.subType === 'capitalization' || diff.subType === 'punctuation' || diff.subType === 'spacing';
          
          const record = {
            page: originalPath,
            original: diff.original,
            new: diff.new,
            issueType: diff.type === 'Changed' ? (diff.subType || 'Changed') : diff.type
          };
          
          if (diff.type === 'Missing') {
            missingSectionsList.push(record);
          } else if (diff.type === 'Extra') {
            extraSectionsList.push(record);
          } else if (isCritical) {
            criticalDiffsList.push(record);
          } else {
            minorDiffsList.push(record);
          }
          
          diffCount++;
        }
      }
      
      pageDetails.push(pageReport);
    } else if (originalPath) {
      missingPagesCount++;
      let pageReport = `Page: ${originalPath} -> (none)\n`;
      pageReport += `Original URL: https://edu-wire.com${originalPath}\n`;
      pageReport += `New URL: (none)\n`;
      pageReport += `Status: Missing\n\n`;
      pageDetails.push(pageReport);
    } else if (newPath) {
      extraPagesCount++;
      let pageReport = `Page: (none) -> ${newPath}\n`;
      pageReport += `Original URL: (none)\n`;
      pageReport += `New URL: https://edu-wire-one.vercel.app${newPath}\n`;
      pageReport += `Status: Extra\n\n`;
      pageDetails.push(pageReport);
    }
  }

  // Build the markdown file content
  report += `## Detailed Page Audits\n\n`;
  for (const pd of pageDetails) {
    report += '```text\n' + pd + '```\n\n';
  }

  // Summary Tables
  report += `## Critical Differences\n\n`;
  report += `Content differences that affect business accuracy (fees, rankings, countries, universities, phone/email, CTA text, service claims, FAQ answers):\n\n`;
  if (criticalDiffsList.length > 0) {
    report += `| Page | Original | New | Issue Type |\n`;
    report += `| --- | --- | --- | --- |\n`;
    for (const d of criticalDiffsList) {
      report += `| ${d.page} | ${d.original.replace(/\|/g, '\\|')} | ${d.new.replace(/\|/g, '\\|')} | ${d.issueType} |\n`;
    }
  } else {
    report += `No critical differences found.\n`;
  }
  report += `\n`;

  report += `## Minor Differences\n\n`;
  report += `Punctuation, capitalization, spacing, button text style:\n\n`;
  if (minorDiffsList.length > 0) {
    report += `| Page | Original | New | Issue Type |\n`;
    report += `| --- | --- | --- | --- |\n`;
    for (const d of minorDiffsList) {
      report += `| ${d.page} | ${d.original.replace(/\|/g, '\\|')} | ${d.new.replace(/\|/g, '\\|')} | ${d.issueType} |\n`;
    }
  } else {
    report += `No minor differences found.\n`;
  }
  report += `\n`;

  report += `## Missing Sections\n\n`;
  report += `Sections present on original but missing on new:\n\n`;
  if (missingSectionsList.length > 0) {
    report += `| Page | Missing Content | Issue Type |\n`;
    report += `| --- | --- | --- |\n`;
    for (const d of missingSectionsList) {
      report += `| ${d.page} | ${d.original.replace(/\|/g, '\\|')} | Missing |\n`;
    }
  } else {
    report += `No missing sections found.\n`;
  }
  report += `\n`;

  report += `## Extra Sections\n\n`;
  report += `Sections present on new but not on original:\n\n`;
  if (extraSectionsList.length > 0) {
    report += `| Page | Extra Content | Issue Type |\n`;
    report += `| --- | --- | --- |\n`;
    for (const d of extraSectionsList) {
      report += `| ${d.page} | ${d.new.replace(/\|/g, '\\|')} | Extra |\n`;
    }
  } else {
    report += `No extra sections found.\n`;
  }
  report += `\n`;

  // Final Summary
  report += `## Final Summary\n\n`;
  report += `| Metric | Count |\n`;
  report += `| --- | --- |\n`;
  report += `| Total pages checked | ${totalChecked} |\n`;
  report += `| Same pages | ${samePagesCount} |\n`;
  report += `| Different pages | ${differentPagesCount} |\n`;
  report += `| Missing pages | ${missingPagesCount} |\n`;
  report += `| Extra pages | ${extraPagesCount} |\n`;
  report += `\n`;

  // Highest priority fixes
  report += `### Highest Priority Fixes\n\n`;
  const highPriority = criticalDiffsList.slice(0, 15);
  if (highPriority.length > 0) {
    for (let i = 0; i < highPriority.length; i++) {
      report += `${i + 1}. **[${highPriority[i].page}]**: Change original "${highPriority[i].original}" to new "${highPriority[i].new}" (${highPriority[i].issueType})\n`;
    }
  } else {
    report += `No high priority fixes identified.\n`;
  }

  // Save the report as an artifact in the brain folder
  const reportPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\a5deb73b-727a-4baa-b767-94af391959ad\\audit_report.md';
  fs.writeFileSync(reportPath, report);
  console.log(`Successfully generated audit report at ${reportPath}`);
}

run();
