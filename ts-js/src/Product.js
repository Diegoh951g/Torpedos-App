"use strict";
exports.__esModule = true;
exports.Product = void 0;
var BinarySeachTree_1 = require("./binary-search-tree/BinarySeachTree");
var Product = /** @class */ (function () {
    function Product(name) {
        this.name = name;
        this.torpedos = new BinarySeachTree_1.BinarySearchTree();
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getTorpedos = function () {
        return this.torpedos;
    };
    return Product;
}());
exports.Product = Product;
