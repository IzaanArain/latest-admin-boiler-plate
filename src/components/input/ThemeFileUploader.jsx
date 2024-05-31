import React, { forwardRef, useState } from 'react'
import { Controller } from 'react-hook-form';
import { IoIosCloudUpload } from "react-icons/io";
import { IoAttachOutline } from "react-icons/io5";
import { TiTimes } from "react-icons/ti";

const ThemeFileUploader = forwardRef((props, ref) => {
    const { name, control, errors, setValue, rules = {}, multiple = false, disabled = false } = props
    const [files, setFiles] = useState([])

    const handleFileChange = (e) => {
        if (multiple) {
            setFiles([...files, ...e.target.files])
        }
        else {
            setFiles([e.target.files[0]])
        }
    }

    const handleRemoveFile = (index) => {
        let tempFiles = [...files]
        tempFiles.splice(index, 1)
        setFiles(tempFiles)
        setValue(name, tempFiles)
    }

    return (
        <div className='theme-file-uploader mb-3'>
            <div className='wrapper'>
                <Controller
                    control={control}
                    name={name}
                    rules={rules}
                    render={({ field }) => (
                        <label htmlFor="file">
                            <IoIosCloudUpload className='icon mb-2' />
                            <h6>Browse file to upload</h6>
                            <input
                                multiple={multiple}
                                type="file"
                                id='file'
                                className='d-none'
                                disabled={disabled}
                                onChange={(e) => {
                                    field.onChange(e.target.files)
                                    handleFileChange(e)
                                }}
                            />
                        </label>
                    )}
                />
            </div>
            {errors[name] && <span className='text-red'>{errors[name].message}</span>}
            <ShowFiles files={files} handleRemoveFile={handleRemoveFile} />
        </div>
    )
})


const ShowFiles = ({ files, handleRemoveFile }) => {
    return (
        <div className='show-files mt-3'>
            {
                files?.map((item, index) => (
                    <div key={index} className="box d-flex align-items-center justify-content-between mb-2">
                        <div className='d-flex align-items-center'>
                            <div className="icon-box">
                                <IoAttachOutline className='icon' />
                            </div>
                            <span className='ms-2'>{item?.name || 'File name is not available'}</span>
                        </div>

                        <div>
                            <TiTimes className='icon cursor text-black' onClick={() => handleRemoveFile(index)} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ThemeFileUploader