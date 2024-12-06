export default {
  /**
   * basic Information
   */
  title: `mindaaaa-gatsby.netlify.app`,
  description: `개발자 민다`,
  language: `ko`,
  siteUrl: `https://mindaaaa-gatsby.netlify.app/`,

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `민다`,
    nickname: `mindaaaa`,
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `avalc@naver.com`,
      residence: 'Pyeongtaek, South Korea',
    },
    social: {
      github: `https://github.com/mindaaaa`,
    },
    dropdown: {
      tistory: 'https://404minda.tistory.com/',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'TypeScript 학습 기록',
      category: 'featured-typescript',
    },
    {
      title: 'React 프로젝트',
      category: 'featured-react',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: '랜덤 색상 생성기',
      description: 'TypeScript와 Vue로 제작한 프로젝트',
      techStack: ['Vue', 'TypeScript', 'CSS'],
      thumbnailUrl: '', // assets 폴더에 넣고 경로 설정
      links: {
        post: '',
        github: 'https://github.com/mindaaaa/random-color-changer',
        demo: 'https://mindaaaa-demo.netlify.app',
        googlePlay: '',
        appStore: '',
      },
    },
    {
      title: '투두리스트 앱',
      description: 'React와 TypeScript로 만든 투두리스트',
      techStack: ['React', 'TypeScript', 'SCSS'],
      thumbnailUrl: '',
      links: {
        post: '',
        github: 'https://github.com/mindaaaa/todo-app',
        demo: '',
      },
    },
  ],
};
