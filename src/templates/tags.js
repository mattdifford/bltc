import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogRollTags from "../components/BlogRollTags";

const TagRoute = (props) => {

    const posts = props.data.allMarkdownRemark.edges;

    const { tag } = props.pageContext;

    const { title } = props.data.site.siteMetadata;
    const { totalCount } = props.data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
        <Layout>
            <section className="section">
                <Helmet title={`${tag} | ${title}`} />
                <div className="container content">
                    <div className="columns">
                        <div
                            className="column is-10 is-offset-1"
                            style={{ marginBottom: "6rem" }}
                        >
                            <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                            <BlogRollTags posts={posts} />
                            <p>
                                <Link to="/tags/">Browse all tags</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default TagRoute;

export const tagPageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                        featuredpost
                        excerpt
                        featuredimage {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 120
                                    quality: 100
                                    layout: CONSTRAINED
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`;
