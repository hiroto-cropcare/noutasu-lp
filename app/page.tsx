import React from 'react';
import Image from 'next/image';
import icon from './icon.png';
import {
  FlaskConical,
  Search,
  Archive,
  MessageSquareText,
  ClipboardList,
  CalendarDays,
  Smartphone,
  Menu,
  ChevronRight,
  Check,
  Leaf,
  Mountain
} from 'lucide-react';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "TAGAYASU",
  alternateName: "Tagayasu",
  description: "農家が作った、農家のための農業管理アプリ。農薬検索・希釈計算・在庫管理・作業記録・AI相談をスマホ一つで。",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: ["iOS", "Android"],
  offers: { "@type": "Offer", price: "0" },
};

const planFeatures = [
  { label: "AI機能",               free: "お試し（生涯5回）", std: "月30回",     pro: "月200回",  team: "無制限" },
  { label: "在庫管理",             free: "最大10品目",        std: "最大100品目", pro: "無制限",   team: "無制限" },
  { label: "在庫履歴",             free: "直近30日",          std: "全期間",      pro: "全期間",   team: "全期間" },
  { label: "圃場管理",             free: "最大100件",         std: "無制限",      pro: "無制限",   team: "無制限" },
  { label: "農薬希釈計算",         free: "○", std: "○", pro: "○", team: "○" },
  { label: "農薬検索",             free: "○", std: "○", pro: "○", team: "○" },
  { label: "データ同期（複数端末）",free: "－", std: "○", pro: "○", team: "○" },
  { label: "CSV / PDF出力",        free: "－", std: "－", pro: "○", team: "○" },
  { label: "アラート（在庫下限・発注）", free: "－", std: "－", pro: "○", team: "○" },
  { label: "複数メンバー管理",     free: "－", std: "－", pro: "－", team: "○" },
  { label: "承認ワークフロー",     free: "－", std: "－", pro: "－", team: "○" },
  { label: "専任サポート",         free: "－", std: "－", pro: "－", team: "○" },
];

