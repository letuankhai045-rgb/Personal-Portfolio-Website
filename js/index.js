const initializeHomeAnimation = () => {
	if (document.documentElement.dataset.homeAnimation === "initialized") {
		return true;
	}

	const panel = document.querySelector(".my-information");
	const portrait = document.querySelector(".portrait");
	const heading = document.querySelector("#home-title");
	const introCopy = document.querySelector(".intro-copy");
	const button = document.querySelector(".explore-button");

	if (!panel || !portrait || !heading || !introCopy || !button || !window.gsap || !window.TextPlugin) {
		return false;
	}

	document.documentElement.dataset.homeAnimation = "initialized";
	gsap.registerPlugin(TextPlugin);

	const headingText = heading.textContent.trim();
	const media = gsap.matchMedia();

	media.add(
		{
			reduceMotion: "(prefers-reduced-motion: reduce)",
			isMobile: "(max-width: 600px)",
			isDesktop: "(min-width: 601px)"
		},
		(context) => {
			const { reduceMotion, isMobile } = context.conditions;

			heading.textContent = headingText;
			heading.classList.remove("is-typing");

			if (reduceMotion) {
				gsap.set([panel, portrait, heading, introCopy, button], { clearProps: "all" });
				return;
			}

			heading.textContent = "";
			gsap.set(heading, { autoAlpha: 0 });
			gsap.set([introCopy, button], { autoAlpha: 0, y: 18, scale: 0.94 });

			const timeline = gsap.timeline({
				defaults: { ease: "power3.out" }
			});

			timeline
				.addLabel("cardIn")
				.fromTo(
					panel,
					{
						autoAlpha: 0,
						y: isMobile ? 24 : 38,
						scale: 0.94,
						rotation: isMobile ? 0 : -1.2
					},
					{
						autoAlpha: 1,
						y: 0,
						scale: 1,
						rotation: 0,
						duration: 0.85,
						ease: "power3.out"
					},
					"cardIn"
				)
				.fromTo(
					portrait,
					{ autoAlpha: 0, scale: 0.58, rotation: -12 },
					{
						autoAlpha: 1,
						scale: 1,
						rotation: 0,
						duration: 0.72,
						ease: "power3.out"
					},
					"cardIn+=0.25"
				);

			timeline
				.set(heading, { autoAlpha: 1 }, "cardIn+=0.72")
				.call(() => heading.classList.add("is-typing"), null, "cardIn+=0.72")
				.to(
					heading,
					{
						text: { value: headingText },
						duration: 0.57,
						ease: "none"
					},
					"cardIn+=0.72"
				)
				.call(() => heading.classList.remove("is-typing"))
				.to(introCopy, {
					autoAlpha: 1,
					y: 0,
					scale: 1,
					duration: 0.8
				}, ">+=0.16")
				.to(button, {
					autoAlpha: 1,
					y: 0,
					scale: 1,
					duration: 0.65
				}, ">+=0.08");
		},
		panel
	);

	window.addEventListener(
		"pagehide",
		() => {
			media.revert();
		},
		{ once: true }
	);

	return true;
};

const startHomeAnimation = () => {
	if (!initializeHomeAnimation()) {
		window.addEventListener("load", initializeHomeAnimation, { once: true });
	}
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", startHomeAnimation, { once: true });
} else {
	startHomeAnimation();
}
