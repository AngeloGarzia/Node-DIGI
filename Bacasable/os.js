function displayOsMessage() {
  const platform = process.platform;
  
  switch (platform) {
    case 'win32':
      console.log('Vous utilisez Windows !');
      break;
    case 'darwin':
      console.log('Vous utilisez macOS !');
      break;
    case 'linux':
      console.log('Vous utilisez Linux !');
      break;
    default:
      console.log(`OS non supporté: ${platform}`);
  }
}

// Test
displayOsMessage();
console.log('Plateforme détectée:', process.platform);