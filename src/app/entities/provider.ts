import { Api } from "./api";
import { Organization } from "./organization";

export class Provider extends Organization{

     idProvider : number;
     nbrAuthorisation : number;
     listApiProvided : Api[];
     constructor(){
      super();
     }

}
