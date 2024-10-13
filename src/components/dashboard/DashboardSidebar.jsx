import React, { useState } from 'react'
import { LogoSvg } from '../../constants/svgs'
import { IoClose } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, useLocation } from 'react-router-dom';
import { HiChevronDown } from "react-icons/hi";
import { RiFileList2Line } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Collapse } from 'react-bootstrap';
import { MdOutlineCircle } from "react-icons/md";
import LogoutModal from '../modal/LogoutModal';

const DashboardSidebar = ({ closeSidebar }) => {
    const [open, setOpen] = useState(false)
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
    const location = useLocation()

    const nestedActive = (path) => {
        if (location.pathname.includes(path)) {
            return 'active-light'
        }
        else {
            return ''
        }
    }

    return (
        <>
            <div className='dashboard-sidebar'>
                <div className="header d-flex align-items-center justify-content-between">
                    <div className="logo d-flex align-items-center">
                        <LogoSvg />
                        <h4 className='ms-3'><b className="text-white">Sary Stars</b></h4>
                    </div>

                    <IoClose size={22} className='text-black d-block d-md-none' onClick={closeSidebar} />
                </div>

                <div className="link-wrapper">
                    <ul>
                        <li className='mb-3'>
                            <NavLink to="/admin/dashboard" onClick={closeSidebar}>
                                <div className="icon-wrapper">
                                    <RxDashboard className='icon' />
                                </div>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>

                        <li className='mb-3'>
                            <NavLink to="/admin/user" onClick={closeSidebar}>
                                <div className="icon-wrapper">
                                    <AiOutlineUser className='icon' />
                                </div>
                                <span>User</span>
                            </NavLink>
                        </li>

                       <li className="mb-3">
                <div
                  className={`nested cursor ${nestedActive("/admin/page")} `}
                  onClick={() => setOpen(!open)}
                  aria-controls="content-management"
                  aria-expanded={open}
                >
                  <div className="icon-wrapper">
                    <RiFileList2Line className="icon" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span>Content Management</span>
                    <HiChevronDown />
                  </div>
                </div>

                <Collapse in={open}>
                  <ul id="content-management" className="custom-collapse">
                    <li className="mb-3">
                      <NavLink
                        to="/admin/page/terms-and-conditions"
                        onClick={closeSidebar}
                      >
                        <MdOutlineCircle className="icon me-2" />
                        <span>Terms and Conditions</span>
                      </NavLink>
                    </li>

                    <li className="mb-3">
                      <NavLink
                        to="/admin/page/privacy-policy"
                        onClick={closeSidebar}
                      >
                        <MdOutlineCircle className="icon me-2" />
                        <span>Privacy Policy</span>
                      </NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>

                        <li className='mb-3'>
                            <div className='nested cursor' onClick={() => setIsLogoutModalOpen(true)}>
                                <div className="icon-wrapper">
                                    <RiLogoutBoxRLine className='icon' />
                                </div>
                                <span>Logout</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <LogoutModal isOpen={isLogoutModalOpen} setIsOpen={setIsLogoutModalOpen} />
        </>
    )
}

export default DashboardSidebar