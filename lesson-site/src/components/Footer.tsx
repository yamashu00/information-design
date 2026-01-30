export function Footer() {
    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">
                            情報デザイン I
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            沖縄修学旅行 事前学習プロジェクト
                        </p>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {new Date().getFullYear()} 聖学院中高 情報科 山本周 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
