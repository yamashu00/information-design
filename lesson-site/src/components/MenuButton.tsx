"use client";

interface MenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
    return (
        <button
            onClick={onClick}
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors md:hidden text-neutral-900 dark:text-neutral-100"
            aria-label="メニュー"
        >
            <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                />
                <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""
                        }`}
                />
                <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                />
            </div>
        </button>
    );
}
