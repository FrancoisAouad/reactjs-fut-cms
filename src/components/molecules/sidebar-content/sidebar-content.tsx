import React from 'react';
import SidebarItem from '../../atoms/sidebar-link-item/sidebar-link-item-type';
import SidebarLinkItem from '../../atoms/sidebar-link-item/sidebar-link-item';
import './sidebar-content.css';

type SidebarProps = {
  selectedPage: number;
  sidebarItems: Array<SidebarItem>;
  onChangeSelectedItem: (arg0: number) => void;
};

const SidebarContent = ({ onChangeSelectedItem, selectedPage, sidebarItems }: SidebarProps) => (
  <>
    <div className="sidebar-title-container">
      <h2 className="sidebar-title">Sections</h2>
    </div>
    {sidebarItems.map((item, index) => {
      switch (item.type) {
        case 'navigation':
          return (
            <SidebarLinkItem
              text={item.text}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              route={item.route!}
              onChangeSelectedItem={onChangeSelectedItem}
              index={index}
              icon={item.icon}
              selected={index === selectedPage}
            />
          );
        default:
          return null;
      }
    })}
  </>
);

export default SidebarContent;
