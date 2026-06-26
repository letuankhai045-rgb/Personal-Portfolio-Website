document.addEventListener("DOMContentLoaded", () => {
	const stage = document.querySelector(".projects-stage");
	const track = document.querySelector(".projects-track");
	const progressBar = document.querySelector(".projects-progress span");
	const cards = Array.from(document.querySelectorAll(".work-card"));
	const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
	const emptyNote = document.querySelector("#empty-note");
	const desktopQuery = window.matchMedia("(min-width: 901px)");
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (!stage || !track || !cards.length) return;

	let maxTranslate = 0;
	let ticking = false;

	const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

	const updateDimensions = () => {
		if (!desktopQuery.matches) {
			stage.style.height = "auto";
			track.style.transform = "none";
			if (progressBar) progressBar.style.transform = "scaleX(0)";
			return;
		}

		maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth);
		stage.style.height = `${window.innerHeight + maxTranslate + 220}px`;
		updateScroll();
	};

	const updateScroll = () => {
		ticking = false;
		if (!desktopQuery.matches) return;

		const available = Math.max(1, stage.offsetHeight - window.innerHeight);
		const progress = clamp((window.scrollY - stage.offsetTop) / available, 0, 1);
		track.style.transform = `translate3d(${-maxTranslate * progress}px, 0, 0)`;
		if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
	};

	const requestScrollUpdate = () => {
		if (ticking) return;
		ticking = true;
		window.requestAnimationFrame(updateScroll);
	};

	const applyFilter = (requestedFilter) => {
		const activeButton = filterButtons.find(
			(button) => button.dataset.filter === requestedFilter && button.getAttribute("aria-pressed") === "true"
		);
		const filter = activeButton ? "all" : requestedFilter;
		let visibleCount = 0;

		filterButtons.forEach((button) => {
			button.setAttribute("aria-pressed", String(filter !== "all" && button.dataset.filter === filter));
		});

		cards.forEach((card) => {
			const visible = filter === "all" || card.dataset.category === filter;
			card.classList.toggle("is-filtered-out", !visible);
			if (visible) visibleCount += 1;
		});

		if (emptyNote) {
			emptyNote.hidden = visibleCount !== 0;
		}

		window.requestAnimationFrame(() => {
			updateDimensions();
			if (filter !== "all") {
				stage.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
			}
		});
	};

	filterButtons.forEach((button) => {
		button.addEventListener("click", () => applyFilter(button.dataset.filter || "all"));
	});

	const requestedFilter = new URLSearchParams(window.location.search).get("filter");
	if (["ai", "marketing", "ui", "writing"].includes(requestedFilter)) {
		applyFilter(requestedFilter);
	}

	window.addEventListener("scroll", requestScrollUpdate, { passive: true });
	window.addEventListener("resize", updateDimensions);
	desktopQuery.addEventListener?.("change", updateDimensions);

	updateDimensions();
});
