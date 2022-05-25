import Axios from 'axios';

export class DataApi{

    public key:string;
    public domain:string;

    constructor(key:string, domain:string){

        this.key = key;
        this.domain = domain;
    }

    private async Get(url:string){

        try {

            let token:string = document.cookie.split('XSRF-TOKEN=')[1];

            if(token.length < 200 || typeof token !== 'string'){

                token ='eyJpdiI6IllPM2V1U2ZPU05PUis2UzhqTy84eUE9PSIsInZhbHVlIjoiZHlTMTVEVWtlV3hsM2NRejMwQ05MdWg1Z3lsQzV2Vjd6WWl1RXZUUGdQUWNESVR3WFRReXNGQWY0UlVZM080cCtRZ3NuQi94YzIvZVlwQk1vWHNGQW44QURxNy8zZnAxN1lYRmVqZFI0bWwvdHBiK09nVWN6a1FHU0lJd2I1VlgiLCJtYWMiOiJmOWM2Y2Q1ZmRhYjczODhiNWEzMmM4YzBjNWYyMDM3ZGNiYjNkN2Q5NWUyNGMxOGIwMmFiOTI3N2I3MTAzYjQxIiwidGFnIjoiIn0%3D'
            }

            const endPoint =`${this.domain}/${url}?key=${this.key}&token=${token}`;
            const data = await Axios.get(endPoint,{
                method:'GET',
                headers:{

                    Accept:'application/json',
                    'x-csrf-token':document.cookie.split('=')[1]
                }
            });
            return data;

        } catch (error) {

            throw `Something is bad at DataApi.ts with url:${url}, error:${error}`;
        }

    }


    public GetPlaces(){

        const url='api/place';
        return this.Get(url);
    }

    public GetBillboards(){

        const url='api/billboard';
        return this.Get(url);
    }

    public GetPlaceBillboards(){

        const url='api/place-billboards';
        return this.Get(url);
    }

    public GetServices(){

        const url='api/service';
        return this.Get(url);
    }

    public GetStories(){

        const url = 'api/storie';
        return this.Get(url);
    }

}
