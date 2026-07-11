const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

const serviceAccount = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./serviceAccountKey.json"), "utf8")
);

// SAFE INIT (NO credential.cert dependency)
admin.initializeApp({
    credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key.replace(/\\n/g, "\n"),
    }),
});

module.exports = admin;