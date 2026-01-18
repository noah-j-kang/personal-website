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
      children: ['interviews']
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
    'interviews': {
      id: 'interviews',
      name: 'Interviews',
      type: 'folder',
      parent: 'documents',
      children: ['file_2017', 'file_2023', 'file_2025']
    },
    'file_2017': {
      id: 'file_2017',
      name: '2017',
      type: 'file',
      icon: 'interview',
      parent: 'interviews'
    },
    'file_2023': {
      id: 'file_2023',
      name: '2023',
      type: 'file',
      icon: 'interview',
      parent: 'interviews'
    },
    'file_2025': {
      id: 'file_2025',
      name: '2025',
      type: 'file',
      icon: 'interview',
      parent: 'interviews'
    },
    'summer_trip': { id: 'summer_trip', name: 'Summer 2025', type: 'folder', parent: 'pictures', children: [] },
    'website_v1': { id: 'website_v1', name: 'Personal Site', type: 'folder', parent: 'projects', children: [] }
  });

  return (
    <FileSystemContext.Provider value={{ files }}>
      {children}
    </FileSystemContext.Provider>
  );
};
