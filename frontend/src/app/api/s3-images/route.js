import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

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

export async function GET() {
  try {
    const urls = await getPreSignedUrls();
    return NextResponse.json(urls, { status: 200 });
  } catch (error) {
    console.error("Error generating pre-signed URLs:", error);
    return NextResponse.json({ error: "Failed to generate pre-signed URLs" }, { status: 500 });
  }
}
