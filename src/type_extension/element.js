/* eslint-env browser */
export default class MyTypeExtension extends HTMLInputElement {
	attachedCallback() {
		this.addEventListener("keypress", this.update.bind(this));
	}

	update() {
		this.style.color = this.value.length < 3 ? "red" : "green";
	}
}
