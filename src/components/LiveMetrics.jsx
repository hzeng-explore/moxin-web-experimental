import React, { useState, useEffect } from 'react';

export default function LiveMetrics() {
    const [projectIndex, setProjectIndex] = useState(0);
    const models = [
        { name: "Moxin LM", speed: "450", latency: "12" },
        { name: "Moxin VLM", speed: "380", latency: "15" },
        { name: "Quantization", speed: "850", latency: "8" }
    ];

    const currentModel = models[projectIndex];

    useEffect(() => {
        const projectInterval = setInterval(() => {
            setProjectIndex(prev => (prev + 1) % models.length);
        }, 3000);

        return () => {
            clearInterval(projectInterval);
        };
    }, []);

    return (
        <div className="flex gap-6 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex flex-col">
                <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">Speed</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-mono font-bold text-text-primary">{currentModel.speed}</span>
                    <span className="text-xs text-text-secondary">tok/s</span>
                </div>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div className="flex flex-col">
                <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">Latency</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-mono font-bold text-text-primary">{currentModel.latency}</span>
                    <span className="text-xs text-text-secondary">ms</span>
                </div>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div className="flex flex-col min-w-[120px]">
                <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">Project</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-sm font-mono font-bold text-accent-blue transition-opacity duration-500">
                        {currentModel.name}
                    </span>
                </div>
            </div>
        </div>
    );
}
