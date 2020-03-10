# SESA_Parents
### 1 导入项目

微信开发工具-加号-“导入项目”-输入项目名称和你申请到的AppID

编辑器推荐vscode(插件minapp、wechet-snippet、wxml)

<br>

### 2 目录说明

- `pages\`
  - `index\` - 闪卡页
  - `profile\` - 用户信息页
  - `audio\` - 听读材料页
  - `browse\` - 查看教练评论页
  - `check\` - 打卡页 
- `components\` - 组件
- `icons\` - 图标

<br>

### 3 设计&规范

1. **暂时**不严格要求代码规范，但使用编辑器时请设置`Space`代替`Tab`，防止MAC OS与WINDOWS的缩进冲突。

2. 暂定的颜色方案，建议使用也可不用，毕竟大概率会改。

   ```css
   #ce9637 主题色
   #707070 字体色
   #8a8a8a 字体色-light
   #cbcbcb 描边
   ```

<br>

### 4 注意事项

1. 在自己的feature分支下，每完成一个基础功能（细颗粒度）后进行一次commit。并push到远程自己的feature分支，push之前先pull最新的develop分支代码并保持自己的feature分支基于最新的develop分支。
2. 必须经由测试人员测试后，才能结束自己的功能分支。
3. 进行全局文件修改后提交时如产生冲突，和产生冲突的组员协商后再进行Merge。
4. 请不要删除每组文件夹中`wxml`中对`navbar`的引入，请保持它在文件最上方，也不要误删了`json`中的`navbar`组件引入。
5. 负责`打卡页`的同学注意，打卡界面的入口不在下方tab栏中，调试时可从“我的”-“每日打卡”点击进入。
6. 想不到了，有问题和建议可以随时问组长，他很闲。