/* eslint-env browser */
import MyTypeExtension from "./element";

export default MyTypeExtension;

document.registerElement("my-type-extension", {
	prototype: MyTypeExtension.prototype,
	extends: "input"
});
