import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/guide/",
    {
        text: "目录",
        icon: "book",
        prefix: "/chapter/",
        children: [
            // {
            //   text: "月之始源与终焉",
            //   icon: "lightbulb",
            //   prefix: "Vol.1/",
            //   children: ["梦，开始了", "命运的终结", "在坠落的天空下", "自深海而来", "流星划过黑夜", "献予昨日的挽歌", "桔梗在此沉睡", "太虚梦华录","于是留下了火焰", "阿波卡利斯如是说", "致以无瑕之人", "跨越终焉之日"],
            // },
            // {
            //   text: "婆娑死生",
            //   icon: "lightbulb",
            //   prefix: "Vol.1.5/",
            //   children: ["海的女儿"],
            // },
            "Vol.1", "Vol.1.5"
        ],
    },
    "/article/",
    "/about/",
]);
