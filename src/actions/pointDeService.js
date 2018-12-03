import { POINT_DE_SERVICE } from "../types";
import api from "../api";
export const addPointDeService = ()=>({
    type: POINT_DE_SERVICE
})

export const insertPointDeService = (infos) => dispatch=>
 api.pointDeService.insert(infos).then(()=>{
     dispatch(addPointDeService());
 });