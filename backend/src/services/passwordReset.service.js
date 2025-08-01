import crypto from "crypto";
import nodemailer from "nodemailer";
import {
  upsertPasswordResetToken,
  findPasswordResetToken,
  deletePasswordResetToken,
  updateUserPasswordByEmail,
  findUserByEmail,
} from "../repositories/passwordReset.repository.js";
import { InvalidOrExpiredTokenError, UserNotFoundError } from "../errors.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendResetEmail = async (email, token) => {
  const resetLink = `https://omechu.log8.kr/auth/reset-password?token=${token}`;
  const imageUrl =
    "https://omechu-s3-bucket.s3.ap-northeast-2.amazonaws.com/email/a4e1f2ed-62bb-491d-93a0-3b88de6a64b3.jpg";
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "[오메추] 비밀번호 재설정 안내",
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>[오메추] 비밀번호 재설정 안내</h2>
        <p>비밀번호를 바꾸려면, 아래 버튼을 눌러 새로운 비밀번호를 설정해 주세요.</p>
        <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #3F51B5; color: white; text-decoration: none; border-radius: 5px;">비밀번호 재설정하기</a>
        <p style="margin-top: 20px; font-size: 12px; color: gray;">
          ※ 이 링크는 30분 동안 유효하며, 시간이 지나면 다시 요청하셔야 합니다.<br/>
          ※ 본인이 요청하지 않은 경우 이 메일을 무시해 주세요.
        </p>

        <img src="${imageUrl}" alt="오메추 배너" style="width: 600px; max-width: 100%; height: auto; display: block;"/>
      </div>
    `,
  });
};

export const createPasswordResetTokenService = async (email) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new UserNotFoundError("해당 이메일의 사용자가 존재하지 않습니다.");
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

  await upsertPasswordResetToken(email, token, expiresAt);
  await sendResetEmail(email, token);

  return token;
};

export const validatePasswordResetTokenService = async (token) => {
  const tokenData = await findPasswordResetToken(token);
  if (!tokenData || tokenData.expires_at < new Date()) {
    throw new InvalidOrExpiredTokenError("유효하지 않거나 만료된 토큰입니다.");
  }
  return tokenData.email;
};

export const resetUserPasswordService = async (email, newPassword, token) => {
  await updateUserPasswordByEmail(email, newPassword);
  await deletePasswordResetToken(token);
};
