import React, { forwardRef } from 'react'
import { Form } from 'react-bootstrap'
import { Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker';

const ThemeDatePicker = forwardRef((props, ref) => {
    const { name, control, errors, rules = {}, label = '', placeholder = "", disabled = false } = props

    return (
        <div className='theme-date-picker mb-3'>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <>
                        <Form.Label className='d-block'>{label}</Form.Label>
                        <DatePicker
                            className='date-picker'
                            placeholderText={placeholder}
                            disabled={disabled}
                            selected={field.value}
                            onChange={(date) => field.onChange(date)}
                            onKeyDown={(e) => {
                                e.preventDefault();
                            }}
                        />
                    </>
                )}
            />
            {errors[name] && <span className='text-red'>{errors[name].message}</span>}
        </div>
    )
})

export default ThemeDatePicker