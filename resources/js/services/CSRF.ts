import axios from "axios"
import { config } from "../env"

export const CSRF =async () => {

    try {

        const auth = axios.get( config.domain+'/sanctum/csrf-cookie');
        return auth;

    } catch (error) {

       throw 'An error in CSRF.ts error: '+error;
    }

}
