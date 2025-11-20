import React, { useState, useEffect } from 'react';

export default function LiveMetrics() {
    const [tokensPerSec, setTokensPerSec] = useState(145);
    const [latency, setLatency] = useState(12);

    useEffect(() => {
        const interval = setInterval(() => {
            setTokensPerSec(prev => Math.max(100, Math.min(200, prev + (Math.random() - 0.5) * 20)));
            setLatency(prev => Math.max(5, Math.min(20, prev + (Math.random() - 0.5) * 2)));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-6 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex flex-col">
                <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">Speed</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-mono font-bold text-text-primary">{Math.round(tokensPerSec)}</span>
                    <span className="text-xs text-text-secondary">tok/s</span>
                </div>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div className="flex flex-col">
                <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">Latency</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-mono font-bold text-text-primary">{Math.round(latency)}</span>
                    <span className="text-xs text-text-secondary">ms</span>
                </div>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div className="flex flex-col">
                <span className="text-xs text-text-secondary uppercase tracking-wider font-medium">Model</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-sm font-mono font-bold text-accent-blue">DeepSeek-V3</span>
                </div>
            </div>
        </div>
    );
}
