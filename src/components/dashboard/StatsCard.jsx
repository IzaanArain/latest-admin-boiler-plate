import React from 'react'
import { NavLink } from 'react-router-dom'
import { LuUserCircle2 } from "react-icons/lu";

const StatsCard = ({ data }) => {
    return (
        <div className='stats-card'>
            <div className='d-flex align-items-center justify-content-between'>
                <span className='text-uppercase text-grey'>{data?.title}</span>

                <div className={`box ${data?.color}`}>
                    {data?.icon}
                </div>
            </div>

            <h3 className='mt-2 text-black'>{data?.count}</h3>
        </div>
    )
}

export default StatsCard