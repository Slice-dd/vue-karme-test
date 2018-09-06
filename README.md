## vue 单元测试

- 本示例使用的是 `Karma` + `Mocha` 搭配 `Vue.js` 官方单元测试实用工具库 [vue-test-utils](https://vue-test-utils.vuejs.org/zh/) 


## 安装
#### npm install
如果 `chromedriver` 安装失败, 运行 `npm install chromedriver --chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver -D` 或者查看[其它解决方案](https://www.npmjs.com/package/chromedriver)

## 运行
#### npm run unit

可以看到控制台显示如下：
```javascript
  Async.vue
    √ get Data

  Counter.vue
    √ should increment one

  HelloWorld.vue
    √ should render correct contents
```

## 单元测试的编写
- 在 `test\unit\specs` 目录下已有 3 个文件， 包含文本内容测试、点击事件测试、异步测试
- `test\unit\specs` 目录下新建 js 文件，命名规范 `*.spec.js`
- 在 `coverage` 目录下有生成的单元测试文档
![image text][https://github.com/Slice-dd/vue-karme-test/blob/master/coverage.png]




