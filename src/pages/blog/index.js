import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/uploads/014.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 full-width-image--title"
          >
            Latest News
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll/>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
