"use strict";
exports.__esModule = true;
exports.TreeNode = void 0;
// Generic class.
var TreeNode = /** @class */ (function () {
    function TreeNode(value, key) {
        this.value = value;
        this.key = key;
        this.left = null;
        this.right = null;
    }
    TreeNode.prototype.getValue = function () {
        return this.value;
    };
    TreeNode.prototype.getKey = function () {
        return this.key;
    };
    TreeNode.prototype.getLeft = function () {
        return this.left;
    };
    TreeNode.prototype.getRight = function () {
        return this.right;
    };
    TreeNode.prototype.setLeft = function (left) {
        this.left = left;
    };
    TreeNode.prototype.setRight = function (right) {
        this.right = right;
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
