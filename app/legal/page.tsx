import React from 'react';

export default function LegalPage() {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-12 text-stone-900">利用規約・プライバシーポリシー</h1>

        {/* 目次 */}
        <div className="bg-stone-50 p-6 rounded-xl mb-12 border border-stone-200">
          <p className="font-bold mb-4">目次</p>
          <ul className="space-y-2 list-disc list-inside text-stone-700">
            <li><a href="#terms" className="underline hover:text-emerald-600">利用規約</a></li>
            <li><a href="#privacy" className="underline hover:text-emerald-600">プライバシーポリシー</a></li>
          </ul>
        </div>

        {/* 利用規約 */}
        <section id="terms" className="mb-20">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-stone-200 text-stone-800">利用規約</h2>
          <div className="space-y-6 text-stone-600 leading-relaxed text-sm md:text-base">
            <p>
              本利用規約（以下「本規約」といいます）は、寺田裕人（以下「事業者」といいます）が提供する
              農業支援アプリケーション「のうたす（noutasu）」
              およびこれに関連するサービス（以下総称して「本サービス」といいます）の利用条件を定めるものです。
              利用者は、本規約に同意のうえ、本サービスを利用するものとします。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第1条（定義）</h3>
            <p>
              <strong>「本アプリ」</strong><br />
              事業者が提供する農業の作業管理、農薬情報管理、計算補助、記録、その他農業支援を目的としたアプリケーション「のうたす」をいいます。
            </p>
            <p>
              <strong>「利用者」</strong><br />
              本規約に同意のうえ、本サービスを利用するすべての個人または法人をいいます。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第2条（利用登録）</h3>
            <p>
              利用者は、事業者が定める方法により利用登録を行うものとします。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第3条（アカウント管理）</h3>
            <p>
              利用者は、自己のアカウント情報を適切に管理する責任を負います。
              アカウントの不正使用により生じた損害について、事業者は一切の責任を負いません。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第4条（禁止事項）</h3>
            <p>利用者は、以下の行為を行ってはなりません。</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>法令または公序良俗に違反する行為</li>
              <li>本サービスの不正利用、改変、解析、リバースエンジニアリング</li>
              <li>他の利用者、第三者、事業者の権利・利益を侵害する行為</li>
              <li>虚偽の情報登録</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>事業者が不適切と判断する行為</li>
            </ul>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第5条（サービスの停止・変更）</h3>
            <p>
              事業者は、システム保守、障害、不可抗力等により、本サービスの全部または一部を停止または中断することがあります。
            </p>
            <p>
              事業者は、事前の通知なく、本サービスの内容を変更または終了することがあります。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第6条（免責事項）</h3>
            <p>
              事業者は、本サービスの正確性、完全性、有用性、特定目的への適合性について保証しません。
            </p>
            <p>
              本サービスは農業判断を代替するものではなく、最終判断は利用者自身の責任で行うものとします。
            </p>
            <p>
              本サービスの利用により生じた損害について、事業者は故意または重過失がある場合を除き、一切の責任を負いません。
            </p>
            <p>
              損害賠償責任が認められる場合であっても、その上限は過去3か月間に利用者が支払った利用料金の合計額とします。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第7条（知的財産権）</h3>
            <p>
              本アプリおよび本サービスに関する著作権、商標権その他の知的財産権は、事業者または正当な権利者に帰属します。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第8条（個人情報の取扱い）</h3>
            <p>
              本サービスにおける個人情報の取扱いは、別途定めるプライバシーポリシーに従います。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第9条（規約の変更）</h3>
            <p>
              事業者は、必要に応じて本規約を変更することができます。
            </p>
            <p>
              変更後の規約は、本アプリまたはウェブサイトに掲示した時点から効力を生じます。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第10条（準拠法・管轄）</h3>
            <p>
              本規約は日本法を準拠法とします。
            </p>
            <p>
              本サービスに関する紛争については、長崎地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>

            <div className="mt-8 pt-6 border-t border-stone-200 text-stone-500">
              <p>制定日：2025年2月2日</p>
              <p>事業者：寺田裕人</p>
              <p className="mt-4">本規約に関するご質問は、アプリ内の「お問い合わせ」からご連絡ください。</p>
            </div>
          </div>
        </section>

        {/* プライバシーポリシー */}
        <section id="privacy">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-stone-200 text-stone-800">プライバシーポリシー</h2>
          <div className="space-y-6 text-stone-600 leading-relaxed text-sm md:text-base">
            <p>
              寺田裕人（以下「事業者」といいます）は、
              事業者が提供する農業支援アプリケーション「のうたす（noutasu）」および関連サービス（以下「本サービス」といいます）において取得する
              利用者の個人情報を、以下の方針に基づき適切に取り扱います。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第1条（基本方針）</h3>
            <p>
              事業者は、個人情報の保護が重要な社会的責務であることを認識し、
              個人情報保護法および関連法令、ガイドラインを遵守するとともに、
              個人情報を適正かつ安全に管理します。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第2条（取得する情報）</h3>
            <p>
              事業者は、本サービスの提供にあたり、以下の情報を取得することがあります。
            </p>
            <p><strong>1. アカウント登録情報</strong></p>
            <p className="ml-4">GoogleアカウントまたはAppleアカウントに紐づく識別情報</p>
            <p><strong>2. 利用データ</strong></p>
            <p className="ml-4">本サービスの利用履歴、操作ログ等</p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第3条（利用目的）</h3>
            <p>
              取得した個人情報は、本サービスの提供・改善、お問い合わせ対応、
              重要なお知らせの通知等の目的で利用します。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第4条（第三者提供）</h3>
            <p>
              事業者は、法令に基づく場合を除き、利用者の同意なく個人情報を第三者に提供しません。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第5条（委託）</h3>
            <p>
              事業者は、業務の一部を外部に委託する場合があります。
              事業者は、当該委託先に対し適切な監督を行います。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第6条（Cookie・解析ツール）</h3>
            <p>
              本サービスおよび関連ウェブサービスでは、
              利便性向上および利用状況分析のため、
              Cookieおよび類似技術を使用することがあります。
            </p>
            <p>
              利用者は、ブラウザや端末設定によりCookieの使用を制限できますが、
              その場合、本サービスの一部機能が利用できなくなることがあります。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第7条（安全管理措置）</h3>
            <p>
              事業者は、個人情報の漏洩、滅失、毀損等を防止するため、
              組織的、技術的および物理的な安全管理措置を講じます。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第8条（開示・訂正・削除）</h3>
            <p>
              利用者は、自己の個人情報について、
              開示、訂正、利用停止、削除を請求することができます。
              請求方法は、下記のお問い合わせ窓口までご連絡ください。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第9条（保存期間）</h3>
            <p>
              事業者は、利用目的が達成され、
              かつ保管の必要がなくなった個人情報は、速やかに削除します。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第10条（ポリシーの変更）</h3>
            <p>
              事業者は、必要に応じて本ポリシーを変更することがあります。
              変更後のポリシーは、本アプリまたはウェブサイトに掲示した時点から効力を生じます。
            </p>

            <h3 className="text-lg font-bold text-stone-800 mt-6">第11条（お問い合わせ窓口）</h3>
            <p>
              本ポリシーに関するお問い合わせは、下記窓口までご連絡ください。
            </p>
            <div className="ml-4 mt-2">
              <p>事業者名：寺田裕人</p>
              <p>メールアドレス：info@noutasu.app</p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 text-stone-500">
              <p>制定日：2025年2月2日</p>
              <p className="mt-4">プライバシーに関するご質問は、アプリ内の「お問い合わせ」からご連絡ください。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
