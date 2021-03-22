import { SystemInterface } from './SystemInterface';
import { Product } from '../Product';
import { BinarySearchTree } from '../binary-search-tree/BinarySeachTree';

export class SystemImpl implements SystemInterface {

  private products: BinarySearchTree<Product>;
  private general_torpedos: BinarySearchTree<string>;
  // private categories: BinarySearchTree<Category>;

  constructor() {

    this.products = new BinarySearchTree<Product>();
    this.general_torpedos = new BinarySearchTree<string>();
  }

  insertProduct(name: string): void {

    let product = new Product(name);
    this.products.insert(product, name);
  }

  insertCategory(name: string): void {

  }

  insertTorpedo(torpedo: string): void {

  }

  showProducts(): void {
    this.products.show();
  }

  getProducts(): any[] {
    return this.products.toArray();
  }
}
