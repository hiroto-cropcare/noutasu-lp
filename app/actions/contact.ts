'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // バリデーション
  if (!name || !email || !message) {
    return {
      success: false,
      message: '必須項目を入力してください。',
    };
  }

  // 件名のマッピング
  const subjectMap: Record<string, string> = {
    func: '機能について',
    bug: '不具合の報告',
    req: 'ご要望',
    other: 'その他',
    '': 'お問い合わせ',
  };

  const subjectText = subjectMap[subject] || 'お問い合わせ';

  try {
    await resend.emails.send({
      from: `のうたす お問い合わせ <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `【のうたす】${subjectText} - ${name}様より`,
      text: `
お名前: ${name}
メールアドレス: ${email}
件名: ${subjectText}

お問い合わせ内容:
${message}
      `.trim(),
    });

    return {
      success: true,
      message: 'お問い合わせを送信しました。ありがとうございます。',
    };
  } catch (error) {
    console.error('メール送信エラー:', error);
    return {
      success: false,
      message: '送信に失敗しました。時間をおいて再度お試しください。',
    };
  }
}
