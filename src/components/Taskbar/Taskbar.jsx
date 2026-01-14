import React from 'react';
import styles from './Taskbar.module.css';
import fileManagerIcon from '../../assets/icons/file-manager.png';
import terminalIcon from '../../assets/icons/terminal.png';

const Taskbar = ({ onAppClick, openWindows = [] }) => {
    // Placeholder apps for the Dock. 
    // In a real scenario, these would trigger window openings via Context/Props.
    const dockApps = [
        { id: 'files', name: 'File Manager', icon: <img src={fileManagerIcon} alt="File Manager" className={styles.appIcon} /> },
        { id: 'terminal', name: 'Terminal', icon: <img src={terminalIcon} alt="Terminal" className={styles.appIcon} /> }
    ];

    return (
        <div className={styles.dockContainer}>
            <div className={styles.dock}>
                {dockApps.map((app) => {
                    const isOpen = openWindows.some(w => w.content === app.id);
                    return (
                        <div key={app.id} className={styles.dockItem} title={app.name} onClick={() => onAppClick(app.id)}>
                            <span className={styles.icon}>{app.icon}</span>
                            {isOpen && <div className={styles.activeDot}></div>}
                        </div>
                    );
                })}

                <div className={styles.separator}></div>

                <div className={styles.dockItem} title="Show Applications">
                    <span className={styles.gridIcon}>⋮⋮⋮</span>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;
