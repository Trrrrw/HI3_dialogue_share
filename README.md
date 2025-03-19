<div align = center>

<img src="https://trrrrw.github.io/HI3_dialogue_share/assets/image/kcc-2000.png" width="288" height="288" alt="banner">

<br>


崩坏3 剧情文本
<br>
</div>


# 暂时别folk了，大佬 [@Xrysnow](https://github.com/xrysnow) 已经搞完了👉 [崩坏3剧情助手](https://bh3helper.xrysnow.xyz/pages/index.html) 👈

想把格式换成 WebGAL 的格式，现在的格式太蛋疼了，不过手头没电脑不是很方便。
想添加的人偶可以看 [WebGAL 文档](https://docs.openwebgal.com/webgal-script/dialogue.html)，或者 src/scene 下的 .txt 文件


## 使用方法
1. 点击每个页面下方的`在 GitHub 上编辑此页`
2. 点击按钮`Fork this repository`
3. 按照下面格式添加对话
```html
<chatLeft character="角色名" armor="装甲序号">
<n-card>对话</n-card>
</chatLeft>
```

**示例**
<chatLeft character="爱莉希雅" armor="0">
<n-card>如此绚丽的花朵，不该在绽放之前就枯萎。我会赠予你璀聚的祝福，而你的灵魂，也将会绽放更耀眼的光辉。</n-card>
</chatLeft>

```html
<chatLeft character="爱莉希雅" armor="0">
<n-card>如此绚丽的花朵，不该在绽放之前就枯萎。我会赠予你璀聚的祝福，而你的灵魂，也将会绽放更耀眼的光辉。</n-card>
</chatLeft>
```


> 角色名为[官网](https://www.bh3.com/valkyries)显示的名字；装甲序号为从右向左顺序，从0开始
1. 完成修改后点击`Commit changes...`
2. 点击`Propose changes`
3. 填写好改动了什么点击`Create pull request`
4. 目录在`.vuepress/guide/README.md`
5. 当然也可以直接提`issue`告诉我要改哪里
