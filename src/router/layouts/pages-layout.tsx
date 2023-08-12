import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/molecules/sidebar/sidebar';
import './pages-layout.css';

const PagesLayout = () => {
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <div id="screen-container" className="screen-container">
      <Sidebar onPressItem={setSelectedPage} selectedPage={selectedPage} />
      <div style={{ width: '60px', height: '100vh' }}></div>
      <div id="screen-content">
        <Outlet />
      </div>
    </div>
  );
};
export default PagesLayout;
