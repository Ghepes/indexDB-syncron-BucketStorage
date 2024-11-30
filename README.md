# indexDB-syncron-BucketStorage
 Synic data from indexDB with google Bucket Storage

Backend Project file to URL [Backend file](https://github.com/Ghepes/indexDB-syncron-BucketStorage/backend/).

1. Google Cloud Storage Setup
a. Google Cloud Bucket Configuration
Create a Bucket in Google Cloud:

Go to Google Cloud Console.
Create a new Bucket (Storage > Buckets > Create).
Configure permissions for the Bucket (using Service Accounts).
Create a Service Account for the application:

Go to IAM & Admin > Service Accounts.
Create a new Service Account with Storage Admin permissions.
Download the key in .json format.
Save the .json key in the project directory and add the location to the .env file.


b. Install the Google Cloud SDK
In the main project directory:

npm install @google-cloud/storage dotenv

Frontend Project file to URL [Frontend file](https://github.com/Ghepes/indexDB-syncron-BucketStorage/frontend/).

2. Frontend Electron.js
a. Setup-ul aplicației Electron.js
Creează structura fișierelor:

````
frontend/
├── main.js
├── renderer.js
├── index.html
├── styles.css
````
Install Electron:


npm install electron



3. Configure the .env file
Create an .env file in the project directory to store the Google Cloud keys:

GCLOUD_PROJECT_ID=your-project-id
GCLOUD_BUCKET_NAME=your-bucket-name
GCLOUD_KEYFILE=path/to/service-account-key.json

4. Run the application
Install all dependencies:

npm install
Run the Electron application:

npm start

