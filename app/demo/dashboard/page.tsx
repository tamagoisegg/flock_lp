'use client'
import { FLOCKS, WEIGHT_RECORDS, DAILY_RECORDS, SHIPMENT_RESULTS, houseName, currentDayAge } from '@/lib/demoData'

const ROSS308: Record<number, number> = { 0:44,7:213,14:533,21:1012,28:1616,35:2296,42:2998 }

function latestBW(flockId: string) {
  const recs = WEIGHT_RECORDS.filter(w => w.flock_id === flockId).sort((a,b) => b.day_age - a.day_age)
  return recs[0] ?? null
}

function rossRatio(bw: number, dayAge: number) {
  const closest = [0,7,14,21,28,35,42].reduce((p,c) => Math.abs(c-dayAge) < Math.abs(p-dayAge) ? c : p)
  const target = ROSS308[closest]
  if (!target) return null
  return bw / target
}

export default function DemoDashboard() {
  const active = FLOCKS.filter(f => !SHIPMENT_RESULTS.find(s => s.flock_id === f.id))
  const currentLotFlocks = active.filter(f => f.lot === '202606')

  return (
    <div className="max-w-6xl">
      <h1 className="text-xl font-bold text-gray-800 mb-6">ダッシュボード</h1>

      {/* ロット概況 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-6">
        <h2 className="font-semibold text-gray-800 mb-3">📋 ロット概況（202606）</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500">
                <th className="px-3 py-2 text-left">棟</th>
                <th className="px-3 py-2 text-left">入雛日</th>
                <th className="px-3 py-2 text-center">日齢</th>
                <th className="px-3 py-2 text-right">入雛羽数</th>
                <th className="px-3 py-2 text-right">最新BW</th>
                <th className="px-3 py-2 text-right">ROSS比</th>
                <th className="px-3 py-2 text-left">フラグ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {currentLotFlocks.map(f => {
                const dayAge = currentDayAge(f.flock_date)
                const latest = latestBW(f.id)
                const ratio = latest ? rossRatio(latest.bw, latest.day_age) : null
                return (
                  <tr key={f.id} className="hover:bg-gray-50">
                    <td className="px-3 py-2">
                      <span className="w-14 h-7 bg-blue-100 text-blue-700 rounded-lg inline-flex items-center justify-center font-bold text-xs">{houseName(f.house)}</span>
                    </td>
                    <td className="px-3 py-2 text-gray-600">{f.flock_date}</td>
                    <td className="px-3 py-2 text-center font-medium">{dayAge}日</td>
                    <td className="px-3 py-2 text-right text-gray-600">{f.chicks_actual.toLocaleString()}羽</td>
                    <td className="px-3 py-2 text-right font-semibold">
                      {latest ? `${latest.bw.toLocaleString()}g` : '—'}
                      {latest && <span className="text-xs text-gray-400 ml-1">({latest.day_age}日)</span>}
                    </td>
                    <td className="px-3 py-2 text-right">
                      {ratio != null ? (
                        <span className={ratio >= 1 ? 'text-green-600 font-semibold' : 'text-amber-600 font-semibold'}>
                          {(ratio * 100).toFixed(1)}%
                        </span>
                      ) : '—'}
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-1 flex-wrap">
                        {f.flags.map(flag => (
                          <span key={flag} className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">{flag}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 全棟ステータス */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
        <h2 className="font-semibold text-gray-800 mb-3">📊 棟ステータス</h2>
        <div className="grid grid-cols-4 gap-3">
          {currentLotFlocks.map(f => {
            const dayAge = currentDayAge(f.flock_date)
            const dailies = DAILY_RECORDS.filter(d => d.flock_id === f.id)
            const totalDead = dailies.reduce((s,d) => s + d.dead + d.culled_poor + d.culled_weak, 0)
            const deathRate = (totalDead / f.chicks_actual) * 100
            const level = deathRate >= 2 ? 'danger' : deathRate >= 1.2 ? 'warn' : 'good'
            const meta = {
              good:   { icon: '🟢', label: '良好',  bg: 'bg-green-50 border-green-200', color: 'text-green-700' },
              warn:   { icon: '🟡', label: '注意',  bg: 'bg-amber-50 border-amber-200', color: 'text-amber-700' },
              danger: { icon: '🔴', label: '警戒',  bg: 'bg-red-50 border-red-200',     color: 'text-red-700' },
            }[level]
            return (
              <div key={f.id} className={`rounded-lg border p-3 ${meta.bg}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-gray-800">{houseName(f.house)}</span>
                  <span className="text-lg">{meta.icon}</span>
                </div>
                <div className={`text-xs font-semibold ${meta.color} mb-1`}>{meta.label}</div>
                <div className="text-[11px] text-gray-500">{dayAge}日齢</div>
                <div className="text-[10px] text-gray-400 mt-1">累計死亡率 {deathRate.toFixed(1)}%</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
