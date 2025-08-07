export default [
  {
    method: 'GET',
    path: '/',
    // name of the controller file & the method.
    handler: 'controller.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/articles/published/count',
    // name of the controller file & the method.
    handler: 'controller.getPublishedArticlesCount',
    config: {
      policies: [],
      auth: false,
    },
  },
];
