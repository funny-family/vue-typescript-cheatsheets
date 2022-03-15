import { defineUserConfig } from 'vuepress';

// https://stackoverflow.com/questions/54019105/list-subfolders-in-sidebar-navigation

export default defineUserConfig({
  lang: 'en-US',
  title: 'Vue TypeScript Cheatsheets',
  description: 'This is my first VuePress site',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue TypeScript Cheatsheets',
      description: 'Cheatsheets for Vue developers using TypeScript',
    },
  },

  themeConfig: {
    logo: '/images/vue-plus-typescript.image.png',

    docsDir: 'docs',

    navbar: [
      {
        text: 'GitHub',
        link: 'https://github.com/funny-family/vue-typescript-cheatsheet',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/introduction.md'],
        },
      ],
    },
  },
});
