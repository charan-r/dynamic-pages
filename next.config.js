// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const fetch = require("isomorphic-unfetch");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  async exportPathMap() {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_page=1'
    )
    const postList = await response.json()

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = postList.reduce(
      (pages, blog) =>
        Object.assign({}, pages, {
          [`/blog/${blog.id}`]: { page: "/blog/[blogId]" }
        }),
      {}
    )

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': { page: '/' },
      "/about": { page: "/about" }

    })
  },
  //assetPrefix: '',
  assetPrefix: !debug ? "/dynamic-pages/" : "",
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  } /*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
};
