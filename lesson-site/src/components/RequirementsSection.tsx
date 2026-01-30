"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/FadeIn";

interface RequirementItem {
    id: string;
    label: string;
    subLabel?: string;
}

interface RequirementGroup {
    title: string;
    items: RequirementItem[];
}

export function RequirementsSection() {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    // Load initial state from local storage
    useEffect(() => {
        const saved = localStorage.getItem("poster-requirements");
        if (saved) {
            try {
                setCheckedItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse saved requirements", e);
            }
        }
    }, []);

    const toggleItem = (id: string) => {
        const newChecked = { ...checkedItems, [id]: !checkedItems[id] };
        setCheckedItems(newChecked);
        localStorage.setItem("poster-requirements", JSON.stringify(newChecked));
    };

    const mandatoryGroups: RequirementGroup[] = [
        {
            title: "基本仕様",
            items: [
                { id: "size", label: "サイズ", subLabel: "29.7(cm)×42(cm)に用紙サイズを変更" },
                { id: "margin", label: "周りの余白", subLabel: "印刷時に見切れないように十分確保する" },
            ]
        },
        {
            title: "掲載内容",
            items: [
                { id: "reason", label: "興味を持った理由", subLabel: "意味がわかれば、小タイトルの命名は自由" },
                { id: "learn", label: "沖縄で学びたいこと", subLabel: "意味がわかれば、小タイトルの命名は自由" },
                { id: "refs", label: "参考文献" },
            ]
        },
        {
            title: "文字サイズ",
            items: [
                { id: "font-title", label: "ポスタータイトル", subLabel: "40pt 〜 60pt" },
                { id: "font-subtitle", label: "小タイトル", subLabel: "10pt 〜 30pt" },
                { id: "font-body", label: "本文", subLabel: "5pt 〜 20pt" },
            ]
        }
    ];

    const recommendedGroups: RequirementGroup[] = [
        {
            title: "配置・配色",
            items: [
                { id: "align", label: "縦横の整列" },
                { id: "grouping", label: "仕切りや図形を活用したグループ分け" },
                { id: "colors", label: "色は3色程度と見やすい配色" },
            ]
        },
        {
            title: "文章の工夫",
            items: [
                { id: "ending", label: "言い切りの文末" },
                { id: "bullets", label: "箇条書きの活用" },
                { id: "subheadings", label: "サブタイトル（小見出し）の活用" },
            ]
        },
        {
            title: "生成AIの活用",
            items: [
                { id: "ai-gen", label: "画像生成あたりは大歓迎！" },
                { id: "ai-cite", label: "活用した場所は明記すること" },
            ]
        }
    ];

    return (
        <section id="requirements" className="py-24 bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            制作規定
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            ポスター制作における必須条件と、より良い評価を得るための推奨条件を確認しましょう。<br />
                            チェックボックスを活用して、抜け漏れがないかセルフチェックできます。
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Mandatory Requirements */}
                    <FadeIn delay={100}>
                        <div className="h-full p-8 rounded-3xl bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">必須条件</h3>
                            </div>

                            <div className="space-y-8">
                                {mandatoryGroups.map((group, gIdx) => (
                                    <div key={gIdx}>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-red-600/70 dark:text-red-400/70 mb-4 border-b border-red-200/50 dark:border-red-800/50 pb-2">
                                            {group.title}
                                        </h4>
                                        <div className="space-y-3">
                                            {group.items.map((item) => (
                                                <CheckboxItem
                                                    key={item.id}
                                                    {...item}
                                                    checked={!!checkedItems[item.id]}
                                                    onToggle={() => toggleItem(item.id)}
                                                    theme="red"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Recommended Requirements */}
                    <FadeIn delay={200}>
                        <div className="h-full p-8 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/30">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">推奨条件 <span className="text-sm font-normal opacity-70">(評価項目)</span></h3>
                            </div>

                            <div className="space-y-8">
                                {recommendedGroups.map((group, gIdx) => (
                                    <div key={gIdx}>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-600/70 dark:text-emerald-400/70 mb-4 border-b border-emerald-200/50 dark:border-emerald-800/50 pb-2">
                                            {group.title}
                                        </h4>
                                        <div className="space-y-3">
                                            {group.items.map((item) => (
                                                <CheckboxItem
                                                    key={item.id}
                                                    {...item}
                                                    checked={!!checkedItems[item.id]}
                                                    onToggle={() => toggleItem(item.id)}
                                                    theme="emerald"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

function CheckboxItem({ label, subLabel, checked, onToggle, theme }: RequirementItem & { checked: boolean, onToggle: () => void, theme: "red" | "emerald" }) {
    const themeClasses = {
        red: {
            bg: checked ? "bg-red-500 border-red-500" : "bg-white dark:bg-neutral-800 border-red-200 dark:border-red-900/50",
            icon: "text-white",
            text: checked ? "text-neutral-500 dark:text-neutral-500 line-through" : "text-neutral-700 dark:text-neutral-200",
            hover: "hover:border-red-400 dark:hover:border-red-700"
        },
        emerald: {
            bg: checked ? "bg-emerald-500 border-emerald-500" : "bg-white dark:bg-neutral-800 border-emerald-200 dark:border-emerald-900/50",
            icon: "text-white",
            text: checked ? "text-neutral-500 dark:text-neutral-500 line-through" : "text-neutral-700 dark:text-neutral-200",
            hover: "hover:border-emerald-400 dark:hover:border-emerald-700"
        }
    };

    const currentTheme = themeClasses[theme];

    return (
        <button
            onClick={onToggle}
            className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all border ${currentTheme.hover} ${checked ? 'bg-neutral-100/50 dark:bg-neutral-800/30' : 'bg-white dark:bg-neutral-900/50 shadow-sm'}`}
        >
            <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-md border-2 transition-colors flex items-center justify-center ${currentTheme.bg}`}>
                {checked && (
                    <svg className={`w-4 h-4 ${currentTheme.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            <div className="text-left">
                <span className={`block font-bold transition-colors ${currentTheme.text}`}>
                    {label}
                </span>
                {subLabel && (
                    <span className={`text-sm mt-0.5 block ${checked ? 'text-neutral-400 dark:text-neutral-600' : 'text-neutral-500 dark:text-neutral-400'}`}>
                        {subLabel}
                    </span>
                )}
            </div>
        </button>
    );
}
