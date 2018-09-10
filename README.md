## vue 单元测试

- 本示例使用的是 **Karma +**  **Mocha**  搭配 `Vue.js` 官方单元测试实用工具库 **vue-test-utils**， [vue-test-utils 入门](https://vue-test-utils.vuejs.org/zh/)
- 如果是自己使用 `vue init` 初始化项目的话，在执行 `Set up unit tests` 命令时选择 **Y** ，然后再选择 **Karma and Mocha**

## 安装
#### npm install
如果 `chromedriver` 安装失败, 运行 `npm install chromedriver --chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver -D` 或者查看 [其它解决方案](https://www.npmjs.com/package/chromedriver)

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
![coverage.png](https://github.com/Slice-dd/vue-karme-test/raw/master/src/assets/coverage.png)

## 编写一个单元测试
- 在 **test\unit\specs** 目录下创建一个命名为 `*.spec.js` 的文件
- 在新建的文件中，引入 `vue-test-utils` 相关 API `shallow`，用来创建一个包含被挂载和渲染的 Vue 组件的 Wrapper，然后引入想要测试的组件。
- 测试
    - 内容测试
    ```javascript
        const wraper = shallow(HelloWorld);
        expect(wraper.find('.hello h1').text()).to.equal('Welcome to Your Vue.js App');
    ```
    - 事件测试
    ```javascript
        const wraper = shallow(Counter);
        wraper.find('button').trigger('click');
        expect(wraper.find('div h3').text()).to.equal('Counters 1');
    ```
    - 异步测试
    ```javascript
        const wraper = shallow(Async);
        wraper.find('button').trigger('click');
        
        setTimeout(() => {
            console.log(wraper.vm.value);
            expect(wraper.find('div h3').text()).to.equal('get data');
            done();
        });
    ```
    异步测试需要在 `setTimeout`（`Promise` 已经执行）函数中，并需要显示的调用 `done`




