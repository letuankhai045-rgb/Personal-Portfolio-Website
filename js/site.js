document.addEventListener("DOMContentLoaded", () => {
	const menuButton = document.querySelector(".menu-button");
	const primaryNav = document.querySelector(".primary-nav, .site-nav");

	if (menuButton && primaryNav) {
		const menuLabel = menuButton.querySelector(".sr-only");
		const updateMenuLabel = (isOpen) => {
			if (menuLabel) {
				menuLabel.textContent = isOpen ? "关闭导航菜单" : "打开导航菜单";
			} else {
				menuButton.textContent = isOpen ? "关闭" : "菜单";
			}
		};

		const closeMenu = () => {
			primaryNav.classList.remove("is-open");
			menuButton.setAttribute("aria-expanded", "false");
			updateMenuLabel(false);
			document.body.classList.remove("menu-open");
		};

		menuButton.addEventListener("click", () => {
			const isOpen = primaryNav.classList.toggle("is-open");
			menuButton.setAttribute("aria-expanded", String(isOpen));
			updateMenuLabel(isOpen);
			document.body.classList.toggle("menu-open", isOpen);
		});

		primaryNav.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", closeMenu);
		});

		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				closeMenu();
			}
		});
	}

	const revealItems = document.querySelectorAll("[data-reveal]");
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	if (reduceMotion || !("IntersectionObserver" in window)) {
		revealItems.forEach((item) => item.classList.add("is-visible"));
	} else {
		const revealObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.16 }
		);

		revealItems.forEach((item) => revealObserver.observe(item));
	}

	const filterButtons = document.querySelectorAll(".filter-button");
	const projectCards = document.querySelectorAll(".project-card");
	const emptyNote = document.querySelector("#empty-note");

	if (filterButtons.length && projectCards.length) {
		const applyFilter = (filter) => {
			let visibleCount = 0;

			filterButtons.forEach((button) => {
				button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
			});

			projectCards.forEach((card) => {
				const isVisible = filter === "all" || card.dataset.category === filter;
				card.classList.toggle("is-hidden", !isVisible);
				if (isVisible) visibleCount += 1;
			});

			if (emptyNote) {
				emptyNote.style.display = visibleCount === 0 ? "block" : "none";
			}
		};

		filterButtons.forEach((button) => {
			button.addEventListener("click", () => applyFilter(button.dataset.filter || "all"));
		});

		const requestedFilter = new URLSearchParams(window.location.search).get("filter");
		const validFilters = ["all", "ai", "marketing", "ui", "writing"];
		applyFilter(validFilters.includes(requestedFilter) ? requestedFilter : "all");
	}

	const contactForm = document.querySelector("#contact-form");
	const formStatus = document.querySelector("#form-status");
	const contactTargetEmail = "1759269788@qq.com";

	if (contactForm && formStatus) {
		contactForm.addEventListener("submit", (event) => {
			event.preventDefault();

			const formData = new FormData(contactForm);
			const name = String(formData.get("name") || "").trim() || "未填写称呼";
			const replyEmail = String(formData.get("email") || "").trim() || "未填写邮箱";
			const subject = String(formData.get("subject") || "").trim() || "来自作品集网站的留言";
			const message = String(formData.get("message") || "").trim();
			const body = [
				`称呼：${name}`,
				`回复邮箱：${replyEmail}`,
				"",
				"留言内容：",
				message
			].join("\n");
			const mailtoUrl = `mailto:${contactTargetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

			window.location.href = mailtoUrl;
			formStatus.textContent = "已为你生成邮件草稿，请在邮件客户端中确认发送。";
			formStatus.classList.add("is-visible");
			formStatus.setAttribute("tabindex", "-1");
			formStatus.focus?.();
		});
	}
});
