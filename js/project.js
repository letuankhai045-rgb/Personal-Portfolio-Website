const projects = [
	{
		id: "sanxia",
		number: "01",
		category: "AI影像",
		title: "《三峡作卷，校园为章》",
		type: "AIGC校园纪念短片",
		role: "创意构想 / 编导文案 / AIGC内容创作",
		attribute: "校内课程项目 · 2026.06",
		tags: ["AIGC短片", "校园叙事", "分镜脚本", "图生视频"],
		image: "../img/project-sanxia.png",
		imageAlt: "《三峡作卷，校园为章》校园主视觉",
		video: "../media/sanxia-film.mp4",
		references: [
			{ src: "../img/sanxia-reference-01.png", alt: "校园建筑与场景视觉参考图一" },
			{ src: "../img/sanxia-reference-02.png", alt: "校园建筑与场景视觉参考图二" },
			{ src: "../img/sanxia-reference-03.png", alt: "校园建筑与场景视觉参考图三" }
		],
		description: "围绕重庆三峡科技大学建校70周年主题创作的AIGC纪念短片。作品以“校园长卷”为核心视觉概念，通过AI图像生成、图生视频、后期剪辑与音乐包装，将校门、图书馆、莲花小广场、博学楼、运动场及校园道路等真实场景转化为统一风格的动态影像，以空间流动串联校园记忆，呈现学校发展历程与青春氛围。",
		work: "我提出“校园长卷”的创意方向，并参与完成前期策划、编导文案、分镜头脚本与AIGC提示词整理。后续结合真实校园建筑照片，梳理统一画面风格、场景特征与动态效果说明，辅助完成校园场景的AI生成与图生视频表达。"
	},
	{
		id: "black-room",
		number: "02",
		category: "AI影像",
		title: "《无尽循环的黑屋》",
		type: "AI创意广告短片",
		role: "创意策划 / 脚本设计 / AI视觉生成辅助",
		attribute: "校内课程项目 · 2026.05",
		tags: ["AI广告", "悬疑反转", "广告脚本", "视觉设定"],
		image: "../img/project-black-room.png",
		imageAlt: "《无尽循环的黑屋》黑暗房间主视觉",
		video: "../media/black-room-film.mp4",
		poster: "../img/black-room-poster.png",
		carousel: true,
		references: [
			{ src: "../img/black-room-dark-front.png", alt: "黑暗房间正面视觉设定" },
			{ src: "../img/black-room-dark-top.png", alt: "黑暗房间俯视视觉设定" },
			{ src: "../img/black-room-dark-grid.png", alt: "黑暗房间九宫格视觉设定" },
			{ src: "../img/black-room-light-front.png", alt: "光亮房间正面视觉设定" },
			{ src: "../img/black-room-light-top.png", alt: "光亮房间俯视视觉设定" },
			{ src: "../img/black-room-light-grid.png", alt: "光亮房间九宫格视觉设定" },
			{ src: "../img/black-room-protagonist.png", alt: "短片主角三视图" },
			{ src: "../img/black-room-courier-views.png", alt: "快递员站立状态三视图" },
			{ src: "../img/black-room-courier-box.png", alt: "快递员递箱子动作三视图" }
		],
		description: "围绕Canva可画“内容创作焦虑”场景完成的AI创意广告短片。作品以“悬疑压迫—工具破局—情绪反转”为叙事结构，将灵感枯竭、素材不足、排版困难和时间紧张等创作困境具象化为黑衣人围困；当Canva界面亮起，原本的阻碍随之转化为创作助力。",
		work: "我参与广告创意方向讨论与脚本设计，协助将抽象的创作焦虑转化为具象化故事冲突，并围绕主角、黑暗房间、黑衣人、礼盒素材及反转场景进行人物与视觉设定；后续参与AI画面生成与优化，根据成片需要调整光影、人物动作、场景细节和整体氛围。"
	},
	{
		id: "taste-beacon",
		number: "03",
		category: "AI影像",
		title: "《味觉信标》",
		type: "AI品牌广告短片",
		role: "广告脚本 / AI视觉创意 / 画面设定",
		attribute: "校内课程项目 · 2025.11",
		tags: ["品牌广告", "深海视觉", "分镜脚本", "AI视频生成"],
		image: "../img/project-taste-beacon.png",
		imageAlt: "《味觉信标》深海水母主视觉",
		video: "../media/taste-beacon-film.mp4",
		poster: "../img/taste-beacon-poster.png",
		script: [
			{ duration: 2, shot: "俯拍中景", movement: "缓慢俯视", visual: "夜晚宿舍内，女生坐在书桌前低头学习。桌面摊开海洋相关课本，背景能看到宿舍床铺，整体环境安静。", audio: "夜晚宿舍氛围声，低缓音乐进入。", intent: "建立深夜学习的现实场景，呈现专注但疲惫的状态。" },
			{ duration: 2, shot: "中近景", movement: "轻微推进", visual: "镜头靠近书桌，主角仍在埋头看书，课本出现海洋图示，桌面右下方露出力诚产品包装。", audio: "旁白：在每一个埋头努力的夜晚……", intent: "将品牌与努力、学习和专注的年轻人场景连接起来。" },
			{ duration: 2, shot: "中景", movement: "轻微推近", visual: "主角伸手拿起力诚产品并打开包装，课本、产品包装和人物动作同时进入画面。", audio: "包装开启声，音乐保持柔和。", intent: "让产品从背景物件转为推动叙事的关键道具。" },
			{ duration: 2, shot: "中近景", movement: "镜头稳定", visual: "主角拿起产品送入口中，力诚产品包装清晰可见，海洋课本仍摊开在下方。", audio: "旁白：让海洋的鲜活，成为你最安静的陪伴。", intent: "将海洋食品卖点与安静陪伴的情绪价值绑定。" },
			{ duration: 2, shot: "特写", movement: "下切书本", visual: "镜头切到海洋课本特写，蓝色区域逐渐变得灵动，仿佛有海水正在书页中流动。", audio: "轻微水声逐渐出现。", intent: "由现实书本过渡到想象空间，为深海幻象铺垫。" },
			{ duration: 2, shot: "特写", movement: "特效转场", visual: "课本上的蓝色海流逐渐扩散，形成流动的蓝色能量波纹，像海水从纸面中涌出。", audio: "音乐变得空灵，水流声增强。", intent: "用书页海流活化完成现实与幻想的自然衔接。" },
			{ duration: 2, shot: "抽象全景", movement: "溶解转场", visual: "画面完全进入蓝色海流空间，蓝白色水流占据整个画面，形成流动的海洋肌理。", audio: "旁白：也在这一口之间……", intent: "强化味觉与视觉的联动，带领观众进入海洋想象。" },
			{ duration: 3, shot: "深海全景", movement: "横向推进", visual: "深海场景展开，蓝色水流在海中穿梭，水母缓慢漂浮，海水光线从上方洒下。", audio: "空灵音乐、水声与水母漂浮氛围。", intent: "建立梦幻明亮的深海视觉世界。" },
			{ duration: 2, shot: "全景", movement: "跟随水流", visual: "发光水母向右侧漂移，蓝色能量流穿过海底空间，远处可见珊瑚与暗色海底轮廓。", audio: "音乐节奏轻微推进。", intent: "用发光水母和海流表现鲜活、灵动与自然。" },
			{ duration: 2, shot: "中全景", movement: "跟拍右移", visual: "蓝色能量流经过海底植物，紫蓝色鱼形生物在水流旁穿行，画面充满海底生命感。", audio: "水流声与轻微气泡声。", intent: "让海洋成为充满生命力的味觉意象，而非单纯背景。" },
			{ duration: 3, shot: "全景", movement: "横向移动", visual: "镜头进入海藻与珊瑚交错的区域，蓝色能量流形成明显轨迹，鱼群穿梭其中。", audio: "空灵音乐持续。", intent: "强化蓝色能量流作为味觉信标的核心视觉符号。" },
			{ duration: 3, shot: "全景", movement: "缓慢右移", visual: "海底空间变得更开阔，蓝色能量流从海藻旁穿过，发光小鱼点缀在远处。", audio: "水下环境音。", intent: "扩大海洋空间层次，建立完整的海底世界。" },
			{ duration: 3, shot: "中全景", movement: "跟随能量流", visual: "黄色发光的海马状生物出现，蓝色能量流在下方盘旋，冷蓝画面加入暖黄点缀。", audio: "音乐变得更加轻盈。", intent: "表现鲜活海洋蛋白的生命感与营养联想。" },
			{ duration: 3, shot: "全景", movement: "平移轻推", visual: "画面进入珊瑚礁区域，白色发光水母与蓝色能量流共同穿过层次丰富的海底植物。", audio: "水声与梦幻电子音。", intent: "展现深海世界的丰富与纯净，营造沉浸式口感想象。" },
			{ duration: 2, shot: "中全景", movement: "缓慢推进", visual: "一只海龟从右侧游入，与发光水母、能量流及明亮珊瑚共同进入画面。", audio: "音乐继续上扬。", intent: "强化自然、健康与海洋来源的品牌联想。" },
			{ duration: 3, shot: "全景", movement: "横向跟拍", visual: "巨大的蝠鲼与海龟共同在蓝色海水中缓缓游动，画面开阔而震撼。", audio: "水下低频音效，音乐更宏大。", intent: "将深海想象推向高潮，表现短暂出走与能量补给感。" },
			{ duration: 3, shot: "大全景", movement: "旋转聚合", visual: "蓝色能量流在海中聚拢，形成类似漩涡或星云的发光结构，光点围绕中心旋转。", audio: "音乐达到阶段性高潮。", intent: "将深海意象收束为信标符号，象征味觉能量被点亮。" },
			{ duration: 3, shot: "特写", movement: "光点转场", visual: "一束蓝色光点从深海漩涡中飞出，穿过黑暗空间，像流星般返回现实世界。", audio: "过渡音效与光点划过声。", intent: "由深海幻想返回现实宿舍，完成空间转换。" },
			{ duration: 3, shot: "书本特写", movement: "光效落回书页", visual: "蓝色光点重新落在课本页面上，海流图案再次出现，与之前的深海幻象相互呼应。", audio: "音乐逐渐柔和。", intent: "让海洋能量沉淀为现实中的专注状态。" },
			{ duration: 2, shot: "中近景", movement: "切回现实", visual: "主角趴在书桌上，眼睛微闭，脸上仍有疲惫感，课本与学习用品回到画面中心。", audio: "环境音回归宿舍夜晚氛围。", intent: "从幻想回到现实，以短暂停顿承接情绪转折。" },
			{ duration: 2, shot: "近景", movement: "轻微推近", visual: "主角慢慢睁开眼睛并抬头看向前方，表情由疲惫转为放松，眼神逐渐明亮。", audio: "音乐变得温暖。", intent: "表现产品带来的情绪放松与精神恢复。" },
			{ duration: 3, shot: "产品定版", movement: "背景虚化", visual: "产品包装出现在左侧，宿舍场景虚化为背景，右侧出现广告语“力诚，鲜享每一刻”。", audio: "品牌音效收束：力诚，鲜享每一刻。", intent: "完成品牌收束，强化包装识别与核心传播语。" }
		],
		description: "围绕力诚健康海洋食品完成的AI品牌广告短片。作品从大学生深夜学习的现实场景切入，通过产品触发深海视觉想象，将海流、水母、珊瑚、海龟、蝠鲼等海洋意象融入画面，形成“现实学习场景—产品陪伴—深海想象—品牌收束”的叙事结构，传达鲜活、陪伴与能量补给的品牌感受。",
		work: "我主要参与广告脚本制作、画面内容设定与AI视频生成，围绕深夜学习、产品陪伴、海流能量和深海生物等元素梳理镜头画面与视觉方向；并结合最终成片效果，对原有脚本内容、人物状态、宿舍场景、深海氛围和产品展示画面进行取舍与调整。"
	},
	{
		id: "lixing",
		number: "04",
		category: "营销策划",
		title: "立兴冻干 × WHATEVER《来一块，给生活补点氧》",
		type: "整合营销策划案",
		role: "核心成员 / 策划案主笔 / PPT制作",
		attribute: "学院奖参赛项目 · 2026.05—2026.06",
		tags: ["品牌策划", "节日营销", "活动创意", "AI视觉辅助"],
		image: "../img/project-lixing.png",
		imageAlt: "立兴冻干联名策划案 H5 视觉",
		campaign: {
			sections: [
				{
					id: "insight",
					label: "市场洞察",
					icon: "⌁",
					options: [
						{
							label: "消费者定位",
							slide: 8,
							eyebrow: "MARKET INSIGHT",
							title: "从年轻人的“状态缺氧”出发",
							description: "聚焦18—30岁年轻群体，把“想吃但怕负担、想补给但怕麻烦、想送礼但怕俗套”转译为轻负担悦己、状态补给与轻礼赠分享三类真实需求。",
							points: ["18—30岁核心人群", "学习 · 通勤 · 社交 · 节日", "状态补给与情绪回血"],
							image: "../img/lixing-consumer.webp",
							alt: "立兴冻干策划案消费者定位分析"
						},
						{
							label: "SWOT判断",
							slide: 9,
							eyebrow: "MARKET INSIGHT",
							title: "用“技术 × 联名 × 场景”建立差异",
							description: "在新品认知和竞品分流压力下，将航天冻干技术、双品组合与节日礼赠场景叠加，抓住健康轻负担、情绪回血和轻礼赠三类机会。",
							points: ["冻干技术品质背书", "双品组合新鲜感", "轻氧补给礼定位"],
							image: "../img/lixing-swot.webp",
							alt: "立兴冻干策划案SWOT分析"
						}
					]
				},
				{
					id: "strategy",
					label: "核心策略",
					icon: "✦",
					options: [
						{
							label: "产品定位",
							slide: 6,
							eyebrow: "CORE STRATEGY",
							title: "把普通零食升级为“轻氧补给礼”",
							description: "以冻干巧克力与冻干咖啡块满足状态补给和情绪补给的双重需求，让产品兼具轻负担、便携性、分享感与节日礼赠价值。",
							points: ["状态补给", "情绪补给", "日常与节日双场景"],
							image: "../img/lixing-product.webp",
							alt: "立兴冻干联名产品分析"
						},
						{
							label: "推广路线",
							slide: 11,
							eyebrow: "CORE STRATEGY",
							title: "从“初氧”到“新岁开氧”",
							description: "以“小兴航员”为统一IP线索，将全年传播拆分为序章、春、夏、秋、冬五段旅程，让每一次节日触点都承担清晰的传播任务。",
							points: ["统一IP记忆点", "全年节点连续传播", "线上线下协同转化"],
							image: "../img/lixing-route.webp",
							alt: "立兴冻干全年推广路线图"
						}
					]
				},
				{
					id: "annual",
					label: "全年活动",
					icon: "◎",
					options: [
						{
							label: "春 · 轻氧有信",
							slide: 13,
							season: "春",
							eyebrow: "SPRING / 02—05",
							title: "不融化情诗计划",
							description: "围绕情人节与母亲节打造轻氧情诗生成器、短视频内容和线下情诗馆，用“不太会告白的人”连接刚刚好的心意。",
							points: ["H5轻氧情诗卡", "520内容传播", "线下情诗馆"],
							image: "../img/lixing-spring.webp",
							alt: "春季不融化情诗计划"
						},
						{
							label: "夏 · 给未来补氧",
							slide: 15,
							season: "夏",
							eyebrow: "SUMMER / 05—06",
							title: "WHATEVER白方块毕业计划",
							description: "以毕业焦虑为情绪入口，用焦虑可擦墙、白方块照相馆和618毕业轻氧礼，陪年轻人从校园走向下一站。",
							points: ["校园白方块快闪", "毕业照相馆", "618轻氧礼"],
							image: "../img/lixing-summer.webp",
							alt: "夏季WHATEVER白方块毕业计划"
						},
						{
							label: "秋 · 漫游搭子",
							slide: 18,
							season: "秋",
							eyebrow: "AUTUMN / 07—10",
							title: "秋日漫游搭子计划",
							description: "借七夕、中秋与国庆出行节点，把产品塑造成年轻人的轻氧搭子，通过集章、出行补给与UGC分享延展品牌陪伴感。",
							points: ["城市漫游集章", "中秋轻氧礼", "出行补给内容"],
							image: "../img/lixing-autumn.webp",
							alt: "秋季漫游搭子计划"
						},
						{
							label: "冬 · 轻氧暂停",
							slide: 19,
							season: "冬",
							eyebrow: "WINTER / 10—02",
							title: "11:11轻氧暂停局",
							description: "跳出传统大促逻辑，以11%电量重启站和1+1轻氧搭子盒提醒年轻人暂停片刻、照顾自己，再带着轻盈状态重新出发。",
							points: ["11%电量重启站", "暂停宣言墙", "1+1轻氧搭子盒"],
							image: "../img/lixing-winter.webp",
							alt: "冬季11:11轻氧暂停局"
						}
					]
				},
				{
					id: "visual",
					label: "视觉落地",
					icon: "▧",
					options: [
						{
							label: "H5互动",
							slide: 12,
							eyebrow: "VISUAL SYSTEM",
							title: "把活动入口装进一部手机",
							description: "用“小兴航员补氧盲盒”等H5界面承接互动机制，让用户从生成、选择到分享都保持统一、轻快的品牌体验。",
							points: ["移动端互动", "任务引导", "社交分享"],
							image: "../img/lixing-h5.webp",
							alt: "立兴冻干H5互动视觉"
						},
						{
							label: "线下快闪",
							slide: 22,
							eyebrow: "VISUAL SYSTEM",
							title: "让“轻氧补给”成为可进入的空间",
							description: "以蓝白舱体、补氧装置和任务动线构建线下快闪，让产品试吃、互动打卡和活动信息在同一空间中自然发生。",
							points: ["沉浸式快闪舱", "互动打卡", "产品试吃"],
							image: "../img/lixing-popup.webp",
							alt: "立兴冻干线下快闪舱"
						},
						{
							label: "IP表情包",
							slide: 23,
							eyebrow: "VISUAL SYSTEM",
							title: "让“小兴航员”进入日常对话",
							description: "将核心IP扩展成轻松、有梗的社交表情，在活动传播之外继续积累年轻、亲切和可分享的品牌印象。",
							points: ["统一角色语言", "社交传播", "品牌年轻化"],
							image: "../img/lixing-ip.webp",
							alt: "小兴航员IP表情包"
						},
						{
							label: "IP周边",
							slide: 23,
							eyebrow: "VISUAL SYSTEM",
							title: "一套有性格的轻氧小队",
							description: "围绕不同生活状态设计系列IP周边与隐藏款，让“回血、放空、救稿、满格”等情绪语言成为用户愿意收藏的品牌触点。",
							points: ["系列化角色", "情绪命名", "收藏与分享"],
							image: "../img/lixing-merch.webp",
							alt: "立兴冻干小兴航员隐藏款周边"
						}
					]
				}
			],
			archive: [
				{ id: "ppt", label: "PPT分页", count: 30, prefix: "ppt" },
				{ id: "h5", label: "H5界面", count: 20, prefix: "h5" },
				{ id: "poster", label: "活动海报", count: 25, prefix: "poster" },
				{ id: "offline", label: "线下快闪", count: 15, prefix: "offline" },
				{ id: "gift", label: "活动礼盒", count: 8, prefix: "gift" },
				{ id: "ip", label: "IP表情包", count: 3, prefix: "ip" },
				{ id: "merch", label: "IP周边", count: 12, prefix: "merch" }
			]
		},
		description: "围绕立兴冻干与WHATEVER联名产品完成的整合营销策划案。项目从休闲食品趋势、产品卖点、竞品格局和年轻消费者需求出发，提出“来一块，给生活补点氧”的传播主题，将冻干巧克力与冻干咖啡块塑造成兼具状态补给、情绪回血与轻礼赠价值的“轻氧补给礼”，并围绕全年节日节点设计系列营销活动。",
		work: "作为项目核心成员，我主要负责策划案框架搭建、内容撰写、资料整合和PPT制作，参与市场、产品、竞品、消费者及SWOT分析；围绕主题参与设计全年传播路线及H5互动、社媒话题、线下快闪、IP周边、节日礼盒、UGC挑战和短视频脚本等内容，并借助AI工具生成部分活动效果图与视觉示意。"
	},
	{
		id: "wahaha",
		number: "05",
		category: "营销策划",
		title: "娃哈哈AD钙奶30周年《不管几岁，快乐万岁》",
		type: "品牌年轻化整合营销策划案",
		role: "活动策划 / 脚本撰写 / AI视觉生成",
		attribute: "课程、赛事项目 · 2026.05",
		tags: ["品牌年轻化", "情绪营销", "活动策划", "短视频脚本"],
		image: "../img/wahaha-plan-cover.webp",
		imageAlt: "娃哈哈AD钙奶30周年整合营销策划案封面",
		timeline: [
			{
				phase: "唤醒记忆",
				phaseNote: "活动初期",
				date: "2026.06 上旬—中旬",
				title: "30周年情感短片《大人的酸甜图鉴》",
				summary: "从学习、工作与生活中的“大人酸甜瞬间”切入，用一瓶AD钙奶唤回课间十分钟的快乐，让30周年首先成为一场关于成长与陪伴的情绪共鸣。",
				channels: "抖音 / B站 / 小红书 / 微博 / 微信",
				purpose: "唤醒童年记忆，建立30周年话题与情感基调。",
				tone: "memory",
				images: [
					"activity-01-01.webp", "activity-01-02.webp", "activity-01-03.webp",
					"activity-01-04.webp", "activity-01-05.webp", "activity-01-06.webp",
					"activity-01-07.webp", "activity-01-08.webp", "activity-01-09.webp"
				]
			},
			{
				phase: "唤醒记忆",
				phaseNote: "活动初期",
				date: "2026.06 中旬—07 上旬",
				title: "#测测你的隐藏AD人格# H5互动测试",
				summary: "通过5—7道轻量趣味问题生成专属“隐藏AD人格”、推荐口味与分享海报，让五种口味自然进入年轻人的社交表达，并为后续活动持续导流。",
				channels: "H5 / 朋友圈 / 小红书 / 校园社群",
				purpose: "制造社交裂变，提升参与感与新口味认知。",
				tone: "memory",
				images: [
					"activity-02-01.webp", "activity-02-02.webp", "activity-02-03.webp",
					"activity-02-04.webp", "activity-02-05.webp", "activity-02-06.webp",
					"activity-02-07.webp", "activity-02-08.webp", "activity-02-09.webp",
					"activity-02-10.webp", "activity-02-11.webp", "activity-02-12.webp",
					"activity-02-13.webp", "activity-02-14.webp", "activity-02-15.webp"
				]
			},
			{
				phase: "唤醒记忆",
				phaseNote: "活动初期",
				date: "2026.07",
				title: "30周年“快乐万岁”语录瓶上线",
				summary: "把年轻人的情绪表达写进瓶身，让产品包装成为传播媒介；瓶身二维码同时连接人格测试、优惠券、神仙喝法挑战与线下快闪预约。",
				channels: "商超 / 便利店 / 电商 / 即时零售",
				purpose: "完成包装焕新，把线上互动带入真实消费场景。",
				tone: "memory",
				images: [
					"activity-03-01.webp", "activity-03-02.webp", "activity-03-03.webp",
					"activity-03-04.webp", "activity-03-05.webp", "activity-03-06.webp",
					"activity-03-07.webp", "activity-03-08.webp", "activity-03-09.webp",
					"activity-03-10.webp"
				]
			},
			{
				phase: "引爆互动",
				phaseNote: "活动中期",
				date: "2026.08",
				title: "#AD钙奶神仙喝法# 酸甜调配局",
				summary: "以AD拿铁、草莓冰沙、蜜桃气泡AD等官方配方发起内容共创，让AD钙奶从怀旧饮品变成可以调配、拍摄和分享的年轻化饮品。",
				channels: "抖音 / 小红书 / B站 / 校园社群",
				purpose: "提升产品可玩性，推动新口味种草与UGC创作。",
				tone: "play",
				images: ["activity-04-01.webp", "activity-04-02.webp"]
			},
			{
				phase: "引爆互动",
				phaseNote: "活动中期",
				date: "2026.08 下旬—09 中旬",
				title: "「快乐万岁游乐园」线下快闪",
				summary: "将AD人格、童年回忆、酸甜调配和成年人解压体验集中到沉浸式快闪空间，以“主快闪＋校园巡回＋轻量陈列”形成线下体验事件。",
				channels: "核心商圈 / 高校巡回 / 社交打卡",
				purpose: "制造线下爆点，以试饮、互动和分享带动即时转化。",
				tone: "play",
				images: [
					"activity-05-01.webp", "activity-05-02.webp", "activity-05-03.webp",
					"activity-05-04.webp", "activity-05-05.webp"
				]
			},
			{
				phase: "引爆互动",
				phaseNote: "活动中期",
				date: "2026.09",
				title: "中期促销“快乐万岁补给包”",
				summary: "围绕课间、工位、追剧、早餐和宿舍等场景推出组合装，并联动便利店、电商、校园团购与即时零售，承接前期传播热度。",
				channels: "校园 / 便利店 / 商超 / 电商 / 外卖",
				purpose: "把活动兴趣转化为购买，提升尝鲜与复购机会。",
				tone: "play",
				images: ["activity-06-01.webp", "activity-06-02.webp"]
			},
			{
				phase: "沉淀情感",
				phaseNote: "活动后期",
				date: "2026.10",
				title: "30周年“时光机”双拼套盒",
				summary: "用“1996经典回忆”和“2026年轻化焕新”组成一半童年、一半现在的双拼套盒，同时承接收藏、开箱与新口味尝鲜需求。",
				channels: "电商 / 商超 / 小红书 / 抖音",
				purpose: "把纪念意义转化为产品价值，连接老用户与年轻用户。",
				tone: "return",
				images: ["activity-07-01.webp"]
			},
			{
				phase: "沉淀情感",
				phaseNote: "活动后期",
				date: "2026.10 中旬—11 上旬",
				title: "#我的童年分你一半# UGC故事征集",
				summary: "邀请用户分享童年记忆、当下饮用场景、测试结果与快闪打卡内容，并以真实投稿完成30周年收官短片或图文合集。",
				channels: "小红书 / 抖音 / 微博 / 微信 / B站",
				purpose: "让品牌传播转为用户共创，沉淀长期情感资产。",
				tone: "return",
				images: ["activity-08-01.webp", "activity-08-02.webp"]
			},
			{
				phase: "沉淀情感",
				phaseNote: "活动后期",
				date: "2026.11",
				title: "扫码抽盲盒＋集章换周边",
				summary: "消费者扫码点亮五种AD人格徽章，并通过集章兑换优惠券、贴纸、帆布袋和限定盲盒，让前期积累的口味人格与互动资产形成销售闭环。",
				channels: "瓶身二维码 / 小程序 / 终端货架 / 电商",
				purpose: "增强持续购买动力，完成30周年活动的复购闭环。",
				tone: "return",
				images: ["activity-09-01.webp", "activity-09-02.webp", "activity-09-03.webp"]
			}
		],
		description: "围绕娃哈哈AD钙奶30周年节点完成的品牌年轻化整合营销策划项目。项目以“不管几岁，快乐万岁”为核心表达，将童年味觉记忆延展到学习、通勤、工作与情绪释放等当代年轻人生活场景中，并通过线上互动、线下体验、礼盒周边与UGC传播等方式，尝试让经典品牌重新与年轻消费者建立情感连接。",
		work: "我负责市场调研问卷设计，并独立完成营销策略部分的大多数活动策划，围绕“唤醒记忆—引爆互动—沉淀情感”梳理三阶段传播路径；同时负责《大人的酸甜图鉴》短视频脚本与分镜头脚本撰写，并借助AI完成H5互动页面、线下快闪、活动物料、宣传海报及周边展示等视觉示意图。"
	},
	{
		id: "xiangyinhui",
		number: "06",
		category: "产品与UI",
		title: "“乡音汇”方言翻译与保护APP项目",
		type: "产品策划与UI交互设计",
		role: "项目组长 / 产品策划 / UI与交互设计",
		attribute: "校内课程项目 · 2026.06",
		tags: ["产品策划", "用户体验", "UI设计", "交互原型"],
		image: "../img/xiangyinhui/architecture.png",
		hifiModules: [
			{
				id: "entry",
				label: "进入界面",
				icon: "../img/xiangyinhui/icon.png",
				summary: "从启动页、新手引导到登录和身份选择，建立“乡音世界”的第一印象。",
				items: [
					{ title: "启动页", image: "../img/xiangyinhui/hifi/entry-splash.png", description: "以水乡场景和品牌口号完成情绪铺垫，让用户进入方言文化语境。" },
					{ title: "新手引导页 01", image: "../img/xiangyinhui/hifi/entry-guide-1.png", description: "解释“听见乡音”的产品价值，降低初次使用理解成本。" },
					{ title: "新手引导页 02", image: "../img/xiangyinhui/hifi/entry-guide-2.png", description: "引导用户理解方言学习与记录能力。" },
					{ title: "新手引导页 03", image: "../img/xiangyinhui/hifi/entry-guide-3.png", description: "收束到产品主路径，提示进入翻译和采集功能。" },
					{ title: "登录页", image: "../img/xiangyinhui/hifi/entry-login.png", description: "保留轻量登录入口，让用户快速进入核心功能。" },
					{ title: "身份选择页", image: "../img/xiangyinhui/hifi/entry-role.png", description: "通过身份分流，为学习者、记录者和普通使用者提供不同起点。" }
				]
			},
			{
				id: "translate",
				label: "翻译界面",
				icon: "../img/xiangyinhui/icons/translate.png",
				summary: "语音翻译、文字翻译和同声传译构成沟通功能主轴。",
				items: [
					{ title: "语音翻译 01", image: "../img/xiangyinhui/hifi/translate-voice-1.png", description: "突出麦克风入口和方言选择，让用户一眼知道如何开始。" },
					{ title: "语音翻译 02", image: "../img/xiangyinhui/hifi/translate-voice-2.png", description: "展示语音输入后的识别与翻译反馈。" },
					{ title: "文字翻译 01", image: "../img/xiangyinhui/hifi/translate-text-1.png", description: "面向安静场景，用文本输入完成方言与普通话互译。" },
					{ title: "文字翻译 02", image: "../img/xiangyinhui/hifi/translate-text-2.png", description: "呈现翻译结果、播放和收藏等后续动作。" },
					{ title: "同声传译 01", image: "../img/xiangyinhui/hifi/translate-live-1.png", description: "为连续对话设计实时翻译状态。" },
					{ title: "同声传译 02", image: "../img/xiangyinhui/hifi/translate-live-2.png", description: "强调听说双方的语义流转和结果确认。" }
				]
			},
			{
				id: "learning",
				label: "学习界面",
				icon: "../img/xiangyinhui/icons/learning.png",
				summary: "以推荐、课程、练习和学习记录组成持续学习路径。",
				items: [
					{ title: "学习推荐 01", image: "../img/xiangyinhui/hifi/learning-recommend-1.png", description: "用推荐内容承接用户兴趣，降低学习门槛。" },
					{ title: "学习推荐 02", image: "../img/xiangyinhui/hifi/learning-recommend-2.png", description: "展示方言词句、短课和地方文化内容。" },
					{ title: "课程页 01", image: "../img/xiangyinhui/hifi/learning-course-1.png", description: "将课程拆成可继续学习的模块。" },
					{ title: "课程页 02", image: "../img/xiangyinhui/hifi/learning-course-2.png", description: "突出课程详情、进度和学习动作。" },
					{ title: "练习页 01", image: "../img/xiangyinhui/hifi/learning-practice-1.png", description: "通过听写、跟读等方式形成反馈闭环。" },
					{ title: "练习页 02", image: "../img/xiangyinhui/hifi/learning-practice-2.png", description: "展示练习结果和继续学习路径。" },
					{ title: "我的学习 01", image: "../img/xiangyinhui/hifi/learning-mine-1.png", description: "沉淀个人学习进度与收藏内容。" },
					{ title: "我的学习 02", image: "../img/xiangyinhui/hifi/learning-mine-2.png", description: "记录长期学习成果，增强持续使用动力。" }
				]
			},
			{
				id: "collect",
				label: "采集界面",
				icon: "../img/xiangyinhui/icons/collect.png",
				summary: "将用户的声音、故事和地方表达转化为可保存的方言资料。",
				items: [
					{ title: "采集首页 01", image: "../img/xiangyinhui/hifi/collect-1.png", description: "把录音采集作为主入口，鼓励用户记录真实乡音。" },
					{ title: "采集首页 02", image: "../img/xiangyinhui/hifi/collect-2.png", description: "展示采集后的整理、上传和记录状态。" }
				]
			},
			{
				id: "community",
				label: "社区界面",
				icon: "../img/xiangyinhui/icons/community.png",
				summary: "通过推荐、话题、同乡和我的动态连接方言内容与人。",
				items: [
					{ title: "社区推荐 01", image: "../img/xiangyinhui/hifi/community-recommend-1.png", description: "让用户浏览方言故事和地方文化内容。" },
					{ title: "社区推荐 02", image: "../img/xiangyinhui/hifi/community-recommend-2.png", description: "强化内容互动与持续发现。" },
					{ title: "话题页 01", image: "../img/xiangyinhui/hifi/community-topic-1.png", description: "用话题聚合不同地区的语言表达。" },
					{ title: "话题页 02", image: "../img/xiangyinhui/hifi/community-topic-2.png", description: "让用户围绕方言主题参与讨论和投稿。" },
					{ title: "同乡页 01", image: "../img/xiangyinhui/hifi/community-hometown-1.png", description: "连接同地区用户，形成更亲近的交流场景。" },
					{ title: "同乡页 02", image: "../img/xiangyinhui/hifi/community-hometown-2.png", description: "展示同乡动态和地方内容推荐。" },
					{ title: "我的动态 01", image: "../img/xiangyinhui/hifi/community-mine-1.png", description: "管理自己发布的方言内容。" },
					{ title: "我的动态 02", image: "../img/xiangyinhui/hifi/community-mine-2.png", description: "沉淀个人参与记录和社区互动。" }
				]
			},
			{
				id: "profile",
				label: "我的界面",
				icon: "../img/xiangyinhui/icons/profile.png",
				summary: "集中展示个人资料、学习成果、采集记录与系统管理入口。",
				items: [
					{ title: "我的页 01", image: "../img/xiangyinhui/hifi/profile-1.png", description: "展示用户等级、学习记录和常用功能入口。" },
					{ title: "我的页 02", image: "../img/xiangyinhui/hifi/profile-2.png", description: "承接资料管理、消息通知和离线内容等设置。" }
				]
			}
		],
		imageAlt: "乡音汇方言翻译与保护 APP 产品功能架构图",
		description: "一款围绕方言翻译、方言学习与方言文化记录设计的APP课程实践项目。项目从用户需求、产品定位、用户画像、用户体验地图和功能架构逐步展开，最终形成包含翻译、学习、采集、社区、我的五个模块的产品方案，并以低保真原型、高保真界面、交互演示和展板展示呈现阶段性成果。",
		work: "我担任项目组长，参与前期项目定位、用户画像、体验地图、产品功能架构等内容讨论，并统筹协调组员任务分工与项目推进；在后期主动承担UI主设计与交互原型部分，负责低保真原型、高保真UI界面、页面跳转关系和基础交互流程设计，同时参与展板内容结构与成果展示优化。"
	}
];

