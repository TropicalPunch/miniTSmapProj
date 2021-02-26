import faker from 'faker';
import {Mappable} from './MapClass'
//ctrl+click faker to get to the typedef file of faker, we might need to tweek the lat lang def from string to number here in the constructor 

export class Company implements Mappable{ //export with no default == import {Company} from 'path'
    //this class is going to hold two properties:
    //define properties outside the constructor:
   companyName:string;
   catchPhrase:string;
   location:{
       lat:number;
       lng:number;
   }
 constructor(){
     //we use npm "faker" package--> npm i faker
    //so we need type def file==> used by the ts compiler
    //npm i @types/faker

    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    
    this.location ={
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())

    }
}
markerContent(): string { //a method for the map popup content.
    return `
    <div>
        <h1>
        ${this.companyName}
        </h1>
        <h3> ${this.catchPhrase} </h3>
        </div>
    `
}
};