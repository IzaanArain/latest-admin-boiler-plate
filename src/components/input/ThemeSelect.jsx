import React, { forwardRef } from 'react'
import { Form } from 'react-bootstrap'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

const ThemeSelect = forwardRef((props, ref) => {
    const { name, control, errors, rules = {}, options = [], isMulti = false, label = '', placeholder = "", disabled = false } = props

    return (
        <div className='theme-select mb-3'>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <>
                        <Form.Label>{label}</Form.Label>
                        <Select
                            {...field}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            placeholder={placeholder}
                            options={options}
                            isMulti={isMulti}
                            disabled={disabled}
                        />
                    </>
                )}
            />
            {errors[name] && <span className='text-red'>{errors[name].message}</span>}
        </div>
    )
})

export default ThemeSelect