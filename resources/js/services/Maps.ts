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
        const message =`Hola estoy interesad@ en la valla publicitaria ubicada en: ${item.address}`;

        const ContentBillboard = `

        <style>
            .container-mine{

                width:100%
            }

            .img-mine{

                width:100%;
            }

            @media(min-width:800px){

                .container-mine{

                    width:40%;
                }
                .img-mine{

                    width:310px;
                }
            }
        </style>
        <div class="d-flex justify-content-center align-items-center">
            <h5>${item.address}</h5>
        </div>

        <div style="font-size:18px;" class="d-flex justify-content-center flex-wrap">

            <div class="container-mine m-3" >
                <img class="img-mine"  src="${media[0].images.foto1}"/>
                <hr>
                <h5>Georeferencia:</h5>
                <b>${item.georeference}</b>
                <hr>
                <h5>Descripcion:</h5>
                <b>${item.description}</b>
                <hr>
            </div>

            <div class="container-mine m-3" >
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
                <div  class="d-grid gap-2">
                    <a href="https://api.whatsapp.com/send/?phone=573012543817&text=${message}" style="font-size:20px;" class="btn btn-success text-white">Contactar con ventas</a>
                </div>

            </div>

        </div>

        `;

        this.loader.load().then((google:any) => {

            this.marker = new google.maps.Marker(options);
            this.marker.setMap(this.map);

            const screenBillboard = new google.maps.InfoWindow({

                content:ContentBillboard,
                maxWidth:1000
            })
            this.MarkerInfo(this.marker,item,screenBillboard);
            this.map.addListener('click',()=>{
                screenBillboard.close();
            })

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
