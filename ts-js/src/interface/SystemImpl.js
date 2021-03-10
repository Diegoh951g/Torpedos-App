"use strict";
exports.__esModule = true;
exports.SystemImpl = void 0;
var Product_1 = require("../Product");
var BinarySeachTree_1 = require("../binary-search-tree/BinarySeachTree");
var SystemImpl = /** @class */ (function () {
    // private categories: BinarySearchTree<Category>;
    function SystemImpl() {
        this.products = new BinarySeachTree_1.BinarySearchTree();
        this.general_torpedos = new BinarySeachTree_1.BinarySearchTree();
    }
    SystemImpl.prototype.insertProduct = function (name) {
        var product = new Product_1.Product(name);
        this.products.insert(product, name);
    };
    SystemImpl.prototype.insertCategory = function (name) {
    };
    SystemImpl.prototype.insertTorpedo = function (torpedo) {
    };
    SystemImpl.prototype.showProducts = function () {
        this.products.show();
    };
    SystemImpl.prototype.getProducts = function () {
        return this.products.toArray();
    };
    return SystemImpl;
}());
exports.SystemImpl = SystemImpl;
