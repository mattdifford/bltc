import * as React from "react";

import Layout from "../../components/Layout";
import ImageRoll from "../../components/ImageRoll";

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url('/img/uploads/009.jpg')`,
                    }}
                >
                    <h1
                        className="has-text-weight-bold is-size-1 full-width-image--title"
                    >
                        Gallery
                    </h1>
                </div>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <ImageRoll />
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}
