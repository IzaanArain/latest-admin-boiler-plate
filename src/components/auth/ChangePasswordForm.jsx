import React, { useState } from 'react'
import { LogoSvg } from '../../constants/svgs'
import ThemeInput from '../input/ThemeInput'
import { useForm } from 'react-hook-form'
import { validation, validationText } from '../../utils/app-constants'
import { Form, Button } from 'react-bootstrap'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useChangePasswordMutation } from '../../store/apis/authApi'
import ThemeSpinner from '../general/ThemeSpinner'
import { errorMsg, successMsg } from '../../constants/msgs'

const ChangePasswordForm = () => {
    const { register, reset, control, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' })
    const [changePassword, { isLoading }] = useChangePasswordMutation()
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConformNewPassword, setShowConformNewPassword] = useState(false)
    const newPassword = watch('newPassword')

    const onSubmit = async (formData) => {
        const { data, error } = await changePassword(formData)
        if (data) {
            successMsg(data.message)
            reset()
        }
        else {
            errorMsg(error.data.message)
        }
    }

    return (
        <div className='auth chnage-password-form'>
            <div className="content">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="password-input">
                        <ThemeInput
                            name="currentPassword"
                            control={control}
                            errors={errors}
                            rules={{
                                required: {
                                    value: true,
                                    message: validationText.currentPasswordRequired
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
                            label="Current Password"
                            placeholder="Enter your current password"
                            type={showCurrentPassword ? "text" : "password"}
                            minLength={validation.passwordMin}
                            maxLength={validation.passwordMax}
                        />
                        <span className='eye-icon' onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
                            {showCurrentPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                    </div>

                    <div className="password-input">
                        <ThemeInput
                            name="newPassword"
                            control={control}
                            errors={errors}
                            rules={{
                                required: {
                                    value: true,
                                    message: validationText.newPasswordRequired
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
                            label="New Password"
                            placeholder="Enter your new password"
                            type={showNewPassword ? "text" : "password"}
                            minLength={validation.passwordMin}
                            maxLength={validation.passwordMax}
                        />
                        <span className='eye-icon' onClick={() => setShowNewPassword(!showNewPassword)}>
                            {showNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                    </div>

                    <div className="password-input">
                        <ThemeInput
                            name="confirmNewPassword"
                            control={control}
                            errors={errors}
                            rules={{
                                required: {
                                    value: true,
                                    message: validationText.confirmNewPasswordRequired
                                },
                                minLength: {
                                    value: validation.passwordMin,
                                    message: validationText.passwordMin
                                },
                                maxLength: {
                                    value: validation.passwordMax,
                                    message: validationText.passwordMax
                                },
                                validate: (value) => {
                                    return value == newPassword || 'The passwords do not match';
                                }
                            }
                            }
                            label="Confirm New Password"
                            placeholder="Enter your confirm new password"
                            type={showConformNewPassword ? "text" : "password"}
                            minLength={validation.passwordMin}
                            maxLength={validation.passwordMax}
                        />
                        <span className='eye-icon' onClick={() => setShowConformNewPassword(!showConformNewPassword)}>
                            {showConformNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                    </div>

                    <Button type="submit" disabled={isLoading} className="btn-solid btn-purple w-100 mt-3">
                        {isLoading ? <ThemeSpinner /> : 'Update'}
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ChangePasswordForm