// ダミーデータ - タブを閉じるとリセット（stateのみ）

export interface House {
  code: string
  name: string
  tsubo: number
}

export interface Flock {
  id: string
  house: string
  flock_date: string
  lot: string
  chick_supplier: string
  chicks_in: number
  chicks_actual: number
  tsubo: number
  flags: string[]
  notes: string
}

export interface DailyRecord {
  id: string
  flock_id: string
  date: string
  day_age: number
  temp_max: number
  temp_min: number
  humidity: number
  dead: number
  culled_poor: number
  culled_weak: number
  feed_consumed: number
  feed_cumulative: number
}

export interface WeightRecord {
  id: string
  flock_id: string
  day_age: number
  bw: number
  bw_front: number
  bw_mid: number
  bw_back: number
  cv: number
}

export interface ShipmentResult {
  id: string
  flock_id: string
  shipped_date: string
  shipped_count: number
  shipped_weight: number
  feed_total: number
  bw_final: number
  fcr: number
  survival_rate: number
  tsubo_weight: number
  ps: number
  total_index: number
  day_age_final: number
}

export const HOUSES: House[] = [
  { code: 'A', name: 'A棟', tsubo: 266 },
  { code: 'B', name: 'B棟', tsubo: 265 },
  { code: 'C', name: 'C棟', tsubo: 258 },
  { code: 'D', name: 'D棟', tsubo: 256 },
  { code: 'E', name: 'E棟', tsubo: 256 },
  { code: '1', name: '1号舎', tsubo: 256 },
  { code: '2', name: '2号舎', tsubo: 267 },
  { code: '3', name: '3号舎', tsubo: 242 },
]

// 現在日付から逆算して入雛日を設定
function daysAgo(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() - days)
  return d.toISOString().slice(0, 10)
}

