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

            const data = await Axios.get(`${this.domain}/${url}?key=${this.key}`,{method:'GET'});
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
