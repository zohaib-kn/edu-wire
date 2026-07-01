async function testDownload() {
  const url = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Sant%27Ivo_alla_Sapienza_-Rome.jpg';
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'EduWireBot/1.0 (contact@edu-wire.com)'
      }
    });
    console.log('Status:', res.status);
    console.log('Content-Type:', res.headers.get('content-type'));
    if (res.ok) {
      console.log('Success! Downloaded buffer size:', (await res.arrayBuffer()).byteLength);
    }
  } catch (e) {
    console.error('Error:', e.message);
  }
}

testDownload();