function addDays(date: string, days: number): string {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

// ロット202504（出荷済み）
const LOT_PAST = '202504'
const LOT_CURRENT = '202606'

export const FLOCKS: Flock[] = [
  // 現在飼育中（202606）
  { id: 'f-a', house: 'A', flock_date: daysAgo(35), lot: LOT_CURRENT, chick_supplier: '遠州', chicks_in: 14000, chicks_actual: 13950, tsubo: 266, flags: ['無薬'], notes: '' },
  { id: 'f-b', house: 'B', flock_date: daysAgo(35), lot: LOT_CURRENT, chick_supplier: '遠州', chicks_in: 14000, chicks_actual: 14020, tsubo: 265, flags: ['無薬'], notes: '' },
  { id: 'f-c', house: 'C', flock_date: daysAgo(35), lot: LOT_CURRENT, chick_supplier: '山本', chicks_in: 14000, chicks_actual: 13980, tsubo: 258, flags: [], notes: '' },
  { id: 'f-d', house: 'D', flock_date: daysAgo(35), lot: LOT_CURRENT, chick_supplier: '山本', chicks_in: 14000, chicks_actual: 14010, tsubo: 256, flags: [], notes: '' },
  { id: 'f-e', house: 'E', flock_date: daysAgo(35), lot: LOT_CURRENT, chick_supplier: '遠州', chicks_in: 14000, chicks_actual: 13990, tsubo: 256, flags: ['CRM'], notes: '' },
  { id: 'f-1', house: '1', flock_date: daysAgo(35), lot: LOT_CURRENT, chick_supplier: '遠州', chicks_in: 14000, chicks_actual: 14030, tsubo: 256, flags: ['CRM'], notes: '' },
  { id: 'f-2', house: '2', flock_date: daysAgo(35), lot: LOT_CURRENT, chick_supplier: '石井', chicks_in: 14000, chicks_actual: 13960, tsubo: 267, flags: [], notes: '' },
  { id: 'f-3', house: '3', flock_date: daysAgo(35), lot: LOT_CURRENT, chick_supplier: '石井', chicks_in: 13000, chicks_actual: 12980, tsubo: 242, flags: [], notes: '' },
  // 出荷済み（202504）
  { id: 'p-a', house: 'A', flock_date: '2025-04-01', lot: LOT_PAST, chick_supplier: '遠州', chicks_in: 14000, chicks_actual: 13920, tsubo: 266, flags: ['無薬'], notes: '' },
  { id: 'p-b', house: 'B', flock_date: '2025-04-01', lot: LOT_PAST, chick_supplier: '遠州', chicks_in: 14000, chicks_actual: 14010, tsubo: 265, flags: ['無薬'], notes: '' },
  { id: 'p-c', house: 'C', flock_date: '2025-04-01', lot: LOT_PAST, chick_supplier: '山本', chicks_in: 14000, chicks_actual: 13990, tsubo: 258, flags: [], notes: '' },
  { id: 'p-d', house: 'D', flock_date: '2025-04-01', lot: LOT_PAST, chick_supplier: '山本', chicks_in: 14000, chicks_actual: 14000, tsubo: 256, flags: [], notes: '' },
  { id: 'p-e', house: 'E', flock_date: '2025-04-01', lot: LOT_PAST, chick_supplier: '遠州', chicks_in: 14000, chicks_actual: 13980, tsubo: 256, flags: ['CRM'], notes: '' },
  { id: 'p-1', house: '1', flock_date: '2025-04-01', lot: LOT_PAST, chick_supplier: '遠州', chicks_in: 14000, chicks_actual: 14020, tsubo: 256, flags: ['CRM'], notes: '' },
  { id: 'p-2', house: '2', flock_date: '2025-04-01', lot: LOT_PAST, chick_supplier: '石井', chicks_in: 14000, chicks_actual: 13950, tsubo: 267, flags: [], notes: '' },
  { id: 'p-3', house: '3', flock_date: '2025-04-01', lot: LOT_PAST, chick_supplier: '石井', chicks_in: 13000, chicks_actual: 12960, tsubo: 242, flags: [], notes: '' },
]

// 日次記録生成（35日分）
function genDailyRecords(flockId: string, flockDate: string, days: number): DailyRecord[] {
  const records: DailyRecord[] = []
  let cumFeed = 0
  let seed = flockId.charCodeAt(flockId.length - 1)
  const rand = () => { seed = (seed * 1664525 + 1013904223) & 0xffffffff; return Math.abs(seed) / 0xffffffff }

  for (let i = 0; i < days; i++) {
    const date = addDays(flockDate, i)
    const dead = i < 3 ? Math.floor(rand() * 5) : (rand() < 0.1 ? Math.floor(rand() * 3) : 0)
    const feedPerDay = i < 7 ? 500 + i * 200 : 2000 + i * 60
    cumFeed += feedPerDay
    const tempBase = 20 + i * 0.3
    records.push({
      id: `dr-${flockId}-${i}`,
      flock_id: flockId,
      date,
      day_age: i,
      temp_max: Math.round((tempBase + 5 + rand() * 3) * 10) / 10,
      temp_min: Math.round((tempBase - 2 + rand() * 2) * 10) / 10,
      humidity: Math.round(60 + rand() * 20),
      dead,
      culled_poor: i > 7 && rand() < 0.05 ? 1 : 0,
      culled_weak: 0,
      feed_consumed: Math.round(feedPerDay),
      feed_cumulative: Math.round(cumFeed),
    })
  }
  return records
}

// 体重記録生成
function genWeightRecords(flockId: string, days: number): WeightRecord[] {
  const ROSS: Record<number, number> = { 7: 213, 14: 533, 21: 1012, 28: 1616, 35: 2296, 42: 2998 }
  const seed = flockId.charCodeAt(flockId.length - 1)
  const factor = 0.95 + (seed % 10) * 0.01

  return [7, 14, 21, 28, 35, 42].filter(d => d <= days).map(day_age => {
    const base = Math.round((ROSS[day_age] || 2000) * factor)
    const cv = 7 + (day_age / 42) * 3
    return {
      id: `wr-${flockId}-${day_age}`,
      flock_id: flockId,
      day_age,
      bw: base,
      bw_front: Math.round(base * 1.03),
      bw_mid: Math.round(base * 1.00),
      bw_back: Math.round(base * 0.97),
      cv: Math.round(cv * 10) / 10,
    }
  })
}

// 出荷成績生成
function genShipmentResult(flockId: string, flockDate: string): ShipmentResult {
  const seed = flockId.charCodeAt(flockId.length - 1)
  const factor = 0.96 + (seed % 8) * 0.005
  const flock = FLOCKS.find(f => f.id === flockId)!
  const bwFinal = Math.round(2998 * factor)
  const survival = 0.972 + (seed % 5) * 0.002
  const shippedCount = Math.round(flock.chicks_actual * survival)
  const shippedWeight = shippedCount * bwFinal / 1000
  const feedTotal = flock.chicks_actual * 4.2 * factor
  const fcr = Math.round(feedTotal / shippedWeight * 1000) / 1000
  const ps = Math.round((bwFinal * survival / (42 * fcr)) * 100 * 10) / 10
  const tsuboWeight = Math.round(shippedWeight / flock.tsubo * 10) / 10

  return {
    id: `sr-${flockId}`,
    flock_id: flockId,
    shipped_date: addDays(flockDate, 42),
    shipped_count: shippedCount,
    shipped_weight: Math.round(shippedWeight * 10) / 10,
    feed_total: Math.round(feedTotal),
    bw_final: bwFinal,
    fcr,
    survival_rate: Math.round(survival * 1000) / 10,
    tsubo_weight: tsuboWeight,
    ps,
    total_index: Math.round(ps * 1.4 * 10) / 10,
    day_age_final: 42,
  }
}

// 全データ生成
export const DAILY_RECORDS: DailyRecord[] = [
  // 現在飼育中（35日分）
  ...FLOCKS.filter(f => f.lot === LOT_CURRENT).flatMap(f => genDailyRecords(f.id, f.flock_date, 35)),
  // 出荷済み（42日分）
  ...FLOCKS.filter(f => f.lot === LOT_PAST).flatMap(f => genDailyRecords(f.id, f.flock_date, 42)),
]

export const WEIGHT_RECORDS: WeightRecord[] = [
  ...FLOCKS.filter(f => f.lot === LOT_CURRENT).flatMap(f => genWeightRecords(f.id, 35)),
  ...FLOCKS.filter(f => f.lot === LOT_PAST).flatMap(f => genWeightRecords(f.id, 42)),
]

export const SHIPMENT_RESULTS: ShipmentResult[] = [
  ...FLOCKS.filter(f => f.lot === LOT_PAST).map(f => genShipmentResult(f.id, f.flock_date)),
]

// ヘルパー
export function houseName(code: string): string {
  return HOUSES.find(h => h.code === code)?.name ?? code
}

export function currentDayAge(flockDate: string): number {
  const start = new Date(flockDate)
  const today = new Date()
  start.setHours(0,0,0,0); today.setHours(0,0,0,0)
  return Math.max(0, Math.round((today.getTime() - start.getTime()) / 86400000))
}
