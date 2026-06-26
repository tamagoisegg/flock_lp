'use client'
import { FLOCKS, SHIPMENT_RESULTS, houseName } from '@/lib/demoData'

const LOTS = ['202504']

export default function DemoTrends() {
  const lotData = LOTS.map(lot => {
    const flocks = FLOCKS.filter(f => f.lot === lot)
    const results = flocks.map(f => SHIPMENT_RESULTS.find(s => s.flock_id === f.id)).filter(Boolean)
    const avg = (arr: number[]) => arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : 0
    return {
      lot,
      ps: avg(results.map(s => s!.ps)),
      fcr: avg(results.map(s => s!.fcr)),
      bw: avg(results.map(s => s!.bw_final)),
      surv: avg(results.map(s => s!.survival_rate)),
      count: results.length,
    }
  })

  return (
    <div className="max-w-5xl">
      <h1 className="text-xl font-bold text-gray-800 mb-6">📉 成績推移</h1>

      {/* ロット別成績一覧 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        <div className="px-5 py-3 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-800">ロット別成績一覧</h2>
          <p className="text-xs text-gray-400 mt-0.5">各ロットの棟平均値</p>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500">
              <th className="px-4 py-2 text-left">ロット</th>
              <th className="px-3 py-2 text-right">棟数</th>
              <th className="px-3 py-2 text-right font-semibold text-indigo-600">PS</th>
              <th className="px-3 py-2 text-right font-semibold text-amber-600">FCR</th>
              <th className="px-3 py-2 text-right">BW42(g)</th>
              <th className="px-3 py-2 text-right">育成率(%)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {lotData.map(l => (
              <tr key={l.lot} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">{l.lot}</td>
                <td className="px-3 py-2 text-right text-gray-500">{l.count}</td>
                <td className="px-3 py-2 text-right font-semibold text-indigo-600">{l.ps.toFixed(1)}</td>
                <td className="px-3 py-2 text-right font-semibold text-amber-600">{l.fcr.toFixed(3)}</td>
                <td className="px-3 py-2 text-right">{Math.round(l.bw).toLocaleString()}</td>
                <td className="px-3 py-2 text-right">{l.surv.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 棟別成績詳細 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-800">棟別成績詳細（202504）</h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-xs text-gray-500">
              <th className="px-4 py-2 text-left">棟</th>
              <th className="px-3 py-2 text-right">PS</th>
              <th className="px-3 py-2 text-right">FCR</th>
              <th className="px-3 py-2 text-right">BW42(g)</th>
              <th className="px-3 py-2 text-right">育成率(%)</th>
              <th className="px-3 py-2 text-right">坪重量(kg)</th>
              <th className="px-3 py-2 text-left">フラグ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {FLOCKS.filter(f => f.lot === '202504').map(f => {
              const s = SHIPMENT_RESULTS.find(sr => sr.flock_id === f.id)
              if (!s) return null
              return (
                <tr key={f.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <span className="w-14 h-7 bg-gray-100 text-gray-600 rounded-lg inline-flex items-center justify-center font-bold text-xs">{houseName(f.house)}</span>
                  </td>
                  <td className="px-3 py-2 text-right font-semibold text-blue-600">{s.ps.toFixed(1)}</td>
                  <td className="px-3 py-2 text-right">{s.fcr.toFixed(3)}</td>
                  <td className="px-3 py-2 text-right">{s.bw_final.toLocaleString()}</td>
                  <td className="px-3 py-2 text-right">{s.survival_rate.toFixed(1)}</td>
                  <td className="px-3 py-2 text-right">{s.tsubo_weight.toFixed(1)}</td>
                  <td className="px-3 py-2">
                    <div className="flex gap-1">
                      {f.flags.map(flag => <span key={flag} className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">{flag}</span>)}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
