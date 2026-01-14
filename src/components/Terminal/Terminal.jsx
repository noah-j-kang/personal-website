import React, { useState } from 'react';
import styles from './Terminal.module.css';

const Terminal = () => {
    const [history, setHistory] = useState([
        "Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.0-76-generic x86_64)",
        "",
        " * Documentation:  https://help.ubuntu.com",
        " * Management:     https://landscape.canonical.com",
        " * Support:        https://ubuntu.com/advantage",
        "",
        "System information as of " + new Date().toString(),
        ""
    ]);
    const [input, setInput] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const newHistory = [...history, `noah@ubuntu:~$ ${input}`];

            // Basic command handling
            if (input.trim() === 'help') {
                newHistory.push("Available commands: help, clear, ls, whoami");
            } else if (input.trim() === 'clear') {
                setHistory([]);
                setInput('');
                return;
            } else if (input.trim() === 'ls') {
                newHistory.push("Documents  Pictures  Videos  Desktop");
            } else if (input.trim() === 'whoami') {
                newHistory.push("noah");
            } else if (input.trim() !== '') {
                newHistory.push(`Command not found: ${input}`);
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <div className={styles.terminal}>
            <div className={styles.output}>
                {history.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
            </div>
            <div className={styles.inputLine}>
                <span className={styles.prompt}>noah@ubuntu:~$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={styles.input}
                    autoFocus
                />
            </div>
        </div>
    );
};

export default Terminal;
