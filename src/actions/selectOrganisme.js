import { ORGANISME_SELECTED } from "../types";
import api from "../api";
export const selectOrga = organisme=>({
    type: ORGANISME_SELECTED,
    organisme
})

export const getOrga = (id) => dispatch =>
 api.organisme.getOrga(id).then(organisme => {
    dispatch(selectOrga(organisme));
    });
