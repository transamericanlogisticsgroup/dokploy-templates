#!/usr/bin/env node

const { execSync } = require('child_process');

//Blueprints
try {
  // Remove any existing blueprints folder (optional)
  execSync('rm -rf blueprints', { stdio: 'inherit' });

  // Use degit to download the blueprints folder from your GitHub fork/repo.
  // Adjust the repository path as needed.
  execSync('npx degit transamericanlogisticsgroup/dokploy-templates/blueprints blueprints', { stdio: 'inherit' });
  
  console.log('Blueprints downloaded successfully.');
} catch (err) {
  console.error('Error downloading blueprints:', err);
  process.exit(1);
}

//Metadata
try {
  // Remove any existing blueprints folder (optional)
  execSync('rm -rf meta.json', { stdio: 'inherit' });

  // Use degit to download the blueprints folder from your GitHub fork/repo.
  // Adjust the repository path as needed.
  execSync('npx degit transamericanlogisticsgroup/dokploy-templates/meta.json meta.json', { stdio: 'inherit' });
  
  console.log('Metadata downloaded successfully.');
} catch (err) {
  console.error('Error downloading metadata:', err);
  process.exit(1);
}
