import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import { modalType } from '../../utils/app-constants'
import ThemeSpinner from '../general/ThemeSpinner'

const DeleteModal = ({ isOpen, setIsOpen, handleDelete, isLoading }) => {
    return (
        <Modal
            className='theme-modal delete-modal'
            show={isOpen?.open && isOpen?.type == modalType.delete}
            onHide={() => setIsOpen({ type: null, open: false })}
            size='md'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <header className="header d-flex align-items-center justify-content-between">
                <h3 className='text-black fw-700'>Delete Record</h3>
                <div className="box cursor" onClick={() => setIsOpen({ type: null, open: false })}>
                    <FaTimes />
                </div>
            </header>

            <Modal.Body>
                <div>
                    <h6 className='mb-4'>Are you sure you want to delete this record ?</h6>
                    <Button
                        className='btn-solid btn-red'
                        disabled={isLoading}
                        onClick={handleDelete}
                    >
                        {
                            isLoading ? <ThemeSpinner /> : "Delete"
                        }
                    </Button>
                    <Button className='btn-outline btn-grey ms-2' onClick={() => setIsOpen({ type: null, open: false })}>Cancel</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteModal