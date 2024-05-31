import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import { modalType } from '../../utils/app-constants'
import { useSelector } from 'react-redux'
import { useBlockUnblockUserMutation } from '../../store/apis/userApi'
import { errorMsg, successMsg } from '../../constants/msgs'
import ThemeSpinner from '../general/ThemeSpinner'

const BlockUnblockModal = ({ isOpen, setIsOpen }) => {
    const { selectedData } = useSelector(state => state.user)
    const [blockUnblockUser, { isLoading }] = useBlockUnblockUserMutation()

    const handleBlockUnblockUser = async () => {
        const userId = selectedData?._id
        const { data, error } = await blockUnblockUser(userId)

        if (data) {
            setIsOpen({ type: null, open: false })
            successMsg(data.message)
        }
        else {
            errorMsg(error.data.message)
        }
    }

    return (
        <Modal
            className='theme-modal block-unblock-modal'
            show={isOpen?.open && isOpen?.type == modalType.block}
            onHide={() => setIsOpen({ type: null, open: false })}
            size='md'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <header className="header d-flex align-items-center justify-content-between">
                <h3 className='text-black fw-700'>{selectedData?.block ? "Unblock User" : "Block User"}</h3>
                <div className="box cursor" onClick={() => setIsOpen({ type: null, open: false })}>
                    <FaTimes />
                </div>
            </header>

            <Modal.Body>
                <div>
                    <h6 className='mb-4'>Are you sure you want to {selectedData?.block ? "unblock" : "block"} this user ?</h6>
                    <Button
                        className='btn-solid btn-purple'
                        onClick={handleBlockUnblockUser}
                        disabled={isLoading}
                    >
                        {
                            isLoading ?
                                <ThemeSpinner /> :
                                selectedData?.block ? "Unblock" : "Block"
                        }
                    </Button>
                    <Button className='btn-outline btn-grey ms-2'>Cancel</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default BlockUnblockModal