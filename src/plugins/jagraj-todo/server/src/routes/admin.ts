export default [
  {
    method: 'GET',
    path: '/articles/all/count',
    // name of the controller file & the method.
    handler: 'controller.getAllArticlesCount',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/articles/drafted/count',
    // name of the controller file & the method.
    handler: 'controller.getDraftedArticlesCount',
    config: {
      policies: [],
      auth: false,
    },
  },
];
