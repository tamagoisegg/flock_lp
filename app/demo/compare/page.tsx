'use client'
import { FLOCKS, WEIGHT_RECORDS, DAILY_RECORDS, SHIPMENT_RESULTS, houseName, currentDayAge } from '@/lib/demoData'

const ROSS308: Record<number, number> = { 0:44,7:213,14:533,21:1012,28:1616,35:2296,42:2998 }

function bwVsRoss(bw: number, dayAge: number) {
  const closest = [0,7,14,21,28,35,42].reduce((p,c) => Math.abs(c-dayAge) < Math.abs(p-dayAge) ? c : p)
  return bw - (ROSS308[closest] ?? 0)
}

export default function DemoCompare() {
  const active = FLOCKS.filter(f => f.lot === '202606')
  const finished = FLOCKS.filter(f => f.lot === '202504')

  return (
    <div className="max-w-6xl">
      <h1 className="text-xl font-bold text-gray-800 mb-6">📈 棟比較ダッシュボード</h1>

      {/* 飼育中 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
        <div className="px-5 py-3 bg-blue-50 border-b border-blue-100">
          <h2 className="font-semibold text-blue-800">🐣 飼育中の棟比較（202606）</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500 border-b border-gray-100">
                <th className="px-4 py-3 text-left">棟</th>
                <th className="px-4 py-3 text-center">本日日齢</th>
                <th className="px-4 py-3 text-center">入雛羽数</th>
                <th className="px-4 py-3 text-center">最新BW</th>
                <th className="px-4 py-3 text-center">ROSS比</th>
                <th className="px-4 py-3 text-center">最新CV%</th>
                <th className="px-4 py-3 text-center">直近7日死廃</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {active.map(f => {
                const dayAge = currentDayAge(f.flock_date)
                const wrs = WEIGHT_RECORDS.filter(w => w.flock_id === f.id).sort((a,b) => b.day_age - a.day_age)
                const latest = wrs[0]
                const diff = latest ? bwVsRoss(latest.bw, latest.day_age) : null
                const drs = DAILY_RECORDS.filter(d => d.flock_id === f.id).sort((a,b) => b.day_age - a.day_age)
                const mort7 = drs.slice(0,7).reduce((s,d) => s + d.dead + d.culled_poor + d.culled_weak, 0)
                return (
                  <tr key={f.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="w-14 h-7 bg-blue-100 text-blue-700 rounded-lg inline-flex items-center justify-center font-bold text-xs">{houseName(f.house)}</span>
                    </td>
                    <td className="px-4 py-3 text-center font-medium">{dayAge}日</td>
                    <td className="px-4 py-3 text-center text-gray-600">{f.chicks_actual.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center font-semibold">
                      {latest ? `${latest.bw.toLocaleString()}g` : '—'}
                      {latest && <span className="text-xs text-gray-400 ml-1">({latest.day_age}日)</span>}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {diff != null ? (
                        <span className={`text-xs font-semibold ${diff >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                          {diff >= 0 ? '+' : ''}{diff}g
                        </span>
                      ) : '—'}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {latest?.cv != null ? (
                        <span className={latest.cv > 10 ? 'text-amber-600 font-semibold' : 'text-gray-700'}>
                          {latest.cv.toFixed(1)}%
                        </span>
                      ) : '—'}
                    </td>
                    <td className={`px-4 py-3 text-center font-medium ${mort7 > 0 ? 'text-red-500' : 'text-gray-400'}`}>{mort7}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 出荷済み */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
          <h2 className="font-semibold text-gray-700">🚚 出荷済み棟の成績比較（202504）</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500 border-b border-gray-100">
                <th className="px-4 py-3 text-left">棟</th>
                <th className="px-4 py-3 text-right">BW42(g)</th>
                <th className="px-4 py-3 text-right">FCR</th>
                <th className="px-4 py-3 text-right">育成率(%)</th>
                <th className="px-4 py-3 text-right font-semibold text-blue-600">PS</th>
                <th className="px-4 py-3 text-right font-semibold text-purple-600">総合指数</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {finished.map(f => {
                const s = SHIPMENT_RESULTS.find(sr => sr.flock_id === f.id)
                if (!s) return null
                return (
                  <tr key={f.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className="w-14 h-7 bg-gray-100 text-gray-600 rounded-lg inline-flex items-center justify-center font-bold text-xs">{houseName(f.house)}</span>
                    </td>
                    <td className="px-4 py-3 text-right font-medium">{s.bw_final.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">{s.fcr.toFixed(3)}</td>
                    <td className="px-4 py-3 text-right">{s.survival_rate.toFixed(1)}</td>
                    <td className="px-4 py-3 text-right font-bold text-blue-600">{s.ps.toFixed(1)}</td>
                    <td className="px-4 py-3 text-right font-bold text-purple-600">{s.total_index.toFixed(1)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
