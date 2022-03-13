import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  lang: 'en-US',
  title: 'Vue TypeScript Cheatsheets',
  description: 'This is my first VuePress site',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue TypeScript Cheatsheets',
      description:
        'Cheatsheets for Vue developers using TypeScript',
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
  },
});
