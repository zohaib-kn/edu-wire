const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Caucasus_International_University.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/81/Caucasus_International_University_CIU.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/22/Caucasus_International_University.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/86/Caucasus_International_University_Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Caucasus_International_University_Building.jpg'
];

async function findValid() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'EduWireBot/1.0 (contact@edu-wire.com)' } });
      console.log(url, '-> Status:', res.status);
    } catch (e) {
      console.log(url, '-> Error:', e.message);
    }
  }
}

findValid();
