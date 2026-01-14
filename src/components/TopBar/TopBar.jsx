import React, { useState, useEffect } from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        // Ubuntu format: "Oct 24 10:30" - Day Month Time
        // For simplicity: "Wed Oct 24 10:30"
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false });
    };

    return (
        <div className={styles.topBar}>
            <div className={styles.left}>
                <span className={styles.activities}>Activities</span>
            </div>

            <div className={styles.center}>
                <span className={styles.date}>{formatTime(time)}</span>
            </div>

            <div className={styles.right}>
                <div className={styles.systemTray}>
                    <span>🇬🇧</span>
                    <span>🔈</span>
                    <span>🔋</span>
                    <span>▼</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
