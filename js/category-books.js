document.addEventListener("DOMContentLoaded", () => {
	const projects = {
		sanxia: {
			type: "AIGC校园纪念短片",
			title: "《三峡作卷，校园为章》",
			summary: "以“校园长卷”为核心视觉概念，将真实校园建筑转化为统一风格的动态影像，用空间流动串联七十周年校园记忆。",
			meta: ["校园叙事", "分镜脚本", "图生视频"],
			image: "../img/cover-sanxia.png",
			alt: "《三峡作卷，校园为章》项目封面",
			href: "project.html?id=sanxia",
			number: "01 / 03"
		},
		lixing: {
			type: "整合营销策划案",
			title: "立兴冻干 × WHATEVER",
			summary: "以“来一块，给生活补点氧”为传播主题，把联名产品塑造成兼具状态补给、情绪回血与轻礼赠价值的轻氧补给礼。",
			meta: ["品牌策划", "节日营销", "活动创意"],
			image: "../img/cover-lixing.png",
			alt: "立兴冻干与 WHATEVER 联名策划案项目封面",
			href: "project.html?id=lixing",
			number: "02 / 03"
		},
		xiangyinhui: {
			type: "产品策划与UI交互设计",
			title: "“乡音汇”方言翻译与保护APP",
			summary: "围绕方言翻译、学习与文化记录，完成用户画像、体验地图、功能架构、低保真原型和高保真界面设计。",
			meta: ["产品策划", "用户体验", "交互原型"],
			image: "../img/cover-xiangyinhui.png",
			alt: "乡音汇方言翻译与保护 APP 项目封面",
			href: "project.html?id=xiangyinhui",
			number: "03 / 03"
		}
	};

	const panel = document.querySelector(".featured-panel");
	if (!panel) return;

	const tabs = Array.from(document.querySelectorAll("[data-featured-tab]"));
	const copy = panel.querySelector(".featured-copy");
	const visual = panel.querySelector(".featured-visual");
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	let activeKey = "sanxia";
	let animating = false;

	const render = () => {
		const project = projects[activeKey];
		panel.querySelector(".featured-type").textContent = project.type;
		panel.querySelector(".featured-title").textContent = project.title;
		panel.querySelector(".featured-summary").textContent = project.summary;
		panel.querySelector(".featured-detail").href = project.href;
		panel.querySelector(".featured-number").textContent = project.number;

		const image = panel.querySelector(".featured-visual img");
		image.src = project.image;
		image.alt = project.alt;

		const meta = panel.querySelector(".featured-meta");
		meta.replaceChildren(
			...project.meta.map((label) => {
				const tag = document.createElement("span");
				tag.textContent = label;
				return tag;
			})
		);

		tabs.forEach((tab) => {
			tab.setAttribute("aria-selected", String(tab.dataset.featuredTab === activeKey));
		});
	};

	const switchProject = (nextKey) => {
		if (!projects[nextKey] || nextKey === activeKey || animating) return;
		const oldIndex = tabs.findIndex((tab) => tab.dataset.featuredTab === activeKey);
		const newIndex = tabs.findIndex((tab) => tab.dataset.featuredTab === nextKey);
		const direction = newIndex > oldIndex ? 1 : -1;

		if (reduceMotion || !window.gsap) {
			activeKey = nextKey;
			render();
			return;
		}

		animating = true;
		gsap.timeline({
			defaults: { overwrite: "auto" },
			onComplete: () => {
				animating = false;
				gsap.set([copy, visual], { clearProps: "transform,opacity,visibility" });
			}
		})
			.to([copy, visual], {
				x: direction * -36,
				autoAlpha: 0,
				duration: 0.26,
				ease: "power2.in"
			})
			.add(() => {
				activeKey = nextKey;
				render();
				gsap.set([copy, visual], { x: direction * 36, autoAlpha: 0 });
			})
			.to([copy, visual], {
				x: 0,
				autoAlpha: 1,
				duration: 0.5,
				ease: "power3.out"
			});
	};

	tabs.forEach((tab) => {
		tab.addEventListener("click", () => switchProject(tab.dataset.featuredTab));
	});

	render();
});
