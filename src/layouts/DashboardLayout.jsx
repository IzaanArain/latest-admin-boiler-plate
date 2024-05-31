import React, { useState } from 'react'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import { Col, Container, Row } from 'react-bootstrap'
import DashboardHeader from '../components/dashboard/DashboardHeader'

const DashboardLayout = ({ children }) => {
    const [active, setActive] = useState(false)

    const handleSidebar = () => {
        setActive(!active)
    }

    const closeSidebar = () => {
        setActive(false)
    }

    return (
        <div className="dashboard-layout">
            <aside className={`sidebar-wrapper ${active ? "active" : ""} `}>
                <DashboardSidebar closeSidebar={closeSidebar} />
            </aside>

            <section className='dasboard-content-wrapper'>
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <DashboardHeader handleSidebar={handleSidebar} />
                        </Col>

                        <Col xs={12} className='mt-4'>
                            {children}
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default DashboardLayout