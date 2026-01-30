"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PromptCard } from "@/components/PromptCard";

type ThemeKey = "tourism" | "traffic" | "language" | "food" | "craft" | "festival";

interface ThemeInfo {
    label: string;
    examples: string;
    keywords: string[];
    step1Prompt: string;
    step2Topic: string;
    step4Example: string;
}

const THEMES: Record<ThemeKey, ThemeInfo> = {
    tourism: {
        label: "観光／ホテル産業",
        examples: "リゾート開発と自然保護、インバウンド、民泊など",
        keywords: ["沖縄 観光 客数 推移", "リゾート開発 環境負荷", "オーバーツーリズム 沖縄 対策"],
        step1Prompt: "沖縄の「観光／ホテル産業」をテーマにしています。戦後の観光開発の歴史と、現在の自然保護やオーバーツーリズムの問題を繋げて調べたいと考えています。リサーチの出発点として考えるべき具体的な疑問やトピックを3つ提案してください。",
        step2Topic: "「リゾート開発」によるサンゴ礁への影響や、地元住民の生活環境の変化",
        step4Example: "沖縄の観光産業が抱える光と影。持続可能な観光（サステナブル・ツーリズム）の必要性"
    },
    traffic: {
        label: "交通事情",
        examples: "ゆいレール、バス社会、渋滞問題、離島航路など",
        keywords: ["沖縄 渋滞 原因 統計", "ゆいレール 延伸 効果", "沖縄 鉄道 歴史 戦前"],
        step1Prompt: "沖縄の「交通事情」をテーマにしています。戦前の鉄道網の消失から現在の極端な車社会、そして慢性的な渋滞問題を繋げて調べたいと考えています。リサーチの出発点として考えるべき具体的な疑問やトピックを3つ提案してください。",
        step2Topic: "「ゆいレール」の導入背景や、バス路線の再編、渋滞が経済に与える損失",
        step4Example: "日本一の車社会・沖縄。渋滞問題の裏にある歴史的背景と、私たちが選ぶべき未来の交通手段"
    },
    language: {
        label: "言語（方言・ウチナーグチ）",
        examples: "黄金言葉、方言札の歴史、若者言葉など",
        keywords: ["方言札 歴史 沖縄", "ウチナーグチ 継承 活動", "しまくとぅば 日 制定 理由"],
        step1Prompt: "沖縄の「言語（方言・ウチナーグチ）」をテーマにしています。方言札による抑圧の歴史と、現在の「しまくとぅば」継承の取り組みや若者の意識変化を繋げて調べたいと考えています。リサーチの出発点として考えるべき具体的な疑問やトピックを3つ提案してください。",
        step2Topic: "「方言札」の実名エピソードや、現在の学校教育におけるしまくとぅばの扱い",
        step4Example: "消えゆくしまくとぅば。言葉を失うことは文化を失うこと。17歳の私たちができる継承"
    },
    food: {
        label: "食文化",
        examples: "琉球料理と健康、アメリカ世の食文化、食材の流通など",
        keywords: ["琉球料理 特徴 薬膳", "沖縄 食生活 欧米化 理由", "スパム ポークたまご 歴史"],
        step1Prompt: "沖縄の「食文化」をテーマにしています。伝統的な琉球料理の知恵と、戦後のアメリカ文化流入による食の欧米化、そして現在の健康課題を繋げて調べたいと考えています。リサーチの出発点として考えるべき具体的な疑問やトピックを3つ提案してください。",
        step2Topic: "「戦後の配給制度」とポーク缶の普及、伝統的な長寿食の栄養学的特徴",
        step4Example: "かつての長寿日本一・沖縄。食文化の変化がもたらした課題と、伝統食に見直すべき知恵"
    },
    craft: {
        label: "伝統工芸",
        examples: "紅型、琉球ガラス、やちむん、ミンサー織など",
        keywords: ["紅型 歴史 王府保護", "琉球ガラス 戦後 起源", "伝統工芸 後継者不足 沖縄 対策"],
        step1Prompt: "沖縄の「伝統工芸」をテーマにしています。王府時代からの高度な技術と、戦後の廃材（コーラ瓶など）から生まれた琉球ガラスのような創造力、そして現在の後継者問題を繋げて調べたいと考えています。リサーチの出発点として考えるべき具体的な疑問やトピックを3つ提案してください。",
        step2Topic: "「琉球ガラス」の戦後復興の歩みや、伝統工芸品と最新クリエイターのコラボ事例",
        step4Example: "戦争で途絶えかけた色。職人たちが繋いだ情熱。伝統工芸を「今」の日常に取り入れる"
    },
    festival: {
        label: "祭り・行事",
        examples: "エイサー、ハーリー、那覇大綱挽、清明祭など",
        keywords: ["エイサー 由来 念仏踊り", "那覇大綱挽 歴史 復活", "清明祭 沖縄 独自 先祖供養"],
        step1Prompt: "沖縄の「祭り・行事」をテーマにしています。地域コミュニティを象徴する祭りの由来と、戦後の復活エピソード、そして現在の観光資源化と保存の両立を繋げて調べたいと考えています。リサーチの出発点として考えるべき具体的な疑問やトピックを3つ提案してください。",
        step2Topic: "「那覇大綱挽」が戦災復興の象徴として復活した経緯や、エイサーの型（カタ）の地域差",
        step4Example: "踊り明かす、平和への祈り。祭りが繋ぐ地域の絆と、私たちが受け継ぐべき沖縄の心"
    }
};

