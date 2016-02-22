/* eslint-env browser */
import MyCustomTag from "./element";

export default MyCustomTag;

document.registerElement("my-custom-tag", {
	prototype: MyCustomTag.prototype
});
