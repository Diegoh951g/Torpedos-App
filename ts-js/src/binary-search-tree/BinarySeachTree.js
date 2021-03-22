"use strict";
exports.__esModule = true;
exports.BinarySearchTree = void 0;
var TreeNode_1 = require("./TreeNode");
var Representator_1 = require("../Representator");
var representator = new Representator_1.Representator();
function whichFirst(str1, str2) {
    if (str1.length > str2.length) {
        var aux = str1;
        str1 = str2;
        str2 = aux;
    }
    var rep1 = representator.stringToNumbers(str1.toLowerCase());
    var rep2 = representator.stringToNumbers(str2.toLowerCase());
    for (var i = 0; i < str1.length; ++i) {
        if (rep1[i] != rep2[i])
            return (rep1[i] < rep2[i]) ? str1 : str2;
    }
    return str1;
}
// Binary Search Tree Class
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.getRoot = function () {
        return this.root;
    };
    BinarySearchTree.prototype.insert = function (value, value_key) {
        this.root = this._insert(this.root, value, value_key);
    };
    BinarySearchTree.prototype.show = function () {
        this._inOrder(this.root);
    };
    BinarySearchTree.prototype.toArray = function () {
        var array = [];
        return this._toArray(this.root, array);
    };
    BinarySearchTree.prototype._toArray = function (node, array) {
        if (node != null) {
            array = this._toArray(node.getLeft(), array);
            array.push(node.getValue());
            array = this._toArray(node.getRight(), array);
        }
        return array;
    };
    BinarySearchTree.prototype._inOrder = function (node) {
        if (node != null) {
            this._inOrder(node.getLeft());
            console.log(node.getKey());
            this._inOrder(node.getRight());
        }
    };
    // TODO: this method is not ready
    BinarySearchTree.prototype._insert = function (node, value, value_key) {
        if (node == null) {
            node = new TreeNode_1.TreeNode(value, value_key);
        }
        else {
            if (whichFirst(value_key, node.getKey()) == value_key) {
                node.setLeft(this._insert(node.getLeft(), value, value_key));
            }
            else {
                node.setRight(this._insert(node.getRight(), value, value_key));
            }
        }
        return node;
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
