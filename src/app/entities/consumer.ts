import { Affectation } from "./affectation";

export class Consumer extends Organization{

  idConsumer : number;
  sector : String;
  listApiConsumed : Affectation|[];
  constructor(){
    super();
  }
}
