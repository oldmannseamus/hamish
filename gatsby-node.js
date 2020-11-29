/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const {
  createPages,
  createSchemaCustomization,
} = require('./site-conf/gatsby-node');

exports.createSchemaCustomization = createSchemaCustomization;
exports.createPages = createPages;
