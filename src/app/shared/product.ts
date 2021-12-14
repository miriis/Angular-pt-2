/* export enum Type { small, medium }; */

export interface IProduct {
  id: number;
  type: 'small'| 'medium';
  name: string;
  price: number;
}
