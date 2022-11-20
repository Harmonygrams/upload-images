import { useState } from 'react'
import uploadImages from '../../utils/uploadImages'
const UploadImages = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const sumitImageData = (e) => {
        e.preventDefault()
        uploadImages(selectedImage)
    }
    return(
        <div>
            <h1> Upload and display images </h1>
            {selectedImage && 
            <div> 
                <img 
                    alt="not found" 
                    width={"250px"}
                    src={URL.createObjectURL(selectedImage)}
                />
            </div> 
            }
            <br /> 
            <br /> 
            <form
                onSubmit={sumitImageData}
            > 
                <p> Upload images </p>
                <input  
                    type={"file"}
                    name={"myImage"}
                    multiple = {true}
                    onChange = {(event) => {
                        const file = event.target.files[0]
                        setSelectedImage(file)
                    }}
                />
                <button type={"submit"}> Submit </button>
            </form>
        </div> 
    )
}
export default UploadImages