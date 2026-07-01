const features = [
  {
    icon: '📝',
    title: '日々の記録を、ひとつに',
    desc: '死廃・飼料・飲水・体重・温湿度・特記事項を、鶏舎ごとにまとめて記録。紙・Excel・LINEに散らばる情報を整理します。',
  },
  {
    icon: '📊',
    title: '成績を自動で見える化',
    desc: 'BW・FCR・PS・総合指数を自動計算。ロット別・鶏舎別・日齢別に、必要な数字をすぐ確認できます。',
  },
  {
    icon: '🔎',
    title: '差や変化に気づける',
    desc: '同一ロット内の鶏舎差や、過去ロットとの差を一覧で確認。振り返りに必要な事実を残せます。',
  },
  {
    icon: '🌡️',
    title: '暑熱リスクを事前に確認',
    desc: '天気予報をもとにHSIリスクを表示。暑熱が想定される日の確認と、事前準備に役立ちます。',
  },
  {
    icon: '📈',
    title: '出荷後の振り返りが速い',
    desc: '日々の記録と出荷成績を同じロットで確認。良かった要因・確認したい変化を次のロットへつなげます。',
  },
  {
    icon: '☁️',
    title: 'スマホでもPCでも使える',
    desc: '鶏舎ではスマホ、本社や事務所ではPC。複数のスタッフが同じ情報を確認できます。',
  },
]

const steps = [
  {
    number: '01',
    title: '農場・鶏舎・ロットを登録',
    desc: '最初の設定はサポート付き。現在使っている管理項目に合わせて始められます。',
  },
  {
    number: '02',
    title: '毎日の数値と特記事項を入力',
    desc: '現場で必要な項目だけを、日齢・鶏舎ごとに記録します。',
  },
  {
    number: '03',
    title: '比較・振り返りに使う',
    desc: '鶏舎差、ロット差、出荷成績を見ながら、次の改善に必要な事実を確認します。',
  },
]

