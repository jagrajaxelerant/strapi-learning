import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('jagraj-todo')
      // the name of the service file & the method.
      .service('service')
      .getWelcomeMessage();
  },

  // get all articles entries count.
  async getAllArticlesCount(ctx) {

    const articleService = strapi.query('api::article.article');

    // Count all articles.
    const count = await articleService.count();

    return ctx.send({totalCount: count});
  },

  // get published articles entries count.
  async getPublishedArticlesCount(ctx) {

    const articleService = strapi.query('api::article.article');

    // Count all articles — optionally filter published
    const publishedCount = await articleService.count({
      filters: {
        publishedAt: { $notNull: true },
      },
    });

    return ctx.send({publishedCount: publishedCount});
  },

  // get drafted articles entries count.
  async getDraftedArticlesCount(ctx) {

    const articleService = strapi.query('api::article.article');

    // Count all articles — optionally filter unpublished
    const draftedCount = await articleService.count({
      filters: {
        publishedAt: { $notNull: false },
      },
    });

    return ctx.send({draftedCount: draftedCount});
  },
});

export default controller;
