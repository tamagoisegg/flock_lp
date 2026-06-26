'use client'
import { FLOCKS, SHIPMENT_RESULTS, houseName } from '@/lib/demoData'

const FINISHED = FLOCKS.filter(f => f.lot === '202504')

export default function DemoShipments() {
  const results = FINISHED.map(f => ({
    flock: f,
    result: SHIPMENT_RESULTS.find(s => s.flock_id === f.id),
  })).filter(x => x.result)

  const psVals = results.map(x => x.result!.ps)
  const bwVals = results.map(x => x.result!.bw_final)
  const maxPS = Math.max(...psVals)
  const maxBW = Math.max(...bwVals)
  const minFCR = Math.min(...results.map(x => x.result!.fcr))

  return (
    <div className="max-w-5xl">
      <h1 className="text-xl font-bold text-gray-800 mb-6">🚚 出荷成績（202504ロット）</h1>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-700">棟別成績</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500 border-b border-gray-100">
                <th className="px-4 py-2 text-left">棟</th>
                <th className="px-4 py-2 text-right">出荷日</th>
                <th className="px-4 py-2 text-right">日齢</th>
                <th className="px-4 py-2 text-right">BW42(g)</th>
                <th className="px-4 py-2 text-right">FCR</th>
                <th className="px-4 py-2 text-right">育成率(%)</th>
                <th className="px-4 py-2 text-right">坪重量(kg)</th>
                <th className="px-4 py-2 text-right font-semibold text-blue-600">PS</th>
                <th className="px-4 py-2 text-right font-semibold text-purple-600">総合指数</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {results.map(({ flock: f, result: s }) => (
                <tr key={f.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2.5">
                    <span className="w-14 h-7 bg-gray-100 text-gray-600 rounded-lg inline-flex items-center justify-center font-bold text-xs">{houseName(f.house)}</span>
                  </td>
                  <td className="px-4 py-2.5 text-right text-gray-600">{s!.shipped_date}</td>
                  <td className="px-4 py-2.5 text-right">{s!.day_age_final}日</td>
                  <td className="px-4 py-2.5 text-right font-medium">
                    {s!.bw_final === maxBW && '👑'}{s!.bw_final.toLocaleString()}
                  </td>
                  <td className="px-4 py-2.5 text-right">
                    {s!.fcr === minFCR && '👑'}{s!.fcr.toFixed(3)}
                  </td>
                  <td className="px-4 py-2.5 text-right">{s!.survival_rate.toFixed(1)}</td>
                  <td className="px-4 py-2.5 text-right">{s!.tsubo_weight.toFixed(1)}</td>
                  <td className="px-4 py-2.5 text-right font-bold text-blue-600">
                    {s!.ps === maxPS && '👑'}{s!.ps.toFixed(1)}
                  </td>
                  <td className="px-4 py-2.5 text-right font-bold text-purple-600">{s!.total_index.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* サマリー */}
        <div className="px-5 py-3 bg-blue-50 border-t border-blue-100">
          <div className="flex gap-6 text-xs text-blue-700">
            <span>ロット平均PS: <strong>{(psVals.reduce((a,b)=>a+b,0)/psVals.length).toFixed(1)}</strong></span>
            <span>ロット平均BW: <strong>{Math.round(bwVals.reduce((a,b)=>a+b,0)/bwVals.length).toLocaleString()}g</strong></span>
            <span>PS範囲: <strong>{Math.min(...psVals).toFixed(1)} 〜 {maxPS.toFixed(1)}</strong>（棟間差 {(maxPS - Math.min(...psVals)).toFixed(1)}）</span>
          </div>
        </div>
      </div>
    </div>
  )
}
