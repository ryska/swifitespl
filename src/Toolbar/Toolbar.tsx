import React from 'react';
import './Toolbar.scss';

const Toolbar = () => {
  return (
    <div className="toolbar">
        <span>✨</span>
        <div>
            <a href="/">Główna</a>
            <a href="/events">Wydarzenia</a>
            <a href="/eras">Eras</a>
            <a href="/artists">Artyści</a>
        </div>
    </div>
  );
}

export default Toolbar;