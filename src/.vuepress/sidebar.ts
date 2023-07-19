import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "目录",
      icon: "book",
      prefix: "chapter/",
      collapsible: true,
      children: [
        {
          text: "Vol.1",
          icon: "bookmark",
          prefix: "Vol.1/",
          collapsible: true,
          children: [
            "",
            {
              text: "梦，开始了",
              prefix: "梦，开始了/",
              children: ["黄昏少女战舰", "梦境中的声音"]
            },
            {
              text: "命运的终结",
              prefix: "命运的终结/",
              children: ["风色之诗", "背叛是银色的微笑", "雪原重逢", "巴比伦的囚徒"]
            },
            {
              text: "在坠落的天空下",
              prefix: "在坠落的天空下/",
              children: ["向天举起叛逆之剑", "女王降临", "通往明日的旅途", "天穹的追猎者", "蛇从黑暗中行来"]
            },
            {
              text: "自深海而来",
              prefix: "自深海而来/",
              children: ["深渊之下", "直到深海的尽头", "虚空之穹，孤独之月", "光与影的彼岸"]
            },
            {
              text: "流星划过黑夜",
              prefix: "流星划过黑夜/",
              children: ["长夜暗空", "黑暗破晓"]
            }, {
              text: "献予昨日的挽歌",
              prefix: "献予昨日的挽歌/",
              children: ["迷途沙尘", "暴雨将至", "当雷鸣划破长空"]
            },
            {
              text: "桔梗在此沉睡",
              prefix: "桔梗在此沉睡/",
              children: ["凝自冰霜", "融于岩隙"]
            },
            {
              text: "太虚梦华录",
              prefix: "太虚梦华录/",
              children: ["千年之羽", "新生之翼", "与我一人"]
            },
            {
              text: "于是留下了火焰",
              prefix: "于是留下了火焰/",
              children: ["一人的剧场", "千人的舞台", "点燃明日的火焰"]
            },
            "阿波卡利斯如是说", "致以无瑕之人",
            {
              text: "跨越终焉之日",
              prefix: "跨越终焉之日/",
              children: ["33", "以真理之名", "34", "然后，向着明天"]
            },
          ]
        },
        {
          text: "Vol.1.5",
          icon: "bookmark",
          prefix: "Vol.1.5/",
          collapsible: true,
          children: [
            "",
            {
              text: "海的女儿",
              prefix: "海的女儿/",
                children: ["启自长空","盐雪沙痕","38","39"]
            }
          ]
        }
      ],
    },
    "/article/",
  ],
});
