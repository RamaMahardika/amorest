const admin = require('firebase-admin');
const serviceAccount = require('./../serviceAccountKey.json');

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://amo-spa-api.firebaseio.com'
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const db = admin.firestore();
db.settings({
  timestampsInSnapshots: true
});

module.exports = db;