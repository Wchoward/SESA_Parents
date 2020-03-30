## Git及GitFlow开发协作文档

### Git安装配置

[安装Git](https://www.liaoxuefeng.com/wiki/896043488029600/896067074338496)

### GitFlow安装配置

- For Windows

  1. 复制`getopt.exe`文件到你的git安装目录，例如，`D:\Program Files (x86)\Git\bin`

  2. 复制`libintl3.dll`文件到你的git安装目录。

  3. 复制`libiconv2.dll`文件到你的git安装目录。

  4. 打开git bash，输入以下命令：

     ```bash
     git clone -–recursive git://github.com/nvie/gitflow.git
     ```

  5. 打开windows的cmd（可能需要管理员权限），进入上面的git flow代码目录，键入以下命令：

     ```shell
     cd gitflow
     
     cd contrib
     
     msysgit-install.cmd [git的安装目录]
     ```

     例如：

     ```shell
     msysgit-install.cmd “D:\Program Files (x86)\Git”
     ```

- For MacOS

  1. `brew install git-flow`

验证安装：

Git bash中输入:

```bash
git flow
```

### 克隆项目

```bash
git clone https://github.com/Wchoward/SESA_Parents.git
```

或

```bash
git clone https://github.com/Wchoward/SESA_Teachers.git
```

### 初始化GitFlow

进入克隆后项目的根目录，所有人均需输入：

```bash
git flow init -d
```

### 创建自己的功能分支

```bash
git flow feature start <name> [<base>]
```

例如：我要发打卡功能，因此需要新建一个名为`check`的feature分支（功能分支均开始于最新的开发分支`develop`） 即：

```bash
git flow feature start check develop
```

新建后的分支为`feature/check`

**注意：**

若**两人共同**开发同一个feature：

1. 商量好，一个人先行本地创建feature，创建完毕后，push到远程

   ```bash
   git flow feature publish check
   或者
   git push origin feature/check
   ```

2. 另一人，从远程将此feature分支pull下来，checkout到该分支下进行开发

   ```bash
   git flow feature pull origin check
   ```

### 开发自己的功能

1. 在自己的feature分支下，进行开发、编写代码，并在本地自己的功能分支下进行commit操作

2. 每完成一个基础功能（细颗粒度）后进行一次commit。

3. push到远程自己的feature分支（如`origin/feature/check`）（管理人员会经常检查，以便进行进度监控与管理）

4. 注意微信群的通知，如果收到版本更新的通知，要进行develop分支的更新并把它合并到自己的feature分支。

   ```bash
   git checkout develop
   git pull
   git checkout feature/check
   git merge develop
   git flow feature publish check
   ```

### 开发完成后

***不要自行结束自己的功能分支！！！***

自己的功能开发完毕后，和组长@Wchoward与测试人员进行沟通反馈，不要自行结束自己的feature分支（结束分支=合并进入develop分支），可能会与别人的代码产生冲突！！！

测试人员将远程的功能分支pull下来进行测试，测试通过后，再结束自己的功能分支。

结束自己的功能分支操作为：

```bash
git flow feature finish <name>
```

该命令会自动将你的feature分支merge到develop分支并自动删除你的feature分支。





### 利用Git GUI管理工具SourceTree简易版教程

1. 下载安装[SourceTree](https://www.sourcetreeapp.com) 

2. 在SourceTree中登陆你的github

3. App中远端仓库选择克隆

   <img src="./克隆仓库.png" style="zoom:25%;" />

4. 克隆到本地后，打开本地仓库

   <img src="./打开本地仓库.png" alt="image-20200310124550373" style="zoom:25%;" />

5. 仓库 -> git-flow 或 hg flow -> **初始化仓库**

   <img src="./初始化GitFlow.png" alt="image-20200310124714028" style="zoom:25%;" />

6. 初始化仓库后 = git flow init完毕，接着点击 `建立新的功能`，输入自己的功能分支名称即可。

7. 通过该APP进行本地的git 提交等管理。

