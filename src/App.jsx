import React from 'react';
import { FileSystemProvider } from './contexts/FileSystemContext';
import TopBar from './components/TopBar/TopBar';
import Desktop from './components/Desktop/Desktop';
import Taskbar from './components/Taskbar/Taskbar';

function App() {
  const [windows, setWindows] = React.useState([]);

  const openWindow = (appId, data = null) => {
    // Check if already open
    // For simplicity, allow multiples or just focus
    const newWindow = {
      id: Date.now(),
      title: appId === 'files' ? 'File Manager' : appId === 'terminal' ? 'Terminal' : appId,
      content: appId,
      active: true,
      data: data
    };
    setWindows([...windows.map(w => ({ ...w, active: false })), newWindow]);
  };

  const handleOpenFile = (file) => {
    if (file.id === 'file_2017') {
      openWindow('chat', { year: '2017' });
    } else if (file.id === 'file_2023') {
      openWindow('chat', { year: '2023' });
    } else if (file.id === 'file_2025') {
      openWindow('chat', { year: '2025' });
    } else {
      openWindow(file.id); // Default behavior
    }
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
        <Desktop windows={windows} closeWindow={closeWindow} focusWindow={focusWindow} onOpenFile={handleOpenFile} />
        <Taskbar onAppClick={openWindow} openWindows={windows} />
      </div>
    </FileSystemProvider>
  );
}

export default App;
