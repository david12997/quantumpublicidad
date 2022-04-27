import { DataApi } from './../../services/DataApi';
import { config } from  './../../env';

test('get api data success',()=>{

    const responseApi:object = {
        "current_page": 1,
        "first_page_url": "http://127.0.0.1:8000/api/place?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "http://127.0.0.1:8000/api/place?page=1",
        "next_page_url": null,
        "path": "http://127.0.0.1:8000/api/place",
        "per_page": 9,
        "prev_page_url": null,
        "to": 4,
        "total": 4
    }
    const data:DataApi =  new DataApi('36963',config.domain);

    return data.GetPlaces().then(response=>{

        expect(data).toBeInstanceOf(DataApi);
        expect(response.data).toMatchObject(responseApi);
    })



});
