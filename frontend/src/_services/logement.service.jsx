import Axios from "./caller.service"

//catch locations list

let getAllLocations = () => {
    return Axios.get('/properties')
    
}

//catch one flat by id
let getLocation = (id) => {
    return Axios.get('/properties/'+id)
}

// Declare  services for import
export const logementService = {
    getAllLocations, getLocation
}