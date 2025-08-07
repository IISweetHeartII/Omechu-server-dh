import {
  createEmailVerification,
  findEmailVerification,
  deleteEmailVerification,
} from "../repositories/email.repository.js";
import nodemailer from "nodemailer";
import {
  InvalidVerificationCodeError,
  VerificationCodeExpiredError,
} from "../errors.js";

// Nodemailer transporter 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendVerificationCodeService = async (email) => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  await createEmailVerification(email, code);

  const imageUrl =
    "https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/email/a4e1f2ed-62bb-491d-93a0-3b88de6a64b3.jpg";

  await transporter.sendMail({
    from: `"Omechu" <${process.env.MAIL_USER}>`,
    to: email,
    subject: "[오메추] 이메일 인증번호 안내",
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>[오메추] 이메일 인증번호</h2>
        <p>아래 인증번호를 입력하여 본인 인증을 완료해 주세요.</p>
        <div style="font-size: 32px; font-weight: bold; margin: 20px 0; color: #3F51B5;">
          ${code}
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: gray;">
          ※ 이 인증번호는 10분간 유효합니다.<br/>
          ※ 본인이 요청하지 않은 경우 이 메일을 무시해 주세요.
        </p>
        <img src="${imageUrl}" alt="오메추 배너" style="width: 600px; max-width: 100%; height: auto; display: block;"/>
      </div>
    `,
  });
};

export const verifyCodeService = async (email, code) => {
  const record = await findEmailVerification(email);

  if (!record || record.code !== code) {
    throw new InvalidVerificationCodeError("인증번호가 일치하지 않습니다.");
  }

  if (record.expires_at < new Date()) {
    throw new VerificationCodeExpiredError(
      "인증번호가 만료되었습니다. 다시 요청해 주세요."
    );
  }

  await deleteEmailVerification(email);
};
