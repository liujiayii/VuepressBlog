module.exports = {
  // 页面标题
  title: 'VuePress',
  // 网页描述
  description: '前端掌握未来',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/liujiayii/liujiayii.github.io',
    // 仓库链接label
    repoLabel: 'Github',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/liujiayii/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // 编辑链接
    editLinks: true,
    //最后更新时间
    lastUpdated: '上次更新',
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      { text: '前端面试之道',link: '/interview/'},
      { text: 'JavaScript书籍', items: [
          { text: '你不知道的JavaScript(上)', link: '/books/你不知道的javascript上'}, 
          { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript中'},
          { text: '你不知道的JavaScript(下)', link: '/books/你不知道的javascript下'}
        ]
      },
      { text: '基础配置功能',link: '/common/'},
      { text: '关于我',link: '/about/'}
  ]},
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
      }
    }
  }
}