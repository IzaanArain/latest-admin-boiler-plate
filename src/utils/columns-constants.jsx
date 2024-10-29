import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin7Line, RiEdit2Line } from "react-icons/ri";
import { baseUrl, modalType } from "./app-constants";
import ProfilePlaceholder from '../assets/img/profile-placeholder.jpg'
import { TbUserCog } from "react-icons/tb";
import { setSelectedData } from "../store/slices/userSlice";
import { setSelectedData as setSelectedOfferData } from "../store/slices/offersSlice";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const userColumns = (setIsOpen, dispatch) => {
    return (
        [
            {
                key: 'name',
                name: 'Name',
                sortable: true,
                selector: row => row?.name || "-",
            },
            {
                key: 'profileImage',
                name: 'Image',
                sortable: true,
                selector: row =>(
                  <div
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                    className="profile-wrapper"
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src={`${row?.profileImage}`}
                      alt="profile image"
                      onError={(e) => (e.target.src = ProfilePlaceholder)}
                    />
                  </div>
                ),
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
export const offerColumns = (setIsOpen, dispatch) => {
    return [
      {
        key: "name",
        name: "Offer Name",
        sortable: true,
        selector: (row) => row?.name?.slice(0, 20).concat("....") || "-", // Display offer name truncated to 10 characters
      },
      {
        key: "price",
        name: "Price (USD)",
        sortable: true,
        selector: (row) => row?.price ? `$${row?.price}` : "-", // Display price with a dollar sign
      },
      // {
      //   key: "features",
      //   name: "Features",
      //   sortable: true,
      //   selector: (row) => (
      //     <FaRegEye
      //       className="icon"
      //       onClick={() => {
      //         setIsOpen({ type: modalType.view, open: true });
      //         dispatch(setSelectedOfferData(row));
      //       }}
      //     />
      //   ), // Eye icon to view the features in a modal
      // },
      {
        key: "durationInDays",
        name: "Duration (Days)",
        sortable: true,
        selector: (row) => row?.durationInDays || "-", // Display offer duration in days
      },
      // {
      //   key: "description",
      //   name: "Offer Description",
      //   sortable: true,
      //   selector: (row) => row?.description?.slice(0, 10).concat("....") || "-", // Display offer name truncated to 10 characters
      // },
      // {
      //   key: "trialAvailable",
      //   name: "Trial Available",
      //   sortable: true,
      //   selector: (row) => row?.trialAvailable ? "Yes" : "No", // Display 'Yes' if trial is available, otherwise 'No'
      // },
      {
        key: "action",
        name: "Action",
        selector: (row) => (
          <div className="theme-action">
            <FaRegEye
              className="icon"
              onClick={() => {
                setIsOpen({ type: modalType.view, open: true });
                dispatch(setSelectedOfferData(row)); // Set selected offer for viewing
              }}
            />
            {/* <FaEdit
              className="icon"
              onClick={() => {
                setIsOpen({ type: modalType.edit, open: true });
                dispatch(setSelectedOfferData(row)); // Set selected offer for editing
              }}
            /> */}
            <MdDeleteForever
              className="icon"
              onClick={() => {
                setIsOpen({ type: modalType.delete, open: true });
                dispatch(setSelectedOfferData(row)); // Set selected offer for deletion
              }}
            />
          </div>
        ),
      },
    ];
};