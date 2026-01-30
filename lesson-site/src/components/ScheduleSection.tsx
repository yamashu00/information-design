"use client";

import { FadeIn } from "@/components/FadeIn";

export function ScheduleSection() {
    const gradeSchedule = [
        { date: "1/14(水)", event: "キックオフ", desc: "プロジェクト開始" },
        { date: "1/28(水)", event: "テーマ別調べ学習", desc: "分野ごとにリサーチ" },
        { date: "1/31(土)", event: "ポスター提出", desc: "オンライン提出" },
        { date: "2/18(水)", event: "ポスター発表会", desc: "本番・相互評価", isMain: true },
        { date: "2/25(水)", event: "平良氏 講演会", desc: "事後学習（予定）" },
    ];

    const classSchedules = [
        {
            name: "A組",
            dates: [
                { d: "1/28(水)", type: "normal" },
                { d: "1/30(金)", type: "normal" },
                { d: "2/6(金)", type: "normal" },
                { d: "2/13(金)", type: "goal", label: "完成目標" },
                { d: "2/18(水)", type: "check", label: "確認" },
            ],
        },
        {
            name: "B組",
            dates: [
                { d: "1/27(火)", type: "normal" },
                { d: "2/9(月)", type: "normal" },
                { d: "2/10(火)", type: "normal" },
                { d: "2/16(月)", type: "goal", label: "完成目標" },
                { d: "2/17(火)", type: "check", label: "確認" },
            ],
        },
        {
            name: "C組",
            dates: [
                { d: "1/26(月)", type: "normal" },
                { d: "1/30(金)", type: "normal" },
                { d: "2/6(金)", type: "normal" },
                { d: "2/9(月)", type: "normal" },
                { d: "2/13(金)", type: "goal", label: "完成目標" },
                { d: "2/16(月)", type: "check", label: "確認" },
            ],
        },
        {
            name: "D組",
            dates: [
                { d: "1/30(金)", type: "normal" },
                { d: "2/2(月)", type: "normal" },
                { d: "2/6(金)", type: "normal" },
                { d: "2/9(月)", type: "normal" },
                { d: "2/13(金)", type: "goal", label: "完成目標" },
                { d: "2/16(月)", type: "check", label: "確認" },
            ],
        },
    ];

    return (
        <section id="schedule" className="py-24 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            学習スケジュール
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            ポスター発表（2/18）に向けて、余裕を持った制作スケジュールを確認しましょう。
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Grade Schedule */}
                    <div className="lg:col-span-5 space-y-8">
                        <FadeIn delay={100}>
                            <div className="bg-neutral-50 dark:bg-neutral-800/50 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700">
                                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
                                    学年事前学習スケジュール
                                </h3>
                                <div className="space-y-6">
                                    {gradeSchedule.map((item, i) => (
                                        <div key={i} className={`flex items-start gap-4 relative ${i !== gradeSchedule.length - 1 ? 'pb-6' : ''}`}>
                                            {i !== gradeSchedule.length - 1 && (
                                                <div className="absolute left-[11px] top-[30px] bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
                                            )}
                                            <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 z-10 bg-white dark:bg-neutral-900 ${item.isMain ? 'border-primary-600 scale-125' : 'border-neutral-300 dark:border-neutral-600'}`}>
                                                {item.isMain && <div className="w-2 h-2 bg-primary-600 rounded-full m-1"></div>}
                                            </div>
                                            <div>
                                                <div className={`font-mono text-sm font-bold ${item.isMain ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-500'}`}>
                                                    {item.date}
                                                </div>
                                                <div className={`font-bold ${item.isMain ? 'text-lg text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'}`}>
                                                    {item.event}
                                                </div>
                                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{item.desc}</p>
                                            </div>
                                            {item.isMain && (
                                                <span className="ml-auto bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs px-2 py-1 rounded font-bold">
                                                    本番
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className="p-6 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl">
                                <div className="flex items-center gap-3 text-red-600 dark:text-red-400 mb-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <span className="font-bold">印刷に関する注意点</span>
                                </div>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    ポスター提出後、印刷作業が必要になるため、<span className="font-bold text-red-600 dark:text-red-400 underline decoration-2 underline-offset-4">「本番の2回前」までには完成</span>させる必要があります。余裕を持って進めましょう。
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Class Schedule */}
                    <div className="lg:col-span-7">
                        <FadeIn delay={300}>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-primary-600 rounded-full"></span>
                                    情報I 授業スケジュール
                                </h3>

                                <div className="grid grid-cols-1 gap-4">
                                    {classSchedules.map((cls, i) => (
                                        <div key={i} className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <div className="px-6 py-3 bg-neutral-50 dark:bg-neutral-700/50 border-b border-neutral-200 dark:border-neutral-700 flex justify-between items-center">
                                                <span className="text-lg font-bold text-neutral-900 dark:text-white">{cls.name}</span>
                                                <div className="flex gap-2 text-[10px] sm:text-xs">
                                                    <span className="flex items-center gap-1">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 完成目標
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <span className="w-2 h-2 rounded-full bg-orange-500"></span> 確認
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-4 sm:p-6 flex flex-wrap gap-2 sm:gap-4">
                                                {cls.dates.map((date, di) => (
                                                    <div
                                                        key={di}
                                                        className={`
                              flex flex-col items-center justify-center p-2 sm:p-3 min-w-[70px] sm:min-w-[90px] rounded-xl border-2 transition-all
                              ${date.type === 'goal' ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 scale-105' :
                                                                date.type === 'check' ? 'bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800' :
                                                                    date.type === 'event' ? 'bg-primary-50 dark:bg-primary-950/30 border-primary-200 dark:border-primary-800' :
                                                                        'bg-neutral-50 dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800'}
                            `}
                                                    >
                                                        <span className={`text-[10px] sm:text-xs font-bold mb-1 ${date.type === 'goal' ? 'text-emerald-600' :
                                                            date.type === 'check' ? 'text-orange-600' :
                                                                date.type === 'event' ? 'text-primary-600' :
                                                                    'text-neutral-400'
                                                            }`}>
                                                            {date.label || `Lesson ${di + 1}`}
                                                        </span>
                                                        <span className={`text-sm sm:text-base font-mono font-bold ${date.type === 'normal' ? 'text-neutral-600 dark:text-neutral-400' : 'text-neutral-900 dark:text-white'
                                                            }`}>
                                                            {date.d}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
