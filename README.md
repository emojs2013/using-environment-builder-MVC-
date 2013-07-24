# emo using-environment-builder

---

## Standing on the shoulders of giants

 `npm` -- node_modules


 `spm` -- public/sea-modules


 `bower` -- public/bower_components

---

## 目录结构说明

遵循简单的MVC结构

    root/
      |-- controllers             存放 nodejs 后台 js 逻辑文件
      |     |-- app               存放 app 页面相关的逻辑
      |     `-- common            存放公用 js 逻辑
      |-- logs                    存放 express 产生的log文件（access log, error log)
      |-- models                  存放数据model原型，默认推荐mongodb
      |-- public                  存放静态文件，前台组件
      |     |-- images            存放图片资源
      |     |-- scritps           存放前台的 js 逻辑文件
      |     |     |-- app         存放app相关的 js 文件
      |     |     |-- common      存放前台公用 js 逻辑
      |     |-- styles            存放前台的 css 样式文件
      |     |     |-- app         存放app相关的 css 样式文件
      |     |     |-- base.css    layout 默认加载的 base 样式，建议每个页面都加载
      |     |     |-- common.css  前台公用的样式表，layout 默认加载
      |     |     `-- index.css   首页的样式
      |     |-- users             存放用户上传的资源
      |     |-- bower.json        bower 包管理器的依赖信息
      |     |-- favicon.ico       网页的favicon
      |     |-- package.json      spm 包管理器的依赖信息
      |     `-- README.md         
      |-- static                  存放后台使用的静态文件
      |-- view                    ejs模板引擎的视图目录
      |     |-- app               app相关的视图目录
      |     |-- 404.ejs           404页面
      |     |-- index.ejs         项目首页
      |     `-- layout.ejs        项目首页使用的布局视图
      |-- .gitignore              git commit 忽略的项目
      |-- app.js                  main function. $ node app.js 已启动项目
      |-- config.js               可配置项
      |-- package.json            项目依赖包，和信息说明
      |-- README.md               
      `-- routes.js               路由，分发
 


## 使用说明

How to prepare node_modules
------------

First, you should install `npm`:

Then, install npm packages:


    $ npm install

How to prepare public directory
------------

    $ cd public
    $ spm install
    $ bower install

view public/README.md for more info.