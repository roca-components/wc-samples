/* eslint-env browser */
export default class MyCustomTag extends HTMLElement {
	createdCallback() {
		let header = document.createElement("p");
		header.textContent = "Hello World";
		this.insertBefore(header, this.firstChild);

		this.footer = document.createElement("p");
		this.appendChild(this.footer);

		this.update = this.update.bind(this);

		// monitor content changes
		let observer = new MutationObserver(this.update);
		observer.observe(this, { childList: true });
	}

	attachedCallback() {
		this.update();
		this.addEventListener("click", this.update);
	}

	detachedCallback() {
	}

	attributeChangedCallback(attr, before, after) {
	}

	update() {
		this.footer.textContent = new Date();
	}
}
