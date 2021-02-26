//strat the app using 
//start it with terminal >> parcel index.html
import {User} from './User'
import {Company} from './Company'
import {MapClass} from './MapClass'
console.log('hello');

const user = new User();
const company = new Company();
const myMap = new MapClass('map'); //we pass the id of the map div in index.html

myMap.addMarker(user)
myMap.addMarker(company)

// myMap.addUserMarker(user)
// myMap.addCompanyMarker(company)

// //after getting the google map api and adding it in index.html
// //we now need to set another typedef file (npm i @types/googlemaps) so TS could recognize the global variable of google!

// new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: {
//         lat: 0,
//         lng:0
//     }
// });
// //now we need to refer this variable to a div element with an id="map" in index.html
 