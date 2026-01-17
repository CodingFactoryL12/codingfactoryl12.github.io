class Footer extends HTMLElement {
	FOOTER_TEXT = "© 2025 CodingFactoryL - Alle Rechte vorbehalten";

	async connectedCallback() {
		const footer = document.createElement("footer");

		footer.textContent = this.FOOTER_TEXT;
		footer.style.textAlign = "center";
		footer.style.padding = "20px";
		footer.style.marginTop = "60px";
		footer.style.color = "#777";

		this.appendChild(footer);
	}
}

customElements.define("custom-footer", Footer);
