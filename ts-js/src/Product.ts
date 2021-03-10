import { BinarySearchTree } from './binary-search-tree/BinarySeachTree';

export class Product {

  private name: string;
  private torpedos: BinarySearchTree<string>;

  constructor(name: string){

    this.name = name;
    this.torpedos = new BinarySearchTree<string>();
  }

  getName(): string {
    return this.name;
  }

  getTorpedos(){
    return this.torpedos;
  }
}
