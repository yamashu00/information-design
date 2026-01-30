"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/FadeIn";

export function WorksheetSection() {
    const [data, setData] = useState<any>({});

    useEffect(() => {
        const saved = localStorage.getItem("okinawa-worksheet");
        if (saved) {
            try {
                setData(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load worksheet data", e);
            }
        }
    }, []);

    const handleChange = (id: string, value: any) => {
        const newData = { ...data, [id]: value };
        setData(newData);
        localStorage.setItem("okinawa-worksheet", JSON.stringify(newData));
    };

    return (
        <section id="worksheet" className="py-24 bg-neutral-50 dark:bg-neutral-950">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                            Worksheet
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            沖縄調べ学習ワークシート
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            ポスター制作の土台となるリサーチ内容を整理しましょう。入力内容はブラウザに自動保存されます。
                            <span className="block mt-2 text-sm italic font-medium text-primary-600 dark:text-primary-400">※このワークシートは成績には含まれません。自由な発想で活用してください。</span>
                        </p>
                    </div>
                </FadeIn>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* I. テーマ選択 */}
                    <WorksheetCard
                        number="I"
                        title="テーマ選択と事前の関心"
                        icon={<ThemeIcon />}
                    >
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mb-4">調査するテーマを1つ選んでください：</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        "観光／ホテル産業",
                                        "交通事情",
                                        "言語（方言・ウチナーグチ）",
                                        "食文化",
                                        "伝統工芸",
                                        "祭り・行事",
                                    ].map((theme) => (
                                        <label key={theme} className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${data.selectedTheme === theme ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800' : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800'}`}>
                                            <input
                                                type="radio"
                                                name="theme"
                                                checked={data.selectedTheme === theme}
                                                onChange={() => handleChange("selectedTheme", theme)}
                                                className="w-4 h-4 text-primary-600"
                                            />
                                            <span className={`text-sm font-medium ${data.selectedTheme === theme ? 'text-primary-900 dark:text-primary-100' : 'text-neutral-600 dark:text-neutral-400'}`}>{theme}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <WorksheetInput
                                label="選択したテーマ（具体的に）"
                                value={data.themeDetail || ""}
                                onChange={(val) => handleChange("themeDetail", val)}
                                placeholder="例：インバウンドとリゾート開発について"
                            />
                            <WorksheetTextarea
                                label="事前の知識・関心事"
                                value={data.preKnowledge || ""}
                                onChange={(val) => handleChange("preKnowledge", val)}
                                placeholder="例：沖縄戦については平和記念公園での講話を聞いたことがある..."
                            />
                        </div>
                    </WorksheetCard>

                    {/* II. 資料の収集 */}
                    <WorksheetCard
                        number="II"
                        title="資料の収集・参考文献メモ"
                        icon={<SearchIcon />}
                    >
                        <div className="space-y-6">
                            <WorksheetInput
                                label="検索キーワード"
                                value={data.keywords || ""}
                                onChange={(val) => handleChange("keywords", val)}
                                placeholder="例：沖縄 農業, サトウキビ 生産量..."
                            />

                            <div className="space-y-4">
                                <p className="text-sm font-bold text-neutral-700 dark:text-neutral-300">収集した資料の情報：</p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-neutral-100 dark:bg-neutral-800">
                                                <th className="p-2 border border-neutral-200 dark:border-neutral-700 text-left w-24">資料種別</th>
                                                <th className="p-2 border border-neutral-200 dark:border-neutral-700 text-left">タイトル / URL</th>
                                                <th className="p-2 border border-neutral-200 dark:border-neutral-700 text-left">要約</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[1, 2, 3].map((i) => (
                                                <tr key={i}>
                                                    <td className="p-1 border border-neutral-200 dark:border-neutral-700">
                                                        <select
                                                            className="w-full bg-transparent p-1 focus:outline-none"
                                                            value={data[`refType${i}`] || ""}
                                                            onChange={(e) => handleChange(`refType${i}`, e.target.value)}
                                                        >
                                                            <option value="">選択</option>
                                                            <option value="book">書籍</option>
                                                            <option value="web">Web</option>
                                                        </select>
                                                    </td>
                                                    <td className="p-1 border border-neutral-200 dark:border-neutral-700">
                                                        <input
                                                            className="w-full bg-transparent p-1 focus:outline-none"
                                                            value={data[`refTitle${i}`] || ""}
                                                            onChange={(e) => handleChange(`refTitle${i}`, e.target.value)}
                                                        />
                                                    </td>
                                                    <td className="p-1 border border-neutral-200 dark:border-neutral-700">
                                                        <input
                                                            className="w-full bg-transparent p-1 focus:outline-none"
                                                            value={data[`refSummary${i}`] || ""}
                                                            onChange={(e) => handleChange(`refSummary${i}`, e.target.value)}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </WorksheetCard>

                    {/* III. 情報の整理・分析 */}
                    <WorksheetCard
                        number="III"
                        title="情報の整理・分析"
                        icon={<AnalysisIcon />}
                    >
                        <div className="space-y-6">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-neutral-100 dark:bg-neutral-800">
                                            <th className="p-2 border border-neutral-200 dark:border-neutral-700 text-left w-24">カテゴリー</th>
                                            <th className="p-2 border border-neutral-200 dark:border-neutral-700 text-left">内容・データ</th>
                                            <th className="p-2 border border-neutral-200 dark:border-neutral-700 text-left">要因・背景</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {["歴史的背景", "現状", "課題", "展望"].map((cat) => (
                                            <tr key={cat}>
                                                <td className="p-2 border border-neutral-200 dark:border-neutral-700 font-medium bg-neutral-50 dark:bg-neutral-900/50">{cat}</td>
                                                <td className="p-1 border border-neutral-200 dark:border-neutral-700">
                                                    <textarea
                                                        rows={2}
                                                        className="w-full bg-transparent p-1 focus:outline-none resize-none"
                                                        value={data[`analysisContent_${cat}`] || ""}
                                                        onChange={(e) => handleChange(`analysisContent_${cat}`, e.target.value)}
                                                    />
                                                </td>
                                                <td className="p-1 border border-neutral-200 dark:border-neutral-700">
                                                    <textarea
                                                        rows={2}
                                                        className="w-full bg-transparent p-1 focus:outline-none resize-none"
                                                        value={data[`analysisContext_${cat}`] || ""}
                                                        onChange={(e) => handleChange(`analysisContext_${cat}`, e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </WorksheetCard>

                    {/* IV. ポスター制作に向けて */}
                    <WorksheetCard
                        number="IV"
                        title="ポスター制作に向けての構想"
                        icon={<PosterIcon />}
                    >
                        <div className="space-y-6">
                            <WorksheetInput
                                label="ポスターの主題（仮）"
                                value={data.posterTitle || ""}
                                onChange={(val) => handleChange("posterTitle", val)}
                                placeholder="例：次世代へつなぐ、沖縄の自然と未来"
                            />
                            <WorksheetTextarea
                                label="伝えたい要点・メッセージ"
                                value={data.posterMessage || ""}
                                onChange={(val) => handleChange("posterMessage", val)}
                                placeholder="例：観光と環境保護の両立がなぜ必要なのかを訴える"
                            />
                            <WorksheetTextarea
                                label="サブのエピソード / 追加情報"
                                value={data.posterExtra || ""}
                                onChange={(val) => handleChange("posterExtra", val)}
                                placeholder="“氷山の一角”として見せたい部分は..."
                            />
                        </div>
                    </WorksheetCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* V. 今後の調べ直し */}
                        <WorksheetCard
                            number="V"
                            title="今後の調べ直し"
                            icon={<NextIcon />}
                        >
                            <WorksheetTextarea
                                label="不足している情報 / 確認事項"
                                value={data.missingInfo || ""}
                                onChange={(val) => handleChange("missingInfo", val)}
                                placeholder="具体的な入手先・調べ方もメモ..."
                                rows={6}
                            />
                        </WorksheetCard>

                        {/* VI. 振り返り */}
                        <WorksheetCard
                            number="VI"
                            title="振り返り・次のステップ"
                            icon={<ReflectionIcon />}
                        >
                            <div className="space-y-6">
                                <WorksheetTextarea
                                    label="感想・気づいたこと"
                                    value={data.reflection || ""}
                                    onChange={(val) => handleChange("reflection", val)}
                                    placeholder="始める前と比べて興味はどう変わったか..."
                                    rows={3}
                                />
                                <WorksheetInput
                                    label="次回までの課題"
                                    value={data.nextTask || ""}
                                    onChange={(val) => handleChange("nextTask", val)}
                                    placeholder="誰が何をいつまでに終わらせるか..."
                                />
                            </div>
                        </WorksheetCard>
                    </div>

                    {/* Usage Tips */}
                    <FadeIn delay={300}>
                        <div className="p-8 rounded-3xl bg-primary-600 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <SearchIcon size={120} />
                            </div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                ワークシート活用のポイント
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-50">
                                <li className="space-y-2">
                                    <div className="font-bold text-white">1. まずは幅広くメモ</div>
                                    <p className="text-sm">ポスターにすぐ反映するのではなく、まずは十分な情報を蓄積しましょう。</p>
                                </li>
                                <li className="space-y-2">
                                    <div className="font-bold text-white">2. 整理と優先順位</div>
                                    <p className="text-sm">すべてを詰め込まず、伝えたい核心を選び、背景資料を手元に持っておきます。</p>
                                </li>
                                <li className="space-y-2">
                                    <div className="font-bold text-white">3. ギャラリーウォーク想定</div>
                                    <p className="text-sm">示しきれない情報を口頭で補足できるよう、深掘り情報を整理しておきましょう。</p>
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

function WorksheetCard({ number, title, children, icon }: { number: string, title: string, children: React.ReactNode, icon?: React.ReactNode }) {
    return (
        <FadeIn>
            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden flex flex-col h-full">
                <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/50 dark:bg-neutral-800/20">
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold shadow-md shadow-primary-500/20">
                            {number}
                        </span>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{title}</h3>
                    </div>
                    <div className="text-neutral-300 dark:text-neutral-700">
                        {icon}
                    </div>
                </div>
                <div className="p-8 flex-grow">
                    {children}
                </div>
            </div>
        </FadeIn>
    );
}

function WorksheetInput({ label, value, onChange, placeholder }: { label: string, value: string, onChange: (v: string) => void, placeholder?: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-neutral-800 dark:text-neutral-200"
            />
        </div>
    );
}

function WorksheetTextarea({ label, value, onChange, placeholder, rows = 4 }: { label: string, value: string, onChange: (v: string) => void, placeholder?: string, rows?: number }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-700 dark:text-neutral-300">{label}</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={rows}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-neutral-800 dark:text-neutral-200"
            />
        </div>
    );
}

// Icons
const ThemeIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);

const SearchIcon = ({ size = 32 }: { size?: number }) => (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const AnalysisIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const PosterIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const NextIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const ReflectionIcon = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
);
