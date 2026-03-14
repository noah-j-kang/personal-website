import React from 'react';

interface TerminalWindowProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function TerminalWindow({ title, children, className = "" }: TerminalWindowProps) {
    return (
        <div className={`terminal-window relative z-20 overflow-hidden ${className}`}>
            <div className="bg-cyber-black text-cyber-blue px-3 py-1 font-header text-xs flex justify-between items-center border-b-2 border-cyber-border">
                <span>{title}</span>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 border border-cyber-border"></div>
                    <div className="w-2.5 h-2.5 border border-cyber-border"></div>
                    <div className="w-2.5 h-2.5 border border-cyber-border"></div>
                </div>
            </div>
            <div className="p-6 md:p-8">
                {children}
            </div>
        </div>
    );
}