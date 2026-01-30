{/* Requirements Section */ }
<section id="requirements" className="py-24 bg-white dark:bg-neutral-900">
    <div className="container mx-auto px-4">
        <FadeIn>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                    制作規定
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    ポスター制作における必須条件と、より良い評価を得るための推奨条件を確認しましょう。
                </p>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mandatory Requirements */}
            <FadeIn delay={100}>
                <div className="h-full p-8 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">必須条件</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-2 border-b border-red-200 dark:border-red-800 pb-1">基本仕様</h4>
                            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
                                <li><span className="font-semibold">サイズ:</span> 29.7cm × 42cm (A3サイズ)</li>
                                <li><span className="font-semibold">余白:</span> 印刷時に見切れないよう十分確保する</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-2 border-b border-red-200 dark:border-red-800 pb-1">掲載内容</h4>
                            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
                                <li>興味を持った理由（タイトル自由）</li>
                                <li>沖縄で学びたいこと（タイトル自由）</li>
                                <li>参考文献</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-2 border-b border-red-200 dark:border-red-800 pb-1">文字サイズ規定</h4>
                            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
                                <li><span className="font-semibold">ポスタータイトル:</span> 40pt 〜 60pt</li>
                                <li><span className="font-semibold">小タイトル:</span> 10pt 〜 30pt</li>
                                <li><span className="font-semibold">本文:</span> 5pt 〜 20pt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Recommended Requirements */}
            <FadeIn delay={200}>
                <div className="h-full p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">推奨条件（評価対象）</h3>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-2 border-b border-emerald-200 dark:border-emerald-800 pb-1">配置・配色</h4>
                            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
                                <li>縦横の整列（グリッドデザイン）</li>
                                <li>仕切り線や図形を活用した情報のグループ分け</li>
                                <li>色は3色程度に抑え、見やすい配色にする</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-2 border-b border-emerald-200 dark:border-emerald-800 pb-1">文章の工夫</h4>
                            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
                                <li>「〜だ」「〜である」等の言い切りの文末</li>
                                <li>箇条書きを積極的に活用</li>
                                <li>サブタイトル（小見出し）で内容を要約</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-2 border-b border-emerald-200 dark:border-emerald-800 pb-1">生成AIの活用</h4>
                            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
                                <li>画像生成AI等の積極的な活用を推奨</li>
                                <li>※活用した箇所は必ず明記すること</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    </div>
</section>
