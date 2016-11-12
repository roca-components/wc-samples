/* eslint-env browser */
class TaskList extends HTMLElement {
	constructor() {
		super();
		console.log("created / upgraded");

		this.onChange = this.onChange.bind(this);
	}

	static get observedAttributes() {
		return ["theme"];
	}

	connectedCallback() {
		console.log("inserted");

		let observer = new MutationObserver(this.onChange);
		observer.observe(this, { childList: true, subtree: true });

		let shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.textContent = "<canvas></canvas>";
	}

	disconnectedCallback() {
		console.log("removed");
	}

	attributeChangedCallback(name, oldVal, newVal) {
		console.log("attribute", name, oldVal, "→", newVal);
	}

	onChange(ev) {
		console.log("children", this, arguments);
	}
}

customElements.define("task-list", TaskList);
