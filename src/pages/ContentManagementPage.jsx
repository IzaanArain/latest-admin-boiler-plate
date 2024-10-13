import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ThemeTextEditor from '../components/input/ThemeTextEditor'
import { useForm } from 'react-hook-form'
import { useLazyGetPageQuery, useUpdatePageMutation } from '../store/apis/contentApi'
import ThemeSpinner from '../components/general/ThemeSpinner'
import { successMsg,errorMsg } from '../constants/msgs'

const ContentManagementPage = () => {
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = useForm({ mode: 'onChange' })
    const { slug } = useParams()
    const [onUpdate, setOnUpdate] = useState(1)
    const [getPage, { isLoading: isPageLoading }] = useLazyGetPageQuery()
    const [updatePage, { isLoading }] = useUpdatePageMutation()

    const onSubmit = async (formData) => {
        const db_slug = slug?.split("-").join("_")
        const { data, error } = await updatePage({ [db_slug]: formData.editor })
        if (data) {
            successMsg(data.message)
            setOnUpdate(onUpdate + 1)
        }
        else {
            errorMsg(error.data.message)
        }
    }

    useEffect(() => {
        const getPageDetail = async () => {
            const db_slug = slug?.split("-").join("_")
            console.log(db_slug)
            const { data } = await getPage(slug)
            console.log("data",data)
            setValue("editor", data?.tcAndPp[db_slug])
        }

        getPageDetail()
    }, [slug, onUpdate])

    return (
        <div className='pages content-management-page'>
            <Row>
                <Col xs={12} className='mb-3'>
                    <h2 className='text-black text-capitalize fw-800'>{slug?.split("-").join(" ")}</h2>
                </Col>

                <Col xs={12}>
                    <div className="wrapper">
                        <Row>
                            <Col xl={12}>
                                <Form onSubmit={handleSubmit(onSubmit)}>
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
                                    <Button type='submit' disabled={isLoading} className='mt-2 btn-solid btn-purple'>{isLoading ? <ThemeSpinner /> : "Save"}</Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContentManagementPage