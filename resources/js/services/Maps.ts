import { Loader, } from "@googlemaps/js-api-loader";

export class Maps {

    protected apiKey:string;
    private version:string;
    public elementMap:HTMLElement | null;
    public configMap:any;
    protected map:any;
    protected marker:any;
    private loader:any;

    constructor(apiKey:string,elementMap:HTMLElement,configMap:any){

        this.apiKey = apiKey;
        this.version = 'weekly';
        this.elementMap = elementMap;
        this.configMap = configMap;
        this.loader =  new Loader({

            apiKey: this.apiKey,
            version: this.version,
        });
    }

    public RenderMap():void{


        this.loader.load().then((google:any) => {

            this.map = new google.maps.Map(this.elementMap as HTMLElement, this.configMap);

        })
        .catch((error:any)=>console.log(error));


    }

    public AddMarker(options:any, item:any):void{

        const media = JSON.parse(item.media);
        const ContentBillboard = `
        <div class="d-flex justify-content-center align-items-center">
            <h4>${item.address}</h4>
        </div>
        <hr>
        <div style="font-size:18px;" class="d-flex justify-content-center flex-wrap">

            <div class="d-flex justify-content-center style="width:100%" class="m-4">
                <img style="width:350px" src="${media[0].images.foto1}"/>
            </div>

            <div style="width:100%" class="m-4">
                <hr>
               <h5>Direccion:</h5>
               <b>${item.address}</b>
               <hr>
               <h5>Tipo de valla:</h5>
               <b>${item.type}</b>
               <hr>
               <h5>Tamaño:</h5>
               <b>${item.size}</b>
               <hr>
               <h5>Precio:</h5>
               <b style="color:green;">$ ${ new Intl.NumberFormat().format(Math.ceil(parseInt(item.price)))} COP</b>
               <hr>
               <h5>Georeferencia:</h5>
               <b>${item.georeference}</b>
               <hr>
               <h5>Descripcion:</h5>
               <b>${item.description}</b>
               <hr>

            </div>

        </div>
        <div  class="d-grid gap-2">
            <div style="font-size:20px;" class="btn btn-success text-white">Contactar con ventas</div>
        </div>


        `;

        this.loader.load().then((google:any) => {

            this.marker = new google.maps.Marker(options);
            this.marker.setMap(this.map);

            const screenBillboard = new google.maps.InfoWindow({

                content:ContentBillboard,
                maxWidth:800
            })
            this.MarkerInfo(this.marker,item,screenBillboard)

        })
        .catch((error:any)=>console.log(error));

    }



    private MarkerInfo(marker:any,item:any,screenBillboard:any):void{

        const map = this.map;

        marker.addListener('click',()=>{

            screenBillboard.close();
            screenBillboard.open({
                anchor:marker,
                map,
                shouldFocus:false

            });
        })

    }

}
