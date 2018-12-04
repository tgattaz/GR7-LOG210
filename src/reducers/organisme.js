import { ORGANISME_SELECTED } from "../types";
export default function organisme (state ={}, action={}){
    switch(action.type){
        case 'ORGANISME_SELECTED':
            return action.organisme;
        default: return state;
    }
}