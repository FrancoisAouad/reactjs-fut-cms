import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar-link-item.css';

type sidebarLinkItemType = {
  text: string;
  route: string;
  onChangeSelectedItem: (arg0: number) => void;
  index: number;
  selected: boolean;
  icon?: string;
};

const SidebarLinkItem = ({ text, route, onChangeSelectedItem, index, selected, icon }: sidebarLinkItemType) => {
  return (
    <Link
      className={selected ? 'sidebar-link-item-selected' : 'sidebar-link-item'}
      to={route}
      onClick={() => {
        onChangeSelectedItem(index);
      }}
    >
      <div className="sidebar-link-image-container">
        <img className="sidebar-link-image-icon" src={icon} alt="icon" />
      </div>
      {text}
    </Link>
  );
};

export default SidebarLinkItem;
