import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import ProfilePlaceholder from '../../assets/img/profile-placeholder.jpg'
import UserImg from '../../assets/img/user.png'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LogoutModal from '../modal/LogoutModal';

const DashboardHeader = ({ handleSidebar }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='dashboard-header'>
                <DropdownButton
                    title={
                        <img src={UserImg} alt="" onError={(e) => e.target.src = ProfilePlaceholder} />
                    }
                >
                    <NavLink to="/admin/change-password">Change Password</NavLink>
                    <h6 className='cursor' onClick={() => setIsOpen(true)}>Logout</h6>
                </DropdownButton>

                <FaBars className='ms-3 cursor' onClick={handleSidebar} />
            </div>

            <LogoutModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default DashboardHeader