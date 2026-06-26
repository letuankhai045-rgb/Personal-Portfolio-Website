document.addEventListener("DOMContentLoaded", () => {
	const board = document.querySelector("[data-writing-folders]");
	if (!board) return;

	const folders = Array.from(board.querySelectorAll(".writing-folder-card"));
	const title = board.querySelector("#writing-folder-title");
	const count = board.querySelector("#writing-folder-count");
	const summary = board.querySelector("#writing-folder-summary");
	const list = board.querySelector("#writing-doc-list");

	const basePath = "../../作品集内容/补充-文案与写作";
	const groups = {
		ad: {
			title: "广告文案类",
			folder: "广告文案类（文案均关于“立兴冻干”品牌）",
			summary: "收录围绕立兴冻干品牌完成的广告语、主题文案与社媒表达，适合快速查看不同情绪切入下的品牌写作。",
			tags: ["品牌文案", "活动表达"],
			docs: [
				{
					title: "《不融，也不容》",
					filename: "《不融，也不容》.txt",
					mode: "drawer",
					content: [
						"夏天不融，",
						"状态也不容掉线。",
						"核心理念：以“不融/不容”的谐音双关，将冻干巧克力“遇热不融”的产品特性延展为年轻人“不容掉线”的生活态度。",
						"创意亮点：用一句话同时表达产品优势和情绪态度，像口号一样简洁有力，适合社媒传播。"
					]
				},
				{
					title: "《如梦令·补氧》",
					filename: "《如梦令·补氧》.txt",
					mode: "drawer",
					content: [
						"昨夜DDL未停，",
						"早八铃声又醒。",
						"试问今日状态，",
						"困困倦倦难行。",
						"补氧，补氧，",
						"一块咖啡即醒。",
						"再来一块巧克力，",
						"快乐也刚好苏醒。",
						"核心理念：《如梦令·补氧》借用传统词牌“如梦令”的韵律感，将年轻人早八困倦、DDL焦虑、状态低电量的日常处境写成一首轻快的现代小令。",
						"创意亮点：作品以真实词牌名为创意，用“补氧，补氧”的重复句式形成朗朗上口的记忆点。"
					]
				},
				{
					title: "《来一块，快乐回来得更快》",
					filename: "《来一块，快乐回来得更快》.txt",
					mode: "drawer",
					content: [
						"来一块，",
						"快乐回来得更快。",
						"核心理念：以“块/快”的谐音为核心，将冻干巧克力和咖啡块的产品形态转化为“状态快速回归”的情绪表达。",
						"创意亮点：一句话轻松好记，既保留“一块”的产品动作，又通过“更快”传递即时补给和情绪回血的感受。"
					]
				},
				{
					title: "《状态已读，清醒未回》",
					filename: "《状态已读，清醒未回》.txt",
					mode: "drawer",
					content: [
						"状态已读，",
						"清醒未回。",
						"立兴一下，",
						"马上在线。",
						"核心理念：借用社交软件“已读未回”的网络语境，把年轻人的犯困、掉线状态转化为等待清醒回复的生活小剧场。",
						"创意亮点：“立兴一下，马上在线”既有品牌谐音，又有状态恢复的结果感，适合打工人、学生党的社媒语境。"
					]
				},
				{
					title: "《立兴？立醒！》",
					filename: "《立兴？立醒！》.txt",
					mode: "drawer",
					content: [
						"困意刚起兴，",
						"我已立醒。",
						"核心理念：以品牌名“立兴”和“立醒”的谐音为核心，将品牌名称直接转化为“清醒状态”的利益表达。",
						"创意亮点：文案短促有力，既强化品牌记忆，又自然暗示冻干咖啡块带来的快速清醒感。"
					]
				}
			]
		},
		theory: {
			title: "理论分析与课程论文类",
			folder: "理论分析与课程论文类",
			summary: "整理课程论文、媒介观察与平台研究文档，展示从案例阅读、问题意识到观点成文的写作训练。",
			tags: ["课程论文", "媒介观察"],
			docs: [
				{ title: "《边境杀手》光线叙事分析", filename: "《边境杀手》光线叙事分析.docx", mode: "article", href: "writing-article.html?id=border-killer", tags: ["电影摄影","光线叙事"] },
				{ title: "从“猫meme”看网络审美活动的生成与影响", filename: "从“猫meme”看网络审美活动的生成与影响.docx", mode: "article", href: "writing-article.html?id=cat-meme-aesthetics", tags: ["网络审美","媒介观察"] },
				{ title: "以《盛世天下》为例看数字媒介对传统审美体验的重构", filename: "以《盛世天下》为例看数字媒介对传统审美体验的重构.docx", mode: "article", href: "writing-article.html?id=shengshi-digital-aesthetic", tags: ["互动影游","数字媒介"] },
				{ title: "关于小红书“反种草”社群内容生产与用户信任机制的调查报告", filename: "关于小红书“反种草”社群内容生产与用户信任机制的调查报告.docx", mode: "article", href: "writing-article.html?id=xiaohongshu-anti-seeding", tags: ["调查报告","平台研究"] },
				{ title: "小红书审美社区中的真实分享与精致模板", filename: "小红书审美社区中的真实分享与精致模板.docx", mode: "article", href: "writing-article.html?id=xiaohongshu-aesthetic-community", tags: ["审美社区","真实分享"] },
				{ title: "新媒体背景下瑞幸咖啡网络营销问题分析与优化策略研究", filename: "新媒体背景下瑞幸咖啡网络营销问题分析与优化策略研究.docx", mode: "article", href: "writing-article.html?id=luckin-new-media-marketing", tags: ["网络营销","品牌优化"] },
				{ title: "荒诞面具下的悲悯与救赎——浅析喜剧电影的品格", filename: "荒诞面具下的悲悯与救赎——浅析喜剧电影的品格.docx", mode: "article", href: "writing-article.html?id=comedy-film-character", tags: ["电影分析","喜剧美学"] }
			]
		},
		news: {
			title: "新闻写作与数据分析类",
			folder: "新闻写作与数据分析类",
			summary: "包含新闻评论、公关事件观察和舆情专题分析，重点呈现事实梳理、观点组织与信息判断能力。",
			tags: ["新闻评论", "舆情分析"],
			docs: [
				{ title: "vivo直播间置顶性别评论争议事件舆情监测专题分析报告", filename: "vivo直播间置顶性别评论争议事件舆情监测专题分析报告.docx", mode: "article", href: "writing-article.html?id=vivo-comment-crisis", tags: ["舆情监测","品牌危机"] },
				{ title: "网络评论：当AI成为造谣工具，谁来守护真相的底线", filename: "网络评论：当AI成为造谣工具，谁来守护真相的底线.docx", mode: "article", href: "writing-article.html?id=ai-rumor-truth", tags: ["网络评论","AI伦理"] },
				{ title: "网络评论：马克龙的成都之行", filename: "网络评论：马克龙的成都之行.docx", mode: "article", href: "writing-article.html?id=macron-chengdu", tags: ["网络评论","文化外交"] },
				{ title: "西贝公关", filename: "西贝公关.docx", mode: "article", href: "writing-article.html?id=xibei-pr", tags: ["公关分析","营销转化"] }
			]
		},
		screen: {
			title: "影视编导类",
			folder: "影视编导类",
			summary: "汇总短视频脚本、分镜头脚本与微电影文本，呈现文字结构如何转换为镜头节奏和画面叙事。",
			tags: ["脚本", "分镜"],
			docs: [
				{ title: "”立兴冻干“策划案中的短视频脚本", filename: "”立兴冻干“策划案中的短视频脚本.pdf", mode: "article", href: "writing-article.html?id=lixing-video-script", tags: ["短视频脚本","品牌传播"] },
				{ title: "《三峡作卷，校园为章》分镜头脚本", filename: "《三峡作卷，校园为章》分镜头脚本.docx", mode: "article", href: "writing-article.html?id=sanxia-shot-script", tags: ["分镜脚本","校园叙事"] },
				{ title: "《大人的酸甜图鉴》30周年情感短片视频脚本", filename: "《大人的酸甜图鉴》30周年情感短片视频脚本.docx", mode: "article", href: "writing-article.html?id=adult-sour-sweet-script", tags: ["情感短片","品牌脚本"] },
				{ title: "一物一生分镜头脚本", filename: "一物一生分镜头脚本.docx", mode: "article", href: "writing-article.html?id=one-life-shot-script", tags: ["微纪录片","分镜脚本"] },
				{ title: "味觉信标_分镜头脚本", filename: "味觉信标_分镜头脚本.docx", mode: "article", href: "writing-article.html?id=taste-beacon-shot-script", tags: ["AI广告","分镜脚本"] },
				{ title: "无尽循环的黑屋_分镜头脚本", filename: "无尽循环的黑屋_分镜头脚本.docx", mode: "article", href: "writing-article.html?id=black-room-shot-script", tags: ["创意广告","分镜脚本"] },
				{ title: "昨日回响（微电影剧本）", filename: "昨日回响（微电影剧本）.docx", mode: "article", href: "writing-article.html?id=yesterday-echo-script", tags: ["微电影","剧本创作"] }
			]
		},
		social: {
			title: "社会实践 · 三下乡",
			folder: "社会实践-三下乡",
			summary: "记录三下乡实践中的新闻稿、活动简讯与阶段总结，让现场调研、传播执行和复盘材料集中呈现。",
			tags: ["实践报道", "活动简讯"],
			docs: [
				{ title: "6.30重庆三峡学院传媒学院“三下乡”：新媒体赋能灯台村振兴", filename: "6.30重庆三峡学院传媒学院“三下乡”：新媒体赋能灯台村振兴.docx", mode: "article", href: "writing-article.html?id=sanxia-june30", tags: ["实践报道","乡村振兴"] },
				{ title: "7月2日活动简讯", filename: "7月2日活动简讯.docx", mode: "article", href: "writing-article.html?id=sanxia-july2", tags: ["活动简讯","直播助农"] },
				{ title: "三下乡总结新闻稿", filename: "三下乡总结新闻稿.docx", mode: "article", href: "writing-article.html?id=sanxia-summary", tags: ["总结新闻","社会实践"] },
				{ title: "传媒学院“三下乡”：深入调研助力灯台村，新媒体赋能乡村振兴再深化", filename: "传媒学院“三下乡”：深入调研助力灯台村，新媒体赋能乡村振兴再深化.docx", mode: "article", href: "writing-article.html?id=sanxia-research-report", tags: ["调研报道","乡村传播"] }
			]
		}
	};

	const stripExtension = (filename) => filename.replace(/\.[^.]+$/, "");
	const normalizeDoc = (doc) => {
		if (typeof doc === "string") {
			return { title: stripExtension(doc), filename: doc, mode: "file" };
		}
		return { ...doc, title: doc.title || stripExtension(doc.filename) };
	};
	const makeHref = (group, doc) => {
		if (doc.href) return doc.href;
		return encodeURI(`${basePath}/${group.folder}/${doc.filename}`);
	};

	let drawer;
	const ensureDrawer = () => {
		if (drawer) return drawer;
		drawer = document.createElement("dialog");
		drawer.className = "writing-drawer";
		drawer.innerHTML = `
			<div class="writing-drawer-shell">
				<button class="writing-drawer-close" type="button" aria-label="关闭文案">×</button>
				<h3></h3>
				<div class="writing-drawer-body"></div>
			</div>
		`;
		document.body.append(drawer);
		drawer.querySelector(".writing-drawer-close").addEventListener("click", () => drawer.close());
		drawer.addEventListener("click", (event) => {
			if (event.target === drawer) drawer.close();
		});
		return drawer;
	};

	const openDrawer = (doc) => {
		const target = ensureDrawer();
		target.querySelector("h3").textContent = doc.title;
		const body = target.querySelector(".writing-drawer-body");
		body.replaceChildren(...doc.content.map((paragraph) => {
			const p = document.createElement("p");
			const labelMatch = paragraph.match(/^(核心理念|创意亮点)：(.+)$/);
			if (labelMatch) {
				const strong = document.createElement("strong");
				strong.textContent = `${labelMatch[1]}：`;
				p.append(strong, document.createTextNode(labelMatch[2]));
			} else {
				p.textContent = paragraph;
			}
			return p;
		}));
		target.showModal();
	};

	const renderDocs = (folderId) => {
		const group = groups[folderId] || groups.ad;
		board.dataset.activeFolder = folderId;
		title.textContent = group.title;
		summary.textContent = group.summary;
		const docs = group.docs.map(normalizeDoc);
		count.textContent = `${String(docs.length).padStart(2, "0")} 份真实文档`;

		const fragment = document.createDocumentFragment();
		docs.forEach((doc) => {
			const item = document.createElement("article");
			item.className = "writing-doc-item";

			const header = document.createElement("header");
			const heading = document.createElement("h5");
			heading.textContent = doc.title;
			header.append(heading);

			const footer = document.createElement("div");
			footer.className = "writing-doc-footer";

			const tags = document.createElement("div");
			tags.className = "writing-doc-tags";
			const docTags = doc.tags || group.tags;
			docTags.forEach((label) => {
				const tag = document.createElement("span");
				tag.textContent = label;
				tags.append(tag);
			});

			const link = document.createElement("a");
			link.className = "writing-doc-link";
			link.href = makeHref(group, doc);
			link.textContent = doc.mode === "drawer" ? "阅读文案" : doc.mode === "article" ? "阅读文章" : "打开文档";
			if (doc.mode === "drawer") {
				link.addEventListener("click", (event) => {
					event.preventDefault();
					openDrawer(doc);
				});
			} else {
				link.target = doc.mode === "article" ? "_self" : "_blank";
				link.rel = "noopener";
			}

			footer.append(tags, link);
			item.append(header, footer);
			fragment.append(item);
		});

		list.replaceChildren(fragment);
	};

	const selectFolder = (folder) => {
		const folderId = folder.dataset.folder || "ad";
		folders.forEach((button) => {
			const selected = button === folder;
			button.classList.remove("is-active");
			button.classList.toggle("is-selected", selected);
			button.setAttribute("aria-expanded", "false");
			button.setAttribute("aria-current", selected ? "true" : "false");
		});
		renderDocs(folderId);
	};

	folders.forEach((folder) => {
		folder.classList.remove("is-active");
		folder.setAttribute("aria-expanded", "false");
		folder.addEventListener("click", () => selectFolder(folder));
	});

	selectFolder(folders.find((folder) => folder.dataset.folder === "ad") || folders[0]);
});
