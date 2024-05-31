import React from 'react'
import { Modal } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import { modalType } from '../../utils/app-constants'

const ViewModal = ({ children, title, size, isOpen, setIsOpen }) => {
    return (
        <Modal
            className='theme-modal'
            show={isOpen?.open && isOpen?.type == modalType.view}
            onHide={() => setIsOpen({ type: null, open: false })}
            size={size}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <header className="header d-flex align-items-center justify-content-between">
                <h3 className='text-black fw-700'>{title}</h3>
                <div className="box cursor" onClick={() => setIsOpen({ type: null, open: false })}>
                    <FaTimes />
                </div>
            </header>

            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default ViewModal