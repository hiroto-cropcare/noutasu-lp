import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-stone-50 min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-2xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-200">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4 text-stone-900">お問い合わせ</h1>
          <p className="text-stone-600">
            アプリに関するご質問、ご要望など<br />
            お気軽にお問い合わせください。
          </p>
        </div>

        {/* フォーム部分 */}
        <form className="space-y-6">
          
          {/* お名前 */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">お名前 <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="name" 
              placeholder="山田 太郎"
              className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition bg-stone-50"
              required 
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
            <input 
              type="email" 
              id="email" 
              placeholder="nouka@example.com"
              className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition bg-stone-50"
              required 
            />
          </div>

          {/* 件名 */}
          <div>
            <label htmlFor="subject" className="block text-sm font-bold text-stone-700 mb-2">件名</label>
            <select 
              id="subject"
              className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition bg-stone-50"
            >
              <option value="">選択してください</option>
              <option value="func">機能について</option>
              <option value="bug">不具合の報告</option>
              <option value="req">ご要望</option>
              <option value="other">その他</option>
            </select>
          </div>

          {/* 内容 */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
            <textarea 
              id="message" 
              rows={6} 
              placeholder="ここに入力してください..."
              className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition bg-stone-50 resize-none"
              required
            ></textarea>
          </div>

          {/* 送信ボタン */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-800 transition flex items-center justify-center gap-2"
            >
              <Send size={20} />
              送信する
            </button>
            <p className="text-xs text-stone-500 text-center mt-4">
              ※これはデモ画面のため、実際には送信されません。
            </p>
          </div>

        </form>

        
      </div>
    </div>
  );
}