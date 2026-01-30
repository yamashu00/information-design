"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { MenuButton } from "./MenuButton";
import { Drawer } from "./Drawer";

const NAV_ITEMS = [
    { label: "ホーム", href: "/" },
    { label: "授業内容", href: "#curriculum" },
    { label: "制作規定", href: "#requirements" }, // added
    { label: "デザインの基礎", href: "#design-basics" },
    { label: "沖縄素材", href: "#resources" },
];

export function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    情報デザイン <span className="text-primary-600 dark:text-primary-400">× 平和学習</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <MenuButton isOpen={isDrawerOpen} onClick={() => setIsDrawerOpen(true)} />
                </div>
            </div>

            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <nav className="flex flex-col gap-6 mt-12">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsDrawerOpen(false)}
                            className="text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </Drawer>
        </header>
    );
}
