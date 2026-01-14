import React, { createContext, useState, useContext } from 'react';

const FileSystemContext = createContext();

export const useFileSystem = () => useContext(FileSystemContext);

export const FileSystemProvider = ({ children }) => {
  const [files, setFiles] = useState({
    'home': {
      id: 'home',
      name: 'Home',
      type: 'folder',
      children: ['documents', 'pictures', 'videos', 'projects']
    },
    'desktop': {
      id: 'desktop',
      name: 'Desktop',
      type: 'folder',
      children: []
    },
    'documents': {
      id: 'documents',
      name: 'Documents',
      type: 'folder',
      parent: 'home',
      children: ['resume', 'notes']
    },
    'pictures': {
      id: 'pictures',
      name: 'Pictures',
      type: 'folder',
      parent: 'home',
      children: ['summer_trip']
    },
    'videos': {
      id: 'videos',
      name: 'Videos',
      type: 'folder',
      parent: 'home',
      children: []
    },
    'projects': {
      id: 'projects',
      name: 'Projects',
      type: 'folder',
      parent: 'home',
      children: ['website_v1']
    },
    'resume': { id: 'resume', name: 'Resume.pdf', type: 'file', parent: 'documents' },
    'notes': { id: 'notes', name: 'notes.txt', type: 'file', parent: 'documents' },
    'summer_trip': { id: 'summer_trip', name: 'Summer 2025', type: 'folder', parent: 'pictures', children: [] },
    'website_v1': { id: 'website_v1', name: 'Personal Site', type: 'folder', parent: 'projects', children: [] }
  });

  return (
    <FileSystemContext.Provider value={{ files }}>
      {children}
    </FileSystemContext.Provider>
  );
};
