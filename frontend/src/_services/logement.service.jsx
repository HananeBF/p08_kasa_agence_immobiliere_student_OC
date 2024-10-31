import Axios from "./caller.service"

let getAllLocations = () => {
    return Axios.get('/properties')
    
}

let getLocation = (id) => {
    return Axios.get('/properties/'+id)
}

export const logementService = {
    getAllLocations, getLocation
}