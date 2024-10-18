import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import { useSignoutMutation } from '../../store/apis/AuthApi'
import { errorMsg, successMsg } from '../../constants/msgs'
import { EmptyLocalStorage } from '../../utils/helper'
import ThemeSpinner from '../general/ThemeSpinner'
import { useNavigate } from 'react-router-dom'

const LogoutModal = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate()
    const [signout, { isLoading }] = useSignoutMutation()

    const handleLogout = async () => {
        const { data, error } = await signout()

        if (data) {
            successMsg(data.message)
            EmptyLocalStorage()
            setIsOpen(false)
            navigate('/admin ')
        }
        else {
            errorMsg(error.data.message)
        }
    }

    return (
        <Modal
            className='theme-modal logout-modal'
            show={isOpen}
            onHide={() => setIsOpen(false)}
            size='md'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <header className="header d-flex align-items-center justify-content-between">
                <h3 className='text-black fw-700'>Logout</h3>
                <div className="box cursor" onClick={() => setIsOpen(false)}>
                    <FaTimes />
                </div>
            </header>

            <Modal.Body>
                <div>
                    <h6 className='mb-4'>Are you sure you want to logout ?</h6>
                    <Button className='btn-solid btn-purple' onClick={handleLogout}>{isLoading ? <ThemeSpinner /> : 'Logout'}</Button>
                    <Button className='btn-outline btn-grey ms-2'>Cancel</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default LogoutModal