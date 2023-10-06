import { Affectation } from "./affectation";
import { Category } from "./category";
import { Method } from "./method";
import { Provider } from "./provider";
import { State } from "./state";
import { Tag } from "./tag";
import { Type } from "./type";


export class Api{

  idApi : number;
  nameApi : String;
  description : String;
  version : number ;
  creationDate = Date();
  apiState: State;
  apiType : Type;
  apiProvider : Provider;
  apiCategory : Category;
  methods : Method[];
  tags : Tag[];
  apiConsumer : Affectation[];

  constructor(){}

}
