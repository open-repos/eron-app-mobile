const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load .env from project root
const envPath = path.resolve(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.warn('.env not found at project root, creating empty runtime file.');
}
dotenv.config({ path: envPath });

const outputPath = path.resolve(process.cwd(), 'src', 'environments', 'runtime-env.ts');

const content = `// This file is generated from .env. Do not edit.
export const runtimeEnv = {
  firebaseConfig: {
    apiKey: "${process.env.FIREBASE_API_KEY || ''}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN || ''}",
    databaseURL: "${process.env.FIREBASE_DATABASE_URL || ''}",
    projectId: "${process.env.FIREBASE_PROJECT_ID || ''}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET || ''}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID || ''}",
    appId: "${process.env.FIREBASE_APP_ID || ''}"
  }
};
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, content, { encoding: 'utf8' });
console.log(`Wrote runtime env to ${outputPath}`);
