"use strict";
exports.__esModule = true;
exports.Representator = void 0;
var Representator = /** @class */ (function () {
    function Representator() {
        this.alphabetic_array = [];
        for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); ++i) {
            this.alphabetic_array.push(String.fromCharCode(i));
        }
        this.alphabetic_array.push(' ');
    }
    /* Returns the index of the first appear of
       the character in the array.
      If it's not present, returns -1.
      */
    Representator.prototype.index = function (array, character) {
        for (var i = 0; i < array.length; ++i) {
            if (character == array[i]) {
                return i;
            }
        }
        return -1;
    };
    Representator.prototype.stringToNumbers = function (word) {
        var representation = [];
        for (var i = 0; i < word.length; ++i) {
            representation.push(this.index(this.alphabetic_array, word[i]));
        }
        return representation;
    };
    return Representator;
}());
exports.Representator = Representator;
