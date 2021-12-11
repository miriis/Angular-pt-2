export enum Type { small, medium };

export interface IProduct {
  id: number;
  type: Type;
  name: string;
  price: number;
}
