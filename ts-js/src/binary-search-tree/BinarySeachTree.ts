import { TreeNode } from './TreeNode';
import { Representator } from '../Representator';

const representator = new Representator();

function whichFirst(str1: string, str2: string){

  if(str1.length > str2.length){

    let aux = str1;
    str1 = str2;
    str2 = aux;
  }

  const rep1 = representator.stringToNumbers(str1.toLowerCase());
  const rep2 = representator.stringToNumbers(str2.toLowerCase());

  for(let i=0; i<str1.length; ++i){

    if(rep1[i] != rep2[i])
      return (rep1[i] < rep2[i]) ? str1 : str2;   
  }
  return str1;
}

// Binary Search Tree Class

export class BinarySearchTree<T> {
  
  private root: TreeNode<T>;

  constructor() {
    this.root = null;
  }

  getRoot(): TreeNode<T>  {
    return this.root;
  }

  insert(value: T, value_key: string){

    this.root = this._insert(this.root, value, value_key);
  }

  show(){
    this._inOrder(this.root);
  }

  toArray(){
   
    let array = [];
    return this._toArray(this.root, array);  
  }

  private _toArray(node: TreeNode<T>, array: any[]): any[]{
    
    if(node != null){

      array = this._toArray(node.getLeft(), array);
      array.push(node.getValue());
      array = this._toArray(node.getRight(), array);
    }
    return array;
  }

  private _inOrder(node: TreeNode<T>) {

    if(node != null){
      
      this._inOrder(node.getLeft());
      console.log(node.getKey());
      this._inOrder(node.getRight());
    }
  }

  // TODO: this method is not ready
  private _insert(node: TreeNode<T>,  value: T, value_key: string): TreeNode<T> {

    if(node == null){
      node = new TreeNode<T>(value, value_key);
    }
    else{

      if(whichFirst(value_key, node.getKey()) == value_key){
        node.setLeft(this._insert(node.getLeft(), value, value_key));
      }
      else{
        node.setRight(this._insert(node.getRight(), value, value_key));
      }
    }
    return node;
  }
}
