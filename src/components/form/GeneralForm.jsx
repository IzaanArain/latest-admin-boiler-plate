import React, { useState } from 'react'
import { validation, validationText } from '../../utils/app-constants'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import ThemeInput from '../input/ThemeInput'
import { Button, Form } from 'react-bootstrap'
import ThemeCheckbox from '../input/ThemeCheckbox'
import ThemeRadio from '../input/ThemeRadio'
import ThemeTextArea from '../input/ThemeTextArea'
import ThemeSelect from '../input/ThemeSelect'
import ThemeDatePicker from '../input/ThemeDatePicker'
import ThemeFileUploader from '../input/ThemeFileUploader'
import ThemeTextEditor from '../input/ThemeTextEditor'

const GeneralForm = () => {
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm({ mode: 'onChange' })
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {/* EMAIL INPUT */}
            <div>
                <ThemeInput
                    name="email"
                    control={control}
                    errors={errors}
                    rules={{
                        required: {
                            value: true,
                            message: validationText.emailRequired
                        },
                        maxLength: {
                            value: validation.emailMax,
                            message: validationText.emailMax
                        },
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: validationText.invalidEmail
                        }
                    }}
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    maxLength={validation.emailMax}
                />
            </div>

            {/* PASSWORD INPUT */}
            <div>
                <div className="password-input">
                    <ThemeInput
                        name="password"
                        control={control}
                        errors={errors}
                        rules={{
                            required: {
                                value: true,
                                message: validationText.passwordRequired
                            },
                            minLength: {
                                value: validation.passwordMin,
                                message: validationText.passwordMin
                            },
                            maxLength: {
                                value: validation.passwordMax,
                                message: validationText.passwordMax
                            },
                        }}
                        label="Password"
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        minLength={validation.passwordMin}
                        maxLength={validation.passwordMax}
                    />
                    <span className='eye-icon' onClick={handleShowPassword}>
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>
                </div>
            </div>

            {/* TEXT INPUT */}
            <div>
                <ThemeInput
                    name="name"
                    control={control}
                    errors={errors}
                    rules={{
                        required: {
                            value: true,
                            message: validationText.nameRequired
                        },
                        minLength: {
                            value: validation.nameMin,
                            message: validationText.nameMin
                        },
                        maxLength: {
                            value: validation.nameMax,
                            message: validationText.nameMax
                        },
                    }}
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                    minLength={validation.nameMin}
                    maxLength={validation.nameMax}
                />
            </div>

            {/* NUMBER IPNUT */}
            <div>
                <ThemeInput
                    name="price"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Required"
                        },
                        pattern: {
                            value: /^[0-9]+$/,
                            message: validationText.numberAllowed
                        }
                    }}
                    errors={errors}
                    type="text"
                    label="Number"
                    placeholder="Enter your number"
                />
            </div>

            {/* DECIMAL NUMBER INPUT */}
            <div>
                <ThemeInput
                    name="discount"
                    control={control}
                    rules={{
                        required: {
                            value: true,
                            message: "Required"
                        },
                        pattern: {
                            value: /^[0-9]*\.?[0-9]*$/,
                            message: validationText.numberAndDecimalAllowed
                        }
                    }}
                    errors={errors}
                    type="text"
                    label="Number"
                    placeholder="Enter your number"
                />
            </div>

            {/* TEXTAREA INPUT */}
            <div>
                <ThemeTextArea
                    name="description"
                    control={control}
                    errors={errors}
                    rules={{
                        required: {
                            value: true,
                            message: validationText.descriptionRequired
                        },
                        maxLength: {
                            value: validation.descriptionMax,
                            message: validationText.descriptionMax
                        },
                    }}
                    label="Description"
                    placeholder="Description..."
                    type="text"
                    maxLength={validation.descriptionMax}
                />
            </div>

            {/* CHECKBOX INPUT */}
            <div>
                <ThemeCheckbox
                    name="lunch"
                    control={control}
                    errors={errors}
                    rules={{
                        required: {
                            value: true,
                            message: "Required"
                        }
                    }}
                    label="Lunch"
                    disabled={false}
                />
            </div>

            {/* RADIO INPUT */}
            <div>
                <ThemeRadio
                    name="status"
                    control={control}
                    errors={errors}
                    rules={{
                        required: {
                            value: true,
                            message: "Required"
                        }
                    }}
                    value="online"
                    label="Online"
                    disabled={false}
                />
            </div>

            {/* SELECT INPUT */}
            <div>
                <ThemeSelect
                    name="role"
                    control={control}
                    errors={errors}
                    rules={{
                        required: {
                            value: true,
                            message: 'Required'
                        },
                    }}
                    label="Role"
                    placeholder="Select your role"
                    options={[
                        { label: "User", value: 1 },
                        { label: "Admin", value: 2 },
                    ]}
                />
            </div>

            {/* DATE PICKER INPUT */}
            <div>
                <ThemeDatePicker
                    name="date"
                    control={control}
                    errors={errors}
                    rules={{
                        required: {
                            value: true,
                            message: "Required"
                        }
                    }}
                    placeholder='Select date'
                    label="Date"
                    disabled={false}
                />
            </div>

            {/* FILE UPLOADER INPUT */}
            <div>
                <ThemeFileUploader
                    name="file"
                    control={control}
                    errors={errors}
                    setValue={setValue}
                    rules={{
                        required: {
                            value: true,
                            message: "Required"
                        }
                    }}
                    disabled={false}
                />
            </div>

            {/* TEXT EDITOR INPUT */}
            <div>
                <ThemeTextEditor
                    name="editor"
                    control={control}
                    errors={errors}
                    rules={{
                        required: {
                            value: true,
                            message: "Required"
                        }
                    }}
                    placeholder="Start typings..."
                />
            </div>
            <Button type="sumbit" className='btn-solid btn-purple'>Submit</Button>
        </Form>
    )
}

export default GeneralForm