document.addEventListener("DOMContentLoaded", () => {
	const requestedId = new URLSearchParams(window.location.search).get("id");
	const projectIndex = Math.max(0, projects.findIndex((project) => project.id === requestedId));
	const project = projects[projectIndex];
	const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
	const nextProject = projects[(projectIndex + 1) % projects.length];

	document.body.dataset.project = project.id;
	document.title = `${project.title}｜陈玉琳个人作品集`;
	document.querySelector("#project-number").textContent = `${project.number} / 06`;
	document.querySelector("#project-category").textContent = project.category;
	document.querySelector("#project-title").textContent = project.title;
	if (project.id === "wahaha") {
		document.querySelector("#project-title").innerHTML = "<span>娃哈哈AD钙奶30周年</span><span>《不管几岁，快乐万岁》</span>";
	}
	document.querySelector("#fact-type").textContent = project.type;
	document.querySelector("#fact-role").textContent = project.role;
	const factAttribute = document.querySelector("#fact-attribute");
	if (project.id === "lixing") {
		const [attributeName, attributeDate] = project.attribute.split(" · ");
		factAttribute.innerHTML = `<span>${attributeName}</span><span>${attributeDate}</span>`;
	} else {
		factAttribute.textContent = project.attribute;
	}
	document.querySelector("#project-description").textContent = project.description;
	document.querySelector("#project-work").textContent = project.work;

	const image = document.querySelector("#project-image");
	image.src = project.image;
	image.alt = project.imageAlt;

	const tags = document.querySelector("#project-tags");
	project.tags.forEach((tag) => {
		const item = document.createElement("span");
		item.textContent = tag;
		tags.append(item);
	});

	const previousLink = document.querySelector("#previous-project");
	previousLink.href = `project.html?id=${previousProject.id}`;
	previousLink.querySelector("strong").textContent = previousProject.title;

	const nextLink = document.querySelector("#next-project");
	nextLink.href = `project.html?id=${nextProject.id}`;
	nextLink.querySelector("strong").textContent = nextProject.title;

	const setupWahahaTimeline = () => {
		if (project.id !== "wahaha" || !project.timeline?.length) return;

		document.body.classList.add("wahaha-project");
		const section = document.querySelector("#wahaha-timeline");
		const routeNodes = document.querySelector("#wahaha-route-nodes");
		const routeProgress = document.querySelector("#wahaha-route-progress");
		const station = document.querySelector("#wahaha-station");
		const stationCopy = station.querySelector(".wahaha-station-copy");
		const stationVisual = station.querySelector(".wahaha-station-visual");
		const phase = document.querySelector("#wahaha-station-phase");
		const date = document.querySelector("#wahaha-station-date");
		const count = document.querySelector("#wahaha-station-count");
		const title = document.querySelector("#wahaha-station-title");
		const summary = document.querySelector("#wahaha-station-summary");
		const channels = document.querySelector("#wahaha-station-channels");
		const purpose = document.querySelector("#wahaha-station-purpose");
		const mainVisual = document.querySelector("#wahaha-main-visual");
		const mainOpen = document.querySelector("#wahaha-main-open");
		const mainImage = document.querySelector("#wahaha-main-image");
		const mainLabel = document.querySelector("#wahaha-main-label");
		const thumbnails = document.querySelector("#wahaha-thumbnail-rail");
		const imagePrevious = document.querySelector("#wahaha-station-previous");
		const imageNext = document.querySelector("#wahaha-station-next");
		const imageCurrent = document.querySelector("#wahaha-image-current");
		const imageTotal = document.querySelector("#wahaha-image-total");
		const jump = document.querySelector(".visual-wall-jump");
		const lightbox = document.querySelector("#visual-wall-lightbox");
		const lightboxImage = document.querySelector("#visual-lightbox-image");
		const lightboxCategory = document.querySelector("#visual-lightbox-category");
		const lightboxCount = document.querySelector("#visual-lightbox-count");
		const lightboxClose = document.querySelector("#visual-lightbox-close");
		const lightboxPrevious = document.querySelector("#visual-lightbox-previous");
		const lightboxNext = document.querySelector("#visual-lightbox-next");
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let activeActivity = 0;
		let activeImage = 0;
		let activityTransition;
		let imageTransition;
		let dragging = false;
		let dragCaptured = false;
		let dragStartX = 0;
		let dragStartScroll = 0;
		let dragMoved = false;

		jump.href = "#wahaha-timeline";
		jump.querySelector("span").textContent = "沿时间线探索活动";

		const imagePath = (filename) => `../img/wahaha-timeline/${filename}`;
		const activityImages = () => project.timeline[activeActivity].images;

		project.timeline.forEach((activity, index) => {
			const button = document.createElement("button");
			const month = activity.date.match(/2026\.(\d{2})/)?.[1] || "--";
			button.type = "button";
			button.className = `wahaha-route-node is-${activity.tone}`;
			button.setAttribute("aria-label", `查看活动${index + 1}：${activity.title}`);
			button.innerHTML = `
				<span>${String(index + 1).padStart(2, "0")}</span>
				<i></i>
				<strong>${month}月</strong>
				<small>${activity.title.replace(/30周年|中期促销|后期促销/g, "").slice(0, 12)}</small>
			`;
			button.addEventListener("click", () => renderActivity(index, true));
			routeNodes.append(button);
		});

		const nodeButtons = Array.from(routeNodes.querySelectorAll(".wahaha-route-node"));

		const updateImage = (nextIndex, animate = true, direction = 1) => {
			const images = activityImages();
			if (!images.length) return;
			activeImage = (nextIndex + images.length) % images.length;
			const src = imagePath(images[activeImage]);
			const alt = `${project.timeline[activeActivity].title}活动视觉图${activeImage + 1}`;
			const apply = () => {
				mainImage.src = src;
				mainImage.alt = alt;
				mainLabel.textContent = `${project.timeline[activeActivity].phaseNote} · 视觉图 ${String(activeImage + 1).padStart(2, "0")}`;
				imageCurrent.textContent = String(activeImage + 1).padStart(2, "0");
				imageTotal.textContent = String(images.length).padStart(2, "0");
				Array.from(thumbnails.children).forEach((button, index) => {
					const isActive = index === activeImage;
					button.classList.toggle("is-active", isActive);
					button.setAttribute("aria-current", isActive ? "true" : "false");
				});
				const activeThumbnail = thumbnails.children[activeImage];
				if (activeThumbnail) {
					const targetLeft = activeThumbnail.offsetLeft - (thumbnails.clientWidth - activeThumbnail.offsetWidth) / 2;
					const maximumLeft = Math.max(0, thumbnails.scrollWidth - thumbnails.clientWidth);
					const settledLeft = Math.min(maximumLeft, Math.max(0, targetLeft));
					if (!reduceMotion && window.gsap) {
						gsap.to(thumbnails, {
							scrollLeft: settledLeft,
							duration: 0.5,
							ease: "power3.out",
							overwrite: "auto"
						});
					} else {
						thumbnails.scrollLeft = settledLeft;
					}
				}
			};

			imageTransition?.kill();
			if (!animate || reduceMotion || !window.gsap) {
				apply();
				return;
			}

			imageTransition = gsap.timeline({ defaults: { ease: "power4.out" } })
				.to(mainImage, {
					x: -24 * direction,
					autoAlpha: 0,
					scale: 0.985,
					duration: 0.17,
					onComplete: apply
				})
				.fromTo(mainImage, {
					x: 32 * direction,
					autoAlpha: 0,
					scale: 1.015
				}, {
					x: 0,
					autoAlpha: 1,
					scale: 1,
					duration: 0.46,
					clearProps: "transform,opacity,visibility"
				});
		};

		const renderThumbnails = () => {
			const fragment = document.createDocumentFragment();
			activityImages().forEach((filename, index) => {
				const button = document.createElement("button");
				button.type = "button";
				button.className = "wahaha-thumbnail";
				button.setAttribute("role", "listitem");
				button.setAttribute("aria-label", `查看第${index + 1}张活动视觉图`);
				button.innerHTML = `<img src="${imagePath(filename)}" alt="" loading="${index < 5 ? "eager" : "lazy"}" decoding="async"><span>${String(index + 1).padStart(2, "0")}</span>`;
				fragment.append(button);
			});
			thumbnails.replaceChildren(fragment);
		};

		const applyActivity = (index) => {
			const activity = project.timeline[index];
			activeActivity = index;
			activeImage = 0;
			station.dataset.tone = activity.tone;
			phase.textContent = `${activity.phaseNote} · ${activity.phase}`;
			date.textContent = activity.date;
			count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(project.timeline.length).padStart(2, "0")}`;
			title.textContent = activity.title;
			summary.textContent = activity.summary;
			channels.textContent = activity.channels;
			purpose.textContent = activity.purpose;
			renderThumbnails();
			updateImage(0, false);
			nodeButtons.forEach((button, buttonIndex) => {
				const isActive = buttonIndex === index;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-current", isActive ? "step" : "false");
			});
			routeProgress.style.setProperty("--route-progress", `${index / (project.timeline.length - 1) * 100}%`);

			const activeNode = nodeButtons[index];
			const targetLeft = activeNode.offsetLeft - (routeNodes.clientWidth - activeNode.offsetWidth) / 2;
			const maximumLeft = Math.max(0, routeNodes.scrollWidth - routeNodes.clientWidth);
			if (!reduceMotion && window.gsap) {
				gsap.to(routeNodes, {
					scrollLeft: Math.min(maximumLeft, Math.max(0, targetLeft)),
					duration: 0.55,
					ease: "power3.out",
					overwrite: "auto"
				});
			}
		};

		const renderActivity = (index, animate = false) => {
			if (index < 0 || index >= project.timeline.length || index === activeActivity) return;
			const direction = index > activeActivity ? 1 : -1;
			activityTransition?.kill();
			imageTransition?.kill();

			if (!animate || reduceMotion || !window.gsap) {
				applyActivity(index);
				return;
			}

			activityTransition = gsap.timeline({ defaults: { ease: "power4.out" } })
				.to([stationCopy, stationVisual], {
					x: -28 * direction,
					autoAlpha: 0,
					duration: 0.18,
					stagger: 0.035
				})
				.add(() => applyActivity(index))
				.fromTo([stationCopy, stationVisual], {
					x: 38 * direction,
					autoAlpha: 0
				}, {
					x: 0,
					autoAlpha: 1,
					duration: 0.52,
					stagger: 0.055,
					clearProps: "transform,opacity,visibility"
				})
				.fromTo(Array.from(thumbnails.children).slice(0, 8), {
					y: 16,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.34,
					stagger: 0.035,
					clearProps: "transform,opacity,visibility"
				}, "<0.12");
		};

		const updateLightbox = (nextIndex, direction = 1, animate = false) => {
			const images = activityImages();
			activeImage = (nextIndex + images.length) % images.length;
			const apply = () => {
				lightboxImage.src = imagePath(images[activeImage]);
				lightboxImage.alt = `${project.timeline[activeActivity].title}活动视觉图${activeImage + 1}`;
				lightboxCategory.textContent = project.timeline[activeActivity].title;
				lightboxCount.textContent = `${String(activeImage + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
				updateImage(activeImage, false);
			};

			if (!animate || reduceMotion || !window.gsap) {
				apply();
				return;
			}
			gsap.timeline({ defaults: { ease: "power4.out" } })
				.to(lightboxImage, {
					x: -34 * direction,
					autoAlpha: 0,
					duration: 0.16,
					onComplete: apply
				})
				.fromTo(lightboxImage, {
					x: 44 * direction,
					autoAlpha: 0
				}, {
					x: 0,
					autoAlpha: 1,
					duration: 0.4,
					clearProps: "transform,opacity,visibility"
				});
		};

		const openLightbox = () => {
			if (!lightbox.open) lightbox.showModal();
			document.body.classList.add("visual-lightbox-is-open");
			updateLightbox(activeImage);
			if (!reduceMotion && window.gsap) {
				gsap.fromTo(lightbox.querySelector("figure"), {
					y: 22,
					scale: 0.98,
					autoAlpha: 0
				}, {
					y: 0,
					scale: 1,
					autoAlpha: 1,
					duration: 0.5,
					ease: "power4.out",
					clearProps: "transform,opacity,visibility"
				});
			}
		};

		const closeLightbox = () => {
			if (!lightbox.open) return;
			lightbox.close();
			document.body.classList.remove("visual-lightbox-is-open");
		};

		imagePrevious.addEventListener("click", () => updateImage(activeImage - 1, true, -1));
		imageNext.addEventListener("click", () => updateImage(activeImage + 1, true, 1));
		mainOpen.addEventListener("click", openLightbox);
		lightboxClose.addEventListener("click", closeLightbox);
		lightboxPrevious.addEventListener("click", () => updateLightbox(activeImage - 1, -1, true));
		lightboxNext.addEventListener("click", () => updateLightbox(activeImage + 1, 1, true));
		lightbox.addEventListener("cancel", (event) => {
			event.preventDefault();
			closeLightbox();
		});
		lightbox.addEventListener("click", (event) => {
			if (event.target === lightbox) closeLightbox();
		});
		document.addEventListener("keydown", (event) => {
			if (!lightbox.open) return;
			if (event.key === "ArrowLeft") updateLightbox(activeImage - 1, -1, true);
			if (event.key === "ArrowRight") updateLightbox(activeImage + 1, 1, true);
		});

		thumbnails.addEventListener("click", (event) => {
			const button = event.target.closest(".wahaha-thumbnail");
			if (!button || !thumbnails.contains(button) || (dragMoved && event.detail > 0)) return;
			const index = Array.from(thumbnails.children).indexOf(button);
			if (index < 0) return;
			const direction = index >= activeImage ? 1 : -1;
			updateImage(index, true, direction);
		});

		thumbnails.addEventListener("pointerdown", (event) => {
			if (event.pointerType === "mouse" && event.button !== 0) return;
			dragging = true;
			dragCaptured = false;
			dragMoved = false;
			dragStartX = event.clientX;
			dragStartScroll = thumbnails.scrollLeft;
			if (window.gsap) gsap.killTweensOf(thumbnails);
		});
		thumbnails.addEventListener("pointermove", (event) => {
			if (!dragging) return;
			const distance = event.clientX - dragStartX;
			if (Math.abs(distance) > 5 && !dragMoved) {
				dragMoved = true;
				dragCaptured = true;
				thumbnails.classList.add("is-dragging");
				thumbnails.setPointerCapture?.(event.pointerId);
			}
			if (dragMoved) thumbnails.scrollLeft = dragStartScroll - distance;
		});
		const finishThumbnailDrag = (event) => {
			if (!dragging) return;
			dragging = false;
			thumbnails.classList.remove("is-dragging");
			if (dragCaptured && thumbnails.hasPointerCapture?.(event.pointerId)) thumbnails.releasePointerCapture(event.pointerId);
			dragCaptured = false;
			window.setTimeout(() => {
				dragMoved = false;
			}, 0);
		};
		thumbnails.addEventListener("pointerup", finishThumbnailDrag);
		thumbnails.addEventListener("pointercancel", finishThumbnailDrag);

		section.hidden = false;
		applyActivity(0);
		if (window.location.hash === "#wahaha-timeline") {
			requestAnimationFrame(() => {
				section.scrollIntoView({ block: "start" });
			});
		}

		if (!reduceMotion && window.gsap && "IntersectionObserver" in window) {
			const observer = new IntersectionObserver((entries) => {
				if (!entries.some((entry) => entry.isIntersecting)) return;
				observer.disconnect();
				gsap.fromTo(section.querySelectorAll(".wahaha-timeline-heading > *"), {
					y: 24,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.62,
					ease: "power4.out",
					stagger: 0.08,
					clearProps: "transform,opacity,visibility"
				});
				gsap.fromTo(nodeButtons, {
					y: 16,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.48,
					ease: "power3.out",
					stagger: 0.045,
					clearProps: "transform,opacity,visibility"
				}, "<0.08");
				gsap.fromTo(station, {
					y: 32,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.72,
					ease: "power4.out",
					clearProps: "transform,opacity,visibility"
				}, "<0.08");
			}, { threshold: 0.08 });
			observer.observe(section);
		}
	};

	const setupCampaignVisualWall = () => {
		if (project.id !== "lixing" || !project.campaign?.archive?.length) return;

		const section = document.querySelector("#campaign-visual-wall");
		const filters = document.querySelector("#visual-wall-filters");
		const grid = document.querySelector("#visual-wall-grid");
		const total = document.querySelector("#visual-wall-total");
		const lightbox = document.querySelector("#visual-wall-lightbox");
		const lightboxImage = document.querySelector("#visual-lightbox-image");
		const lightboxCategory = document.querySelector("#visual-lightbox-category");
		const lightboxCount = document.querySelector("#visual-lightbox-count");
		const lightboxClose = document.querySelector("#visual-lightbox-close");
		const lightboxPrevious = document.querySelector("#visual-lightbox-previous");
		const lightboxNext = document.querySelector("#visual-lightbox-next");
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const categories = project.campaign.archive.filter((category) => category.id !== "ppt");
		const portraitPosterIndexes = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14]);
		let activeCategory = "all";
		let visibleItems = [];
		let lightboxIndex = 0;
		let lightboxTimeline;
		let lastTrigger;
		let filterRevision = 0;

		const getDimensions = (categoryId, index) => {
			if (categoryId === "h5") return index <= 9 ? [720, 900] : [900, 675];
			if (categoryId === "poster") {
				if (index === 16) return [900, 507];
				if (portraitPosterIndexes.has(index)) return index === 14 ? [675, 900] : [720, 900];
				return [900, 675];
			}
			if (categoryId === "offline") return index <= 8 ? [720, 900] : [900, 675];
			if (categoryId === "gift") return [900, 675];
			if (categoryId === "ip") return index === 1 ? [900, 900] : [900, 675];
			if (categoryId === "merch") return index <= 4 ? [900, 675] : [900, 900];
			return [900, 675];
		};

		const itemsByCategory = categories.map((category) =>
			Array.from({ length: category.count }, (_, itemIndex) => {
				const index = itemIndex + 1;
				const number = String(index).padStart(2, "0");
				const [width, height] = getDimensions(category.id, index);
				return {
					...category,
					index,
					number,
					width,
					height,
					src: `../img/lixing-archive/${category.prefix}-${number}.webp`,
					alt: `立兴冻干策划案${category.label}第${index}张`
				};
			})
		);
		const allItems = itemsByCategory.flat();
		const groupSections = new Map();

		categories.forEach((category) => {
			const group = document.createElement("section");
			group.className = "visual-wall-group";
			group.dataset.category = category.id;
			group.innerHTML = `
				<header class="visual-wall-group-heading">
					<h3>${category.label}</h3>
					<span>${String(category.count).padStart(2, "0")} 张</span>
				</header>
				<div class="visual-wall-group-grid"></div>
			`;
			grid.append(group);
			groupSections.set(category.id, group);
		});

		const tiles = allItems.map((item, itemIndex) => {
			const button = document.createElement("button");
			button.type = "button";
			button.className = "visual-wall-tile";
			button.dataset.category = item.id;
			button.dataset.itemIndex = String(itemIndex);
			button.setAttribute("aria-label", `查看${item.label}第${item.index}张`);
			button.style.setProperty("--image-ratio", `${item.width} / ${item.height}`);
			button.innerHTML = `<img src="${item.src}" alt="${item.alt}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async">`;
			button.addEventListener("click", () => openLightbox(item));
			groupSections.get(item.id).querySelector(".visual-wall-group-grid").append(button);
			return button;
		});

		const updateLightbox = (nextIndex, direction = 1, animate = false) => {
			if (!visibleItems.length) return;
			lightboxIndex = (nextIndex + visibleItems.length) % visibleItems.length;
			const item = visibleItems[lightboxIndex];
			const applyImage = () => {
				lightboxImage.src = item.src;
				lightboxImage.alt = item.alt;
				lightboxCategory.textContent = item.label;
				lightboxCount.textContent = `${String(lightboxIndex + 1).padStart(2, "0")} / ${String(visibleItems.length).padStart(2, "0")}`;
			};

			lightboxTimeline?.kill();
			if (!animate || reduceMotion || !window.gsap) {
				applyImage();
				return;
			}

			lightboxTimeline = gsap.timeline({ defaults: { ease: "power4.out" } })
				.to(lightboxImage, {
					x: -28 * direction,
					autoAlpha: 0,
					scale: 0.985,
					duration: 0.16,
					onComplete: applyImage
				})
				.fromTo(lightboxImage, {
					x: 42 * direction,
					autoAlpha: 0,
					scale: 1.015
				}, {
					x: 0,
					autoAlpha: 1,
					scale: 1,
					duration: 0.42,
					clearProps: "transform,opacity,visibility"
				});
		};

		const openLightbox = (item) => {
			visibleItems = activeCategory === "all"
				? allItems
				: allItems.filter((entry) => entry.id === activeCategory);
			lightboxIndex = Math.max(0, visibleItems.indexOf(item));
			lastTrigger = tiles[allItems.indexOf(item)];
			updateLightbox(lightboxIndex);
			if (!lightbox.open) lightbox.showModal();
			document.body.classList.add("visual-lightbox-is-open");

			if (!reduceMotion && window.gsap) {
				gsap.fromTo(lightbox, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.24, ease: "power3.out" });
				gsap.fromTo(lightbox.querySelector("figure"), {
					y: 22,
					scale: 0.975
				}, {
					y: 0,
					scale: 1,
					duration: 0.5,
					ease: "power4.out",
					clearProps: "transform"
				});
			}
		};

		const closeLightbox = () => {
			if (!lightbox.open) return;
			const finish = () => {
				lightbox.close();
				document.body.classList.remove("visual-lightbox-is-open");
				lastTrigger?.focus({ preventScroll: true });
			};

			if (reduceMotion || !window.gsap) {
				finish();
				return;
			}

			gsap.to(lightbox, {
				autoAlpha: 0,
				duration: 0.18,
				ease: "power2.in",
				onComplete: () => {
					finish();
					gsap.set(lightbox, { clearProps: "opacity,visibility" });
				}
			});
		};

		const renderCategory = (categoryId, animate = true) => {
			if (categoryId === activeCategory && animate) return;
			const currentRevision = ++filterRevision;
			let layoutApplied = false;
			const groups = Array.from(groupSections.values());
			const oldVisibleGroups = groups.filter((group) => !group.hidden);
			activeCategory = categoryId;
			visibleItems = categoryId === "all"
				? allItems
				: allItems.filter((item) => item.id === categoryId);
			total.textContent = String(visibleItems.length);

			Array.from(filters.children).forEach((button) => {
				const isActive = button.dataset.category === categoryId;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-pressed", String(isActive));
			});

			const applyLayout = () => {
				if (layoutApplied || currentRevision !== filterRevision) return;
				layoutApplied = true;
				groups.forEach((group) => {
					group.hidden = categoryId !== "all" && group.dataset.category !== categoryId;
				});

				const newVisibleGroups = groups.filter((group) => !group.hidden);
				if (!animate || reduceMotion || !window.gsap) {
					window.gsap?.set?.([...groups, ...tiles], { clearProps: "all" });
					return;
				}

				const enteringTiles = newVisibleGroups.flatMap((group) =>
					Array.from(group.querySelectorAll(".visual-wall-tile")).slice(0, 16)
				);
				gsap.fromTo(newVisibleGroups, {
					y: 28,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.52,
					ease: "power4.out",
					stagger: 0.08,
					clearProps: "transform,opacity,visibility"
				});
				gsap.fromTo(enteringTiles, {
					y: 26,
					scale: 0.975,
					autoAlpha: 0
				}, {
					y: 0,
					scale: 1,
					autoAlpha: 1,
					duration: 0.56,
					ease: "power4.out",
					stagger: { amount: 0.24, from: "start" },
					clearProps: "transform,opacity,visibility",
					delay: 0.06
				});
			};

			window.gsap?.killTweensOf?.([...groups, ...tiles]);
			if (animate && !reduceMotion && window.gsap && oldVisibleGroups.length) {
				gsap.to(oldVisibleGroups, {
					y: -14,
					autoAlpha: 0,
					duration: 0.2,
					ease: "power2.in",
					stagger: { amount: 0.08, from: "end" },
					onComplete: applyLayout
				});
				window.setTimeout(applyLayout, 360);
			} else {
				applyLayout();
			}
		};

		const allFilter = document.createElement("button");
		allFilter.type = "button";
		allFilter.dataset.category = "all";
		allFilter.innerHTML = `<span>全部</span><b>${allItems.length}</b>`;
		allFilter.addEventListener("click", () => renderCategory("all"));
		filters.append(allFilter);

		categories.forEach((category) => {
			const button = document.createElement("button");
			button.type = "button";
			button.dataset.category = category.id;
			button.innerHTML = `<span>${category.label}</span><b>${category.count}</b>`;
			button.addEventListener("click", () => renderCategory(category.id));
			filters.append(button);
		});

		grid.addEventListener("pointerover", (event) => {
			if (event.target.closest(".visual-wall-tile")) grid.classList.add("has-focus");
		});
		grid.addEventListener("pointerout", (event) => {
			if (!grid.contains(event.relatedTarget)) grid.classList.remove("has-focus");
		});

		lightboxClose.addEventListener("click", closeLightbox);
		lightboxPrevious.addEventListener("click", () => updateLightbox(lightboxIndex - 1, -1, true));
		lightboxNext.addEventListener("click", () => updateLightbox(lightboxIndex + 1, 1, true));
		lightbox.addEventListener("cancel", (event) => {
			event.preventDefault();
			closeLightbox();
		});
		lightbox.addEventListener("click", (event) => {
			if (event.target === lightbox) closeLightbox();
		});
		document.addEventListener("keydown", (event) => {
			if (!lightbox.open) return;
			if (event.key === "ArrowLeft") updateLightbox(lightboxIndex - 1, -1, true);
			if (event.key === "ArrowRight") updateLightbox(lightboxIndex + 1, 1, true);
		});

		section.hidden = false;
		renderCategory("all", false);

		if (!reduceMotion && window.gsap && "IntersectionObserver" in window) {
			const observer = new IntersectionObserver((entries) => {
				if (!entries.some((entry) => entry.isIntersecting)) return;
				observer.disconnect();
				gsap.fromTo(section.querySelectorAll(".visual-wall-heading > *"), {
					y: 24,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.65,
					ease: "power4.out",
					stagger: 0.08,
					clearProps: "transform,opacity,visibility"
				});
				gsap.fromTo(tiles.slice(0, 18), {
					y: 38,
					scale: 0.96,
					autoAlpha: 0
				}, {
					y: 0,
					scale: 1,
					autoAlpha: 1,
					duration: 0.72,
					ease: "power4.out",
					stagger: { amount: 0.34, from: "start" },
					clearProps: "transform,opacity,visibility"
				});
			}, { threshold: 0.08 });
			observer.observe(section);
		}
	};

	const setupCampaignCommand = () => {
		if (!project.campaign?.sections?.length) return;

		{
			document.body.classList.add("media-project", "campaign-project", "campaign-deck-only");
			const command = document.querySelector("#campaign-command");
			const deck = document.querySelector("#campaign-deck");
			const deckStage = document.querySelector("#campaign-deck-stage");
			const deckRail = deck.querySelector(".campaign-deck-rail");
			const deckImage = document.querySelector("#campaign-deck-image");
			const deckPrevious = document.querySelector("#campaign-deck-previous");
			const deckNext = document.querySelector("#campaign-deck-next");
			const detailLayout = document.querySelector(".project-detail-layout");
			const projectStory = document.querySelector(".project-story");
			const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			let activeIndex = 0;
			let imageTransition;
			let isDragging = false;
			let dragStartX = 0;
			let dragStartScrollLeft = 0;
			let dragDistance = 0;
			let suppressCardClick = false;

			const cards = Array.from({ length: 30 }, (_, cardIndex) => {
				const button = document.createElement("button");
				const number = String(cardIndex + 1).padStart(2, "0");
				button.type = "button";
				button.className = "campaign-deck-card";
				button.setAttribute("aria-label", `查看策划案PPT第${cardIndex + 1}页`);
				button.innerHTML = `<img src="../img/lixing-archive/ppt-${number}.webp" alt="" loading="${cardIndex < 6 ? "eager" : "lazy"}" decoding="async"><span>${number}</span>`;
				deckStage.append(button);
				return button;
			});

			const renderDeck = (nextIndex, animate = true) => {
				const previousIndex = activeIndex;
				activeIndex = (nextIndex + cards.length) % cards.length;
				const direction = activeIndex === previousIndex
					? 1
					: activeIndex > previousIndex || (previousIndex === cards.length - 1 && activeIndex === 0) ? 1 : -1;
				const number = String(activeIndex + 1).padStart(2, "0");
				const applyImage = () => {
					deckImage.src = `../img/lixing-archive/ppt-${number}.webp`;
					deckImage.alt = `立兴冻干策划案PPT第${activeIndex + 1}页`;
				};

				imageTransition?.kill();
				if (animate && !reduceMotion && window.gsap && previousIndex !== activeIndex) {
					imageTransition = gsap.timeline({ defaults: { ease: "power4.out" } })
						.to(deckImage, {
							x: -22 * direction,
							autoAlpha: 0,
							scale: 0.985,
							duration: 0.18,
							onComplete: applyImage
						})
						.fromTo(deckImage, {
							x: 32 * direction,
							autoAlpha: 0,
							scale: 1.012
						}, {
							x: 0,
							autoAlpha: 1,
							scale: 1,
							duration: 0.48,
							clearProps: "transform,opacity,visibility"
						});
				} else {
					applyImage();
				}

				cards.forEach((card, cardIndex) => {
					card.classList.toggle("is-active", cardIndex === activeIndex);
					card.setAttribute("aria-current", cardIndex === activeIndex ? "page" : "false");
				});

				const activeCard = cards[activeIndex];
				const targetLeft = activeCard.offsetLeft - (deckRail.clientWidth - activeCard.offsetWidth) / 2;
				const maximumLeft = Math.max(0, deckRail.scrollWidth - deckRail.clientWidth);
				const settledLeft = Math.min(maximumLeft, Math.max(0, targetLeft));
				if (!reduceMotion && window.gsap) {
					gsap.to(deckRail, {
						scrollLeft: settledLeft,
						duration: 0.52,
						ease: "power3.out",
						overwrite: "auto"
					});
				} else {
					deckRail.scrollLeft = settledLeft;
				}
			};

			cards.forEach((card, cardIndex) => {
				card.addEventListener("click", () => {
					if (suppressCardClick) return;
					renderDeck(cardIndex);
				});
			});

			const settleDraggedRail = () => {
				const railCenter = deckRail.scrollLeft + deckRail.clientWidth / 2;
				const closestIndex = cards.reduce((closest, card, cardIndex) => {
					const cardCenter = card.offsetLeft + card.offsetWidth / 2;
					const closestCard = cards[closest];
					const closestCenter = closestCard.offsetLeft + closestCard.offsetWidth / 2;
					return Math.abs(cardCenter - railCenter) < Math.abs(closestCenter - railCenter)
						? cardIndex
						: closest;
				}, 0);
				renderDeck(closestIndex);
			};

			deckRail.addEventListener("pointerdown", (event) => {
				if (event.pointerType === "mouse" && event.button !== 0) return;
				isDragging = true;
				dragStartX = event.clientX;
				dragStartScrollLeft = deckRail.scrollLeft;
				dragDistance = 0;
				suppressCardClick = false;
				deckRail.classList.add("is-dragging");
				deckRail.setPointerCapture?.(event.pointerId);
				if (window.gsap) gsap.killTweensOf(deckRail);
			});

			deckRail.addEventListener("pointermove", (event) => {
				if (!isDragging) return;
				const delta = event.clientX - dragStartX;
				dragDistance = Math.max(dragDistance, Math.abs(delta));
				deckRail.scrollLeft = dragStartScrollLeft - delta;
				if (dragDistance > 5) {
					suppressCardClick = true;
					event.preventDefault();
				}
			});

			const finishRailDrag = (event) => {
				if (!isDragging) return;
				isDragging = false;
				deckRail.classList.remove("is-dragging");
				if (deckRail.hasPointerCapture?.(event.pointerId)) {
					deckRail.releasePointerCapture(event.pointerId);
				}
				if (dragDistance > 5) settleDraggedRail();
				window.setTimeout(() => {
					suppressCardClick = false;
				}, 0);
			};

			deckRail.addEventListener("pointerup", finishRailDrag);
			deckRail.addEventListener("pointercancel", finishRailDrag);
			deckPrevious.addEventListener("click", () => renderDeck(activeIndex - 1));
			deckNext.addEventListener("click", () => renderDeck(activeIndex + 1));
			deck.addEventListener("keydown", (event) => {
				if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
				event.preventDefault();
				renderDeck(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
			});

			detailLayout.insertBefore(command, projectStory);
			command.hidden = false;
			renderDeck(0, false);
			return;
		}

		document.body.classList.add("media-project", "campaign-project");
		const command = document.querySelector("#campaign-command");
		const tabs = document.querySelector("#campaign-tabs");
		const deck = document.querySelector("#campaign-deck");
		const deckStage = document.querySelector("#campaign-deck-stage");
		const deckPrevious = document.querySelector("#campaign-deck-previous");
		const deckNext = document.querySelector("#campaign-deck-next");
		const deckCurrent = document.querySelector("#campaign-deck-current");
		const visualLabel = document.querySelector("#campaign-visual-label");
		const index = document.querySelector("#campaign-index");
		const eyebrow = document.querySelector("#campaign-eyebrow");
		const title = document.querySelector("#campaign-title");
		const description = document.querySelector("#campaign-description");
		const points = document.querySelector("#campaign-points");
		const orbit = document.querySelector("#campaign-orbit");
		const orbitTitle = document.querySelector("#campaign-orbit-title");
		const stage = command.querySelector(".campaign-stage");
		const brief = command.querySelector(".campaign-brief");
		const archiveLaunch = document.querySelector("#campaign-archive-launch");
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let activeSection = 0;
		let activeOption = 0;
		let activeDeckIndex = 0;
		let deckSpacing = 128;
		let transition;
		const deckCards = Array.from({ length: 30 }, (_, cardIndex) => {
			const button = document.createElement("button");
			const number = String(cardIndex + 1).padStart(2, "0");
			button.type = "button";
			button.className = "campaign-deck-card";
			button.setAttribute("aria-label", `查看策划案PPT第${cardIndex + 1}页`);
			button.innerHTML = `<img src="../img/lixing-archive/ppt-${number}.webp" alt="立兴冻干策划案PPT第${cardIndex + 1}页" loading="${cardIndex < 5 ? "eager" : "lazy"}" decoding="async"><span>${number}</span>`;
			deckStage.append(button);
			return button;
		});

		const wrapDeckDistance = (value) => {
			while (value > deckCards.length / 2) value -= deckCards.length;
			while (value < -deckCards.length / 2) value += deckCards.length;
			return value;
		};

		const renderDeck = (nextIndex, animate = true) => {
			activeDeckIndex = (nextIndex + deckCards.length) % deckCards.length;
			deckCurrent.textContent = String(activeDeckIndex + 1).padStart(2, "0");
			deckCards.forEach((card, cardIndex) => {
				const distance = wrapDeckDistance(cardIndex - activeDeckIndex);
				const absoluteDistance = Math.abs(distance);
				const visible = absoluteDistance <= 3;
				const vars = {
					x: distance * deckSpacing,
					xPercent: -50,
					yPercent: -50,
					y: absoluteDistance * 5,
					scale: Math.max(0.66, 1 - absoluteDistance * 0.105),
					rotationY: distance * -5,
					autoAlpha: visible ? Math.max(0.18, 1 - absoluteDistance * 0.2) : 0,
					zIndex: Math.round(40 - absoluteDistance * 5),
					overwrite: "auto"
				};
				card.classList.toggle("is-active", cardIndex === activeDeckIndex);
				card.setAttribute("aria-current", cardIndex === activeDeckIndex ? "page" : "false");
				if (animate && !reduceMotion && window.gsap) {
					gsap.to(card, { ...vars, duration: 0.62, ease: "power4.out" });
				} else if (window.gsap) {
					gsap.set(card, vars);
				}
			});
		};

		const measureDeck = () => {
			deckSpacing = Math.min(145, deckStage.clientWidth * 0.255);
			renderDeck(activeDeckIndex, false);
		};

		deckCards.forEach((card, cardIndex) => {
			card.addEventListener("click", () => {
				const distance = wrapDeckDistance(cardIndex - activeDeckIndex);
				renderDeck(activeDeckIndex + distance);
			});
		});
		deckPrevious.addEventListener("click", () => renderDeck(activeDeckIndex - 1));
		deckNext.addEventListener("click", () => renderDeck(activeDeckIndex + 1));
		deck.addEventListener("keydown", (event) => {
			if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
			event.preventDefault();
			renderDeck(activeDeckIndex + (event.key === "ArrowRight" ? 1 : -1));
		});
		window.addEventListener("resize", measureDeck, { passive: true });

		project.campaign.sections.forEach((section, sectionIndex) => {
			const button = document.createElement("button");
			button.type = "button";
			button.className = "campaign-tab";
			button.setAttribute("role", "tab");
			button.innerHTML = `<span>${section.icon}</span>${section.label}`;
			button.addEventListener("click", () => render(sectionIndex, 0, true));
			tabs.append(button);
		});

		const tabButtons = Array.from(tabs.querySelectorAll(".campaign-tab"));

		const applyContent = (sectionIndex, optionIndex) => {
			const section = project.campaign.sections[sectionIndex];
			const option = section.options[optionIndex];
			activeSection = sectionIndex;
			activeOption = optionIndex;

			renderDeck((option.slide || 1) - 1);
			visualLabel.textContent = `PPT ${String(option.slide || 1).padStart(2, "0")} · ${option.label}`;
			index.textContent = `${String(sectionIndex + 1).padStart(2, "0")} / 04`;
			eyebrow.textContent = option.eyebrow;
			title.textContent = option.title;
			description.textContent = option.description;
			points.replaceChildren();
			option.points.forEach((point) => {
				const item = document.createElement("span");
				item.textContent = point;
				points.append(item);
			});

			tabButtons.forEach((button, buttonIndex) => {
				const isActive = buttonIndex === sectionIndex;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-selected", String(isActive));
				button.tabIndex = isActive ? 0 : -1;
			});

			orbit.replaceChildren();
			orbitTitle.textContent = section.id === "annual" ? "全年活动 · 四季星轨" : "观察节点";
			orbit.classList.toggle("is-season-orbit", section.id === "annual");
			section.options.forEach((item, itemIndex) => {
				const button = document.createElement("button");
				button.type = "button";
				button.className = "campaign-node";
				if (section.id === "annual") {
					button.innerHTML = `<i>✦</i><span>${item.season}</span><small>${item.label.replace(`${item.season} · `, "")}</small>`;
				} else {
					button.innerHTML = `<i>${String(itemIndex + 1).padStart(2, "0")}</i><span>${item.label}</span>`;
				}
				const isActive = itemIndex === optionIndex;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-pressed", String(isActive));
				button.addEventListener("click", () => render(sectionIndex, itemIndex, true));
				orbit.append(button);
			});
		};

		const render = (sectionIndex, optionIndex, animate = false) => {
			if (sectionIndex === activeSection && optionIndex === activeOption && animate) return;
			if (!animate || reduceMotion || !window.gsap) {
				applyContent(sectionIndex, optionIndex);
				return;
			}

			const direction = sectionIndex === activeSection
				? Math.sign(optionIndex - activeOption) || 1
				: Math.sign(sectionIndex - activeSection) || 1;
			transition?.kill();
			gsap.killTweensOf(brief);
			transition = gsap.timeline({ defaults: { ease: "power3.out" } })
				.to(brief, {
					x: -10 * direction,
					autoAlpha: 0,
					duration: 0.17,
					onComplete: () => applyContent(sectionIndex, optionIndex)
				}, "<0.02")
				.fromTo(brief, {
					x: 18 * direction,
					autoAlpha: 0
				}, {
					x: 0,
					autoAlpha: 1,
					duration: 0.4,
					clearProps: "transform,opacity,visibility"
				}, "<0.06")
				.fromTo(orbit.querySelectorAll(".campaign-node"), {
					y: 6,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.28,
					stagger: 0.035,
					clearProps: "transform,opacity,visibility"
				}, "<0.04");
		};

		tabs.addEventListener("keydown", (event) => {
			if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
			event.preventDefault();
			const offset = event.key === "ArrowRight" ? 1 : -1;
			const nextIndex = (activeSection + offset + tabButtons.length) % tabButtons.length;
			render(nextIndex, 0, true);
			tabButtons[nextIndex].focus();
		});

		const setupArchive = () => {
			if (!project.campaign.archive?.length) return;

			const dialog = document.querySelector("#campaign-archive");
			const shell = dialog.querySelector(".campaign-archive-shell");
			const filters = document.querySelector("#archive-filters");
			const grid = document.querySelector("#archive-grid");
			const visibleCount = document.querySelector("#archive-visible-count");
			const closeButton = document.querySelector("#archive-close");
			const lightbox = document.querySelector("#archive-lightbox");
			const lightboxImage = document.querySelector("#lightbox-image");
			const lightboxCategory = document.querySelector("#lightbox-category");
			const lightboxTitle = document.querySelector("#lightbox-title");
			const lightboxCount = document.querySelector("#lightbox-count");
			const lightboxClose = document.querySelector("#lightbox-close");
			const lightboxPrevious = document.querySelector("#lightbox-previous");
			const lightboxNext = document.querySelector("#lightbox-next");
			const categories = project.campaign.archive;
			const allItems = categories.flatMap((category) =>
				Array.from({ length: category.count }, (_, itemIndex) => {
					const number = String(itemIndex + 1).padStart(2, "0");
					return {
						...category,
						number,
						title: `${category.label} ${number}`,
						src: `../img/lixing-archive/${category.prefix}-${number}.webp`,
						alt: `立兴冻干策划案${category.label}第${itemIndex + 1}张`
					};
				})
			);
			let activeCategory = "all";
			let visibleItems = allItems;
			let lightboxIndex = 0;
			let archiveTimeline;
			let filterTimeline;
			let lightboxTimeline;

			const updateLightbox = (indexValue, direction = 1, animate = false) => {
				if (!visibleItems.length) return;
				lightboxIndex = (indexValue + visibleItems.length) % visibleItems.length;
				const item = visibleItems[lightboxIndex];
				const apply = () => {
					lightboxImage.src = item.src;
					lightboxImage.alt = item.alt;
					lightboxCategory.textContent = item.label;
					lightboxTitle.textContent = item.title;
					lightboxCount.textContent = `${String(lightboxIndex + 1).padStart(2, "0")} / ${String(visibleItems.length).padStart(2, "0")}`;
				};

				if (!animate || reduceMotion || !window.gsap) {
					apply();
					return;
				}

				lightboxTimeline?.kill();
				lightboxTimeline = gsap.timeline({ defaults: { ease: "power4.out" } })
					.to(lightboxImage, {
						x: -40 * direction,
						autoAlpha: 0,
						scale: 0.97,
						duration: 0.18,
						onComplete: apply
					})
					.fromTo(lightboxImage, {
						x: 54 * direction,
						autoAlpha: 0,
						scale: 1.025
					}, {
						x: 0,
						autoAlpha: 1,
						scale: 1,
						duration: 0.46,
						clearProps: "transform,opacity,visibility"
					});
			};

			const openLightbox = (indexValue) => {
				lightbox.hidden = false;
				updateLightbox(indexValue);
				if (!reduceMotion && window.gsap) {
					gsap.fromTo(lightbox, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.26, ease: "power3.out" });
					gsap.fromTo(lightbox.querySelector("figure"), {
						y: 24,
						scale: 0.975
					}, {
						y: 0,
						scale: 1,
						duration: 0.52,
						ease: "power4.out",
						clearProps: "transform"
					});
				}
			};

			const closeLightbox = () => {
				if (lightbox.hidden) return;
				if (reduceMotion || !window.gsap) {
					lightbox.hidden = true;
					return;
				}
				gsap.to(lightbox, {
					autoAlpha: 0,
					duration: 0.2,
					ease: "power2.in",
					onComplete: () => {
						lightbox.hidden = true;
						gsap.set(lightbox, { clearProps: "opacity,visibility" });
					}
				});
			};

			const renderArchive = (categoryId, animate = false) => {
				activeCategory = categoryId;
				visibleItems = categoryId === "all"
					? allItems
					: allItems.filter((item) => item.id === categoryId);
				visibleCount.textContent = visibleItems.length;

				const fragment = document.createDocumentFragment();
				visibleItems.forEach((item, itemIndex) => {
					const button = document.createElement("button");
					button.type = "button";
					button.className = `archive-card is-${item.id}`;
					button.setAttribute("aria-label", `查看${item.title}`);
					button.innerHTML = `
						<figure>
							<img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async">
							<figcaption><span>${item.label}</span><strong>${item.number}</strong></figcaption>
						</figure>
					`;
					button.addEventListener("click", () => openLightbox(itemIndex));
					fragment.append(button);
				});

				filterTimeline?.kill();
				const applyGrid = () => {
					grid.replaceChildren(fragment);
					Array.from(filters.querySelectorAll("button")).forEach((button) => {
						const isActive = button.dataset.category === categoryId;
						button.classList.toggle("is-active", isActive);
						button.setAttribute("aria-pressed", String(isActive));
					});
				};

				if (!animate || reduceMotion || !window.gsap || !grid.children.length) {
					applyGrid();
					return;
				}

				applyGrid();
				filterTimeline = gsap.timeline({ defaults: { ease: "power3.out" } })
					.fromTo(grid, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.34, clearProps: "transform,opacity,visibility" })
					.fromTo(Array.from(grid.children).slice(0, 16), {
						y: 18,
						autoAlpha: 0
					}, {
						y: 0,
						autoAlpha: 1,
						duration: 0.34,
						stagger: 0.025,
						clearProps: "transform,opacity,visibility"
					}, "<0.02");
			};

			[
				{ id: "all", label: "全部素材", count: allItems.length },
				...categories
			].forEach((category) => {
				const button = document.createElement("button");
				button.type = "button";
				button.dataset.category = category.id;
				button.innerHTML = `<span>${category.label}</span><b>${category.count}</b>`;
				button.addEventListener("click", () => renderArchive(category.id, true));
				filters.append(button);
			});

			const closeArchive = () => {
				if (!dialog.open) return;
				if (!lightbox.hidden) {
					closeLightbox();
					return;
				}
				archiveTimeline?.kill();
				if (reduceMotion || !window.gsap) {
					dialog.close();
					document.body.classList.remove("archive-is-open");
					return;
				}
				archiveTimeline = gsap.timeline({
					defaults: { ease: "power3.in" },
					onComplete: () => {
						dialog.close();
						document.body.classList.remove("archive-is-open");
						gsap.set(shell, { clearProps: "transform,opacity,visibility,clipPath" });
					}
				})
					.to(grid, { autoAlpha: 0, y: 12, duration: 0.15 })
					.to(shell, {
						y: 28,
						scale: 0.985,
						autoAlpha: 0,
						clipPath: "inset(2% 2% 2% 2% round 18px)",
						duration: 0.28
					}, "<0.04");
			};

			archiveLaunch.addEventListener("click", () => {
				if (!dialog.open) dialog.showModal();
				document.body.classList.add("archive-is-open");
				if (!grid.children.length) renderArchive(activeCategory);

				if (!reduceMotion && window.gsap) {
					archiveTimeline?.kill();
					const cards = Array.from(grid.children).slice(0, 18);
					archiveTimeline = gsap.timeline({ defaults: { ease: "power4.out" } })
						.fromTo(shell, {
							y: 34,
							scale: 0.975,
							autoAlpha: 0,
							clipPath: "inset(5% 5% 5% 5% round 18px)"
						}, {
							y: 0,
							scale: 1,
							autoAlpha: 1,
							clipPath: "inset(0% 0% 0% 0% round 0px)",
							duration: 0.58
						})
						.fromTo(".archive-header > *, .archive-filters", {
							y: -12,
							autoAlpha: 0
						}, {
							y: 0,
							autoAlpha: 1,
							duration: 0.38,
							stagger: 0.06,
							clearProps: "transform,opacity,visibility"
						}, "<0.12")
						.fromTo(cards, {
							y: 26,
							autoAlpha: 0
						}, {
							y: 0,
							autoAlpha: 1,
							duration: 0.42,
							stagger: 0.025,
							clearProps: "transform,opacity,visibility"
						}, "<0.04");
				}
			});

			closeButton.addEventListener("click", closeArchive);
			dialog.addEventListener("cancel", (event) => {
				event.preventDefault();
				closeArchive();
			});
			dialog.addEventListener("click", (event) => {
				if (event.target === dialog) closeArchive();
			});
			lightboxClose.addEventListener("click", closeLightbox);
			lightboxPrevious.addEventListener("click", () => updateLightbox(lightboxIndex - 1, -1, true));
			lightboxNext.addEventListener("click", () => updateLightbox(lightboxIndex + 1, 1, true));
			document.addEventListener("keydown", (event) => {
				if (!dialog.open || lightbox.hidden) return;
				if (event.key === "ArrowLeft") updateLightbox(lightboxIndex - 1, -1, true);
				if (event.key === "ArrowRight") updateLightbox(lightboxIndex + 1, 1, true);
			});
		};

		setupArchive();

		const detailLayout = document.querySelector(".project-detail-layout");
		const projectStory = document.querySelector(".project-story");
		detailLayout.insertBefore(command, projectStory);
		command.hidden = false;
		applyContent(0, 0);
		measureDeck();

		if (!reduceMotion && window.gsap) {
			gsap.fromTo(stage, { y: 10 }, { y: 0, duration: 0.5, ease: "power3.out", clearProps: "transform" });
		}
	};

	const setupXiangyinhuiShowcase = () => {
		if (project.id !== "xiangyinhui" || !project.hifiModules?.length) return;

		document.body.classList.add("xiangyinhui-project");
		const section = document.querySelector("#xiang-showcase");
		const tabs = document.querySelector("#xiang-hifi-tabs");
		const shell = document.querySelector("#xiang-gallery-shell");
		const stage = document.querySelector("#xiang-gallery-stage");
		const previous = document.querySelector("#xiang-gallery-previous");
		const next = document.querySelector("#xiang-gallery-next");
		const count = document.querySelector("#xiang-gallery-count");
		const title = document.querySelector("#xiang-gallery-title");
		const description = document.querySelector("#xiang-gallery-description");
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		let activeModule = 0;
		let activeImage = 0;
		let cards = [];
		let dragging = false;
		let dragCaptured = false;
		let dragMoved = false;
		let startX = 0;
		let lastDelta = 0;

		const wrapDistance = (value, total) => {
			let distance = value;
			while (distance > total / 2) distance -= total;
			while (distance < -total / 2) distance += total;
			return distance;
		};

		const moduleItems = () => project.hifiModules[activeModule].items;

		const setActiveImage = (index, animate = true) => {
			const items = moduleItems();
			if (!items.length) return;
			activeImage = (index + items.length) % items.length;
			const current = items[activeImage];
			count.textContent = `${String(activeImage + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
			title.textContent = current.title;
			description.textContent = current.description;

			cards.forEach((card, cardIndex) => {
				const distance = wrapDistance(cardIndex - activeImage, items.length);
				const absoluteDistance = Math.abs(distance);
				const visible = absoluteDistance <= 3;
				const spacing = Math.min(shell.clientWidth < 680 ? 148 : 260, Math.max(shell.clientWidth < 680 ? 132 : 150, shell.clientWidth * 0.2));
				card.style.setProperty("--distance", distance);
				card.style.setProperty("--abs-distance", absoluteDistance);
				card.style.setProperty("--x", `${distance * spacing}px`);
				card.style.setProperty("--y", `${absoluteDistance * (shell.clientWidth < 680 ? 16 : 20)}px`);
				card.style.setProperty("--z", `${absoluteDistance * (shell.clientWidth < 680 ? -54 : -74)}px`);
				card.style.setProperty("--rotate-y", `${distance * (shell.clientWidth < 680 ? -11 : -13)}deg`);
				card.style.setProperty("--rotate-z", `${distance * (shell.clientWidth < 680 ? -2 : -2.6)}deg`);
				card.style.setProperty("--scale", Math.max(0.68, 1 - absoluteDistance * 0.1));
				card.style.setProperty("--opacity", visible ? Math.max(0.2, 1 - absoluteDistance * 0.2) : 0);
				card.style.zIndex = String(100 - Math.round(absoluteDistance * 10));
				card.classList.toggle("is-active", cardIndex === activeImage);
				card.classList.toggle("is-visible", visible);
				card.setAttribute("aria-current", cardIndex === activeImage ? "true" : "false");
				card.setAttribute("tabindex", visible ? "0" : "-1");
			});

			if (animate && !reduceMotion && window.gsap) {
				gsap.fromTo([title, description], {
					y: 8,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.36,
					ease: "power3.out",
					stagger: 0.035,
					clearProps: "transform,opacity,visibility"
				});
			}
		};

		const renderModule = (index, animate = true) => {
			activeModule = index;
			activeImage = 0;
			const module = project.hifiModules[index];
			const fragment = document.createDocumentFragment();

			module.items.forEach((item, itemIndex) => {
				const button = document.createElement("button");
				button.type = "button";
				button.className = "xiang-hifi-card";
				button.setAttribute("aria-label", `查看${module.label}：${item.title}`);
				button.innerHTML = `
					<span class="xiang-phone-frame">
						<img src="${item.image}" alt="${item.title}" loading="${itemIndex < 4 ? "eager" : "lazy"}" decoding="async">
					</span>
					<strong>${item.title}</strong>
				`;
				button.addEventListener("click", () => {
					if (dragMoved) return;
					setActiveImage(itemIndex, true);
				});
				fragment.append(button);
			});

			stage.replaceChildren(fragment);
			cards = Array.from(stage.querySelectorAll(".xiang-hifi-card"));
			Array.from(tabs.children).forEach((button, buttonIndex) => {
				const isActive = buttonIndex === index;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-selected", isActive ? "true" : "false");
				button.setAttribute("tabindex", isActive ? "0" : "-1");
			});
			stage.dataset.count = String(module.items.length);
			setActiveImage(0, false);

			if (animate && !reduceMotion && window.gsap) {
				gsap.fromTo(cards, {
					y: 18,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.42,
					ease: "power3.out",
					stagger: 0.035,
					clearProps: "transform,opacity,visibility"
				});
			}
		};

		project.hifiModules.forEach((module, index) => {
			const button = document.createElement("button");
			button.type = "button";
			button.className = "xiang-hifi-tab";
			button.role = "tab";
			button.setAttribute("aria-controls", "xiang-gallery-stage");
			button.innerHTML = `<img src="${module.icon}" alt=""><span>${module.label}</span>`;
			button.addEventListener("click", () => renderModule(index, true));
			tabs.append(button);
		});

		const moveBy = (step) => setActiveImage(activeImage + step, true);

		previous.addEventListener("click", () => moveBy(-1));
		next.addEventListener("click", () => moveBy(1));
		shell.addEventListener("keydown", (event) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				moveBy(-1);
			}
			if (event.key === "ArrowRight") {
				event.preventDefault();
				moveBy(1);
			}
		});
		shell.addEventListener("wheel", (event) => {
			if (Math.abs(event.deltaY) < 12 && Math.abs(event.deltaX) < 12) return;
			event.preventDefault();
			moveBy((event.deltaY || event.deltaX) > 0 ? 1 : -1);
		}, { passive: false });
		shell.addEventListener("pointerdown", (event) => {
			if (event.target.closest(".xiang-gallery-arrow")) return;
			if (event.button !== undefined && event.button !== 0) return;
			dragging = true;
			dragCaptured = false;
			dragMoved = false;
			startX = event.clientX;
			lastDelta = 0;
		});
		shell.addEventListener("pointermove", (event) => {
			if (!dragging) return;
			lastDelta = event.clientX - startX;
			if (Math.abs(lastDelta) > 8 && !dragMoved) {
				dragMoved = true;
				dragCaptured = true;
				shell.classList.add("is-dragging");
				shell.setPointerCapture?.(event.pointerId);
			}
			if (dragMoved) stage.style.setProperty("--drag-offset", `${Math.max(-70, Math.min(70, lastDelta * 0.18))}px`);
		});
		const stopDragging = (event) => {
			if (!dragging) return;
			dragging = false;
			shell.classList.remove("is-dragging");
			if (dragCaptured && shell.hasPointerCapture?.(event.pointerId)) shell.releasePointerCapture(event.pointerId);
			dragCaptured = false;
			stage.style.setProperty("--drag-offset", "0px");
			if (Math.abs(lastDelta) > 42) moveBy(lastDelta < 0 ? 1 : -1);
			window.setTimeout(() => {
				dragMoved = false;
			}, 0);
		};
		shell.addEventListener("pointerup", stopDragging);
		shell.addEventListener("pointercancel", stopDragging);
		window.addEventListener("resize", () => setActiveImage(activeImage, false), { passive: true });

		section.hidden = false;
		renderModule(0, false);
	};

	const setupXiangyinhuiShowcasePolished = () => {
		if (project.id !== "xiangyinhui" || !project.hifiModules?.length) return;

		document.body.classList.add("xiangyinhui-project");
		const section = document.querySelector("#xiang-showcase");
		const tabs = document.querySelector("#xiang-hifi-tabs");
		const shell = document.querySelector("#xiang-gallery-shell");
		const stage = document.querySelector("#xiang-gallery-stage");
		const previous = document.querySelector("#xiang-gallery-previous");
		const next = document.querySelector("#xiang-gallery-next");
		const count = document.querySelector("#xiang-gallery-count");
		const title = document.querySelector("#xiang-gallery-title");
		const description = document.querySelector("#xiang-gallery-description");
		const hifiTitle = document.querySelector("#xiang-hifi-title");
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (!section || !tabs || !shell || !stage || !previous || !next || !count || !title || !description) return;

		if (hifiTitle) hifiTitle.textContent = "高保真界面";

		let activeModule = 0;
		let activeImage = 0;
		let dragging = false;
		let dragMoved = false;
		let startX = 0;
		let mainImage = null;
		let thumbButtons = [];

		const pad = (value) => String(value).padStart(2, "0");
		const moduleItems = () => project.hifiModules[activeModule].items;
		const wrappedIndex = (index, total) => ((index % total) + total) % total;

		const updateActiveImage = (index, animate = true) => {
			const items = moduleItems();
			if (!items.length) return;
			activeImage = wrappedIndex(index, items.length);
			const current = items[activeImage];
			if (mainImage) {
				mainImage.src = current.image;
				mainImage.alt = current.title;
			}
			count.textContent = `${pad(activeImage + 1)} / ${pad(items.length)}`;
			title.textContent = current.title;
			description.textContent = current.description;
			thumbButtons.forEach((button, buttonIndex) => {
				const isActive = buttonIndex === activeImage;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-current", isActive ? "true" : "false");
			});

			if (animate && !reduceMotion && window.gsap) {
				gsap.fromTo([mainImage, count, title], {
					y: 8,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.32,
					ease: "power3.out",
					stagger: 0.02,
					clearProps: "transform,opacity,visibility"
				});
			}
		};

		const moveBy = (step) => {
			updateActiveImage(activeImage + step, true);
		};

		const renderModule = (index, animate = true) => {
			activeModule = index;
			const module = project.hifiModules[index];
			activeImage = 0;
			stage.replaceChildren();
			thumbButtons = [];

			const viewer = document.createElement("div");
			viewer.className = "xiang-gallery-viewer";
			const mainFigure = document.createElement("figure");
			mainFigure.className = "xiang-gallery-main";
			mainImage = document.createElement("img");
			mainImage.loading = "eager";
			mainImage.decoding = "async";
			mainFigure.append(mainImage);

			const thumbs = document.createElement("div");
			thumbs.className = "xiang-gallery-thumbs";
			thumbs.setAttribute("role", "list");
			thumbs.setAttribute("aria-label", `${module.label}缩略图`);

			module.items.forEach((item, itemIndex) => {
				const button = document.createElement("button");
				button.type = "button";
				button.className = "xiang-gallery-thumb";
				button.setAttribute("role", "listitem");
				button.setAttribute("aria-label", `查看${item.title}`);
				button.innerHTML = `<img src="${item.image}" alt="" loading="${itemIndex < 5 ? "eager" : "lazy"}" decoding="async"><span>${pad(itemIndex + 1)}</span>`;
				button.addEventListener("click", () => updateActiveImage(itemIndex, true));
				thumbs.append(button);
				thumbButtons.push(button);
			});

			viewer.append(mainFigure, thumbs);
			stage.append(viewer);

			Array.from(tabs.children).forEach((button, buttonIndex) => {
				const isActive = buttonIndex === index;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-selected", isActive ? "true" : "false");
				button.setAttribute("tabindex", isActive ? "0" : "-1");
			});

			stage.dataset.count = String(module.items.length);
			updateActiveImage(0, false);

			if (animate && !reduceMotion && window.gsap) {
				gsap.fromTo(viewer, {
					y: 16,
					autoAlpha: 0
				}, {
					y: 0,
					autoAlpha: 1,
					duration: 0.38,
					ease: "power3.out",
					stagger: 0.026,
					clearProps: "transform,opacity,visibility"
				});
			}
		};

		tabs.replaceChildren();
		project.hifiModules.forEach((module, index) => {
			const button = document.createElement("button");
			button.type = "button";
			button.className = "xiang-hifi-tab";
			button.role = "tab";
			button.setAttribute("aria-controls", "xiang-gallery-stage");
			button.innerHTML = `<img src="${module.icon}" alt=""><span>${module.label}</span>`;
			button.addEventListener("click", () => renderModule(index, true));
			tabs.append(button);
		});

		previous.addEventListener("click", () => moveBy(-1));
		next.addEventListener("click", () => moveBy(1));
		shell.addEventListener("keydown", (event) => {
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				moveBy(-1);
			}
			if (event.key === "ArrowRight") {
				event.preventDefault();
				moveBy(1);
			}
		});
		shell.addEventListener("pointerdown", (event) => {
			if (event.target.closest(".xiang-gallery-arrow")) return;
			if (event.button !== undefined && event.button !== 0) return;
			dragging = true;
			dragMoved = false;
			startX = event.clientX;
		});
		shell.addEventListener("pointermove", (event) => {
			if (!dragging) return;
			const delta = event.clientX - startX;
			if (Math.abs(delta) > 18 && !dragMoved) {
				dragMoved = true;
				shell.classList.add("is-dragging");
				shell.setPointerCapture?.(event.pointerId);
			}
		});
		const stopDragging = (event) => {
			if (!dragging) return;
			const delta = event.clientX - startX;
			dragging = false;
			shell.classList.remove("is-dragging");
			if (shell.hasPointerCapture?.(event.pointerId)) shell.releasePointerCapture(event.pointerId);
			if (Math.abs(delta) > 64) moveBy(delta < 0 ? 1 : -1);
			window.setTimeout(() => {
				dragMoved = false;
			}, 0);
		};
		shell.addEventListener("pointerup", stopDragging);
		shell.addEventListener("pointercancel", stopDragging);

		section.hidden = false;
		renderModule(0, false);
	};

	setupWahahaTimeline();
	setupXiangyinhuiShowcasePolished();
	setupCampaignCommand();
	setupCampaignVisualWall();

	const mediaSection = document.querySelector("#project-media");
	if (project.video) {
		document.body.classList.add("media-project");
		const video = document.querySelector("#project-video");
		const videoSource = document.querySelector("#project-video-source");
		video.poster = project.poster || project.image;
		videoSource.src = project.video;
		video.load();

		const gallery = document.querySelector("#reference-gallery");
		const carousel = document.querySelector("#reference-carousel");
		if (project.references?.length) {
			project.references.forEach((reference) => {
				const figure = document.createElement("figure");
				const image = document.createElement("img");

				image.src = reference.src;
				image.alt = reference.alt;
				image.loading = "lazy";
				figure.setAttribute("role", "listitem");
				figure.append(image);
				gallery.append(figure);
			});

			carousel.hidden = false;
			carousel.classList.toggle("is-looping", Boolean(project.carousel));
		}
		const detailLayout = document.querySelector(".project-detail-layout");
		const projectStory = document.querySelector(".project-story");
		detailLayout.insertBefore(mediaSection, projectStory);
		mediaSection.hidden = false;
	}

	const setupScriptTimeline = () => {
		if (!project.script?.length) return;

		document.body.classList.add("script-project");
		const timeline = document.querySelector("#script-timeline");
		const rail = document.querySelector("#script-rail");
		const video = document.querySelector("#project-video");
		const number = document.querySelector("#script-scene-number");
		const time = document.querySelector("#script-scene-time");
		const shot = document.querySelector("#script-shot");
		const movement = document.querySelector("#script-movement");
		const visual = document.querySelector("#script-visual");
		const audio = document.querySelector("#script-audio");
		const intent = document.querySelector("#script-intent");
		const sceneMark = timeline.querySelector(".script-scene-mark");
		const sceneCopy = timeline.querySelector(".script-scene-copy");
		const animatedContent = [sceneMark, sceneCopy];
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let activeIndex = 0;
		let pendingIndex = null;
		let sceneTransition;
		let elapsed = 0;
		let dragging = false;
		let dragCaptured = false;
		let dragMoved = false;
		let dragStartX = 0;
		let dragStartScroll = 0;

		const formatTime = (seconds) => {
			const minutes = Math.floor(seconds / 60);
			const remainder = Math.floor(seconds % 60);
			return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
		};

		const scenes = project.script.map((scene, index) => {
			const start = elapsed;
			elapsed += scene.duration;
			return { ...scene, index, start, end: elapsed };
		});

		scenes.forEach((scene) => {
			const button = document.createElement("button");
			button.type = "button";
			button.className = "script-node";
			button.setAttribute("aria-label", `镜头 ${String(scene.index + 1).padStart(2, "0")}，${formatTime(scene.start)}`);
			button.innerHTML = `<i></i><strong>${String(scene.index + 1).padStart(2, "0")}</strong><small>${formatTime(scene.start)}</small>`;
			button.addEventListener("click", () => {
				if (dragMoved) return;
				renderScene(scene.index, true);
				if (Number.isFinite(video.duration)) video.currentTime = Math.min(scene.start, video.duration);
			});
			rail.append(button);
		});

		const buttons = Array.from(rail.querySelectorAll(".script-node"));

		const applyScene = (index) => {
			const scene = scenes[index];
			activeIndex = index;
			pendingIndex = null;
			number.textContent = String(index + 1).padStart(2, "0");
			time.textContent = `${formatTime(scene.start)} — ${formatTime(scene.end)}`;
			shot.textContent = scene.shot;
			movement.textContent = scene.movement;
			visual.textContent = scene.visual;
			audio.textContent = scene.audio;
			intent.textContent = scene.intent;
			buttons.forEach((button, buttonIndex) => {
				const isActive = buttonIndex === index;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-current", isActive ? "step" : "false");
			});
			const targetButton = buttons[index];
			const centeredLeft = targetButton.offsetLeft - (rail.clientWidth - targetButton.offsetWidth) / 2;
			const maximumLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
			rail.scrollTo({
				left: Math.min(maximumLeft, Math.max(0, centeredLeft)),
				behavior: reduceMotion ? "auto" : "smooth",
			});
		};

		const renderScene = (index, animate = false) => {
			if (index < 0 || index >= scenes.length || index === activeIndex || index === pendingIndex) return;
			if (!animate || reduceMotion || !window.gsap) {
				applyScene(index);
				return;
			}

			pendingIndex = index;
			sceneTransition?.kill();
			gsap.killTweensOf(animatedContent);
			sceneTransition = gsap.timeline({ defaults: { ease: "power3.out" } })
				.to(animatedContent, {
					x: -12,
					autoAlpha: 0,
					duration: 0.16,
					stagger: 0.025
				})
				.add(() => applyScene(index))
				.fromTo(animatedContent, {
					x: 16,
					autoAlpha: 0
				}, {
					x: 0,
					autoAlpha: 1,
					duration: 0.34,
					stagger: 0.035,
					clearProps: "transform,opacity,visibility"
				});
			gsap.fromTo(buttons[index], { scale: 0.86 }, {
				scale: 1,
				duration: 0.38,
				ease: "power4.out",
				clearProps: "transform"
			});
		};

		rail.addEventListener("pointerdown", (event) => {
			if (event.button !== undefined && event.button !== 0) return;
			dragging = true;
			dragMoved = false;
			dragStartX = event.clientX;
			dragStartScroll = rail.scrollLeft;
		});
		rail.addEventListener("pointermove", (event) => {
			if (!dragging) return;
			const distance = event.clientX - dragStartX;
			if (Math.abs(distance) > 5 && !dragMoved) {
				dragMoved = true;
				dragCaptured = true;
				rail.classList.add("is-dragging");
				rail.setPointerCapture?.(event.pointerId);
			}
			rail.scrollLeft = dragStartScroll - distance;
		});
		const stopDragging = (event) => {
			if (!dragging) return;
			dragging = false;
			rail.classList.remove("is-dragging");
			if (dragCaptured && rail.hasPointerCapture?.(event.pointerId)) {
				rail.releasePointerCapture(event.pointerId);
			}
			dragCaptured = false;
			window.setTimeout(() => {
				dragMoved = false;
			}, 0);
		};
		rail.addEventListener("pointerup", stopDragging);
		rail.addEventListener("pointercancel", stopDragging);

		video.addEventListener("timeupdate", () => {
			let sceneIndex = scenes.length - 1;
			for (let index = 0; index < scenes.length; index += 1) {
				if (video.currentTime < scenes[index].end) {
					sceneIndex = index;
					break;
				}
			}
			if (sceneIndex !== activeIndex) renderScene(sceneIndex, true);
		});

		timeline.hidden = false;
		applyScene(0);
	};

	setupScriptTimeline();

	const setupInfiniteCarousel = () => {
		if (!project.carousel || !window.gsap) return;

		const viewport = document.querySelector("#reference-carousel");
		if (viewport.dataset.carouselReady === "true") return;
		viewport.dataset.carouselReady = "true";
		const track = document.querySelector("#reference-gallery");
		const cards = Array.from(track.querySelectorAll("figure"));
		const count = cards.length;
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let activeIndex = 0;
		let spacing = 0;
		let dragging = false;
		let hovered = false;
		let startX = 0;
		let startIndex = 0;
		let lastX = 0;
		let lastTime = 0;
		let velocity = 0;
		let autoTimer;

		const wrapDistance = (value) => {
			while (value > count / 2) value -= count;
			while (value < -count / 2) value += count;
			return value;
		};

		const renderDeck = (index, animate = false) => {
			activeIndex = index;
			cards.forEach((card, cardIndex) => {
				const distance = wrapDistance(cardIndex - index);
				const absoluteDistance = Math.abs(distance);
				const visible = absoluteDistance <= 3.1;
				const vars = {
					x: distance * spacing,
					y: absoluteDistance * 7,
					xPercent: -50,
					yPercent: -50,
					scale: Math.max(0.68, 1 - absoluteDistance * 0.1),
					autoAlpha: visible ? Math.max(0.2, 1 - absoluteDistance * 0.2) : 0,
					zIndex: Math.round(100 - absoluteDistance * 12),
					rotationY: distance * -2.5,
					overwrite: "auto"
				};

				if (animate) {
					gsap.to(card, { ...vars, duration: 0.55, ease: "power3.out" });
				} else {
					gsap.set(card, vars);
				}
			});
		};

		const measure = () => {
			spacing = Math.min(178, viewport.clientWidth * 0.22);
			renderDeck(activeIndex);
		};

		const scheduleAuto = () => {
			autoTimer?.kill();
			if (reduceMotion || hovered || dragging) return;
			autoTimer = gsap.delayedCall(2.8, () => {
				renderDeck(Math.round(activeIndex) + 1, true);
				scheduleAuto();
			});
		};

		const snapToCard = () => {
			if (!spacing) return;
			const target = Math.round(activeIndex - velocity * 0.18);
			const state = { value: activeIndex };
			gsap.to(state, {
				value: target,
				duration: 0.48,
				ease: "power3.out",
				overwrite: true,
				onUpdate: () => renderDeck(state.value),
				onComplete: () => {
					renderDeck(target);
					scheduleAuto();
				}
			});
		};

		const pointerDown = (event) => {
			if (event.button !== undefined && event.button !== 0) return;
			dragging = true;
			autoTimer?.kill();
			startX = event.clientX;
			startIndex = activeIndex;
			lastX = event.clientX;
			lastTime = performance.now();
			velocity = 0;
			viewport.classList.add("is-dragging");
			viewport.setPointerCapture?.(event.pointerId);
			gsap.killTweensOf(cards);
		};

		const pointerMove = (event) => {
			if (!dragging) return;
			const now = performance.now();
			const elapsed = Math.max(16, now - lastTime);
			velocity = (event.clientX - lastX) / elapsed;
			lastX = event.clientX;
			lastTime = now;
			renderDeck(startIndex - (event.clientX - startX) / spacing);
		};

		const pointerUp = (event) => {
			if (!dragging) return;
			dragging = false;
			viewport.classList.remove("is-dragging");
			viewport.releasePointerCapture?.(event.pointerId);
			snapToCard();
		};

		viewport.addEventListener("pointerdown", pointerDown);
		viewport.addEventListener("pointermove", pointerMove);
		viewport.addEventListener("pointerup", pointerUp);
		viewport.addEventListener("pointercancel", pointerUp);
		viewport.addEventListener("mouseenter", () => {
			hovered = true;
			autoTimer?.kill();
		});
		viewport.addEventListener("mouseleave", () => {
			hovered = false;
			if (!dragging) scheduleAuto();
		});
		cards.forEach((card, index) => {
			card.addEventListener("click", () => {
				if (dragging) return;
				const distance = wrapDistance(index - activeIndex);
				renderDeck(Math.round(activeIndex + distance), true);
				scheduleAuto();
			});
		});

		measure();
		window.addEventListener("resize", measure, { passive: true });
		scheduleAuto();
	};

	setupInfiniteCarousel();

	const finishWithoutMotion = () => {
		document.body.classList.add("is-ready");
		document.querySelector(".project-loader")?.remove();
	};

	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (reducedMotion || !window.gsap) {
		finishWithoutMotion();
		return;
	}

	const loader = document.querySelector(".project-loader");
	const loaderCore = loader?.querySelector(".loader-core");
	const loaderProgress = loader?.querySelector(".loader-line i");
	const visual = project.campaign
		? document.querySelector(".campaign-command")
		: project.video
			? document.querySelector(".project-media")
			: document.querySelector(".project-hero-image");
	const story = document.querySelector(".project-story");

	gsap.set([visual, story], { autoAlpha: 0 });
	gsap.set(visual, { x: -24, clipPath: "inset(0 4% 0 0 round 12px)" });
	gsap.set(story, { x: 24 });
	gsap.set(loaderProgress, { scaleX: 0, transformOrigin: "left center" });

	gsap.timeline({
		defaults: { ease: "power3.out" },
		onComplete: () => {
			document.body.classList.add("is-ready");
			loader?.remove();
			gsap.set([visual, story], { clearProps: "all" });
		}
	})
		.to(loaderProgress, { scaleX: 1, duration: 0.32 })
		.to(loaderCore, { y: -8, autoAlpha: 0, duration: 0.24 }, "+=0.05")
		.to(loader, {
			clipPath: "inset(50% 0 50% 0)",
			duration: 0.62,
			ease: "power4.inOut"
		}, "<0.06")
		.to(visual, {
			x: 0,
			autoAlpha: 1,
			clipPath: "inset(0 0 0 0 round 12px)",
			duration: 0.72
		}, "<0.2")
		.to(story, {
			x: 0,
			autoAlpha: 1,
			duration: 0.68
		}, "<0.1");
});
