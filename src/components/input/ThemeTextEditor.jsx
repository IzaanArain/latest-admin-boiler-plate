import React, { useState, useRef, useMemo, forwardRef } from 'react'
import JoditEditor from 'jodit-react'
import { Controller } from 'react-hook-form'

const ThemeTextEditor = forwardRef((props, ref) => {
    const { name, control, errors, rules = {}, placeholder = "Start typings..." } = props
    const editor = useRef(null)

    const config = useMemo(() => ({
        askBeforePasteHTML: false,
        askBeforePasteFromWord: false,
        placeholder: placeholder,
    }),
        []
    )

    return (
        <div className='theme-text-editor mb-3'>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <JoditEditor
                        {...field}
                        ref={editor}
                        value={field.value}
                        config={config}
                        tabIndex={1}
                        onChange={field.onChange}
                    />
                )}
            />
            {errors[name] && <span className='text-red'>{errors[name].message}</span>}
        </div>
    )
})

export default ThemeTextEditor