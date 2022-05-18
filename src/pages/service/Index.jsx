import { Button } from './ServiceStyles'
import { useState } from "react"
import './Service.css'
import AddService from './AddService'

const Services =()=> {
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
                    <div className="modal">
                <div className="overlay" onClick={openServiceForm}>
                    <form className="modal-content">
                        <h1>Create New Service</h1>
                        <label htmlFor="title">Title*</label>
                        <input type="text" name="title"/>

                        <label htmlFor="description">Description*</label>
                        <input type="text" name="description"/>

                        <label for="image">Image*</label>
                        <input type="file"
                            id="image" name="image"
                            accept="image/png, image/jpeg"></input>
                        <input type="image" src="" alt="" />

                        <button>Close</button>
                        <button>Save Changes</button>
                    </form>
                    <button className="close-modal" onClick={openServiceForm}>Close</button>
                    </div>
            </div>
                )
            }
            <AddService></AddService>
        </>
    )
}

export default Services