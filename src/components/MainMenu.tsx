'use client'

import Link from 'next/link'
import {
    Brain,
    Home,
    ShieldCheck,
    X,
    Menu,
    BookOpenIcon,
    FolderOpenIcon,
    GripIcon,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CloseIcon } from '@heroui/react'

const navigation = [
    {
        name: 'صفحه اصلی',
        href: '/',
        icon: Home,
    }
]

export default function MainMenu() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(true)
    return (
        <>
            {/* =========================
                Mobile Header
            ========================== */}
            <header className="fixed inset-x-0 top-0 z-[100] flex h-[72px] items-center justify-between border-b border-slate-200/10 bg-[#263238] px-5 backdrop-blur-xl lg:hidden">
                <Link
                    href="/"
                    dir="rtl"
                    className="flex items-center gap-3"
                    onClick={() => setMobileOpen(false)}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                        <ShieldCheck
                            size={21}
                            strokeWidth={2.5}
                        />
                    </div>

                    <div>
                        <h1 className="text-base font-bold tracking-tight text-white">
                            Ovaro Signal
                        </h1>

                        <p className="text-[10px] font-medium text-white">
                            هوش مصنوعی پیش بینی سهام
                        </p>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMobileOpen(prev => !prev)}
                    className="relative z-[100] flex h-10 w-10 touch-manipulation items-center justify-center rounded-xl border border-slate-600 bg-[#263238] text-cyan-500"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <X size={20} />
                    ) : (
                        <Menu size={20} />
                    )}
                </button>

            </header>


            {/* =========================
                Mobile Menu
            ========================== */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden">

                    <div className="absolute inset-x-4 top-[84px] overflow-hidden rounded-2xl border border-slate-600 bg-[#263238] p-3 shadow-2xl">

                        {/* Navigation */}
                        <nav className="space-y-1.5">

                            {navigation.map((item) => {
                                const Icon = item.icon

                                const isActive =
                                    pathname === item.href ||
                                    (item.href !== '/' &&
                                        pathname.startsWith(item.href))

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        dir="rtl"
                                        onClick={() => setMobileOpen(false)}
                                        className={`group relative flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${isActive
                                            ? 'bg-gray-500 text-white'
                                            : 'text-white hover:bg-gray-500'
                                            }`}
                                    >

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <span className="absolute left-0 h-6 w-1 rounded-r-full bg-cyan-500" />
                                        )}

                                        <Icon
                                            size={19}
                                            strokeWidth={2}
                                            className={`transition-colors ${isActive
                                                ? 'text-cyan-500'
                                                : 'text-cyan-700 group-hover:text-cyan-500'
                                                }`}
                                        />

                                        <span className="text-right text-white">
                                            {item.name}
                                        </span>

                                    </Link>
                                )
                            })}

                        </nav>


                        {/* =========================
                            Mobile Status
                        ========================== */}
                        <div className="relative mt-3 overflow-hidden rounded-2xl bg-slate-950 p-4 shadow-xl">

                            {/* Decorative Glow */}
                            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-600/20 blur-2xl" />

                            <div className="relative">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                                        <Brain size={18} />
                                    </div>

                                    <div>
                                        <p className="text-[13px] font-bold text-white">
                                            مدل هوش مصنوعی
                                        </p>

                                        <p className="mt-0.5 text-[10px] font-medium text-slate-500">
                                            موتور پیش بینی سهام
                                        </p>
                                    </div>

                                </div>


                                {/* Status */}
                                <div className="mt-4 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.04] px-3 py-2.5">

                                    <div className="flex items-center gap-2">

                                        <span className="relative flex h-2 w-2">

                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />

                                        </span>

                                        <span className="text-[10px] font-medium text-slate-300">
                                            اپراتور سیستم
                                        </span>

                                    </div>

                                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                                        آنلاین
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            )}


            {/* =========================
                Desktop Sidebar
            ========================== */}
                 <aside
    className={`
        sticky top-0 hidden h-screen shrink-0
        border-l border-slate-200/10
        bg-[#263238]
        transition-[width] duration-300 ease-in-out
        lg:block
        ${menuOpen ? "w-[280px]" : "w-[70px]"}
    `}
