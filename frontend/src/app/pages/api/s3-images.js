import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const getPreSignedUrls = async () => {
  const bucketName = "andrewdangspersonalphotos";
  const objects = [
    "Unknowns-1-4.jpg",
    "Falls1.jpg",
    "Unknowns-1_Original.jpg",
    "Falls2.jpg",
    "shb3.JPG",
    "shb2.JPG",
    "shb1.jpg",
    "camero.jpg",
    "jeep.jpg",
  ];

  const urls = await Promise.all(
    objects.map(async (objectKey) => {
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: objectKey,
      });

      const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
      return signedUrl;
    })
  );

  return urls;
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const urls = await getPreSignedUrls();
      res.status(200).json(urls);
    } catch (error) {
      console.error("Error generating pre-signed URLs:", error);
      res.status(500).json({ error: "Failed to generate pre-signed URLs" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
