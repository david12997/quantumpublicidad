import axios from "axios";
import { config } from "../env";

export const StoreMessage = async(data:any)=>{

    try {


        const store = await axios.post(config.domain+'/api/message?key='+config.api.key,data);
        return store;

    } catch (error) {

        throw `Something is bad at StoreMessage.ts, error:${error}`;
    }
}