>
    <div className="flex h-full flex-col overflow-hidden px-3 py-5">

        {/* Toggle */}
        <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
                absolute left-4 top-4 z-10
                flex h-9 w-9 items-center justify-center
                rounded-lg
                text-white
                transition-all
                hover:bg-white/10
            "
        >
            {menuOpen ? (
                <CloseIcon className='size-10 cursor-pointer' />
            ) : (
                <GripIcon className='cursor-pointer' size={32} />
            )}
        </button>


        {/* Logo */}
        <Link
            href="/"
            dir="rtl"
            className={`
                mt-14 flex shrink-0 items-center
                rounded-xl
                transition-all duration-300
                ${menuOpen
                    ? "gap-3 px-2"
                    : "justify-center"
                }
            `}
        >

            <div
                className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-[14px]
                    bg-blue-600
                    text-white
                    shadow-lg shadow-blue-600/20
                    transition
                    group-hover:scale-[1.03]
                "
            >
                <ShieldCheck
                    size={23}
                    strokeWidth={2.5}
                />
            </div>

            {menuOpen && (
                <div className="min-w-0">
                    <h1 className="whitespace-nowrap text-[17px] font-bold tracking-tight text-white">
                        Ovaro Signal
                    </h1>

                    <p className="mt-0.5 whitespace-nowrap text-[10px] font-semibold tracking-wide text-white">
                        هوش مصنوعی پیش بینی سهام
                    </p>
                </div>
            )}

        </Link>


        {/* Divider */}
        <div className="my-7 h-px shrink-0 bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />


        {/* Navigation Label */}
        {menuOpen && (
            <div className="mb-3 px-2">
                <p className="text-right text-[10px] font-bold tracking-[0.18em] text-white/60">
                    منو اصلی
                </p>
            </div>
        )}


        {/* Navigation */}
        <nav className="space-y-1.5">

            {navigation.map((item) => {
                const Icon = item.icon;

                const isActive =
                    pathname === item.href ||
                    (item.href !== "/" &&
                        pathname.startsWith(item.href));

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        dir="rtl"
                        title={!menuOpen ? item.name : undefined}
                        className={`
                            group relative flex h-11
                            items-center rounded-xl
                            transition-all duration-200
                            ${menuOpen
                                ? "gap-3 px-3.5"
                                : "justify-center"
                            }
                            ${isActive
                                ? "bg-white/10"
                                : "hover:bg-white/10"
                            }
                        `}
                    >

                        {/* Active Indicator */}
                        {isActive && (
                            <span className="
                                absolute right-0
                                h-6 w-1
                                rounded-l-full
                                bg-cyan-400
                            " />
                        )}


                        {/* Icon */}
                        <Icon
                            size={19}
                            strokeWidth={2}
                            className={`
                                shrink-0 transition-colors
                                ${isActive
                                    ? "text-cyan-400"
                                    : "text-cyan-700 group-hover:text-cyan-400"
                                }
                            `}
                        />


                        {/* Text */}
                        {menuOpen && (
                            <span className="whitespace-nowrap text-right text-[13px] font-semibold text-white">
                                {item.name}
                            </span>
                        )}

                    </Link>
                );
            })}

        </nav>


        {/* Spacer */}
        <div className="flex-1" />


        {/* AI Model Status */}
        {menuOpen ? (
            <div className="
                relative shrink-0
                overflow-hidden
                rounded-2xl
                bg-slate-950
                p-4
                shadow-xl
            ">

                {/* Glow */}
                <div className="
                    pointer-events-none
                    absolute -right-8 -top-8
                    h-24 w-24
                    rounded-full
                    bg-blue-600/20
                    blur-2xl
                " />

                <div className="relative">

                    <div className="flex items-center gap-3">

                        <div className="
                            flex h-9 w-9 shrink-0
                            items-center justify-center
                            rounded-xl
                            bg-blue-600
                            text-white
                        ">
                            <Brain size={18} />
                        </div>

                        <div>
                            <p className="text-[13px] font-bold text-white">
                                مدل هوش مصنوعی
                            </p>

                            <p className="mt-0.5 text-[10px] font-medium text-slate-500">
                                موتور پیش بینی سهام
                            </p>
                        </div>

                    </div>


                    {/* Status */}
                    <div className="
                        mt-4 flex items-center
                        justify-between
                        rounded-xl
                        border border-white/5
                        bg-white/[0.04]
                        px-3 py-2.5
                    ">

                        <div className="flex items-center gap-2">

                            <span className="relative flex h-2 w-2">

                                <span className="
                                    absolute inline-flex
                                    h-full w-full
                                    animate-ping
                                    rounded-full
                                    bg-emerald-400
                                    opacity-60
                                " />

                                <span className="
                                    relative inline-flex
                                    h-2 w-2
                                    rounded-full
                                    bg-emerald-400
                                " />

                            </span>

                            <span className="text-[10px] font-medium text-slate-300">
                                اپراتور سیستم
                            </span>

                        </div>

                        <span className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-wider
                            text-emerald-400
                        ">
                            آنلاین
                        </span>

                    </div>

                </div>

            </div>
        ) : (
            /* Collapsed AI Icon */
            <div
                title="مدل هوش مصنوعی"
                className="
                    flex h-11 w-11
                    shrink-0
                    self-center
                    items-center justify-center
                    rounded-xl
                    bg-blue-600
                    text-white
                    shadow-lg shadow-blue-600/20
                "
            >
                <Brain size={19} />
            </div>
        )}

    </div>
</aside>

        </>
    )
}