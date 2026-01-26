import React from 'react';

export default function LegalPage() {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-12 text-stone-900">利用規約・プライバシーポリシー</h1>

        {/* 目次 */}
        <div className="bg-stone-50 p-6 rounded-xl mb-12 border border-stone-200">
            <p className="font-bold mb-4">目次</p>
            <ul className="space-y-2 list-disc list-inside text-stone-700 hover:text-emerald-700">
                <li><a href="#terms" className="underline hover:text-emerald-600">利用規約</a></li>
                <li><a href="#privacy" className="underline hover:text-emerald-600">プライバシーポリシー</a></li>
            </ul>
        </div>

        {/* 利用規約 */}
        <section id="terms" className="mb-20">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-stone-200 text-stone-800">利用規約</h2>
          <div className="space-y-6 text-stone-600 leading-relaxed text-sm md:text-base">
            <p>
              この利用規約（以下，「本規約」といいます。）は，のうたす（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
            </p>
            <h3 className="text-lg font-bold text-stone-800 mt-6">第1条（適用）</h3>
            <p>
              本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </p>
            <h3 className="text-lg font-bold text-stone-800 mt-6">第2条（利用登録）</h3>
            <p>
              登録希望者が当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。
            </p>
            <h3 className="text-lg font-bold text-stone-800 mt-6">第3条（禁止事項）</h3>
            <p>
              ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。<br />
              1. 法令または公序良俗に違反する行為<br />
              2. 犯罪行為に関連する行為<br />
              3. 本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
            </p>
            {/* 必要に応じて条文を追加してください */}
          </div>
        </section>

        {/* プライバシーポリシー */}
        <section id="privacy">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-stone-200 text-stone-800">プライバシーポリシー</h2>
          <div className="space-y-6 text-stone-600 leading-relaxed text-sm md:text-base">
            <p>
              のうたす（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下，「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
            </p>
            <h3 className="text-lg font-bold text-stone-800 mt-6">第1条（個人情報）</h3>
            <p>
              「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報を指します。
            </p>
            <h3 className="text-lg font-bold text-stone-800 mt-6">第2条（個人情報の収集方法）</h3>
            <p>
              当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号などの個人情報をお尋ねすることがあります。
            </p>
            <h3 className="text-lg font-bold text-stone-800 mt-6">第3条（お問い合わせ窓口）</h3>
            <p>
              本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。<br /><br />
              のうたす運営事務局<br />
              Eメールアドレス：info@noutasu.app
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}