"use client";

import { FadeIn } from "@/components/FadeIn";
import { PromptCard } from "@/components/PromptCard";

export function ResearchSupportSection() {
    const steps = [
        {
            id: "step1",
            number: "I",
            title: "テーマ選択と事前の関心",
            description: "自分が一番興味を持てる切り口を見つけ、現状の知識を整理します。",
            prompts: [
                {
                    title: "切り口の具体化プロンプト",
                    description: "選んだ大テーマから、ポスターにしやすい具体的な課題を絞り込む際に使います。",
                    prompt: "沖縄の「食文化」をテーマに平和学習ポスターを作りたい高校生です。戦後のアメリカ文化の影響と、現在の健康問題や食生活の変化を繋げて調べたいと考えています。リサーチの出発点として考えるべき具体的な疑問やトピックを3つ提案してください。"
                }
            ]
        },
        {
            id: "step2",
            number: "II",
            title: "資料の収集・検索キーワード",
            description: "図書館やネットで深い情報を探すための、効果的なキーワードを見つけます。",
            prompts: [
                {
                    title: "検索キーワード生成プロンプト",
                    description: "より専門的な資料に辿り着くための、多角的な検索語句を生成します。",
                    prompt: "「沖縄の伝統工芸」の衰退と継承について調べています。単に「沖縄 伝統工芸」と調べるだけでなく、後継者不足や市場規模の変化、最新の技術活用などについて一次資料を探すための、効果的な検索キーワードの組み合わせを5組提案してください。"
                }
            ]
        },
        {
            id: "step3",
            number: "III",
            title: "情報の整理・分析",
            description: "集めた情報を「歴史・現状・課題・展望」の4つの軸で整理し、論点を明確にします。",
            prompts: [
                {
                    title: "データの構造化プロンプト",
                    description: "長い文章や複雑な情報を、ワークシートのカテゴリー（歴史・現状・課題・展望）に合わせて要約します。",
                    prompt: "以下の文章（またはURLの内容）を、平和学習ワークシートの形式に合わせて整理してください。\n\n【整理の軸】\n1. 歴史的背景（いつから、なぜ始まったか）\n2. 現状（現在の具体的な数値や状況）\n3. 課題（今、何が問題になっているか）\n4. 展望（将来どうなっていく、またはどうすべきか）\n\n[ここにテキストを入力、またはURLを提示]"
                }
            ]
        },
        {
            id: "step4",
            number: "IV",
            title: "ポスター制作に向けての構想",
            description: "リサーチ結果を「誰に何を伝えるか」というストーリーに変換し、中心となるメッセージを決めます。",
            prompts: [
                {
                    title: "メッセージの言語化プロンプト",
                    description: "調べた多くの情報から、最も伝えたい「核心」を短い言葉にします。",
                    prompt: "沖縄の「交通事情（渋滞問題）」について調べました。歴史的には鉄道の消失、現在は車社会による環境負荷が論点です。これを「同世代の高校生」に向けて、自分たちにも関係がある問題だと感じてもらうためのポスター。その「核心となるキャッチコピー」と「構成のアイデア」を3案出してください。"
                }
            ]
        },
        {
            id: "step5",
            number: "V",
            title: "今後の調べ直し・補足",
            description: "自分の主張に足りない「根拠」や「別の視点」を特定し、情報の精度を高めます。",
            prompts: [
                {
                    title: "盲点（バイアス）チェックプロンプト",
                    description: "自分の調べた内容に、偏りや不足がないかAIに客観的な視点を求めます。",
                    prompt: "沖縄の「観光産業」のメリットを中心にポスターを構成しています。この主張に対して、地元住民の生活への影響や、自然環境への負荷といった『反対の視点』や『見落としがちなデメリット』としてはどのような点が考えられますか？客観的なポスターにするための補足すべき情報を提案してください。"
                }
            ]
        }
    ];

    return (
        <section id="worksheet-support" className="py-24 bg-neutral-50 dark:bg-neutral-950">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 font-mono">
                            AI & Research Assistant
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            ワークシート記述サポート
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            授業で使っているワークシートを埋めるためのヒントです。<br />
                            AIを「リサーチの相棒」として活用し、より深い探究を行いましょう。
                        </p>
                    </div>
                </FadeIn>

                <div className="max-w-5xl mx-auto space-y-16">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative">
                            {/* Connection Line */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-[23px] top-[46px] bottom-[-24px] w-0.5 bg-neutral-200 dark:bg-neutral-800 hidden md:block" />
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-[48px_1fr] gap-6">
                                {/* Step Circle */}
                                <FadeIn delay={index * 50}>
                                    <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border-2 border-primary-500 text-primary-600 dark:text-primary-400 flex items-center justify-center font-bold text-xl z-10 relative">
                                        {step.number}
                                    </div>
                                </FadeIn>

                                {/* Content */}
                                <div className="space-y-6">
                                    <FadeIn delay={index * 100}>
                                        <div>
                                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{step.title}</h3>
                                            <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                                        </div>
                                    </FadeIn>

                                    <div className="grid grid-cols-1 gap-4">
                                        {step.prompts.map((p, pIdx) => (
                                            <FadeIn key={pIdx} delay={(index * 100) + 150}>
                                                <PromptCard
                                                    title={p.title}
                                                    description={p.description}
                                                    prompt={p.prompt}
                                                />
                                            </FadeIn>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Resources for Worksheet */}
                <FadeIn delay={600}>
                    <div className="mt-20 p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            ワークシート記入に役立つ公的データベース
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "RESAS（地域経済分析システム）", desc: "沖縄の観光や産業の動向を「数字」で見たいときに。", url: "https://resas.go.jp/" },
                                { name: "沖縄県統計データバンク", desc: "人口、経済、教育など、県が公開している最新の統計情報。", url: "https://www.pref.okinawa.jp/toukeidb/" },
                                { name: "ひめゆり平和祈念資料館", desc: "体験者の証言や当時の実態を深く知るためのデジタルアーカイブ。", url: "https://www.himeyuri.or.jp/" }
                            ].map((site, i) => (
                                <a
                                    key={i}
                                    href={site.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 transition-all group"
                                >
                                    <h4 className="font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 transition-colors mb-2">{site.name}</h4>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{site.desc}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
