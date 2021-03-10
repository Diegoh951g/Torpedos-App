"use strict";
exports.__esModule = true;
var SystemImpl_1 = require("./src/interface/SystemImpl");
var system = new SystemImpl_1.SystemImpl();
var products = system.getProducts();
var id = document.querySelector("#products");
for (var i = 0; i < products.length; ++i) {
    var new_div = document.createElement('div');
    new_div.innerHTML = '<div class="product"><h2>Nombre del producto</h2><p>Descripción</p></div>';
    id.appendChild(new_div);
}
