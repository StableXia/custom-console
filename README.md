# custom-console

一个可以优雅的处理控制台打印信息的库

### 安装

```shell
npm install custom-console
```

### 如何使用

```js
import ConsoleLog from 'custom-console';

ConsoleLog.config.splitter = '------>';

const consoleLog = new ConsoleLog();

consoleLog.log('test', 123); // test ------> 123
```

### 写在最后，custom-console 的历程

#### package 要做哪些事

1、控制台信息可以全局开启关闭  
2、运行时根据当前环境进行相应的信息处理  
3、使用方式

#### 知识点

1、全局配置的保护

```ts
function ConsoleLog() {}
ConsoleLog.config = { silent: true };

ConsoleLog.config.silent = false; // 可以
ConsoleLog.config = {}; // 应该报错
```

2、package 最终导出一个类，如何组织代码结构，让主流程更清晰
