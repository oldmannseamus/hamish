import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer} from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';

const DefaultTemplate: React.FC = ({ data }) => (
  <Layout>
  <SEO title={data.mdx.frontmatter.title} />
  <h1>{data.mdx.frontmatter.title}</h1>
    <MDXRenderer>
      {data.mdx.body}
    </MDXRenderer>
  </Layout>
);

export const query = graphql `query($slug: String!) {
  mdx( slug: {eq: $slug} ) {
    frontmatter {
      title
    }
    body
  }
}
`;

export default DefaultTemplate;
