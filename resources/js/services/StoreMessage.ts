import axios from "axios";
import { config } from "../env";

export const StoreMessage = async(data:any)=>{

    try {

        let token:string = document.cookie.split('XSRF-TOKEN=')[1];

        if(token.length < 200 || typeof token !== 'string'){

            token ='eyJpdiI6IllPM2V1U2ZPU05PUis2UzhqTy84eUE9PSIsInZhbHVlIjoiZHlTMTVEVWtlV3hsM2NRejMwQ05MdWg1Z3lsQzV2Vjd6WWl1RXZUUGdQUWNESVR3WFRReXNGQWY0UlVZM080cCtRZ3NuQi94YzIvZVlwQk1vWHNGQW44QURxNy8zZnAxN1lYRmVqZFI0bWwvdHBiK09nVWN6a1FHU0lJd2I1VlgiLCJtYWMiOiJmOWM2Y2Q1ZmRhYjczODhiNWEzMmM4YzBjNWYyMDM3ZGNiYjNkN2Q5NWUyNGMxOGIwMmFiOTI3N2I3MTAzYjQxIiwidGFnIjoiIn0%3D'
        }
        const store = await axios.post(config.domain+'/api/message?key='+config.api.key+'&token='+token,data,{

            method:'POST',
            headers:{
                Accept:'application/json',
                'x-csrf-token':document.cookie.split('=')[1]
            }
        });
        return store;

    } catch (error) {

        throw `Something is bad at StoreMessage.ts, error:${error}`;
    }
}