function CellValue({ val, isProCol }: { val: string; isProCol?: boolean }) {
  if (val === "○") {
    return <span className={`text-lg font-bold ${isProCol ? "text-emerald-600" : "text-emerald-500"}`}>○</span>;
  }
  if (val === "－") {
    return <span className="text-lg font-bold text-stone-300">－</span>;
  }
  return <span className={`text-xs font-semibold ${isProCol ? "text-emerald-700" : "text-stone-500"}`}>{val}</span>;
}

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ① ヒーローセクション */}
      <section className="pt-20 pb-20 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6">
                農薬管理・作業記録に特化した農業アプリ
              </span>
              <p className="text-base text-stone-600 font-medium mb-4">
                希釈倍率を毎回計算し直している農家の方へ。作業記録を残せていない農家の方へ。
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-stone-900 tracking-tight">
                畑で迷わない。<br />
                計算し直さない。
              </h2>
              <p className="text-lg md:text-xl text-stone-800 mb-10 leading-relaxed font-medium">
                農薬検索・希釈計算・在庫管理・作業記録。<br />
                農薬のことはAIにも相談できる、<br />
                農家のための専門アプリ。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a href="#download" className="w-full sm:w-auto bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-emerald-800 transition flex items-center justify-center gap-2 hover:translate-y-[-2px]">
                  <Smartphone size={24} />
                  無料で使ってみる
                </a>
              </div>
              <p className="mt-6 text-sm text-stone-600 font-bold">※無料プラン・登録不要</p>
            </div>

            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-2xl border-8 border-stone-800 overflow-hidden ring-4 ring-stone-200">
                <div className="absolute top-0 left-0 w-full h-full bg-[#F0F4F0] flex flex-col font-sans">
                  {/* ヘッダー */}
                  <div className="h-14 bg-[#4CAF50] flex items-center px-4 justify-between shadow-md z-10">
                    <Menu className="text-white" size={22} />
                    <span className="text-white font-bold text-base">作業記録</span>
                    <div className="w-6"></div>
                  </div>
                  {/* スクロールエリア */}
                  <div className="flex-1 overflow-y-auto p-3 pb-16 no-scrollbar space-y-2.5">
                    {/* 日付・作業時間 */}
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[10px] font-bold text-stone-500 mb-2 flex items-center gap-1">
                        <CalendarDays size={12} className="text-[#4CAF50]" /> 日付・作業時間
                      </p>
                      <div className="bg-stone-50 rounded-lg px-3 py-2 mb-2 flex items-center justify-between">
                        <p className="text-sm font-bold text-red-500">2026年4月5日（日）</p>
                        <CalendarDays size={13} className="text-stone-400" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="flex-1 bg-stone-50 rounded-lg px-2 py-2 text-center">
                          <p className="text-[9px] text-stone-400 mb-0.5">開始</p>
                          <p className="text-xs text-stone-300">--:--</p>
                        </div>
                        <span className="text-stone-300 text-sm">〜</span>
                        <div className="flex-1 bg-stone-50 rounded-lg px-2 py-2 text-center">
                          <p className="text-[9px] text-stone-400 mb-0.5">終了</p>
                          <p className="text-xs text-stone-300">--:--</p>
                        </div>
                      </div>
                    </div>
                    {/* 圃場 */}
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[10px] font-bold text-stone-500 mb-2 flex items-center gap-1">
                        <Mountain size={11} className="text-[#4CAF50]" /> 圃場
                      </p>
                      <button className="border border-stone-300 rounded-full px-4 py-1.5 text-xs font-bold text-stone-700 flex items-center gap-1">
                        <span className="text-[#4CAF50] font-bold">＋</span> 圃場を追加する
                      </button>
                    </div>
                    {/* 作物 */}
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[10px] font-bold text-stone-500 mb-1.5 flex items-center gap-1">
                        <Leaf size={11} className="text-[#4CAF50]" /> 作物
                      </p>
                      <p className="text-[10px] text-stone-400">先に圃場を選択してください</p>
                    </div>
                    {/* 作業内容 */}
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[10px] font-bold text-stone-500 mb-2 flex items-center gap-1">
                        <span className="text-[#4CAF50]">🚜</span> 作業内容
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["耕起","施肥","マルチ張り","播種","定植","灌水","除草","防除","摘芽","収穫","出荷"].map((label) => (
                          <span key={label} className="border border-stone-200 rounded-full px-2.5 py-1 text-[10px] font-medium text-stone-600 bg-white">{label}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* ボトムナビ */}
                  <div className="absolute bottom-0 w-full h-16 bg-white border-t border-stone-100 flex items-center justify-around pb-2 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
                    <div className="flex flex-col items-center gap-1 text-[#4CAF50]"><ClipboardList size={20} /><span className="text-[9px] font-bold">記録</span></div>
                    <div className="flex flex-col items-center gap-1 text-stone-400"><FlaskConical size={20} /><span className="text-[9px] font-medium">農薬</span></div>
                    <div className="flex flex-col items-center gap-1 text-stone-400"><Archive size={20} /><span className="text-[9px] font-medium">在庫管理</span></div>
                    <div className="flex flex-col items-center gap-1 text-stone-400"><CalendarDays size={20} /><span className="text-[9px] font-medium">日誌</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ② 共感パート */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-16 text-stone-900">
            こんなことで、<br className="md:hidden" />作業の手が止まっていませんか？
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { Icon: FlaskConical, title: "毎回異なる計算の手間", body: "「この倍率で、このタンク容量だから…」その都度計算し直す煩わしさ。疲れている時の計算ミスも不安の種です。" },
              { Icon: Search, title: "読みづらいラベルの確認", body: "剥がれかけたラベル、小さな文字。何度も確認するために、作業の手を止めていませんか？" },
              { Icon: Archive, title: "「あれ、在庫あったっけ？」", body: "現場に着いてから在庫切れに気づく絶望感。防除のタイミングを逃してしまう焦り。" },
              { Icon: ClipboardList, title: "「いつ・何をやったか」が残らない", body: "「前回の消毒はいつだったか」「あの圃場に何を使ったか」。記録がなければ、振り返ることも、誰かに任せることもできません。" },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
                <div className="text-[#4CAF50] mb-6 bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center"><Icon size={32} /></div>
                <h4 className="text-xl font-bold mb-3 text-stone-900">{title}</h4>
                <p className="text-stone-700 leading-relaxed font-medium">{body}</p>
              </div>
            ))}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 md:col-span-2">
              <div className="text-[#4CAF50] mb-6 bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center"><MessageSquareText size={32} /></div>
              <h4 className="text-xl font-bold mb-3 text-stone-900">頭の中だけの管理</h4>
              <p className="text-stone-700 leading-relaxed font-medium">「前回何を使ったか」「次はどうするか」。すべて自分の記憶頼りで、誰かに任せることも難しい。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ③ TAGAYASUでできること */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">
              頭を使う作業はアプリに任せて、<br />あなたは「作物」に向き合ってください。
            </h3>
            <p className="text-lg text-stone-700 font-medium">TAGAYASUを使えば、現場の景色がこう変わります。</p>
          </div>
          <div className="space-y-8">
            {[
              { title: "農薬検索は、手元でひと目でわかる", desc: "登録番号・成分名・作物名から農薬をすぐに検索。剥がれかけたラベルを読む必要も、農薬手帳を持ち歩く必要もありません。" },
              { title: "希釈計算は、もう迷わない", desc: "倍率とタンクの容量を選ぶだけ。必要な薬量はアプリが瞬時に出します。もう、計算機を取り出す必要はありません。" },
              { title: "在庫が見える、段取りが決まる", desc: "倉庫に何がどれだけあるか、手元ですぐに分かります。買い忘れも、防除の遅れも防げます。" },
              { title: "作業記録が、財産になる", desc: "いつ・どの圃場で・何を使ったか、タップひとつで記録できます。振り返りも、引き継ぎも、栽培履歴の整理も、すべてアプリが支えます。" },
              { title: "農薬の疑問は、AIに相談できる", desc: "「この作物にどの農薬が使えるか」「混用しても大丈夫か」など、現場の疑問をAIに直接聞けます。専門的な知識がなくても、自信を持って防除の判断ができます。" },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 p-6 rounded-2xl hover:bg-stone-50 transition border border-transparent hover:border-stone-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">{index + 1}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-stone-900">{item.title}</h4>
                  <p className="text-stone-700 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ TAGAYASUの思想 */}
      <section className="py-24 px-6 bg-emerald-900 text-emerald-50">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 w-24 h-24 relative opacity-90">
            <Image src={icon} alt="TAGAYASUロゴ" fill className="object-contain" />
          </div>
          <h3 className="text-3xl font-bold mb-10 text-white">農業を、テクノロジーで耕す。</h3>
          <div className="space-y-8 text-lg leading-relaxed text-emerald-100 text-left md:text-center font-medium">
            <p>農家が背負うのは、土だけではない。<br />天候と向き合い、作物を育てながら──煩雑な計算・記録・事務作業まで、現場の人がひとりで抱えてきた。</p>
            <div className="py-6 border-y border-emerald-700/50 my-6">
              <p className="text-xl font-bold text-white mb-2">耕す（たがやす）のは、土だけじゃない。</p>
              <p className="text-xl font-bold text-white">データも、未来も、いっしょに耕す（TAGAYASU）。</p>
            </div>
            <p>TAGAYASUは、農業の現場に最も近い「道具」でありたい。<br />難しい技術より、使いやすさを。華やかさより、現場での確かさを。</p>
          </div>
        </div>
      </section>

      {/* ④.5 開発者ストーリー */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6">開発者について</span>
            <h3 className="text-2xl md:text-4xl font-bold text-stone-900">農家が、農家のために作った。</h3>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-stone-200 p-10 md:p-14">
            <div className="space-y-6 text-lg leading-relaxed text-stone-700 font-medium">
              <p>私は農家です。そして、エンジニアでもあります。</p>
              <p>畑に立ちながら、ずっと感じていました。<br />「なぜ、こんなに便利な時代なのに、農業の現場だけがアナログのままなんだろう」と。</p>
              <p>希釈計算をメモ帳でやり直す。ラベルが読めなくてスマホで検索する。在庫が足りなくて慌てて購買店へ走る。<br />そういう「小さなロス」が、毎日積み重なっていく。</p>
              <p>農家の痛みを知っているのは、農家だけです。<br />だから私は、自分で作ることにしました。</p>
              <div className="py-6 border-l-4 border-emerald-500 pl-6 my-8">
                <p className="text-stone-900 font-bold text-xl">「現場で本当に使えるか」を、自分の畑で試しながら作ったアプリです。</p>
              </div>
              <p>現場でパソコンは持ち歩かない。でも、スマホは必ずポケットに入っている。<br />だからこのアプリの開発で一番大事にしたのは、<span className="font-bold text-stone-900">「すぐ使えるか」「簡単か」</span>、それだけです。<br /><br />軍手をはめたまま使えるか。日差しの強い午前中でも画面が見えるか。疲れているときでも迷わず操作できるか。<br />そういう視点で、一つひとつ設計しています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ 利用シーン */}
      <section className="py-24 px-6 bg-emerald-50/50 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-stone-900">忙しい現場でも、<br />片手でサッと。</h3>
              <p className="text-lg text-stone-700 leading-relaxed mb-8 font-medium">使い方は、驚くほどシンプルです。<br /><br />朝、圃場に着いたら、スマホを取り出す。<br />必要な薬量が、ひと目でわかる。</p>
              <p className="text-lg text-stone-700 leading-relaxed font-medium">
                難しい操作も、複雑な設定もいりません。<br />軍手をつけたままでも扱いやすいボタン配置と、<br />直射日光の下でも見やすい画面。<br /><br />
                <span className="font-bold text-emerald-800">「あ、これなら使える」</span><br />そう思っていただける自信があります。
              </p>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-2xl border-8 border-stone-800 overflow-hidden ring-4 ring-stone-200">
                <div className="absolute top-0 left-0 w-full h-full bg-[#F7FCF7] flex flex-col font-sans">
                  <div className="h-14 bg-[#4CAF50] flex items-center px-4 justify-between shadow-md z-10">
                    <Menu className="text-white" size={22} />
                    <span className="text-white font-bold text-base">作業記録</span>
                    <div className="w-6"></div>
                  </div>
                  <div className="flex-1 overflow-y-auto pb-16 no-scrollbar">
                    {/* 日付・作業時間 */}
                    <div className="mx-3 mt-3 bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[10px] font-bold text-stone-500 mb-2 flex items-center gap-1">
                        <CalendarDays size={12} className="text-[#4CAF50]" /> 日付・作業時間
                      </p>
                      <div className="bg-stone-50 rounded-lg px-3 py-2 mb-2 flex items-center justify-between">
                        <p className="text-sm font-bold text-red-500">2026年4月5日（日）</p>
                        <CalendarDays size={13} className="text-stone-400" />
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="flex-1 bg-stone-50 rounded-lg px-2 py-2 text-center">
                          <p className="text-[9px] text-stone-400 mb-0.5">開始</p>
                          <p className="text-xs text-stone-300">--:--</p>
                        </div>
                        <span className="text-stone-300 text-sm">〜</span>
                        <div className="flex-1 bg-stone-50 rounded-lg px-2 py-2 text-center">
                          <p className="text-[9px] text-stone-400 mb-0.5">終了</p>
                          <p className="text-xs text-stone-300">--:--</p>
                        </div>
                      </div>
                    </div>
                    {/* 圃場 */}
                    <div className="mx-3 mt-2 bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[10px] font-bold text-stone-500 mb-2 flex items-center gap-1">
                        <Mountain size={11} className="text-[#4CAF50]" /> 圃場
                      </p>
                      <button className="border border-stone-300 rounded-full px-4 py-1.5 text-xs font-bold text-stone-700 flex items-center gap-1">
                        <span className="text-[#4CAF50] font-bold">＋</span> 圃場を追加する
                      </button>
                    </div>
                    {/* 作物 */}
                    <div className="mx-3 mt-2 bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[10px] font-bold text-stone-500 mb-1.5 flex items-center gap-1">
                        <Leaf size={11} className="text-[#4CAF50]" /> 作物
                      </p>
                      <p className="text-[10px] text-stone-400">先に圃場を選択してください</p>
                    </div>
                    {/* 作業内容 */}
                    <div className="mx-3 mt-2 bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[10px] font-bold text-stone-500 mb-2 flex items-center gap-1">
                        <span className="text-[#4CAF50]">🚜</span> 作業内容
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["耕起","施肥","マルチ張り","播種","定植","灌水","除草","防除","摘芽","収穫","出荷"].map((label) => (
                          <span key={label} className="border border-stone-200 rounded-full px-2.5 py-1 text-[10px] font-medium text-stone-600 bg-white">{label}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full h-16 bg-white border-t border-stone-100 flex items-center justify-around pb-2 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
                    <div className="flex flex-col items-center gap-1 text-[#4CAF50]"><ClipboardList size={20} /><span className="text-[9px] font-bold">記録</span></div>
                    <div className="flex flex-col items-center gap-1 text-stone-400"><FlaskConical size={20} /><span className="text-[9px] font-medium">農薬</span></div>
                    <div className="flex flex-col items-center gap-1 text-stone-400"><Archive size={20} /><span className="text-[9px] font-medium">在庫管理</span></div>
                    <div className="flex flex-col items-center gap-1 text-stone-400"><CalendarDays size={20} /><span className="text-[9px] font-medium">日誌</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ 料金プラン */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6">
              料金プラン
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-stone-900 mb-4">
              使いながら、必要なときに切り替えられます。
            </h3>
            <p className="text-lg text-stone-600 font-medium">
              まずは無料ではじめて、農場の規模や用途に合わせてプランをお選びください。
            </p>
          </div>

          {/* 比較テーブル */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  {/* 機能列ヘッダー */}
                  <th className="p-5 text-left bg-stone-50 border-b border-stone-200 w-[26%]">
                    <span className="text-xs font-medium text-stone-400">機能</span>
                  </th>
                  {/* 無料 */}
                  <th className="p-5 text-center bg-stone-50 border-b border-stone-200">
                    <p className="text-xs font-bold text-stone-400 mb-1">無料プラン</p>
                    <p className="text-2xl font-extrabold text-stone-900">¥0</p>
                    <p className="text-[11px] text-stone-400 mt-1">登録不要・ずっと無料</p>
                  </th>
                  {/* スタンダード */}
                  <th className="p-5 text-center bg-stone-50 border-b border-stone-200">
                    <p className="text-xs font-bold text-stone-500 mb-1">スタンダード</p>
                    <p className="text-2xl font-extrabold text-stone-900">¥500<span className="text-sm font-bold text-stone-400">/月</span></p>
                    <p className="text-[11px] text-stone-400 mt-1">個人農家の日常管理に</p>
                  </th>
                  {/* プロ ★おすすめ */}
                  <th className="p-5 pt-4 text-center bg-emerald-600 border-b border-emerald-700">
                    <div className="flex justify-center gap-1.5 mb-2">
                      <span className="bg-white text-emerald-700 text-[11px] font-bold px-3 py-0.5 rounded-full">おすすめ</span>
                      <span className="bg-stone-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full">Coming Soon</span>
                    </div>
                    <p className="text-xs font-bold text-emerald-100 mb-1">プロ</p>
                    <p className="text-2xl font-extrabold text-white">¥1,480<span className="text-sm font-bold text-emerald-200">/月</span></p>
                    <p className="text-[11px] text-emerald-200 mt-1">作業記録・AIをフル活用</p>
                  </th>
                  {/* チーム */}
                  <th className="p-5 text-center bg-stone-50 border-b border-stone-200">
                    <p className="text-xs font-bold text-stone-400 mb-1">チーム（法人）</p>
                    <p className="text-base font-extrabold text-stone-400 mt-1">Coming Soon</p>
                    <p className="text-[11px] text-stone-400 mt-1">チーム・法人向け</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {planFeatures.map((row, i) => (
                  <tr key={i} className={`border-b border-stone-100 ${i % 2 !== 0 ? "bg-stone-50/40" : ""}`}>
                    <td className="p-4 font-medium text-stone-600">{row.label}</td>
                    <td className="p-4 text-center"><CellValue val={row.free} /></td>
                    <td className="p-4 text-center"><CellValue val={row.std} /></td>
                    <td className="p-4 text-center bg-emerald-50"><CellValue val={row.pro} isProCol /></td>
                    <td className="p-4 text-center"><CellValue val={row.team} /></td>
                  </tr>
                ))}
              </tbody>
              {/* ボタン行 */}
              <tfoot>
                <tr>
                  <td className="p-4"></td>
                  <td className="p-5 text-center">
                    <a href="#download" className="inline-block w-full py-2.5 rounded-full border border-stone-300 text-stone-600 font-bold text-sm hover:bg-stone-100 transition">
                      無料で始める
                    </a>
                  </td>
                  <td className="p-5 text-center">
                    <a href="#download" className="inline-block w-full py-2.5 rounded-full bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition">
                      始める
                    </a>
                  </td>
                  <td className="p-5 text-center bg-emerald-50">
                    <button disabled className="w-full py-2.5 rounded-full border border-emerald-200 text-emerald-300 font-bold text-sm cursor-not-allowed">
                      準備中
                    </button>
                  </td>
                  <td className="p-5 text-center">
                    <button disabled className="w-full py-2.5 rounded-full border border-stone-200 text-stone-400 font-bold text-sm cursor-not-allowed">
                      準備中
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="text-center text-sm text-stone-400 font-medium mt-8">
            ※ 価格はすべて税込。プランはいつでも変更・解約できます。
          </p>
        </div>
      </section>

      {/* ⑥.5 FAQ */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-stone-900">よくあるご質問</h3>
          </div>
          <div className="space-y-4">
            {[
              { q: "無料で使えますか？", a: "無料プランは登録不要で完全無料です。ダウンロードしたらすぐにお使いいただけます。" },
              { q: "iPhoneだけですか？ Androidでも使えますか？", a: "iOS・Android両方に対応しています。App Store、Google Playそれぞれからダウンロードできます。" },
              { q: "希釈計算はどんな農薬に対応していますか？", a: "希釈倍率とタンク容量を入力するだけで、必要な薬量を計算できます。農薬の種類にかかわらずご利用いただけます。" },
              { q: "作業記録はどんな内容を残せますか？", a: "作業日・圃場・作業内容（消毒・土寄せ・収穫など）・使用農薬・散布量・メモなどを記録できます。記録はいつでも見返せ、栽培履歴の管理にも役立ちます。" },
              { q: "AI相談はどんなことを訊けますか？", a: "農薬の選び方、混用の可否、防除のタイミングなど、現場で生じる疑問をいつでも相談できます。専門知識がなくても、自信を持って判断できるようサポートします。" },
              { q: "操作が難しくないですか？", a: "シンプルな画面構成を心がけています。スマホに慣れていれば、追加設定なしで即日からお使いいただけます。" },
              { q: "インターネットに繋がっていない場所でも使えますか？", a: "農薬検索・AI相談はオンライン接続が必要ですが、希釈計算・在庫管理・作業記録はオフラインでもご利用いただけます。" },
            ].map((item, index) => (
              <div key={index} className="border border-stone-200 rounded-2xl overflow-hidden bg-white">
                <div className="p-6">
                  <p className="font-bold text-stone-900 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold flex items-center justify-center mt-0.5">Q</span>
                    {item.q}
                  </p>
                  <p className="text-stone-700 leading-relaxed font-medium pl-9">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ CTA */}
      <section id="download" className="py-32 px-6 bg-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-stone-900">まずは、次の防除で<br />使ってみてください。</h3>
          <p className="text-lg text-stone-700 mb-12 leading-relaxed font-medium">
            農家として断言できます。<br />
            一度使えば、計算機もメモ帳も要りません。<br />
            畑に向かう前にスマホを一度タップするだけ──<br />
            それだけで、朝の段取りが変わります。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://apple.co/4umAwPF" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80 transform hover:-translate-y-1">
              <Image src="/app-store-badge.svg" alt="App Storeからダウンロード" width={180} height={60} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=jp.habvex.noutasu" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80 transform hover:-translate-y-1">
              <Image src="/google-play-badge.svg" alt="Google Playで手に入れよう" width={200} height={60} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
