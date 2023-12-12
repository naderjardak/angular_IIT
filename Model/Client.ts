import {Compte} from "./Compte";

export interface Client {
  id: number | null;
  nom: string;
  prenom: string;
  adress: string;
  compteList?: Compte[];
}
