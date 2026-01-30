"use client";

import { useState } from "react";

interface PromptCardProps {
    title: string;
    description?: string;
    prompt: string;
}

export function PromptCard({ title, description, prompt }: PromptCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative">
            <div
                onClick={handleCopy}
                className="h-full p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 cursor-pointer hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all group flex flex-col"
            >
                {title && (
                    <h4 className="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-2">
                        {title}
                    </h4>
                )}
                {description && (
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 flex-grow">
                        {description}
                    </p>
                )}
                <div className="relative mt-auto">
                    <pre className="text-sm text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap font-mono bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-100 dark:border-neutral-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10 transition-colors">
                        {prompt}
                    </pre>
                    <div className="absolute top-2 right-2 text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
                <p className="text-xs text-neutral-400 mt-2 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    クリックでコピー
                </p>
            </div>

            {/* Toast Notification */}
            <div
                className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-2 rounded-full shadow-lg z-50 transition-all duration-300 pointer-events-none ${copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
            >
                <span className="text-sm font-medium">コピーしました</span>
            </div>
        </div>
    );
}
