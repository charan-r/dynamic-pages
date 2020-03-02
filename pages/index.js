import React from "react";
import Link from "next/link";
import { Helmet } from "react-helmet";

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Next JS Project</title>
      <meta
        data-react-helmet="true"
        content="yes"
        name="apple-mobile-web-app-capable"
      />
    </Helmet>
    <div>
      {
      }
      Go to Blog 11
      <Link href="blo/[id]g" as={process.env.BACKEND_URL + "/blog/11"}>
        <a>Blog 11</a>
      </Link>
    </div>
    <div>
      Go to Blog 2
      <Link href="blog/[id]" as={process.env.BACKEND_URL + "/blog/2"}>
        <a>Blog 2</a>
      </Link>
    </div>
    <div>
      Go to Blog 3
      <Link href="blog/[id]" as={process.env.BACKEND_URL + "/blog/3"}>
        <a>Blog 3</a>
      </Link>
    </div>
  </React.Fragment>
);
