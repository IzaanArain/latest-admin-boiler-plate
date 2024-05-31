import React, { forwardRef } from 'react'
import { Form } from 'react-bootstrap'
import { Controller } from 'react-hook-form'

const ThemeRadio = forwardRef((props, ref) => {
    const { name, control, errors, rules = {}, value = '', label = '', disabled = false } = props

    return (
        <div className='theme-radio mb-3'>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <Form.Check
                        {...field}
                        control={control}
                        type="radio"
                        value={value}
                        name={name}
                        label={label}
                        disabled={disabled}
                    />
                )}
            />
            {errors[name] && <span className='text-red'>{errors[name].message}</span>}
        </div>
    )
})

export default ThemeRadio