# react-family
## 开发坏境启动
1. npm install
2. npm start
3. 浏览器打开http://localhost:8080
## 流程
#### 1. webpack配置

#### 2. react

#### 3. redux

#### 4. react-redux

#### 5. action异步

#### 6. 优化
###### （1）combinReducers优化
redux提供了一个combineReducers函数来合并reducer

###### （2）devtool优化
src/webpack.dev.config.js添加devtool属性：
devtool: 'inline-source-map'
devtool，用于选择一种 source map 来增强调试过程。
inline-source-map是转换为 DataUrl 后添加到 bundle 中，便于调试。
###### （3）按需加载
在打包完后，所有页面只生成了一个build.js,当我们首屏加载的时候，就会很慢。因为他也下载了别的页面的js。如果每个页面都打包了自己单独的JS，在进入自己页面的时候才加载对应的js，那首屏加载就会快很多。
见官方版本：https://reacttraining.com/react-router/web/guides/code-splitting
a.安装 bundle-loader
npm install bundle-loader --save-dev
b.创建 bundle.js文件
在src/router/bundle.js下：
c.改造路由
d. 修改webpack的output属性
###### （4）webpack缓存及优化

###### （5）打包优化
每次打包后的文件都存在了/dist文件夹下，我们希望每次打包前自动清理下dist文件。可以使用clean-webpack-plugin进行清理。

###### （6）使用axios和middleware优化API请求
