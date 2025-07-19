#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting deployment process for alimortadhammar.me...');

try {
  // Build the project
  console.log('📦 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Ensure CNAME file exists in dist
  const distPath = path.join(process.cwd(), 'dist');
  const cnamePath = path.join(distPath, 'CNAME');
  
  if (!fs.existsSync(cnamePath)) {
    fs.writeFileSync(cnamePath, 'alimortadhammar.me');
    console.log('✅ CNAME file created in dist folder');
  }

  // Deploy to GitHub Pages
  console.log('🌐 Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });

  console.log('🎉 Deployment completed successfully!');
  console.log('🌍 Your portfolio will be available at: https://alimortadhammar.me');
  console.log('📝 Note: DNS propagation may take up to 24 hours for the custom domain.');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
