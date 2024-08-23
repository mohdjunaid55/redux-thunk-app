import {GET_COUNTRY} from "../constants/country.constant"

 export const getCountries = async (dispatch) => {
    let response = await fetch("https://restcountries.com/v3.1/all?field=name,flags");

    let data = await response.json();

    dispatch({
        type: GET_COUNTRY,
        payload:data
    })
}
