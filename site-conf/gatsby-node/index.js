const createSchemaCustomization = require('./createSchemaCustomization');
const createPages = require('./createPages');

module.exports = {
  ...createSchemaCustomization,
  ...createPages,
  getUrlSafeString: (string) => string.toLowerCase().replace(/[^a-zA-Z\d\s:]/g, '').replace(/\s/g, '-'),
};