export default function LPPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white selection:bg-green-500/30">
      {/* ナビ */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-gray-950/85 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="text-2xl">🐔</span>
            <span className="font-semibold text-lg tracking-tight">FLOCK</span>
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm text-gray-400">
            <a href="#problems" className="hover:text-white transition-colors">
              FLOCKでできること
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              主な機能
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              料金
            </a>
          </div>

          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 md:px-5 py-2 rounded-lg transition-colors"
          >
            無料で試す
          </a>
        </div>
      </nav>

      {/* ヒーロー */}
      <section className="pt-36 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(34,197,94,0.16)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-300 border border-green-500/20 text-xs px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            ブロイラー農場向けクラウド管理システム
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.12] mb-7">
            毎日の記録を、
            <br />
            <span className="text-green-400">次の成績改善につなげる。</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            死廃・飼料・飲水・体重・温湿度・出荷成績を一元管理。
            <br className="hidden md:block" />
            鶏舎ごとの違いとロットごとの変化を、すぐに確認できます。
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-500 text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              1ヶ月無料で試す
            </a>

            <a
              href="https://demo.flock-apps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              デモ画面を見る
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-5">
            初期設定サポート付き・いつでも解約可能
          </p>
        </div>
      </section>

      {/* 課題 */}
      <section id="problems" className="py-20 px-6 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-green-400 text-sm font-medium mb-3">
              現場の記録、こうなっていませんか？
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              記録はあるのに、振り返りに使えていない。
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: '情報が分散している',
                desc: '紙、Excel、LINE、担当者の記憶に情報が分かれ、必要な時に探せない。',
              },
              {
                title: '鶏舎差に気づきにくい',
                desc: '同じロットでも棟ごとの差が見えず、確認が出荷後になる。',
              },
              {
                title: '次のロットに活かしづらい',
                desc: '出荷後に数字を振り返るまで時間がかかり、記録と成績がつながらない。',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/8 bg-gray-900/50 rounded-xl p-6"
              >
                <h3 className="font-medium mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 text-sm md:text-base">
              FLOCKは、毎日の入力を
              <span className="text-green-400 font-medium">「比較できる記録」</span>
              に変えます。
            </p>
          </div>
        </div>
      </section>

      {/* FLOCKの価値 */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-400 text-sm font-medium mb-3">
              FLOCKでできること
            </p>

            <h2 className="text-3xl font-semibold leading-tight mb-6">
              入力するだけで、
              <br />
              <span className="text-green-400">比較・確認・振り返りまで。</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              FLOCKは、日々の数字を保存するだけのシステムではありません。
              鶏舎ごとの違い、過去ロットとの差、日齢ごとの変化を確認し、
              出荷後の振り返りまでつなげます。
            </p>

            <ul className="space-y-3 text-sm text-gray-300">
              {[
                '鶏舎別・ロット別・日齢別に成績を確認',
                '目標値や過去ロットとの比較',
                '写真・特記事項を数値と一緒に記録',
                '複数スタッフで同じ情報を共有',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-green-400 font-medium">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-white/[0.02] p-7 md:p-9">
            <div className="text-xs text-gray-500 mb-5">FLOCK ダッシュボードのイメージ</div>

            <div className="space-y-4">
              <div className="rounded-xl bg-gray-950/80 border border-white/5 p-4">
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-400">本日の確認対象</span>
                  <span className="text-green-400">3件</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full w-[62%]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-950/80 border border-white/5 p-4">
                  <div className="text-xs text-gray-500 mb-2">平均体重</div>
                  <div className="text-xl font-semibold">1,842g</div>
                  <div className="text-xs text-green-400 mt-1">前ロット比 +18g</div>
                </div>

                <div className="rounded-xl bg-gray-950/80 border border-white/5 p-4">
                  <div className="text-xs text-gray-500 mb-2">累積死亡率</div>
                  <div className="text-xl font-semibold">2.4%</div>
                  <div className="text-xs text-gray-400 mt-1">鶏舎別に比較可能</div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-950/80 border border-white/5 p-4">
                <div className="text-xs text-gray-500 mb-3">ロット別 成績推移</div>
                <div className="flex items-end gap-2 h-24">
                  {[35, 48, 42, 65, 58, 76, 70, 88, 82, 96].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t bg-green-500/70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 機能 */}
      <section id="features" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-400 text-sm font-medium mb-3">主な機能</p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              現場で必要なことだけを、ひとつに。
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/[0.025] border border-white/7 rounded-xl p-6 hover:border-green-500/30 hover:bg-green-500/[0.03] transition-colors"
              >
                <div className="text-2xl mb-4">{feature.icon}</div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入フロー */}
      <section className="py-20 px-6 border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-400 text-sm font-medium mb-3">導入はシンプルです</p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              今日の記録から始められます。
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div key={step.number} className="relative rounded-xl border border-white/7 p-6">
                <div className="text-green-400 text-sm font-semibold mb-5">{step.number}</div>
                <h3 className="font-medium mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section id="pricing" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <p className="text-green-400 text-sm font-medium mb-3">料金</p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              鶏舎数に関わらず、定額。
            </h2>
          </div>

          <div className="bg-white/[0.03] border border-green-500/35 rounded-2xl p-8 text-center shadow-[0_0_80px_rgba(34,197,94,0.08)]">
            <div className="text-sm text-gray-400 mb-3">スタンダードプラン</div>
            <div className="text-5xl font-semibold mb-2">¥5,000</div>
            <div className="text-gray-400 text-sm mb-7">月額・1農場あたり（税込）</div>

            <ul className="text-left space-y-3.5 mb-8">
              {[
                '鶏舎数に関わらず利用可能',
                'ユーザー数無制限',
                '日次記録・成績管理・比較機能',
                'HSIリスク予報',
                '初期設定サポート付き',
                '最初の1ヶ月は無料',
                'いつでも解約可能',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="text-green-400 font-medium">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block bg-green-600 hover:bg-green-500 text-white font-medium py-3.5 rounded-lg transition-colors text-sm"
            >
              1ヶ月無料で試す
            </a>

            <p className="text-xs text-gray-500 mt-4">
              導入前のご相談だけでも受け付けています。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-green-500/20 bg-green-500/[0.06] p-8 md:p-12">
          <p className="text-green-400 text-sm font-medium mb-3">無料トライアル</p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            まずは、今の記録を
            <br className="md:hidden" />
            見える形にしませんか。
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            FLOCKは、日々の記録を残すだけでなく、
            <br className="hidden md:block" />
            次のロットで確認すべきことを見つけるための管理システムです。
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd7koPl5udbEcv-vUTez0mKV1-qZv_HtkYz6VyRIINNGQmlmw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-medium px-10 py-4 rounded-lg transition-colors text-sm"
          >
            無料トライアルを申し込む
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <div className="text-xs text-gray-600">
          © 2026 FLOCK — ブロイラー農場向けクラウド管理システム
        </div>
      </footer>
    </main>
  )
}
