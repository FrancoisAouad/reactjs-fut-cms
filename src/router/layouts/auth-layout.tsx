import React from 'react';
import { ReactComponent as CMSLogoSvg } from '../../assets/svg/cms-logo.svg';
import { Outlet } from 'react-router-dom';
import './auth-layout.css';

export default function AuthLayout() {
  return (
    <div className="login-container">
      <div className="left-side">
        <div id="logo-container">
          <CMSLogoSvg className="cms-logo-svg" />
          <div>
            <h1 id="welcome-text">Welcome to FUT CMS</h1>
          </div>
        </div>
      </div>
      <div className="right-side">
        <Outlet />
      </div>
    </div>
  );
}
