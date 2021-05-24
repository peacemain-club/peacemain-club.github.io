const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: process.env.PROEJCT_ID,
  keyFilename: './serviceAccountKey.json',
});

module.exports = firestore;
