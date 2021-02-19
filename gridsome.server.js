// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async actions => {
    const services = require('./src/data/services.json');
    const persons = require('./src/data/persons.json');

    const serviceCollection = actions.addCollection({
      typeName: 'Services'
    });

    for (const service of services) {
      serviceCollection.addNode(service);
    }

    const personCollection = actions.addCollection({
      typeName: 'Persons'
    });

    for (const person of persons) {
      personCollection.addNode(person);
    }
  });

  api.createPages(({ createPage }) => {
    createPage({
      path: '/jobs/',
      component: './src/pages/jobs/TeamLead.vue'
    });
  });
};
