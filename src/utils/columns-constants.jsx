import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin7Line, RiEdit2Line } from "react-icons/ri";
import { baseUrl, modalType } from "./app-constants";
import ProfilePlaceholder from '../assets/img/profile-placeholder.jpg'
import { TbUserCog } from "react-icons/tb";
import { setSelectedData } from "../store/slices/userSlice";

export const userColumns = (setIsOpen, dispatch) => {
    return (
        [
            {
                key: 'name',
                name: 'Name',
                sortable: true,
                selector: row => row?.fullname || "-",
            },
            {
                key: 'image_name',
                name: 'Image',
                sortable: true,
                selector: row => <div style={{ width: '40px', height: "40px", borderRadius: "50%", }} className='profile-wrapper'>
                    <img style={{ objectFit: "cover", objectPosition: "center" }} src={`${baseUrl}/${row?.image_name}`} alt="" onError={(e) => e.target.src = ProfilePlaceholder} />
                </div>,
            },
            {
                key: 'email',
                name: 'Email',
                sortable: true,
                selector: row => row?.email || "-",
            },
            {
                key: 'phone',
                name: 'Phone',
                sortable: true,
                selector: row => row?.phone || "-",
            },
            {
                key: 'block',
                name: 'Blocked',
                sortable: true,
                selector: row => row.block == false ? "No" : "Yes"
            },
            {
                key: 'action',
                name: 'Action',
                selector: row => (
                    <div className='theme-action'>
                        <FaRegEye
                            className='icon'
                            onClick={() => {
                                setIsOpen({ type: modalType.view, open: true })
                                dispatch(setSelectedData(row))
                            }}
                        />
                        <TbUserCog
                            className='icon'
                            onClick={() => {
                                setIsOpen({ type: modalType.block, open: true })
                                dispatch(setSelectedData(row))
                            }}
                        />
                        {/* <RiDeleteBin7Line
                            className='icon'
                            onClick={() => {
                                setIsOpen({ type: modalType.delete, open: true })
                                dispatch(setSelectedData(row))
                            }}
                        /> */}
                    </div>
                ),
            },
        ]
    )
}