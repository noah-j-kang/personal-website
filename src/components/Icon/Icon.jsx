import React from 'react';
import styles from './Icon.module.css';

const Icon = ({ name, type, onDoubleClick }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'folder':
                return '📁';
            case 'image':
                return '🖼️';
            case 'video':
                return '🎬';
            case 'text':
                return '📄';
            default:
                return '⬜';
        }
    };

    return (
        <div className={styles.iconContainer} onDoubleClick={onDoubleClick}>
            <div className={styles.iconImage}>
                {getIcon(type)}
            </div>
            <div className={styles.iconLabel}>
                {name}
            </div>
        </div>
    );
};

export default Icon;
