type TabsProps = {
    tabs: string[];
    activeTab: string;
    onChange: (tab: string) => void;
};

export default function Tabs({
    tabs,
    activeTab,
    onChange,
}: TabsProps) {
    return (
        <div className="flex flex-col">

            {tabs.map((tab) => {
                const active = activeTab === tab;

                return (
                    <button
                        key={tab}
                        onClick={() => onChange(tab)}
                        className={`relative w-full px-6 py-4 text-left text-sm tracking-wide font-bold uppercase transition-all duration-300 cursor-pointer
                        ${
                            active
                                ? "bg-th-theme/10 text-th-heading rounded-sm"
                                : "text-th-faint hover:text-th-heading hover:bg-th-surface/60 rounded-sm"
                        }`}
                    >
                        {/* Left highlight */}
                        {active && (
                            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-th-theme rounded-sm" />
                        )}

                        {tab}
                    </button>
                );
            })}

        </div>
    );
}
