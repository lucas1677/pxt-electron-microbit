"use strict";var __extends=this&&this.__extends||function(){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var FieldGestures=function(n){function t(t,e,o){var r=n.call(this,t,e,o)||this;return r.isFieldCustom_=!0,r.buttonClick_=function(t){var e=t.target.getAttribute("data-value");this.setValue(e),Blockly.DropDownDiv.hide()},r.columns_=parseInt(e.columns)||4,r.width_=parseInt(e.width)||350,r.addLabel_=!0,r.setText=Blockly.FieldDropdown.prototype.setText,r.updateWidth=Blockly.Field.prototype.updateWidth,r.updateTextNode_=Blockly.Field.prototype.updateTextNode_,r}return __extends(t,n),t.prototype.trimOptions_=function(){},t}(pxtblockly.FieldImages);exports.FieldGestures=FieldGestures;