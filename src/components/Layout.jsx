import React from 'react';
import { Home as HomeIcon, LayoutList, PenSquare, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children, showNavbar = true }) => {
  const location = useLocation();

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative overflow-hidden font-sans text-white flex flex-col'>
      {/* Main scrollable content area */}
      <div className={`flex-1 overflow-y-auto hide-scrollbar ${showNavbar ? 'pb-[90px]' : 'pb-6'}`}>
        {children}
      </div>

      {/* Bottom Navigation */}
      {showNavbar && (
        <div className='absolute bottom-0 w-full px-4 pb-6 pt-2 bg-gradient-to-t from-[#0B0E21] via-[#0B0E21] to-transparent'>
          <div className='bg-[#0B0E21] gradient-border-card rounded-[42px] p-1.5 flex items-center justify-between shadow-lg border border-[#2A2D40]/30 backdrop-blur-md'>

            <Link to="/home" className={`w-full h-[48px] rounded-[20px] flex items-center justify-center transition-all ${location.pathname === '/home' ? 'bg-[#87ADF0] shadow-[0_0_15px_rgba(143,170,255,0.4)]' : ''}`}>
              <img src={location.pathname === '/home' ? '/assets/images/menu1-active.png' : '/assets/images/menu1.png'} alt="home" className="w-[24px] h-[24px] object-contain" />
            </Link>

            <Link to="/tasks" className={`w-full h-[48px] flex items-center justify-center rounded-[20px] transition-all ${location.pathname === '/tasks' ? 'bg-[#87ADF0] shadow-[0_0_15px_rgba(143,170,255,0.4)]' : ''}`}>
              <img src={location.pathname === '/tasks' ? '/assets/images/menu2-active.png' : '/assets/images/menu2.png'} alt="tasks" className="w-[24px] h-[24px] object-contain" />
            </Link>

            <Link to="/task-list" className={`w-full h-[48px] flex items-center justify-center rounded-[20px] transition-all ${location.pathname === '/task-list' ? 'bg-[#87ADF0] shadow-[0_0_15px_rgba(143,170,255,0.4)]' : ''}`}>
              <img src={location.pathname === '/task-list' ? '/assets/images/menu3-active.png' : '/assets/images/menu3.png'} alt="edit" className="w-[24px] h-[24px] object-contain" />
            </Link>

            <Link to="/profile" className={`w-full h-[48px] flex items-center justify-center rounded-[20px] transition-all ${location.pathname === '/profile' ? 'bg-[#87ADF0] shadow-[0_0_15px_rgba(143,170,255,0.4)]' : ''}`}>
              <img src={location.pathname === '/profile' ? '/assets/images/menu4-active.png' : '/assets/images/menu4.png'} alt="profile" className="w-[24px] h-[24px] object-contain" />
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
