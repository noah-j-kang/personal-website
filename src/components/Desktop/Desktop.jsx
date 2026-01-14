import React, { useState } from 'react';
import Window from '../Window/Window';
import FileExplorer from '../FileExplorer/FileExplorer';
import Terminal from '../Terminal/Terminal';
import styles from './Desktop.module.css';

// Simple Window Manager Context (internal for now, could be hoisted)
// Actually, to link Dock and Desktop, we need shared state.
// I will move this state to App.jsx later, but for now let's just make Desktop render some default windows to prove it works,
// OR better yet, expose a way to open them. 
// Let's modify App.jsx to hold the state and pass it down.

// This file is just a container now?
// Let's make Desktop the layout manager for windows.

const Desktop = ({ windows, closeWindow, focusWindow }) => {
    return (
        <div className={styles.desktopContainer}>
            {windows.map(win => (
                <Window
                    key={win.id}
                    title={win.title}
                    isActive={win.active}
                    onClose={() => closeWindow(win.id)}
                    onClick={() => focusWindow(win.id)}
                >
                    {win.content === 'files' && <FileExplorer />}
                    {win.content === 'terminal' && <Terminal />}
                    {/* Default fallback */}
                    {!['files', 'terminal'].includes(win.content) && <div>Content for {win.title}</div>}
                </Window>
            ))}
        </div>
    );
};

export default Desktop;
