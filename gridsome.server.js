// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async actions => {
    const services = require('./src/data/services.json');

    const collection = actions.addCollection({
      typeName: 'Services'
    });

    for (const service of services) {
      collection.addNode(service);
    }
  });

  api.createPages(({ createPage }) => {
    createPage({
      path: '/jobs/',
      component: './src/pages/jobs/TeamLead.vue'
    });
  });
};
