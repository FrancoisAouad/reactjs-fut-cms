import React from 'react';
import './custom-sidebar-header.css';
import { ReactComponent as SidebarCloseIcon } from '../../../assets/svg/sidebar-icon.svg';
import { ReactComponent as CMSLogoSvg } from '../../../assets/svg/cms-logo.svg';

type CustomSidebarHeaderProps = {
  onClose: () => void;
};

const CustomSidebarHeader = ({ onClose }: CustomSidebarHeaderProps) => (
  <div id="sidebar-header-container">
    <div id="sidebar-header-left-container">
      <CMSLogoSvg id="sidebar-logo" />
      <div id="sidebar-user-container">
        FUT CMS
        {/* <span>Super Admin</span> */}
      </div>
    </div>
    <div onClick={onClose} id="sidebar-back-button-container">
      <SidebarCloseIcon id="sidebar-back-button" />
    </div>
  </div>
);
export default CustomSidebarHeader;
