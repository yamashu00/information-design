"use client";

import { FadeIn } from "@/components/FadeIn";

export function LessonResourceSection() {
    const lessons = [
        {
            id: "lesson1",
            title: "Lesson 1: マインドセット & 基礎",
            subtitle: "情報デザインの考え方を学ぶ",
            resources: [
                {
                    type: "Quiz",
                    label: "情報デザインクイズ",
                    desc: "授業の導入として知識を確認しましょう。",
                    url: "https://forms.gle/UTPb6PVABr3XjQ4X8",
                    color: "bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400",
                    icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )
                },
                {
                    type: "Slide",
                    label: "授業スライド",
                    desc: "本日の講義資料（Google スライド）です。",
                    url: "https://docs.google.com/presentation/d/1T1-JinwIfQwMzgUw9jhy5NeVgPJSTHXTz5QZunBANIA/edit?slide=id.g2d79ed2b801_0_5#slide=id.g2d79ed2b801_0_5",
                    color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400",
                    icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                    )
                }
            ]
        },
        {
            id: "lesson2",
            title: "Lesson 2: リサーチ & 収集",
            subtitle: "信頼できる情報を集める",
            resources: [
                {
                    type: "Link",
                    label: "ジャパンナレッジ リンク",
                    desc: "辞書・事典の検索データベース。事実確認に活用してください。",
                    url: "https://auth-school.japanknowledge.com/auth_school/login/",
                    color: "bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400",
                    icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    )
                },
                {
                    type: "Task",
                    label: "図書室でのリサーチ",
                    desc: "自分のテーマに合った本を実際に探してみましょう。",
                    url: "#",
                    color: "bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400",
                    isInternal: true,
                    icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    )
                }
            ]
        },
        {
            id: "lesson3",
            title: "Lesson 3〜: 制作 & 仕上げ",
            subtitle: "ポスターへのアウトプット",
            resources: [
                {
                    type: "Template",
                    label: "ポスターのテンプレート・先輩の作品例",
                    desc: "制作の参考になるテンプレートと、過去の優秀作品集です。",
                    url: "https://docs.google.com/presentation/d/1X-pFWRMHmfulmFnYOaemsl24Gkqywm1D0cePGDAJF-Q/edit?slide=id.g1f782f9d4c4_1_47#slide=id.g1f782f9d4c4_1_47",
                    color: "bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400",
                    icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                    )
                },
                {
                    type: "Work",
                    label: "ポスター制作作業",
                    desc: "これまでのリサーチを元に、デジタルで構成を組み上げます。",
                    url: "#requirements",
                    color: "bg-cyan-100 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400",
                    isInternal: true,
                    icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    )
                }
            ]
        }
    ];

    return (
        <section id="lesson-resources" className="py-24 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            各回の学習リソース
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
                            授業で使用するスライドやリンク、取り組むべきタスクをまとめています。
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {lessons.map((lesson, idx) => (
                        <FadeIn key={lesson.id} delay={idx * 100}>
                            <div className="space-y-6">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {lesson.subtitle}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {lesson.resources.map((res, ridx) => (
                                        <a
                                            key={ridx}
                                            href={res.url}
                                            target={res.isInternal ? "_self" : "_blank"}
                                            rel="noopener noreferrer"
                                            className="block p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/20 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-sm transition-all group"
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className={`p-2 rounded-xl ${res.color}`}>
                                                    {res.icon}
                                                </div>
                                                <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                                                    {res.type}
                                                </span>
                                            </div>
                                            <h4 className="font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                {res.label}
                                            </h4>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                                {res.desc}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
