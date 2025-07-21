import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

export const generatePresignedUrl = async (req, res) => {
  const uploadDirectory = req.query.directory ?? "profile";
  // const extension = req.query.extension ?? ".jpg";
  const uuid = uuidv4();
  const key = `${uploadDirectory}/${uuid}.jpg`;

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: key,
    Expires: 60 * 5, // 5분 동안만 유효
    ContentType: "image/jpeg",
    ACL: "public-read",
  };

  try {
    const url = await s3.getSignedUrlPromise("putObject", params);
    res.json({
      uploadUrl: url,
      fileUrl: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
    });
  } catch (err) {
    res.status(500).json({ error: "Presigned URL 생성 실패" });
  }
  /* 
  #swagger.tags=["ImageUpload"]
  #swagger.summary= "이미지 업로드 presignedUrl 생성 API"
  #swagger.parameters['directory'] = {
    description: 'S3 버킷 내 업로드할 디렉토리 이름 ( 프로필 : profile , 맛집 : famousRestaurant )',
    default: 'profile',
    required: false,
    type: 'string'
  }
  #swagger.responses[200] = {
      description: 'Presigned URL이 성공적으로 생성됨',
      schema: {
        uploadUrl: "https://s3.amazonaws.com/your-bucket/uploads/uuid.png?AWSAccessKeyId=...",
        fileUrl: "https://s3.amazonaws.com/your-bucket/uploads/uuid.png"
      }
    }

  #swagger.responses[500] = {
      description: 'Presigned URL 생성 실패',
      schema: {
        error: "Presigned URL 생성 실패"
      }
    } 
  
*/
};
