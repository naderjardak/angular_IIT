import {Client} from "./Client";

export interface Compte {
  id: number | null;
  rib: string;
  sold: number | null;
  client?: Client;
}
