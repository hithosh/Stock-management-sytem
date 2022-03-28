import axios from "axios";

//GET
export function getCall(url){
    return axios.get(url);
}
//POST
export function postCall(url,data){
    return axios.post(url,data);
}
//PUT
export function putCall(url,data){
    return axios.put(url,data);
}

//DELETE
export function deleteCall(url){
    return axios.delete(url);
}