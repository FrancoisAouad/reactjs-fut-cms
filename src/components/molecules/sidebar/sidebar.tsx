import { Dispatch, SetStateAction, useState } from 'react';
import { Sidebar as SidebarPrime } from 'primereact/sidebar';
import { ReactComponent as SidebarOpenIcon } from '../../../assets/svg/sidebar-icon.svg';
import SidebarContent from '../sidebar-content/sidebar-content';
import SidebarItem from '../../atoms/sidebar-link-item/sidebar-link-item-type';
import { Route } from '../../../configs/enums';
import sidebarIcons from '../../../assets/sidebar-icons';
import SidebarIcon from '../../atoms/sidebar-icon/sidebar-icon';
import CustomSidebarHeader from '../custom-sidebar-header/custom-sidebar-header';
import './sidebar.css';

type SidebarProps = {
  onPressItem: Dispatch<SetStateAction<number>>;
  selectedPage: number;
};

const sidebarItems: SidebarItem[] = [
  {
    text: 'Articles',
    type: 'navigation',
    route: Route.ARTICLES,
    icon: sidebarIcons.articles,
  },
  {
    text: 'Lovs',
    type: 'navigation',
    route: Route.LOV,
    icon: sidebarIcons.lovs,
  },
];

const Sidebar = ({ onPressItem, selectedPage }: SidebarProps) => {
  const [visible, setVisible] = useState(false);

  const handleSelectItem = (selectedItem: number) => {
    onPressItem(selectedItem);
    setVisible(false);
  };

  return (
    <>
      <div className="sidebar-closed-container">
        <div id="sidebar-open-icon-container" onClick={() => setVisible(true)}>
          <SidebarOpenIcon id="sidebar-open-icon" />
        </div>
        {sidebarItems.map((item, index) => (item.icon ? <SidebarIcon icon={item.icon} selected={index === selectedPage} /> : null))}
      </div>
      <SidebarPrime showCloseIcon={false} visible={visible} onHide={() => setVisible(false)}>
        <CustomSidebarHeader
          onClose={() => {
            setVisible(false);
          }}
        />
        <SidebarContent sidebarItems={sidebarItems} onChangeSelectedItem={handleSelectItem} selectedPage={selectedPage} />
      </SidebarPrime>
    </>
  );
};
export default Sidebar;
