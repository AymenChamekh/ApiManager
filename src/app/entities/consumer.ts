import { Affectation } from "./affectation";
import { Organization } from "./organization";

export class Consumer extends Organization{

  idConsumer : number;
  sector : String;
  listApiConsumed : Affectation|[];
  constructor(){
    super();
  }
}
