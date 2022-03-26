import Axios from 'axios';
const url = "https://examen-procesos-api-6huwsmftzq-wl.a.run.app/";

export async function getTypeByProvince(province){
    try {
        const response = await Axios.get(url+'countTypeByProvince/'+province);
        return response.data;
    } catch (err) {
        console.log(err)
    } finally {
    }
}

export async function getPeopleByCountry(country){
    try {
        const response = await Axios.get(url+'peopleByCountry/'+country);
        return response.data;
    } catch (err) {
        console.log(err)
    } finally {
    }
}