// import {User} from './User';
// import {Company} from './Company';

//if a class setisfies the conditions of the interface it may be added to the map as a marker!
export interface Mappable{
    location:{
        lat:number,
        lng: number
    };
    markerContent(): string;
}




export class MapClass {
    //private modifier - no one outside of this class can access this propety
    private googleMap : google.maps.Map;

    constructor(elemId: string){
        this.googleMap = new google.maps.Map(document.getElementById(elemId), {
            zoom: 1,
            center: {
                lat: 0,
                lng:0
            }
        }); 
    }

    //use Interfce as an input
    addMarker(mappable: Mappable ): void{ //this method input is set as any class that satisfied the interface conditions!
            const marker = new google.maps.Marker({  //creates a new marker
                map: this.googleMap,
                position: { //position of the marker is from the user
                    lat: mappable.location.lat, //location is the only common property in both classes! 
                    lng: mappable.location.lng
                }
            });
            //adding a popup over the marker on click!
            marker.addListener('click', ()=>{
                const InfoWindow = new google.maps.InfoWindow({
                    content: `
                    ${mappable.markerContent()}
                    My location: ${mappable.location.lat}-${mappable.location.lng}
                    `
                });
                InfoWindow.open(this.googleMap, marker)
            })

        }
    



     // Generic method for adding a marker on the map- no code duplicate
     //downside- if we will want to add more clases on the map-> cars, dogs, cats, fruits... we will have to add more input types: |cars|dogs|cats | ..... not scalable syntax!
    // addMarker(mappable: User | Company ): void{ //this method input is set as USER OR COMPANY meaning we can reference only the property which is shared by both--> which in our case is the location property
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: { //position of the marker is from the user
    //             lat: mappable.location.lat, //location is the only common property in both classes! 
    //             lng: mappable.location.lng
    //         }
    //     });
    // }

    // //method - 1
    // addUserMarker(user: User): void{ //this method input is user--> which is of type User class!
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: { //position of the marker is from the user
    //             lat: user.location.lat,
    //             lng: user.location.lng
    //         }
    //     });
    // }

    // //method - 2
    // addCompanyMarker(company: Company): void{
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: { //position of the marker is from the user
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     });

    // }

}