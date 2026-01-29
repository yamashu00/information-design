"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // ページ遷移時は毎回リセットしてアニメーションを実行
        setIsLoaded(false);
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <div
                className={`fixed inset-0 bg-neutral-900 dark:bg-neutral-100 z-[100] transition-transform duration-700 origin-top pointer-events-none ${isLoaded ? "scale-y-0" : "scale-y-100"
                    }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.87, 0, 0.13, 1)" }}
            />
            {children}
        </>
    );
}
