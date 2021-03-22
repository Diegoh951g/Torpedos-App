export class Representator {

  private alphabetic_array: string[];

  constructor() {

    this.alphabetic_array = [];

    for(let i= 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); ++i){
      this.alphabetic_array.push(String.fromCharCode(i));
    }
    this.alphabetic_array.push(' ');
  }

  /* Returns the index of the first appear of
     the character in the array.
    If it's not present, returns -1.
    */
  private index(array: any[], character: any): number{

    for(let i=0; i<array.length; ++i){

      if(character == array[i]){
        return i;
      }
    }
    return -1;
  }

  public stringToNumbers(word: string): number[]{

    let representation = [];

    for(let i=0; i<word.length; ++i){
      representation.push(this.index(this.alphabetic_array, word[i]));
    }

    return representation;
  }
}
