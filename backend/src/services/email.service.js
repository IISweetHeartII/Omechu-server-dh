import { createEmailVerification, findEmailVerification, deleteEmailVerification } from "../repositories/email.repository.js";
import nodemailer from "nodemailer";

// Nodemailer transporter 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// 인증번호 생성 & 이메일 발송
export const sendVerificationCodeService = async (email) => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  await createEmailVerification(email, code);
  await transporter.sendMail({
    from: `"Omechu" <${process.env.MAIL_USER}>`,
    to: email,
    subject: "Omechu 인증번호",
    text: `인증번호는 ${code}입니다.`,
  });
};

// 인증번호 검증 & 삭제
export const verifyCodeService = async (email, code) => {
  const record = await findEmailVerification(email);
  if (!record || record.code !== code) {
    throw new Error("인증번호가 일치하지 않습니다.");
  }
  await deleteEmailVerification(email);
};
