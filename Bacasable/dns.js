const dns = require('dns');

const domain = 'diginamic.fr';

// 1. Adresse IP avec dns.lookup()
dns.lookup(domain, (err, address, family) => {
  if (err) {
    console.error('Erreur lookup:', err.message);
    return;
  }
  console.log(`IP de ${domain}: ${address} (IPv${family})`);
});

// 2. Enregistrements MX
dns.resolveMx(domain, (err, records) => {
  if (err) {
    console.error('Erreur MX:', err.message);
    return;
  }
  console.log('MX records pour', domain, ':');
  records.forEach(record => {
    console.log(`  Priorité ${record.priority}: ${record.exchange}`);
  });
});