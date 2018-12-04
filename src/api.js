import axios from "axios";

export default {
    user: {
        login: (credentials) => 
        axios.post("/api/auth",{ credentials }).then(res => res.data.user)
    },
    organisme:{
        getOrga: (info)=> 
        axios.post("/api/get",{ info }).then(res => res.data.organisme)
    },
    pointDeService:{
        insert: (info)=>
        axios.post("/api/insertPointDeService",{ info }).then(res =>res.data.pointDeService)
    }
}