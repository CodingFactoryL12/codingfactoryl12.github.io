class ProjectEntry extends HTMLElement {
	async connectedCallback() {
		const projectPageLink = this.getAttribute("projectPageLink");
		const imgSrc = this.getAttribute("imgSrc");
		const date = this.getAttribute("date");
		const title = this.getAttribute("title");

		const timelineItem = document.createElement("div");
		timelineItem.classList.add("timeline-item");

		const projectCard = document.createElement("div");
		projectCard.classList.add("project-card");
		projectCard.onclick = () => (window.location.href = projectPageLink);

		const image = document.createElement("img");
		image.src = imgSrc;

		const dateElement = document.createElement("div");
		dateElement.classList.add("project-date");
		dateElement.textContent = date;

		const titleElement = document.createElement("div");
		titleElement.classList.add("project-title");
		titleElement.textContent = title;

		projectCard.appendChild(image);
		projectCard.appendChild(dateElement);
		projectCard.appendChild(titleElement);
		timelineItem.appendChild(projectCard);
		this.appendChild(timelineItem);

		/**
     * 			<!-- GIFT TO MOM -->
			<div class="timeline-item">
				<div class="project-card" onclick="window.location.href = 'projekt-giftmom.html'">
					<img src="/assets/Geburtstags-Quiz für Mama und 6 weitere Seiten - Persönlich – Microsoft​ Edge 09.01.2026 09_21_39.png" />
					<div class="project-date">September 2025</div>
					<div class="project-title">Gift to Mom</div>
				</div>
			</div>
     */
	}
}

customElements.define("project-entry", ProjectEntry);
