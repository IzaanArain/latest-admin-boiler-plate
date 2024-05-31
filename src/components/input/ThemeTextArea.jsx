import React, { forwardRef } from 'react'
import { Form } from 'react-bootstrap'
import { Controller } from 'react-hook-form'

const ThemeTextArea = forwardRef((props, ref) => {
    const { name, control, errors, rules = {}, label = "", placeholder = "", type = "text", disabled = false, minLength = 0, maxLength = 255 } = props

    return (
        <div className='theme-textarea mb-3'>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <>
                        <Form.Label>{label}</Form.Label>
                        <Form.Control
                            {...field}
                            as="textarea"
                            type={type}
                            placeholder={placeholder}
                            disabled={disabled || false}
                            value={field.value || ""}
                            onChange={field.onChange}
                            minLength={minLength}
                            maxLength={maxLength}
                        />
                    </>
                )}
            />
            {errors[name] && <span className='text-red'>{errors[name].message}</span>}
        </div>
    )
})

export default ThemeTextArea