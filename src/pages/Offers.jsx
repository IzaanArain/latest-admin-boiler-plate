import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';
import ThemeInput from '../components/input/ThemeInput';
import { useForm } from 'react-hook-form';
import { LuSearch } from "react-icons/lu";
import ThemeDataTable from '../components/general/ThemeDataTable';
import { modalType } from '../utils/app-constants';
import ViewModal from '../components/modal/ViewModal';
import DeleteModal from '../components/modal/DeleteModal';
import AddOfferModal from '../components/modal/AddOfferModal';
import EditOfferModal from '../components/modal/EditOfferModal';
import OfferDetails from '../components/offers/OfferDetails';
import { getFilteredData } from '../utils/helper';
import { errorMsg, successMsg } from '../constants/msgs';
import {
    useGetOffersListQuery,
    useDeleteOfferMutation,
} from '../store/apis/offersApi';
import { offerColumns } from '../utils/columns-constants';
import { setPage, setPaginatedData, setPerPage } from '../store/slices/offersSlice';

const Offers = () => {
    const { selectedData } = useSelector(state => state.offers); // Get the selected offer data
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState({ type: null, open: false });

    const { register, control, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onChange'
    });

    const searchText = watch('searchText');
    const { isLoading: isOffersLoading, data: offersData, refetch } = useGetOffersListQuery();

    const [deleteOffer, { isLoading: isDeleteLoading }] = useDeleteOfferMutation();

    const handleDeleteOffer = async (e) => {
        e.preventDefault();
        const id = selectedData?._id;
        const { data, error } = await deleteOffer(id);
        if (data) {
            setIsOpen({ type: null, open: false });
            successMsg(data.message);
            refetch();
        } else {
            errorMsg(error.data.message);
        }
    };

    return (
        <>
            <div className="pages user-page">
                <Row>
                    <Col xs={12} className="mb-4">
                        <h2 className="text-black fw-800">Offers</h2>
                    </Col>

                    <Col xs={12} className="mt-2">
                        <div className="table-wrapper">
                            <Row className="justify-content-between">
                                <Col sm={10} lg={10} xl={10}>
                                    <div className="search-input">
                                        <ThemeInput
                                            name="searchText"
                                            control={control}
                                            errors={errors}
                                            placeholder="Search..."
                                            type="text"
                                        />
                                        <LuSearch className="icon text-black" />
                                    </div>
                                </Col>

                                <Col sm={2} lg={2} xl={2} className="text-end mt-3 mt-sm-0">
                                    <Button
                                        onClick={() =>
                                            setIsOpen({ type: modalType.add, open: true })
                                        }
                                        className='w-100 h-100 btn-solid btn-purple'
                                    >
                                        Add Offer
                                    </Button>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <ThemeDataTable
                                    columns={offerColumns(setIsOpen, dispatch)}
                                    rows={getFilteredData(offersData?.data, searchText)}
                                    isLoading={isOffersLoading}
                                    setPage={setPage}
                                    setPerPage={setPerPage}
                                />
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Modals */}
            <ViewModal
                children={<OfferDetails />}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Offer Details"}
            />

            <DeleteModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleDelete={handleDeleteOffer}
                refetch={refetch}
            />

            <AddOfferModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                refetch={refetch}
            />

            <EditOfferModal
                selectedData={selectedData}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                refetch={refetch}
            />
        </>
    );
};

export default Offers;
