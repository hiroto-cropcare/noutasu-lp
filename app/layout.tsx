import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
// 画像表示用のコンポーネントを読み込み
import Image from "next/image";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "のうたす (NOUTASU) - 農業現場のためのアプリ",
  description: "農薬計算・在庫管理・ラベル確認をスマホひとつで。",
  verification: {
    google: "eqsukJrs9TLkjw6ljLjYX21vEPBdDSOh_HvdkI8wdE8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} bg-stone-50 text-stone-800 antialiased flex flex-col min-h-screen`}>
        
        {/* ▼ 共通ヘッダー */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-stone-200 shadow-sm">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            {/* ロゴ部分 */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* ▼ 画像設定箇所（publicフォルダの logo.png を表示） */}
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image 
                  src="/logo.png" 
                  alt="のうたすロゴ" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-emerald-800 pt-1">
                のうたす
              </span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hidden md:block text-sm font-bold text-stone-600 hover:text-emerald-700 transition">
                お問い合わせ
              </Link>
              <button className="bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-800 transition">
                ダウンロード
              </button>
            </div>
          </div>
        </header>

        {/* ▼ ページごとの中身 */}
        <main className="flex-grow pt-16">
          {children}
        </main>

        {/* ▼ 共通フッター */}
        <footer className="bg-stone-900 text-stone-400 py-12 px-6 text-sm font-medium">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              {/* フッターロゴ */}
              <Link href="/" className="flex items-center justify-center md:justify-start gap-3 mb-2 group">
                 {/* ▼ 画像設定箇所 */}
                <div className="relative w-6 h-6">
                  <Image 
                    src="/logo.png" 
                    alt="のうたすロゴ" 
                    fill 
                    className="object-contain opacity-80 group-hover:opacity-100 transition"
                  />
                </div>
                <span className="text-stone-300 font-bold text-lg group-hover:text-white transition">
                  のうたす
                </span>
              </Link>
              <p className="text-stone-500">現場のために、進化し続ける。</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <Link href="/contact" className="hover:text-emerald-400 transition">お問い合わせ</Link>
              <Link href="/legal" className="hover:text-emerald-400 transition">利用規約・プライバシーポリシー</Link>
            </div>

            <div className="text-stone-500">
              &copy; {new Date().getFullYear()} NOUTASU.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}