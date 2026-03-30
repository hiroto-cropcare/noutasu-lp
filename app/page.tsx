import React from 'react';
// 画像用の Image コンポーネントを追加
import Image from 'next/image';
import { 
  FlaskConical, 
  Search, 
  Archive, 
  MessageSquareText,
  Smartphone, 
  Menu, 
  Home as HomeIcon, 
  ChevronRight
} from 'lucide-react';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "TAGAYASU",
  alternateName: "Tagayasu",
  description: "農家が作った、農家のための農薬管理アプリ。農薬検索・希釈計算・在庫管理・AI相談をスマホ一つで。",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: ["iOS", "Android"],
  offers: { "@type": "Offer", price: "0" },
};

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
            {/* テキスト左カラム */}
            <div className="flex-1">
              <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6">
                農薬検索・希釈計算と在庫管理に特化した農業アプリ
              </span>
              <p className="text-base text-stone-600 font-medium mb-4">
                希釈倍率を毎回計算し直している農家の方へ。在庫管理ができていない農家の方へ。
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-stone-900 tracking-tight">
                畑で迷わない。<br />
                計算し直さない。
              </h2>
              <p className="text-lg md:text-xl text-stone-800 mb-10 leading-relaxed font-medium">
                農薬検索・希釈計算・在庫管理。<br />
                農薬のことはAIにも相談できる、<br />
                農家のための専門アプリ。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a href="#download" className="w-full sm:w-auto bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-emerald-800 transition flex items-center justify-center gap-2 hover:translate-y-[-2px]">
                  <Smartphone size={24} />
                  無料で使ってみる
                </a>

              </div>
              <p className="mt-6 text-sm text-stone-600 font-bold">
                ※トライアルプラン無料・登録不要
              </p>
            </div>

            {/* アプリモックアップ右カラム */}
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-2xl border-8 border-stone-800 overflow-hidden ring-4 ring-stone-200">
                <div className="absolute top-0 left-0 w-full h-full bg-[#F7FCF7] flex flex-col font-sans">
                  <div className="h-20 bg-[#4CAF50] flex items-end px-4 pb-3 justify-between shadow-md z-10">
                    <Menu className="text-white" size={24} />
                    <span className="text-white font-bold text-lg">ホーム</span>
                    <div className="w-6"></div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 pb-20 no-scrollbar">
                    <div className="text-center mt-4 mb-8">
                      <h4 className="text-xl font-bold text-stone-800 mb-1">TAGAYASUへようこそ！</h4>
                      <p className="text-xs text-stone-500">農薬・在庫管理をもっと手軽に</p>
                    </div>
                    <h5 className="text-stone-800 font-bold mb-3 ml-1 text-sm">クイックアクセス</h5>
                    <div className="space-y-3">
                      {/* カード: 農薬検索 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 border border-stone-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-[#4CAF50]">
                          <Search size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-stone-800">農薬検索</div>
                          <div className="text-[10px] text-stone-500">登録番号や成分から農薬を検索</div>
                        </div>
                        <ChevronRight size={18} className="text-stone-400" />
                      </div>
                      {/* カード: 農薬希釈計算 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 border border-stone-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-[#4CAF50]">
                          <FlaskConical size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-stone-800">農薬希釈計算</div>
                          <div className="text-[10px] text-stone-500">農薬の希釈倍率を簡単に計算</div>
                        </div>
                        <ChevronRight size={18} className="text-stone-400" />
                      </div>
                      {/* カード: 在庫管理 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 border border-stone-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-[#4CAF50]">
                          <Archive size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-stone-800">在庫管理</div>
                          <div className="text-[10px] text-stone-500">農薬や資材の在庫を管理</div>
                        </div>
                        <ChevronRight size={18} className="text-stone-400" />
                      </div>
                      {/* カード: AI農業相談 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 border border-stone-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-[#4CAF50]">
                          <MessageSquareText size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-stone-800">AI農業相談</div>
                          <div className="text-[10px] text-stone-500">AIに農薬・防除の悩みを相談</div>
                        </div>
                        <ChevronRight size={18} className="text-stone-400" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full h-16 bg-white border-t border-stone-100 flex items-center justify-around pb-2 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
                    <div className="flex flex-col items-center gap-1 text-[#4CAF50]">
                      <HomeIcon size={20} />
                      <span className="text-[9px] font-bold">ホーム</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-stone-400">
                      <Search size={20} />
                      <span className="text-[9px] font-medium">農薬検索</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-stone-400">
                      <FlaskConical size={20} />
                      <span className="text-[9px] font-medium">農薬希釈</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-stone-400">
                      <Archive size={20} />
                      <span className="text-[9px] font-medium">在庫管理</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-stone-400">
                      <MessageSquareText size={20} />
                      <span className="text-[9px] font-medium">AI相談</span>
                    </div>
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
            こんなことで、<br className="md:hidden" />
            作業の手が止まっていませんか？
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
              <div className="text-[#4CAF50] mb-6 bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <FlaskConical size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-900">毎回異なる計算の手間</h4>
              <p className="text-stone-700 leading-relaxed font-medium">
                「この倍率で、このタンク容量だから…」その都度計算し直す煩わしさ。疲れている時の計算ミスも不安の種です。
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
              <div className="text-[#4CAF50] mb-6 bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Search size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-900">読みづらいラベルの確認</h4>
              <p className="text-stone-700 leading-relaxed font-medium">
                剥がれかけたラベル、小さな文字。何度も確認するために、作業の手を止めていませんか？
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
              <div className="text-[#4CAF50] mb-6 bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Archive size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-900">「あれ、在庫あったっけ？」</h4>
              <p className="text-stone-700 leading-relaxed font-medium">
                現場に着いてから在庫切れに気づく絶望感。防除のタイミングを逃してしまう焦り。
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
              <div className="text-[#4CAF50] mb-6 bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <MessageSquareText size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-900">頭の中だけの管理</h4>
              <p className="text-stone-700 leading-relaxed font-medium">
                「前回何を使ったか」「次はどうするか」。すべて自分の記憶頼りで、誰かに任せることも難しい。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ③ TAGAYASUでできること */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">
              頭を使う作業はアプリに任せて、<br />
              あなたは「作物」に向き合ってください。
            </h3>
            <p className="text-lg text-stone-700 font-medium">
              TAGAYASUを使えば、現場の景色がこう変わります。
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "農薬検索は、手元でひと目でわかる",
                desc: "登録番号・成分名・作物名から農薬をすぐに検索。剥がれかけたラベルを読む必要も、農薬手帳を持ち歩く必要もありません。"
              },
              {
                title: "希釈計算は、もう迷わない",
                desc: "倍率とタンクの容量を選ぶだけ。必要な薬量はアプリが瞬時に出します。もう、計算機を取り出す必要はありません。"
              },
              {
                title: "在庫が見える、段取りが決まる",
                desc: "倉庫に何がどれだけあるか、手元ですぐに分かります。買い忘れも、防除の遅れも防げます。"
              },
              {
                title: "農薬の疑問は、AIに相談できる",
                desc: "「この作物にどの農薬が使えるか」「混用しても大丈夫か」など、現場の疑問をAIに直接聞けます。専門的な知識がなくても、自信を持って防除の判断ができます。"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 p-6 rounded-2xl hover:bg-stone-50 transition border border-transparent hover:border-stone-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xl">
                  {index + 1}
                </div>
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
          
          {/* ▼ ここもロゴ画像に変更しました */}
          <div className="mx-auto mb-8 w-24 h-24 relative opacity-90">
             <Image 
                src="/logo.png" 
                alt="TAGAYASUロゴ"
                fill 
                className="object-contain"
             />
          </div>

          <h3 className="text-3xl font-bold mb-10 text-white">農業を、テクノロジーで耕す。</h3>
          <div className="space-y-8 text-lg leading-relaxed text-emerald-100 text-left md:text-center font-medium">
            <p>
              農家が背負うのは、土だけではない。<br />
              天候と向き合い、作物を育てながら──煩雑な計算・記録・事務作業まで、現場の人がひとりで抱えてきた。
            </p>
            <div className="py-6 border-y border-emerald-700/50 my-6">
              <p className="text-xl font-bold text-white mb-2">
                耕す（たがやす）のは、土だけじゃない。
              </p>
              <p className="text-xl font-bold text-white">
                データも、未来も、いっしょに耕す（TAGAYASU）。
              </p>
            </div>
            <p>
              TAGAYASUは、農業の現場に最も近い「道具」でありたい。<br />
              難しい技術より、使いやすさを。華やかさより、現場での確かさを。
            </p>
          </div>
        </div>
      </section>

      {/* ④.5 開発者ストーリー */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6">
              開発者について
            </span>
            <h3 className="text-2xl md:text-4xl font-bold text-stone-900">
              農家が、農家のために作った。
            </h3>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-stone-200 p-10 md:p-14">
            <div className="space-y-6 text-lg leading-relaxed text-stone-700 font-medium">
              <p>
                私は農家です。そして、エンジニアでもあります。
              </p>
              <p>
                畑に立ちながら、ずっと感じていました。<br />
                「なぜ、こんなに便利な時代なのに、農業の現場だけがアナログのままなんだろう」と。
              </p>
              <p>
                希釈計算をメモ帳でやり直す。ラベルが読めなくてスマホで検索する。在庫が足りなくて慌てて購買店へ走る。<br />
                そういう「小さなロス」が、毎日積み重なっていく。
              </p>
              <p>
                農家の痛みを知っているのは、農家だけです。<br />
                だから私は、自分で作ることにしました。
              </p>
              <div className="py-6 border-l-4 border-emerald-500 pl-6 my-8">
                <p className="text-stone-900 font-bold text-xl">
                  「現場で本当に使えるか」を、自分の畑で試しながら作ったアプリです。
                </p>
              </div>
              <p>
                現場でパソコンは持ち歩かない。でも、スマホは必ずポケットに入っている。<br />
                だからこのアプリの開発で一番大事にしたのは、<span className="font-bold text-stone-900">「すぐ使えるか」「簡単か」</span>、それだけです。<br /><br />
                軍手をはめたまま使えるか。日差しの強い午前中でも画面が見えるか。疲れているときでも迷わず操作できるか。<br />
                そういう視点で、一つひとつ設計しています。
              </p>
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
              <p className="text-lg text-stone-700 leading-relaxed mb-8 font-medium">
                使い方は、驚くほどシンプルです。<br /><br />
                朝、圃場に着いたら、スマホを取り出す。<br />
                必要な薬量が、ひと目でわかる。
              </p>
              <p className="text-lg text-stone-700 leading-relaxed font-medium">
                難しい操作も、複雑な設定もいりません。<br />
                軍手をつけたままでも扱いやすいボタン配置と、<br />
                直射日光の下でも見やすい画面。<br /><br />
                <span className="font-bold text-emerald-800">「あ、これなら使える」</span><br />
                そう思っていただける自信があります。
              </p>
            </div>

            {/* ▼ スマホ画面イメージ */}
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-72 h-[600px] bg-white rounded-[3rem] shadow-2xl border-8 border-stone-800 overflow-hidden ring-4 ring-stone-200">
                {/* スマホの中身 */}
                <div className="absolute top-0 left-0 w-full h-full bg-[#F7FCF7] flex flex-col font-sans">
                  
                  {/* アプリヘッダー */}
                  <div className="h-20 bg-[#4CAF50] flex items-end px-4 pb-3 justify-between shadow-md z-10">
                    <Menu className="text-white" size={24} />
                    <span className="text-white font-bold text-lg">ホーム</span>
                    <div className="w-6"></div>
                  </div>

                  {/* メインコンテンツ */}
                  <div className="flex-1 overflow-y-auto p-4 pb-20 no-scrollbar">
                    
                    {/* ウェルカムメッセージ */}
                    <div className="text-center mt-4 mb-8">
                      <h4 className="text-xl font-bold text-stone-800 mb-1">TAGAYASUへようこそ！</h4>
                      <p className="text-xs text-stone-500">農薬・在庫管理をもっと手軽に</p>
                    </div>

                    {/* クイックアクセス */}
                    <h5 className="text-stone-800 font-bold mb-3 ml-1 text-sm">クイックアクセス</h5>
                    
                    <div className="space-y-3">
                      {/* カード: 農業相談 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 active:scale-95 transition-transform border border-stone-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-[#4CAF50]">
                          <MessageSquareText size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-stone-800">農業相談</div>
                          <div className="text-[10px] text-stone-500">AIに農業の悩み相談</div>
                        </div>
                        <ChevronRight size={18} className="text-stone-400" />
                      </div>

                      {/* カード: 農薬希釈計算 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 active:scale-95 transition-transform border border-stone-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-[#4CAF50]">
                          <FlaskConical size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-stone-800">農薬希釈計算</div>
                          <div className="text-[10px] text-stone-500">農薬の希釈倍率を簡単に計算</div>
                        </div>
                        <ChevronRight size={18} className="text-stone-400" />
                      </div>

                      {/* カード: 農薬検索 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 active:scale-95 transition-transform border border-stone-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-[#4CAF50]">
                          <Search size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-stone-800">農薬検索</div>
                          <div className="text-[10px] text-stone-500">登録番号や成分から農薬を検索</div>
                        </div>
                        <ChevronRight size={18} className="text-stone-400" />
                      </div>

                      {/* カード: 在庫管理 */}
                      <div className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3 active:scale-95 transition-transform border border-stone-100">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-[#4CAF50]">
                          <Archive size={22} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-stone-800">在庫管理</div>
                          <div className="text-[10px] text-stone-500">農薬や資材の在庫を管理</div>
                        </div>
                        <ChevronRight size={18} className="text-stone-400" />
                      </div>
                    </div>
                  </div>

                  {/* ボトムナビゲーション */}
                  <div className="absolute bottom-0 w-full h-16 bg-white border-t border-stone-100 flex items-center justify-around pb-2 shadow-[0_-5px_15px_rgba(0,0,0,0.02)]">
                    <div className="flex flex-col items-center gap-1 text-[#4CAF50]">
                      <HomeIcon size={20} />
                      <span className="text-[9px] font-bold">ホーム</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-stone-400">
                      <MessageSquareText size={20} />
                      <span className="text-[9px] font-medium">チャット</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-stone-400">
                      <FlaskConical size={20} />
                      <span className="text-[9px] font-medium">農薬希釈</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-stone-400">
                      <Search size={20} />
                      <span className="text-[9px] font-medium">農薬検索</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-stone-400">
                      <Archive size={20} />
                      <span className="text-[9px] font-medium">在庫管理</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* ▲ スマホ画面イメージ終了 */}
            
          </div>
        </div>
      </section>

      {/* ⑥.5 FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-stone-900">
              よくあるご質問
            </h3>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "無料で使えますか？",
                a: "トライアルプランは登録不要で完全無料です。ダウンロードしたらすぐにお使いいただけます。"
              },
              {
                q: "iPhoneだけですか？ Androidでも使えますか？",
                a: "iOS・Android両方に対応しています。App Store、Google Playそれぞれからダウンロードできます。"
              },
              {
                q: "希釈計算はどんな農薬に対応していますか？",
                a: "希釈倍率とタンク容量を入力するだけで、必要な薬量を計算できます。農薬の種類にかかわらずご利用いただけます。"
              },
              {
                q: "AI相談はどんなことを訊けますか？",
                a: "農薬の選び方、混用の可否、防除のタイミングなど、現場で生じる疑問をいつでも相談できます。専門知識がなくても、自信を持って判断できるようサポートします。"
              },
              {
                q: "操作が難しくないですか？",
                a: "シンプルな画面構成を心がけています。スマホに慣れていれば、追加設定なしで即日からお使いいただけます。"
              },
              {
                q: "インターネットに繋がっていない場所でも使えますか？",
                a: "農薬検索・AI相談はオンライン接続が必要ですが、希釈計算・在庫管理はオフラインでもご利用いただけます。"
              }
            ].map((item, index) => (
              <div key={index} className="border border-stone-200 rounded-2xl overflow-hidden">
                <div className="p-6">
                  <p className="font-bold text-stone-900 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold flex items-center justify-center mt-0.5">Q</span>
                    {item.q}
                  </p>
                  <p className="text-stone-700 leading-relaxed font-medium pl-9">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ CTA */}
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