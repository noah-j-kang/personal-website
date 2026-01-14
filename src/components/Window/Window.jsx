import React, { useState } from 'react';
import styles from './Window.module.css';

const Window = ({ title, children, onClose, isActive, onClick }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({ x: 50, y: 50 }); // Initial position
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        if (isMaximized) return; // Don't drag if maximized
        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
        onClick(); // Focus window
    };

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragOffset.x,
                    y: e.clientY - dragOffset.y
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragOffset]);

    const toggleMaximize = (e) => {
        e.stopPropagation(); // Prevent drag on maximize click
        setIsMaximized(!isMaximized);
        onClick(); // Focus on interaction
    };

    return (
        <div
            className={`${styles.window} ${isActive ? styles.active : ''} ${isMaximized ? styles.maximized : ''}`}
            onClick={onClick}
            style={{
                zIndex: isActive ? 10 : 1,
                top: isMaximized ? '28px' : `${position.y}px`,
                left: isMaximized ? 0 : `${position.x}px`,
                transform: 'none',
                // Disable transition during drag to prevent glitching/fighting
                transition: isDragging ? 'none' : undefined
            }}
        >
            <div className={styles.titleBar} onMouseDown={handleMouseDown} onDoubleClick={toggleMaximize}>
                <div className={styles.windowTitle}>{title}</div>
                <div className={styles.windowControls} onMouseDown={(e) => e.stopPropagation()}>
                    <button className={styles.minimize} onClick={toggleMaximize}>
                        {isMaximized ? '❐' : '□'}
                    </button>
                    <button className={styles.close} onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}>×</button>
                </div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Window;
