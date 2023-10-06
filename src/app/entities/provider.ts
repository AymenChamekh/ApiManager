import { Api } from "./api";

export class Provider extends Organization{

     idProvider : number;
     nbrAuthorisation : number;
     listApiProvided : Api[];
     constructor(){
      super();
     }

}
