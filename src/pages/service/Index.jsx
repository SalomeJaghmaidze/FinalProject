import { Button } from './ServiceStyles'
import { useState } from "react"
import { useForm } from "react-hook-form";
import './Form.css'
import AddService from './AddService'
import {
    Modal,
    Overlay,
    Form,
    Content,
    Header,
    Heading,
    LabelTitle,
    InputTitle,
    LabelDescription,
    InputDescription,
    LabelImage,
    InputFile,
    InputImage,
    Close,
    Buttons,
    SaveBtn,
    CloseBtn
} from './FormStyles'

const Services =()=> {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('ServiceMockups.json', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
            console.log('new service added')
        })
        }
    
    
    const [modal, setModal] = useState(false);
    const openServiceForm =()=> {
     setModal(!modal)
    }

    if (modal) {
     document.body.classList.add('active-modal')
    } else {
     document.body.classList.remove('active-modal')
    }
    return (
        <>
            <Button onClick={openServiceForm}>Add New Service</Button>
            {
                modal && (
                    <Modal>
                        <Overlay>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Header>
                                    <Heading>Create New Service</Heading>
                                    <Close onClick={openServiceForm}>+</Close>
                                </Header>
                                <Content>
                                    <LabelTitle htmlFor="title">Title*</LabelTitle>
                                    <InputTitle placeholder = "Post title" type="text" name="title" {...register("title", { required: true, maxLength: 25 })}/>
                                    {errors.title && errors.title.type === "required" && <span>This is required</span>}
                                    {errors.title && errors.title.type === "maxLength" && <span>Max length exceeded</span>}

                                    <LabelDescription htmlFor="description">Description*</LabelDescription>
                                    <InputDescription type="text" name="description"  {...register("description", { required: true, maxLength: 100 })}/>
                                    {errors.description && errors.description.type === "required" && <span>This is required</span>}
                                    {errors.description && errors.description.type === "maxLength" && <span>Max length exceeded</span> }

                                    <LabelImage htmlFor="image">Image*</LabelImage>
                                    <InputFile type="file"
                                    id="image" name="image"
                                    accept="image/png, image/jpeg" {...register("image", { required: true, maxLength: 1 })}></InputFile>
                                    {errors.image && errors.image.type === "required" && <span>This is required</span>}
                                    <InputImage type="image" src="" alt=""/>
                                </Content>
                                <Buttons>
                                    <CloseBtn onClick={openServiceForm}>Close</CloseBtn>
                                    <SaveBtn>Save Changes</SaveBtn>
                                </Buttons>
                            </Form>
                        </Overlay>
                    </Modal>
                )
            }
            <AddService></AddService>
        </>
    )
}

export default Services