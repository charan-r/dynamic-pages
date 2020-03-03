import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

 const Blog = (props) => {
  const { title, body = "default body gettins" } = props;

  return (
    <main>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={body}
      />
    </Head>

    <h1>{title}</h1>

    <p>{body}</p>

    <Link href="/" as={process.env.BACKEND_URL + "/"}>
      <a>Go back to home</a>
    </Link>
  </main>

  )
}
Blog.getInitialProps = async ( query ) => {
  console.log("qyeryss", query);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.asPath.split("/")[2]}`
  );
  const post = await response.json();
  return { ...post };
}

export default Blog



// export default class extends Component {
//   static async getInitialProps(query) {
//     // fetch single post detail
//     console.log("qyeryss", query.asPath.split("/")[2]);
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${query.asPath.split("/")[2]}`
//     );
//     const post = await response.json();
//     return { ...post };
//   }

//   render() {
//     const { title, body = "default body gettins" } = this.props;

//     return (
//       <main>
//         <Head>
//           <title>{title}</title>
//           <meta
//             name="description"
//             content={body}
//           />
//         </Head>

//         <h1>{title}</h1>

//         <p>{body}</p>

//         <Link href="/" as={process.env.BACKEND_URL + "/"}>
//           <a>Go back to home</a>
//         </Link>
//       </main>
//     );
//   }
// }
