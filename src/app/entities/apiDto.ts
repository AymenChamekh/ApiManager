
import { Method } from "./method";

import { State } from "./state";


export class ApiDto{
  idApi : number;
  nameApi : String;
  version : number ;
  creationDate = Date();
  apiState: State;
  apiType : String;
  apiProvider : String;
  apiCategory : String;
  methods : Method[];
  tags : String[];
  constructor(){}
}
