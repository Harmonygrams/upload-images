import axios from 'axios'
const uploadImages = (formData) => {
    axios({
        data : formData,
        method : 'post', 
        url : 'http://localhost:5001/uploads',
    }). 
    then(response => console.log(response)). 
    catch(err => console.log(err))
}
export default uploadImages