// 配置按需引入组件相关的css文件，自动引入
const { override, fixBabelImports } = require("customize-cra");
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd-mobile", 
        style: 'css' 
    }),
);

// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//     config = injectBabelPlugin(
//              ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css' }],
//              config,
//            );
//     return config;
//   };

