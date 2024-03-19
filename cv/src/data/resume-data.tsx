import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, MmemeIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "王文博",
  initials: "Arvin",
  location: "南京市栖霞区马群",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "前端开发工程师",
  summary:
    "四年前端开发经验，三年地图相关功能开发（高德地图API、Cesium、Openlayers、Leaflet、Arcgis API for JavaScript等）经验，对动画相关有很多了解，对 Vue 以及周边生态系统有比较深入的了解，拥有丰富的实战经验，对前端开发领域拥有极大的热情与兴趣。",
  avatarUrl: "https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images自己.jpg?v=4",
  personalWebsiteUrl: "https://mmeme.me/",
  contact: {
    email: "2545589993@qq.com",
    tel: "17355384696",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/pinky-pig",
        icon: GitHubIcon,
      },
      {
        name: "个人网站",
        url: "https://mmeme.me",
        icon: MmemeIcon,
      },
    ],
  },
  education: [
    {
      school: "安徽师范大学-软件工程",
      degree: "本科",
      start: "2016/09",
      end: "2020/06",
    },
  ],
  work: [
    {
      company: "南京莱斯信息技术有限公司 ",
      link: "http://www.les.cn/",
      badges: ["南京"],
      title: "前端开发工程师",
      logo: ParabolLogo,
      start: "2021/09",
      end: "至今",
      description: ` 消防一体化指挥平台 - 消防相关功能(https://njxfxcx.nj119.com.cn:8081/screen/) `,
      content: [
        {
          label: '负责系统 Web 端架构设计以及开发工作：',
          text: [
            `1. 使用 Typescript 作为开发框架和语言。`,
            `2. 使用 Pinia，Vue Router 以及 VueUse 等一系列最新周边生态工具。`,
            `3. 使用 Element Plus UI 、Shadcn Vue UI、 UnoCSS 作为组件库以及样式解决方案。`,
            `4. 使用 高德地图 API 和 Cesium 作为二维地图和三维地图加载框架。`,
            `5. 使用 SVG、Anime.js 、GSAP、Vueuse motion 、帧动画开发页面交互效果。`,
            `6. 使用 Dexie.js 作为 IndexDB 框架。`,
          ],
        },
        {
          label: '使用如下技术攻克一系列技术难题：',
          text: [
            `1. 二次封装 Cesium 工具类，统一管理加载要素类型及常用方法。主类定义要素常用操作，包装统一方法入口。子类继承实现操作，抹平不同要素可能使用的方法是不同的问题，提升开发效率。`,
            `2. 使用 Promise 开发复盘功能逻辑。一条复盘主线，有多个节点单线程运行，每个节点环节多个行为并行运行，同时每个行为下有子行为单线运行。实现思路：主线 Promise.all ，里面多个次线行为同时运行。次线行为 new Map() 存储，await 单线运行。当 Promise.all 运行成果，说明当前主线程的单个节点运行完毕，开始下个节点的动作。`,
            `3. 根据多个场景封装高德地图和三维地图初始化地图及上要素逻辑，更易复用。`,
            `4. 使用 Web components 开发地图要素弹窗组件，使用 Vue ce 和 Lit 。曾经用 createApp(component).mount。`,
            `5. 使用 帧动画 和 JS 动画（document.documentElement.animate、getAnimations、transitionend）开发动画交互效果。`,
            `6. 使用 BroadcastChannel 和 Draggable 和 动态组件开发自定义首页布局功能。`,
          ],
        },
        {
          label: '负责辅助一体化系统的小程序、H5 和 Web 端系统的开发工作：',
          text: [
            `1. 使用 UniAPP 、Vue3、Typescript 作为开发框架。`,
            `2. 使用 Vant UI 作为组件库开发 H5 和微信小程序。`,
            `3. Web 端的信息采集系统作为一个二、三维地图管理系统，根据建筑类型增加增删改查功能。`,
          ],
        },
      ]
    },
    {
      company: "中创软件工程股份有限公司",
      link: "https://www.cvicse.com/",
      badges: ["济南"],
      title: "研发工程师",
      logo: ClevertechLogo,
      start: "2020/06",
      end: "2021/03",
      description: "开发管理系统模块功能",
      content: [
        {
          label: '',
          text: [
            ` 1. 使用 Vue2 以及 Element UI 作为开发框架和组件库。`,
            ` 2. 使用开源轮子开发管理系统模块功能。 `,
            ` 3. 使用 HTML5 Draggable 属性自定义拖拽布局及保存使用，和拖拽碰撞排序。`,
          ],
        },
        
      ]
    },
    
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Vue/Nuxt",
    "Pinia/Vuex",
    "ElementPlus/NaiveUI/Headless UI/Shadcn UI",
    "VueUse/Vue Router",
    "Vitest/Vitepress",
    "Vite",
    "TailwindCSS/UnoCSS",
    "GSAP/Anime.js/SVG 动画",
    "ESLint/Prettier",
  ],
  projects: [
    {
      title: "个人网站-Arvin",
      techStack: [
        "Vue3",
        "TypeScript",
        "Vite",
      ],
      description: "个人网站，在 Netlify 上部署",
      logo: ConsultlyLogo,
      link: {
        label: "mmeme.me",
        href: "https://mmeme.me/",
      },
    },
    {
      title: "超椭圆生成-Superellipse",
      techStack: ["Side Project", "TypeScript", "Vue", "超椭圆生成器"],
      description:
        "超椭圆在线生成，可直接下载 SVG 或直接作为 `background-image` 或者 `mask` CSS属性使用",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://github.com/pinky-pig/superellipse-svg",
      },
    },
    {
      title: "SVG格式工具-EncodeSVG",
      techStack: ["Side Project",],
      description:
        "SVG encode 工具，复刻 `https://yoksel.github.io/url-encoder/` 工具",
      logo: JarockiMeLogo,
      link: {
        label: "encodesvg",
        href: "https://encodesvg.mmeme.me/",
      },
    },
    {
      title: "粒子动画-Html2particle",
      techStack: ["Side Project", "canvas", "Html2canvas"],
      description:
        "canvas 粒子动画。可以使用 html2canvas 将 HTML 转为粒子动画，也可以不使用，使用直接固定的粒子。",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://html2particle.mmeme.me/",
      },
    },
    {
      title: "拖拽工具-Dragblock",
      techStack: ["Side Project", "Vue3", "小工具"],
      description:
        "在业务开发中，总结出的开发工具。拖拽缩放移动和吸附线，以及边缘控制。",
      link: {
        label: "拖拽",
        href: "https://dragblock.mmeme.me/",
      },
    },
    {
      title: "文章",
      techStack: ["掘金","笔记"],
      description:
        "除了放在个人网站的 /blog 模块外，还放在了掘金上",
      link: {
        label: "掘金",
        href: "https://juejin.cn/user/149189314490520/posts",
      },
    },
  ],
} as const;
