import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ImPencil2 } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

import { SidebarData } from './SidebarData';

import './styles/Sidebar.css';

const IconSidebar = ({ logout }) => (
    <div className="icon-sidebar-wrapper">
        <div className="icon-sidebar-icon1">
            <div className="icon1__inner">
                <ImPencil2 />
            </div>
        </div>
        <div className="icon-sidebar-icon2">
            <div className="icon1__inner" onClick={logout}>
                <BiLogOut />
            </div>
        </div>
    </div>
);

function Sidebar() {

    return (
        <>
            <IconSidebar />
            <nav className='sidebar-menu'>
                <ul className='sidebar-menu-items'>
                    <li className='sidebar-toggle'>
                        <Link to='./' className='menu-header'>
                            <p>Home of Writers</p>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <div className='sidebar-item-icon'>{item.icon}</div>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;