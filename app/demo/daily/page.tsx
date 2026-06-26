'use client'
import { useState } from 'react'
import { FLOCKS, DAILY_RECORDS, houseName } from '@/lib/demoData'

const CURRENT_FLOCKS = FLOCKS.filter(f => f.lot === '202606')

export default function DemoDaily() {
  const [selFlock, setSelFlock] = useState(CURRENT_FLOCKS[0]?.id ?? '')
  const flock = CURRENT_FLOCKS.find(f => f.id === selFlock)
  const records = DAILY_RECORDS.filter(d => d.flock_id === selFlock).sort((a,b) => b.day_age - a.day_age)

  return (
    <div className="max-w-5xl">
      <h1 className="text-xl font-bold text-gray-800 mb-6">📝 日次記録</h1>

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
            <h2 className="text-sm font-semibold text-gray-700">{houseName(flock.house)} — {flock.flock_date}入雛</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-xs text-gray-500 border-b border-gray-100">
                  <th className="px-3 py-2 text-center">日付</th>
                  <th className="px-3 py-2 text-center">日齢</th>
                  <th className="px-3 py-2 text-center">最高℃</th>
                  <th className="px-3 py-2 text-center">最低℃</th>
                  <th className="px-3 py-2 text-center">湿度%</th>
                  <th className="px-3 py-2 text-center">死亡</th>
                  <th className="px-3 py-2 text-center">淘汰</th>
                  <th className="px-3 py-2 text-right">飼料(kg)</th>
                  <th className="px-3 py-2 text-right">累計(kg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {records.map(r => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    <td className="px-3 py-2 text-center text-gray-600">{r.date.slice(5)}</td>
                    <td className="px-3 py-2 text-center font-medium">{r.day_age}日</td>
                    <td className="px-3 py-2 text-center">{r.temp_max}°</td>
                    <td className="px-3 py-2 text-center">{r.temp_min}°</td>
                    <td className="px-3 py-2 text-center">{r.humidity}%</td>
                    <td className={`px-3 py-2 text-center ${r.dead > 0 ? 'text-red-500 font-medium' : 'text-gray-400'}`}>{r.dead}</td>
                    <td className={`px-3 py-2 text-center ${r.culled_poor > 0 ? 'text-amber-500 font-medium' : 'text-gray-400'}`}>{r.culled_poor}</td>
                    <td className="px-3 py-2 text-right">{(r.feed_consumed/1000).toFixed(1)}</td>
                    <td className="px-3 py-2 text-right text-gray-600">{(r.feed_cumulative/1000).toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
