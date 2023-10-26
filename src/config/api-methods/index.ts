import axios from "axios";

export const apiHandle = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers:{
        Authorization:`Bearer `
    }
})

export const Get = (endPoint:String, id?:string|number) => {
    return apiHandle.get(`${endPoint}/${id ? id : ''}`)
}
export const Delete = (endPoint:String, id?:string|number) => {
    return apiHandle.delete(`${endPoint}/${id ? id : ''}`)
}
export const Put = (endPoint:String, id?:string|number) => {
    return apiHandle.put(`${endPoint}/`)
}
export const  Post = (endPoint:String, id?:string|number) => {
    return apiHandle.post(`${endPoint}`)
}