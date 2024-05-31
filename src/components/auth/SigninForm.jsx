import React, { useState } from 'react'
import { LogoSvg } from '../../constants/svgs'
import ThemeInput from '../input/ThemeInput'
import { useForm } from 'react-hook-form'
import { validation, validationText } from '../../utils/app-constants'
import { Form, Button } from 'react-bootstrap'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSigninMutation } from '../../store/apis/AuthApi'
import { toast } from 'react-toastify'
import { errorMsg, successMsg } from '../../constants/msgs'
import { SetTokenLocalStorage, SetUserLocalStorage } from '../../utils/helper'
import { useNavigate } from 'react-router-dom'
import ThemeSpinner from '../general/ThemeSpinner'

const SigninForm = () => {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange' })
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [signin, { isLoading }] = useSigninMutation()

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = async (formData) => {
        const { data, error } = await signin(formData)
        if (data) {
            SetUserLocalStorage(data.data)
            SetTokenLocalStorage(data.data.token)
            successMsg(data.message)
            navigate('/admin/dashboard')

        }
        else {
            errorMsg(error.data.message)
        }
    }

    return (
        <div className='auth signin-form'>
            <div className="header">
                <div className="svg-wrapper mb-4">
                    <LogoSvg />
                </div>

                <div className="title">
                    <h3 className='mb-1 text-black'>Welcome to Vuexy! 👋</h3>
                    <p className='mb-4 text-grey'>Please sign-in to your account and start the adventure</p>
                </div>
            </div>

            <div className="content">
                <Form onSubmit={handleSubmit(onSubmit)}>
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

                    <div className="text-end">
                        <span className='text-purple cursor'>Forgot Password?</span>
                    </div>

                    <Button type="submit" disabled={isLoading} className="btn-solid btn-purple w-100 mt-4">
                        {isLoading ? <ThemeSpinner/> : ' Sign in'}
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SigninForm