
// Generic class.
export class TreeNode<T> {
 
  value: T;
  key: string;
  left: TreeNode<T>;
  right: TreeNode<T>;

  constructor(value: T, key: string) {
    
    this.value = value;
    this.key = key;
    this.left = null;
    this.right = null;
  }

  getValue(): T{
    return this.value;
  }

  getKey(): string {
    return this.key;
  }

  getLeft(): TreeNode<T>{ 
    return this.left; 
  }

  getRight(): TreeNode<T>{
    return this.right;
  }

  setLeft(left: TreeNode<T>){
    this.left = left;
  }

  setRight(right: TreeNode<T>){
    this.right = right;
  }
}