export function ResearchSupportSection() {
    const [selectedTheme, setSelectedTheme] = useState<ThemeKey>("tourism");
    const theme = THEMES[selectedTheme];

    const steps = [
        {
            id: "step1",
            number: "I",
            title: "テーマ選択と事前の関心",
            description: "自分が一番興味を持てる切り口を見つけ、現状の知識を整理します。",
            prompts: [
                {
                    title: "切り口の具体化プロンプト",
                    description: "選んだテーマから、ポスターにしやすい具体的な課題を絞り込む際に使います。",
                    prompt: theme.step1Prompt
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
                    prompt: `「${theme.label}」について調べています。単に「${theme.label}」と調べるだけでなく、${theme.step2Topic}などについて一次資料を探すための、効果的な検索キーワードの組み合わせを5組提案してください。`
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
                    description: "複雑な情報を、ワークシートのカテゴリー（歴史・現状・課題・展望）に合わせて要約します。",
                    prompt: `以下の${theme.label}に関する文章（またはURLの内容）を、平和学習ワークシートの形式に合わせて整理してください。\n\n【整理の軸】\n1. 歴史的背景（いつから、なぜ始まったか）\n2. 現状（現在の具体的な数値や状況）\n3. 課題（今、何が問題になっているか）\n4. 展望（将来どうなっていく、またはどうすべきか）\n\n[ここにテキストを入力、またはURLを提示]`
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
                    prompt: `沖縄の「${theme.label}」について調べました。${theme.step4Example}などが主な論点です。これを「同世代の高校生」に向けて、自分たちにも関係がある問題だと感じてもらうためのポスター。その「核心となるキャッチコピー」と「構成のアイデア」を3案出してください。`
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
                    prompt: `「${theme.label}」のメリットを中心にポスターを構成しています。この主張に対して、地元住民の生活への影響や、自然環境への負荷といった『反対の視点』や『見落としがちなデメリット』としてはどのような点が考えられますか？客観的なポスターにするための補足すべき情報を提案してください。`
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
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
                            自分の選んだテーマを選択してください。ステップに合わせたプロンプトが自動生成されます。
                        </p>

                        {/* Theme Selector */}
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {(Object.entries(THEMES) as [ThemeKey, ThemeInfo][]).map(([key, info]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedTheme(key)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${selectedTheme === key
                                            ? "bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/30 ring-2 ring-primary-500/20"
                                            : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-primary-400"
                                        }`}
                                >
                                    {info.label}
                                </button>
                            ))}
                        </div>
                        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/50 inline-block px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700">
                            例：{theme.examples}
                        </p>
                    </div>
                </FadeIn>

                <div className="max-w-5xl mx-auto space-y-16 mt-16">
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
                            「{theme.label}」のリサーチに役立つキーワード
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {theme.keywords.map((kw, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white dark:bg-neutral-800 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
                                    #{kw}
                                </span>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
