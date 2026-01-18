import React from 'react';
import { useFileSystem } from '../../contexts/FileSystemContext';
import styles from './FileExplorer.module.css';
import folderOpenIcon from '../../assets/icons/folder-open.png';
import interviewIcon from '../../assets/icons/interview.png';

const FileExplorer = ({ onOpenFile }) => {
    const { files } = useFileSystem();
    const [currentFolderId, setCurrentFolderId] = React.useState('home');
    const [selectedIds, setSelectedIds] = React.useState([]);

    const currentFolder = files[currentFolderId] || files['home'];

    // Breadcrumb logic
    const getBreadcrumbs = (folderId) => {
        const path = [];
        let curr = files[folderId];
        while (curr) {
            path.unshift(curr);
            curr = files[curr.parent];
        }
        return path;
    };
    const breadcrumbs = getBreadcrumbs(currentFolderId);

    const handleFileClick = (fileId) => {
        setSelectedIds([fileId]);
    };

    const handleFileDoubleClick = (file) => {
        if (file.type === 'folder') {
            setCurrentFolderId(file.id);
            setSelectedIds([]);
        } else {
            if (onOpenFile) onOpenFile(file);
            console.log(`Open file: ${file.name}`);
        }
    };

    const handleNavigateUp = () => {
        if (currentFolder.parent) {
            setCurrentFolderId(currentFolder.parent);
            setSelectedIds([]);
        }
    };

    return (
        <div className={styles.explorerContainer}>
            <div className={styles.sidebar}>
                <div className={`${styles.sidebarItem} ${currentFolderId === 'home' ? styles.activeSidebar : ''}`} onClick={() => setCurrentFolderId('home')}>🏠 Home</div>
                <div className={styles.sidebarItem} onClick={() => setCurrentFolderId('documents')}>📄 Documents</div>
                <div className={styles.sidebarItem} onClick={() => setCurrentFolderId('pictures')}>🖼️ Pictures</div>
                <div className={styles.sidebarItem} onClick={() => setCurrentFolderId('videos')}>🎥 Videos</div>
                <div className={styles.separator}></div>
                <div className={styles.sidebarItem}>🗑️ Trash</div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.topBar}>
                    <div className={styles.navigationControls}>
                        <button onClick={handleNavigateUp} disabled={!currentFolder.parent}>⬆</button>
                    </div>
                    <div className={styles.breadcrumbPath}>
                        {breadcrumbs.map((folder, index) => (
                            <span key={folder.id} className={styles.crumb} onClick={() => setCurrentFolderId(folder.id)}>
                                {folder.name} {index < breadcrumbs.length - 1 && ' > '}
                            </span>
                        ))}
                    </div>
                    <div className={styles.windowControlsPlaceholder}>
                        {/* Search, view toggle etc */}
                        🔍 ≣
                    </div>
                </div>

                <div className={styles.grid}>
                    {currentFolder.children.length === 0 ? (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>📂</div>
                            <div>Folder is empty</div>
                        </div>
                    ) : (
                        currentFolder.children.map(childId => {
                            const file = files[childId];
                            if (!file) return null;
                            const isSelected = selectedIds.includes(file.id);
                            return (
                                <div
                                    key={file.id}
                                    className={`${styles.fileItem} ${isSelected ? styles.selected : ''}`}
                                    onClick={() => handleFileClick(file.id)}
                                    onDoubleClick={() => handleFileDoubleClick(file)}
                                >
                                    <div className={styles.icon}>
                                        {file.type === 'folder' ?
                                            <img src={folderOpenIcon} alt="Folder" className={styles.fileIconImg} /> :
                                            file.icon === 'interview' ? <img src={interviewIcon} alt="Interview" className={styles.fileIconImg} /> :
                                                '📄'}
                                    </div>
                                    <div className={styles.name}>{file.name}</div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default FileExplorer;
