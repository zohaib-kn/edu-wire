import crypto from 'crypto';

const filenames = [
  'Caucasus_International_University.jpg',
  'Caucasus_international_university.jpg',
  'Semey_Medical_University.jpg',
  'Semey_Medical_University_Main_Building.jpg',
  'Semey_medical_university.jpg',
  'Medizinische_Akademie_Semei.jpg'
];

async function checkFiles() {
  for (const rawName of filenames) {
    const name = rawName.replace(/ /g, '_');
    const md5 = crypto.createHash('md5').update(name).digest('hex');
    const pathPart = `${md5[0]}/${md5.slice(0, 2)}`;
    const url = `https://upload.wikimedia.org/wikipedia/commons/${pathPart}/${name}`;
    
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'EduWireBot/1.0 (contact@edu-wire.com)' } });
      console.log(name, '->', url, '-> Status:', res.status);
    } catch (e) {
      console.log(name, '-> Error:', e.message);
    }
  }
}

checkFiles();
