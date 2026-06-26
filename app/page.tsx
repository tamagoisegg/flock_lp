export default function LPPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* ナビ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐔</span>
            <span className="font-semibold text-lg tracking-tight">FLOCK</span>
          </div>
          <a href="#contact"
            className="bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
            無料トライアルを申し込む
          </a>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(34,197,94,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-block bg-green-500/10 text-green-400 border border-green-500/20 text-xs px-4 py-1.5 rounded-full mb-6">
            ブロイラー農場向けクラウド管理システム
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            成績管理を、<br />
            <span className="text-green-400">もっとシンプルに。</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            日次記録・体重・出荷成績をクラウドで一元管理。<br />
            HSIリスク予報で暑熱対策も万全に。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contact"
              className="bg-green-600 hover:bg-green-500 text-white font-medium px-8 py-3 rounded-lg transition-colors text-sm">
              2ヶ月無料で試してみる
            </a>
            <a href="#features"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium px-8 py-3 rounded-lg transition-colors text-sm">
              機能を見る
            </a>
          </div>
        </div>
      </section>

      {/* 数字 */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {[
            { num: '8棟', label: '同時管理' },
            { num: '5日', label: '天気予報' },
            { num: '即日', label: '導入可能' },
          ].map(s => (
            <div key={s.num}>
              <div className="text-3xl font-semibold text-green-400">{s.num}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 機能 */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">主な機能</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '📝', title: '日次記録', desc: '死廃・飼料・温湿度を毎日記録。チェックリストで衛生管理も徹底。' },
              { icon: '📊', title: '成績管理', desc: 'BW・FCR・PS・総合指数を自動計算。ロット別・棟別の比較も簡単。' },
              { icon: '🌡️', title: 'HSIリスク予報', desc: '5日先の天気予報から暑熱ストレス指数を予測。早めの対策が可能に。' },
              { icon: '📈', title: '成績推移グラフ', desc: 'ロットごとの成績トレンドを可視化。改善・悪化をひと目で把握。' },
              { icon: '🏠', title: '棟比較', desc: '同ロットの棟間差を一覧表示。ROSS308比較で成長の遅れを早期発見。' },
              { icon: '☁️', title: 'クラウド管理', desc: 'PCでもスマホでもアクセス可能。複数スタッフで同時に入力・閲覧。' },
            ].map(f => (
              <div key={f.title} className="bg-white/3 border border-white/5 rounded-xl p-6 hover:border-green-500/30 transition-colors">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-medium mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section id="pricing" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">料金プラン</h2>
          <div className="bg-white/3 border border-green-500/30 rounded-2xl p-8 text-center">
            <div className="text-sm text-gray-400 mb-2">スタンダード</div>
            <div className="text-5xl font-semibold mb-1">¥5,000</div>
            <div className="text-gray-400 text-sm mb-6">/ 月・農場（鶏舎数に関わらず一律）</div>
            <ul className="text-left space-y-3 mb-8">
              {[
                '全機能利用可能',
                'ユーザー数無制限',
                '初期設定サポート付き',
                '最初の2ヶ月は無料',
                'いつでも解約可能',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-green-400 font-medium">✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="#contact"
              className="block bg-green-600 hover:bg-green-500 text-white font-medium py-3 rounded-lg transition-colors text-sm">
              無料トライアルを申し込む
            </a>
          </div>
        </div>
      </section>

      {/* 問い合わせ */}
      <section id="contact" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">お問い合わせ・無料トライアル申し込み</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            導入に関するご質問や無料トライアルのお申し込みは、<br />
            下記フォームよりお気軽にお問い合わせください。
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd7koPl5udbEcv-vUTez0mKV1-qZv_HtkYz6VyRIINNGQmlmw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-medium px-10 py-4 rounded-lg transition-colors text-sm">
            お問い合わせフォームを開く
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 px-6 border-t border-white/5 text-center text-xs text-gray-600">
        © 2026 FLOCK — ブロイラー成績管理システム
      </footer>

    </main>
  )
}
