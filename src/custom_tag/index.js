/* eslint-env browser */
import MyCustomTag from "./element";

document.registerElement("my-custom-tag", {
	prototype: MyCustomTag.prototype
});
