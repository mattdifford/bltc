import React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import PropTypes from "prop-types";
import FullWidthImage from "./FullWidthImage";


export default function BlogRollTemplate(props) {
  const {
    posts
  } = props;
  return (
    <div className="columns is-multiline">
      {posts &&
          posts.map(({ node: post }) => (
          <div className="is-parent column is-4" key={post.id}>
            <article
              className={`blog-list-item is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header>
                {post?.frontmatter?.featuredimage && (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                ) }
                <p className="post-meta">
                  <Link
                    className="title is-size-4 is-spaced"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <p className="pb-6">
                {post.frontmatter.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )
}

FullWidthImage.propTypes = {
  posts: PropTypes.array
};
