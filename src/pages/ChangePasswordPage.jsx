import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ChangePasswordForm from '../components/auth/ChangePasswordForm'

const ChangePasswordPage = () => {
    return (
        <div className='pages change-password-page'>
            <Row>
                <Col xs={12} className='mb-3'>
                    <h2 className='text-black fw-800'>Change Password</h2>
                </Col>

                <Col xs={12}>
                    <div className="wrapper">
                        <Row>
                            <Col xl={4}>
                                <ChangePasswordForm />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ChangePasswordPage