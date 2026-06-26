document.addEventListener("DOMContentLoaded", () => {
	const board = document.querySelector("[data-writing-folders]");
	if (!board) return;

	const folders = Array.from(board.querySelectorAll(".writing-folder-card"));
	const title = board.querySelector("#writing-folder-title");
	const count = board.querySelector("#writing-folder-count");
	const summary = board.querySelector("#writing-folder-summary");
	const list = board.querySelector("#writing-doc-list");
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	const writingGroups = {
		ad: {
			title: "广告文案类",
			summary: "围绕品牌调性、活动场景和用户情绪完成广告语、推文标题、产品卖点与传播文案整理。",
			docs: [
				{ title: "立兴冻干 × WHATEVER 联名传播文案", time: "2026.05", desc: "围绕“来一块，给生活补点氧”梳理联名主张、社媒标题与产品卖点表达。", tags: ["品牌文案", "活动传播"] },
				{ title: "娃哈哈AD钙奶30周年情绪营销文案", time: "2026.05", desc: "从童年记忆和年轻化场景出发，整理主视觉文案、活动话术与短视频标题。", tags: ["情绪营销", "短视频"] },
				{ title: "力诚《味觉信标》广告脚本台词", time: "2025.11", desc: "配合深海视觉设定完成品牌广告旁白、产品露出语与结尾收束文案。", tags: ["广告脚本", "品牌收束"] },
				{ title: "Canva《无尽循环的黑屋》创意说明", time: "2026.05", desc: "将内容创作焦虑转译为悬疑反转叙事，完成创意概念和场景说明。", tags: ["创意概念", "故事表达"] }
			]
		},
		theory: {
			title: "理论分析与课程论文类",
			summary: "整理课程论文、平台文化观察和媒介现象分析，呈现从资料阅读到观点形成的写作过程。",
			docs: [
				{ title: "短视频平台内容传播机制分析", time: "课程论文", desc: "分析平台推荐逻辑、用户参与方式与内容生产者的表达策略。", tags: ["平台研究", "媒介分析"] },
				{ title: "品牌年轻化叙事中的怀旧情绪研究", time: "课程作业", desc: "结合饮料、零食等消费品牌案例，讨论怀旧符号如何连接不同年龄层。", tags: ["品牌研究", "消费文化"] },
				{ title: "AIGC影像创作中的视觉风格统一问题", time: "课程笔记", desc: "记录AI生成影像在分镜、提示词和后期整理中的一致性控制方法。", tags: ["AIGC", "视觉研究"] },
				{ title: "网络审美与青年表达观察", time: "阅读札记", desc: "从流行梗、社交平台图文风格和校园传播案例中提炼观察。", tags: ["青年文化", "观察记录"] }
			]
		},
		news: {
			title: "新闻写作与数据分析类",
			summary: "以事实梳理、采访整理和数据表达为重点，展示新闻写作与信息可视化训练。",
			docs: [
				{ title: "校园活动新闻稿合集", time: "2025-2026", desc: "围绕校园活动、社团实践和课程成果进行消息写作与结构整理。", tags: ["新闻稿", "校园报道"] },
				{ title: "地方文化传播数据观察", time: "课程作业", desc: "用基础数据和图表说明地方文化内容在平台上的传播趋势。", tags: ["数据分析", "图表解读"] },
				{ title: "人物采访提纲与整理稿", time: "采访练习", desc: "从采访问题设计到素材归类，练习把口述内容转化为清晰文本。", tags: ["采访", "人物写作"] },
				{ title: "热点事件信息梳理练习", time: "课堂训练", desc: "按时间线、主体关系和观点分布整理复杂信息，训练新闻判断。", tags: ["信息整理", "事实核查"] }
			]
		},
		screen: {
			title: "影视编导类",
			summary: "收录短片脚本、分镜说明和影像策划文本，强调从文字结构到画面节奏的转换。",
			docs: [
				{ title: "《三峡作卷，校园为章》分镜脚本", time: "2026.06", desc: "以校园建筑为线索，整理镜头顺序、运动方式、声音与画面意图。", tags: ["分镜脚本", "校园影像"] },
				{ title: "《无尽循环的黑屋》广告短片脚本", time: "2026.05", desc: "围绕悬疑压迫和工具破局设计场景冲突、角色动作和反转节奏。", tags: ["广告短片", "悬疑叙事"] },
				{ title: "《味觉信标》深海广告视觉脚本", time: "2025.11", desc: "把产品陪伴、学习场景和深海想象串联成完整镜头段落。", tags: ["品牌广告", "视觉脚本"] },
				{ title: "课程节目策划案片段", time: "课程作业", desc: "完成节目主题、受众定位、环节设计和主持串联文案。", tags: ["节目策划", "编导写作"] }
			]
		},
		social: {
			title: "社会实践 · 三下乡",
			summary: "记录社会实践中的调研、活动报道、推送撰写与复盘总结，让现场经历沉淀成可阅读的材料。",
			docs: [
				{ title: "三下乡实践活动总结", time: "社会实践", desc: "从活动背景、实践过程、团队分工和个人收获梳理完整复盘。", tags: ["实践总结", "复盘"] },
				{ title: "乡村文化调研记录", time: "调研材料", desc: "整理访谈、现场观察和地方文化内容，为后续传播材料提供依据。", tags: ["调研记录", "地方文化"] },
				{ title: "实践队推送文案合集", time: "活动传播", desc: "围绕每日活动、团队故事和成果展示完成公众号推送文本。", tags: ["推送", "活动报道"] },
				{ title: "志愿服务新闻稿", time: "新闻写作", desc: "以新闻结构记录活动现场、服务对象和实践价值。", tags: ["新闻稿", "志愿服务"] }
			]
		}
	};

	const renderDocs = (folderId) => {
		const group = writingGroups[folderId] || writingGroups.ad;
		title.textContent = group.title;
		summary.textContent = group.summary;
		count.textContent = `${String(group.docs.length).padStart(2, "0")} 份文档`;

		const fragment = document.createDocumentFragment();
		group.docs.forEach((doc) => {
			const item = document.createElement("article");
			item.className = "writing-doc-item";

			const header = document.createElement("header");
			const heading = document.createElement("h5");
			const time = document.createElement("time");
			heading.textContent = doc.title;
			time.textContent = doc.time;
			header.append(heading, time);

			const desc = document.createElement("p");
			desc.textContent = doc.desc;

			const tags = document.createElement("div");
			tags.className = "writing-doc-tags";
			doc.tags.forEach((label) => {
				const tag = document.createElement("span");
				tag.textContent = label;
				tags.append(tag);
			});

			item.append(header, desc, tags);
			fragment.append(item);
		});

		list.replaceChildren(fragment);
	};

	const setActiveFolder = (folder) => {
		folders.forEach((button) => {
			const isActive = button === folder;
			button.classList.toggle("is-active", isActive);
			button.setAttribute("aria-expanded", String(isActive));
		});
		renderDocs(folder.dataset.folder || "ad");
	};

	folders.forEach((folder) => {
		folder.addEventListener("click", () => setActiveFolder(folder));

		folder.querySelectorAll(".writing-paper").forEach((paper) => {
			paper.addEventListener("pointermove", (event) => {
				if (reduceMotion || !folder.classList.contains("is-active")) return;
				const rect = paper.getBoundingClientRect();
				const offsetX = (event.clientX - (rect.left + rect.width / 2)) * 0.12;
				const offsetY = (event.clientY - (rect.top + rect.height / 2)) * 0.12;
				paper.style.setProperty("--magnet-x", `${offsetX}px`);
				paper.style.setProperty("--magnet-y", `${offsetY}px`);
			});

			paper.addEventListener("pointerleave", () => {
				paper.style.removeProperty("--magnet-x");
				paper.style.removeProperty("--magnet-y");
			});
		});
	});

	renderDocs("ad");
});
