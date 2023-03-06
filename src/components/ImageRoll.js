import React from 'react'
import PropTypes from 'prop-types'
import {graphql, StaticQuery } from 'gatsby'
import Gallery from "@browniebroke/gatsby-image-gallery";


const ImageRollTemplate = (props) => {
  let images;
  images = props.data.images.edges.sort(() => Math.random() - 0.5)
  if (props.limit.limit) {
    images = images.slice(0, props.limit.limit);
  }
  images = images.map(({ node }) => node.childImageSharp)

  return <Gallery images={images}/>
}

ImageRoll.propTypes = {
  data: PropTypes.shape({
    allFiles: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function ImageRoll(limit) {
  return (
      <StaticQuery
          query={graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "uploads" }, extension: { eq: "jpg" } }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`}
          render={(data, count) => <ImageRollTemplate data={data} count={count} limit={limit}/>}
      />
  );
}

