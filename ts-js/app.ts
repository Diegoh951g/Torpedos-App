import { SystemImpl } from './src/interface/SystemImpl';
import { SystemInterface } from './src/interface/SystemInterface';

let system: SystemInterface = new SystemImpl();
let products = system.getProducts();
let id = document.querySelector("#products");

for(let i=0; i<products.length; ++i){

  let new_div = document.createElement('div');
  new_div.innerHTML = '<div class="product"><h2>Nombre del producto</h2><p>Descripción</p></div>'
  id.appendChild(new_div);
}
