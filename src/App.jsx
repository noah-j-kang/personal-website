import React from 'react';
import { FileSystemProvider } from './contexts/FileSystemContext';
import TopBar from './components/TopBar/TopBar';
import Desktop from './components/Desktop/Desktop';
import Taskbar from './components/Taskbar/Taskbar';

function App() {
  const [windows, setWindows] = React.useState([]);

  const openWindow = (appId) => {
    // Check if already open
    // For simplicity, allow multiples or just focus
    const newWindow = {
      id: Date.now(),
      title: appId === 'files' ? 'File Manager' : appId === 'terminal' ? 'Terminal' : appId,
      content: appId,
      active: true
    };
    setWindows([...windows.map(w => ({ ...w, active: false })), newWindow]);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const focusWindow = (id) => {
    setWindows(windows.map(w => ({
      ...w,
      active: w.id === id
    })));
  };

  return (
    <FileSystemProvider>
      <TopBar />
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <Desktop windows={windows} closeWindow={closeWindow} focusWindow={focusWindow} />
        <Taskbar onAppClick={openWindow} openWindows={windows} />
      </div>
    </FileSystemProvider>
  );
}

export default App;
