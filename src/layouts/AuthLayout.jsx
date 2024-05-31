import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AuthImg from '../assets/img/auth-img.png'

const AuthLayout = ({ children }) => {
    return (
        <div className='auth-layout'>
            <Row className='h-100'>
                <Col lg={7} className='h-100 d-none d-lg-block'>
                    <div className="auth-img-wrapper h-100">
                        <img className='' src={AuthImg} alt="" />
                    </div>
                </Col>

                <Col lg={5} className=''>
                    <div className="form-wrapper">
                        {children}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AuthLayout