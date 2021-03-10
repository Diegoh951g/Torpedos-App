import { Product } from '../Product';

export interface SystemInterface {

  insertProduct(name: string): void;
  insertTorpedo(torpedo: string): void;
  insertCategory(name: string): void;
  showProducts(): void;
  getProducts(): any[];
}
