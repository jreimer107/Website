#!/usr/bin/python

from firebase_admin import credentials, initialize_app, storage
from google.cloud.storage import Blob, Bucket
from os import listdir, chdir, path

RECORDINGS_FOLDER = '/mnt/drv1/share/recordings'
CACHE_FILE_NAME = 'seen_recordings.txt'
THIS_FILEPATH = '/usr/src/website_uploader'

# Set working directory to cwd
chdir(THIS_FILEPATH)

# Get new files since last run and update seen files
new_files = {}
num_seen_files = 0
with open(CACHE_FILE_NAME, 'r+') as file:
    seen_files = set(file.read().split("\n"))
    num_seen_files = len(seen_files)
    current_files = set(listdir(RECORDINGS_FOLDER))
    new_files = current_files - seen_files
    file.write('\n'.join(new_files))


# Init firebase with your credentials
cred = credentials.Certificate("website-292501-504a7531276d.json")
initialize_app(cred, {'storageBucket': 'website-292501.appspot.com'})

print("Uploading the following files:")
print(list(new_files))
i = num_seen_files
for new_file in new_files:
    # Put your local file path
    bucket: Bucket = storage.bucket()
    blob: Blob = bucket.blob('recordings/' + new_file)
    blob.metadata = {"track": str(i)}
    blob.upload_from_filename("%s/%s" % (RECORDINGS_FOLDER, new_file))

    # Opt : if you want to make public access from the URL
    blob.make_public()

    print("Uploaded recording", blob.public_url)
    i += 1
