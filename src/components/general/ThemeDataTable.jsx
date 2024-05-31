import Lottie from 'lottie-react';
import React from 'react'
import DataTable from 'react-data-table-component';
import loader from '../../jsons/loader.json';
import { useDispatch } from 'react-redux';

const ThemeDataTable = ({ columns, rows, isLoading, setPage, setPerPage }) => {
    const dispatch = useDispatch()

    return (
        <div className='theme-data-table'>
            <DataTable
                columns={columns}
                data={rows}
                responsive={true}
                highlightOnHover={true}
                fixedHeader={true}
                // paginationServer={true}
                pagination={true}
                onChangeRowsPerPage={(perPage) => dispatch(setPerPage(perPage))}
                onChangePage={(page, totalRows) => {
                    dispatch(setPage(page))
                }}
                progressPending={isLoading}
                progressComponent={<div className='loader'>
                    <Lottie
                        animationData={loader}
                        loop={true}
                        autoplay={true}
                    />
                </div>}
            />
        </div>
    )
}

export default ThemeDataTable