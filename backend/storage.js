const { Storage } = require('@google-cloud/storage');
const path = require('path');
require('dotenv').config();

// Configurare Google Cloud Storage
const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  keyFilename: path.join(__dirname, '../', process.env.GCLOUD_KEYFILE),
});

const bucketName = process.env.GCLOUD_BUCKET_NAME;

// Funcție pentru upload-ul unui fișier
const uploadFile = async (filePath, destination) => {
  try {
    await storage.bucket(bucketName).upload(filePath, {
      destination,
    });
    console.log(`${filePath} uploaded to ${bucketName}`);
  } catch (err) {
    console.error('Error uploading file:', err.message);
  }
};

// Funcție pentru descărcarea unui fișier
const downloadFile = async (fileName, destination) => {
  try {
    const options = {
      destination,
    };
    await storage.bucket(bucketName).file(fileName).download(options);
    console.log(`${fileName} downloaded to ${destination}`);
  } catch (err) {
    console.error('Error downloading file:', err.message);
  }
};

module.exports = { uploadFile, downloadFile };
