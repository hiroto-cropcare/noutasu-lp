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

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* ① ヒーローセクション */}
      <section className="pt-20 pb-20 px-6 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold mb-6">
            現場の負担をゼロにする
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 text-stone-900 tracking-tight">
            農薬の「計算」と「迷い」を、<br className="hidden md:block" />
            ポケットの中にしまおう。
          </h2>
          <p className="text-lg md:text-xl text-stone-800 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            希釈計算・ラベル確認・在庫管理。<br />
            現場の「面倒」をすべて引き受ける、<br className="md:hidden" />
            あなたの頼れる右腕アプリ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-emerald-800 transition flex items-center justify-center gap-2 hover:translate-y-[-2px]">
              <Smartphone size={24} />
              無料で使ってみる
            </button>
            <button className="w-full sm:w-auto bg-white text-stone-800 border border-stone-300 px-8 py-4 rounded-full text-lg font-bold hover:bg-stone-50 transition">
              機能を見る
            </button>
          </div>
          <p className="mt-6 text-sm text-stone-600 font-bold">
            ※登録不要・すぐ試せます
          </p>
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

      {/* ③ のうたすでできること */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">
              頭を使う作業はアプリに任せて、<br />
              あなたは「作物」に向き合ってください。
            </h3>
            <p className="text-lg text-stone-700 font-medium">
              のうたすを使えば、現場の景色がこう変わります。
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "希釈計算は、もう迷わない",
                desc: "倍率とタンクの容量を選ぶだけ。必要な薬量はアプリが瞬時に出します。もう、計算機を取り出す必要はありません。"
              },
              {
                title: "スマホがそのまま「ラベル」になる",
                desc: "手元のスマホで、使用方法や注意事項をすぐに確認。小さな文字を必死に読むストレスから解放されます。"
              },
              {
                title: "在庫が見える、段取りが決まる",
                desc: "倉庫に何がどれだけあるか、手元ですぐに分かります。買い忘れも、防除の遅れも防げます。"
              },
              {
                title: "迷った時の「次の一手」もサポート",
                desc: "あなたの作物や栽培方法に合わせて、「次はこの防除がいいかもしれません」とアプリが提案します。"
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

      {/* ④ のうたすの思想 */}
      <section className="py-24 px-6 bg-emerald-900 text-emerald-50">
        <div className="container mx-auto max-w-3xl text-center">
          
          {/* ▼ ここもロゴ画像に変更しました */}
          <div className="mx-auto mb-8 w-24 h-24 relative opacity-90">
             <Image 
                src="/logo.png" 
                alt="のうたすロゴ" 
                fill 
                className="object-contain"
             />
          </div>

          <h3 className="text-3xl font-bold mb-10 text-white">農業 × テクノロジー ＝ のうたす</h3>
          <div className="space-y-8 text-lg leading-relaxed text-emerald-100 text-left md:text-center font-medium">
            <p>
              なぜ、私たちがこのアプリを作ったのか。<br />
              それは、今の農業現場があまりにも「現場の人の頑張り」だけに支えられていると感じたからです。
            </p>
            <p>
              天候と戦い、作物と向き合うだけでも大変な仕事。<br />
              そこに、複雑な計算や事務作業の負担まで背負わせたくない。
            </p>
            <div className="py-6 border-y border-emerald-700/50 my-6">
              <p className="text-xl font-bold text-white mb-2">
                農業（のう）に、技術（たす）を。
              </p>
              <p className="text-xl font-bold text-white">
                農業（のう）を、頭脳（のう）と現場の両面から支える（たす）。
              </p>
            </div>
            <p>
              私たちは、最先端の技術をひけらかしたいわけではありません。<br />
              現場で泥にまみれるあなたの、一番近くにいる「相棒」になりたいのです。
            </p>
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
                今日の作業を選ぶ。<br />
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
                      <h4 className="text-xl font-bold text-stone-800 mb-1">のうたすへようこそ！</h4>
                      <p className="text-xs text-stone-500">農業管理を手軽に農業サポート</p>
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

      {/* ⑥ CTA */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-stone-900">まずは、次の防除で<br />試してみてください。</h3>
          <p className="text-lg text-stone-700 mb-12 leading-relaxed font-medium">
            新しい道具を導入するのは、勇気がいることです。<br />
            だからこそ、まずは一度、ダウンロードして触ってみてください。<br />
            きっと一度使えば、手放せない道具になるはずです。
          </p>
          <button className="w-full md:w-auto bg-emerald-700 text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:bg-emerald-800 transition transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto">
            <Smartphone />
            のうたすを無料でダウンロード
          </button>
          <p className="mt-6 text-stone-600 font-bold">App Store / Google Play 対応</p>
        </div>
      </section>
    </div>
  );
}