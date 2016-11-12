/* eslint-env browser */
import MyTypeExtension from "./element";

document.registerElement("my-type-extension", {
	prototype: MyTypeExtension.prototype,
	extends: "input"
});
