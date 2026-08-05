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
        <div className="w-full bg-th-black flex justify-center pt-10">
            <div className="w-full max-w-4xl">

                <div className="flex gap-4">

                    {tabs.map((tab) => {
                        const active = activeTab === tab;

                        return (
                            <button
                                key={tab}
                                onClick={() => onChange(tab)}
                                className={`relative px-6 py-4 text-sm tracking-[0.2em] font-bold uppercase transition-all duration-300 cursor-pointer
                                ${
                                    active
                                        ? "bg-th-theme/10 text-th-white"
                                        : "text-th-border hover:text-th-white hover:bg-[#141414]"
                                }`}
                            >
                                {/* Left highlight */}
                                {active && (
                                    <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-th-theme rounded-full" />
                                )}

                                <span className="pl-2">
                                    {tab}
                                </span>
                            </button>
                        );
                    })}

                </div>

            </div>
        </div>
    );
}