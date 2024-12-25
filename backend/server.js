const express = require('express');
require('dotenv').config();

const cors = require('cors');
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const app = express();

app.use(cors());

// Configure AWS
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Function to generate pre-signed URLs
const getPreSignedUrls = async () => {
  const bucketName = 'andrewdangspersonalphotos';
  const objects = [
    'Unknowns-1-4.jpg',
    'Falls1.jpg',
    'Unknowns-1_Original.jpg',
    'Falls2.jpg',
    'shb3.JPG',
    'shb2.JPG',
    'shb1.jpg',
    'camero.jpg',
    'jeep.jpg',

  ]; // List of image keys in the bucket

  // Generate pre-signed URLs
  const urls = await Promise.all(
    objects.map(async (objectKey) => {
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: objectKey,
      });

      // Generate a pre-signed URL (valid for 1 hour)
      const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
      return signedUrl;
    })
  );

  return urls;
};

// API endpoint to fetch pre-signed URLs
app.get('/api/s3-images', async (req, res) => {
  try {
    const urls = await getPreSignedUrls();
    res.json(urls);
  } catch (error) {
    console.error('Error generating pre-signed URLs:', error);
    res.status(500).json({ error: 'Failed to generate pre-signed URLs' });
  }
});

// Start the server
const PORT = 6969;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
