'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV = [
  { href: '/demo/dashboard', label: 'ダッシュボード', icon: '📊' },
  { href: '/demo/daily',     label: '日次記録',       icon: '📝' },
  { href: '/demo/weights',   label: '体重・CV',       icon: '⚖️' },
  { href: '/demo/shipments', label: '出荷成績',       icon: '🚚' },
  { href: '/demo/compare',   label: '棟比較',         icon: '📈' },
  { href: '/demo/trends',    label: '成績推移',       icon: '📉' },
]

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* デモバナー */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-400 text-amber-900 text-xs text-center py-1.5 font-medium">
        🎯 これはデモ画面です。ダミーデータが入っています。タブを閉じるとリセットされます。
      </div>

      {/* サイドナビ */}
      <nav className={`fixed left-0 top-7 h-[calc(100vh-28px)] bg-gray-900 text-white flex flex-col transition-all duration-200 z-40 ${open ? 'w-52' : 'w-12'}`}>
        <div className="flex items-center justify-between px-2 py-4 border-b border-gray-700 min-h-[60px]">
          {open && (
            <div className="px-2">
              <p className="text-base font-bold leading-tight">🐔 FLOCK</p>
              <p className="text-xs text-gray-400 mt-0.5">デモ版</p>
            </div>
          )}
          <button onClick={() => setOpen(o => !o)}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
            {open ? '◀' : '▶'}
          </button>
        </div>
        <div className="flex-1 py-3 px-1.5 space-y-0.5 overflow-y-auto">
          {NAV.map(item => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}
                title={!open ? item.label : undefined}
                className={[
                  'flex items-center gap-2.5 rounded-lg text-sm transition-all',
                  open ? 'px-3 py-2.5' : 'px-0 py-2.5 justify-center',
                  active ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800',
                ].join(' ')}>
                <span className="text-base flex-shrink-0">{item.icon}</span>
                {open && <span>{item.label}</span>}
              </Link>
            )
          })}
        </div>
        <div className="px-1.5 py-3 border-t border-gray-700">
          <Link href="/"
            className={['w-full flex items-center gap-2.5 rounded-lg text-sm text-gray-300 hover:bg-gray-800 transition-colors', open ? 'px-3 py-2.5' : 'px-0 py-2.5 justify-center'].join(' ')}>
            <span>🏠</span>
            {open && <span>LPへ戻る</span>}
          </Link>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <main className={`flex-1 transition-all duration-200 pt-7 ${open ? 'ml-52' : 'ml-12'}`}>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
