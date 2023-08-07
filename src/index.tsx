import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import CodeEditor from "components/CodeEditor";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Sidebar />
    <main>
      
    </main>
  </React.StrictMode>
);
