import React from 'react';
import './sidebar-icon.css';

type sidebarLinkItemType = {
  selected: boolean;
  icon?: string;
};

const SidebarIcon = ({ icon, selected }: sidebarLinkItemType) => {
  return (
    <div className={selected ? 'sidebar-icon-container-selected' : 'sidebar-icon-container'}>
      <img className="sidebar-icon" src={icon} alt="icon" />
    </div>
  );
};

export default SidebarIcon;
