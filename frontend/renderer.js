const { ipcRenderer } = require('electron');

// Inițializare IndexedDB
let db;
const request = indexedDB.open('SyncDB', 1);

request.onupgradeneeded = (event) => {
  db = event.target.result;
  db.createObjectStore('data', { keyPath: 'id', autoIncrement: true });
};

request.onsuccess = (event) => {
  db = event.target.result;
  console.log('IndexedDB initialized');
};

// Salvare date în IndexedDB
const saveToIndexedDB = (data) => {
  const transaction = db.transaction(['data'], 'readwrite');
  const store = transaction.objectStore('data');
  store.add(data);
  console.log('Data saved locally');
};

// Sincronizare cu Google Cloud
document.getElementById('uploadButton').addEventListener('click', async () => {
  const filePath = 'path/to/local/file.json';
  const destination = 'remote/file.json';

  const result = await ipcRenderer.invoke('upload-data', filePath, destination);
  console.log(result);
});
