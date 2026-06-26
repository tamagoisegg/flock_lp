'use client'
import { useState } from 'react'
import { FLOCKS, WEIGHT_RECORDS, houseName } from '@/lib/demoData'

const ROSS308: Record<number, number> = { 7:213, 14:533, 21:1012, 28:1616, 35:2296, 42:2998 }
const CURRENT_FLOCKS = FLOCKS.filter(f => f.lot === '202606')

export default function DemoWeights() {
  const [selFlock, setSelFlock] = useState(CURRENT_FLOCKS[0]?.id ?? '')
  const flock = CURRENT_FLOCKS.find(f => f.id === selFlock)
  const records = WEIGHT_RECORDS.filter(w => w.flock_id === selFlock).sort((a,b) => a.day_age - b.day_age)

  return (
    <div className="max-w-3xl">
      <h1 className="text-xl font-bold text-gray-800 mb-6">⚖️ 体重・CV</h1>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-5">
        <div className="flex flex-wrap gap-2">
          {CURRENT_FLOCKS.map(f => (
            <button key={f.id} onClick={() => setSelFlock(f.id)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${selFlock === f.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {houseName(f.house)}
            </button>
          ))}
        </div>
      </div>

      {flock && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-700">{houseName(flock.house)} — 体重記録</h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500 border-b border-gray-100">
                <th className="px-4 py-2 text-center">日齢</th>
                <th className="px-4 py-2 text-right">BW(g)</th>
                <th className="px-4 py-2 text-right">前(g)</th>
                <th className="px-4 py-2 text-right">中(g)</th>
                <th className="px-4 py-2 text-right">後(g)</th>
                <th className="px-4 py-2 text-right">前後差(g)</th>
                <th className="px-4 py-2 text-right">CV%</th>
                <th className="px-4 py-2 text-right">ROSS比</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {records.map(r => {
                const ross = ROSS308[r.day_age]
                const ratio = ross ? (r.bw / ross * 100).toFixed(1) : '—'
                const diff = Math.abs(r.bw_front - r.bw_back)
                return (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 text-center font-medium">{r.day_age}日</td>
                    <td className="px-4 py-2.5 text-right font-semibold">{r.bw.toLocaleString()}</td>
                    <td className="px-4 py-2.5 text-right text-gray-600">{r.bw_front.toLocaleString()}</td>
                    <td className="px-4 py-2.5 text-right text-gray-600">{r.bw_mid.toLocaleString()}</td>
                    <td className="px-4 py-2.5 text-right text-gray-600">{r.bw_back.toLocaleString()}</td>
                    <td className={`px-4 py-2.5 text-right font-medium ${diff >= 90 ? 'text-red-500' : diff >= 60 ? 'text-amber-500' : 'text-gray-600'}`}>{diff}</td>
                    <td className={`px-4 py-2.5 text-right ${r.cv > 10 ? 'text-amber-600 font-semibold' : 'text-gray-700'}`}>{r.cv.toFixed(1)}%</td>
                    <td className={`px-4 py-2.5 text-right font-semibold ${Number(ratio) >= 100 ? 'text-green-600' : 'text-amber-600'}`}>{ratio}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
