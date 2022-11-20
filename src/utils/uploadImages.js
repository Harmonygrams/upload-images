import axios from 'axios'
const uploadImages = (selectedFile) => {
    axios({
        url : 'http://localhost:5000/uploads', 
        method : 'POST', 
        data : selectedFile,
    }). 
    then(response => console.log(response)).
    catch(err => console.log(err))
}
export default uploadImages