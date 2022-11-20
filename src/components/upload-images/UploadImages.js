import { useState } from 'react'
import uploadImages from "../../utils/uploadImages"
const UploadImage = () => {
    const [file, setFile] = useState('')
    const updateForm = (e) => {
        setFile(e.target.files[0])
    }
    const submitForm = (e) => {
        e.preventDefault()
        const form = document.querySelector("#file")
        const formData = new FormData()
        formData.set('file', file)
        uploadImages(formData)
    }
    return(
        <div>
            <form id="form-data" onSubmit = {submitForm}> 
                <input 
                    type = "file" 
                    name = "file"
                    id = "file"
                    onChange = {updateForm}
                />
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}
export default UploadImage