import { useRouter } from "next/router";
import Head from "next/head";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import { NavBar } from "../../components/NavBar";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect } from "react";

const Post = ({ blog }) => {
  const router = useRouter();
  const client = createClient({
    projectId: "fq9jmibn",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  useEffect(() => {}, []);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <>
      <>
        <NavBar />
        <Head>
          <meta charset="utf-8" />

          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />

          <title>{blog.title}</title>

          <meta
            property="og:title"
            content="How to become a frontend developer"
          />

          <meta property="og:locale" content="en_US" />

          <link rel="canonical" href="//post" />

          <meta property="og:url" content="//post" />

          <meta name="description" content="Portfolio Best Blogs" />

          <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

          <meta name="theme-color" content="#5540af" />

          <meta property="og:site_name" content="Atom Template" />

          <meta property="og:image" content="//assets/img/social.jpg" />

          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:site" content="@tailwindmade" />

          <link
            crossOrigin="crossOrigin"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />

          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="preload"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />

          <link
            crossOrigin="anonymous"
            href="/assets/styles/main.min.css"
            media="screen"
            rel="stylesheet"
          />

          <script
            defer
            src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
          ></script>

          <script
            defer
            src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
          ></script>

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
          />
        </Head>
        <NavBar />

        <div className="my-10">
          <div className="container py-6 md:py-10">
            <div className="mx-auto max-w-4xl">
              <div>
                <h1 className="pt-5 font-body text-3xl font-semibold text-orange-500 sm:text-4xl md:text-5xl xl:text-6xl">
                  {blog.title}
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img
                      src={urlFor(blog.blogImage).width(200).url()}
                      // src="image-aa89b6bcfca8b153bb9901122e0d2280c7f379f7-1050x698-jpg"
                      className="h-20 w-30 rounded-full border-2 border-grey-70 shadow object-contain"
                      alt="author image"
                    />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-black">
                      {blog.name}
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-10">
                      {blog.desc}
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                      {blog.createdAt}
                    </span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
                <PortableText
                  // Pass in block content straight from Sanity.io
                  content={blog.content}
                  projectId="fq9jmibn"
                  dataset="production"
                  // Optionally override marks, decorators, blocks, etc. in a flat
                  // structure without doing any gymnastics
                  serializers={{
                    h1: (props) => (
                      <h1 style={{ color: "#F97316" }} {...props} />
                    ),
                    li: ({ children }) => (
                      <li className="special-list-item">{children}</li>
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                  <img
                    src={urlFor(blog.image).width(200).url()}
                    className="rounded-full shadow"
                    alt="author image"
                  />
                </div>
                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                  <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                    {blog.name}
                  </h3>
                  <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                    {blog.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-500">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2022. All right reserved, LokeshMelkani.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href="https://www.facebook.com/Lokesh.Melkani77">
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-black"></i>
              </a>
              <a href="https://twitter.com/MelkaniLokesh" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-black"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/lokesh-melkani-22572b218"
                className="pl-4"
              >
                <i className="bx bxl-linkedin text-2xl text-white hover:text-black"></i>
              </a>
              <a
                href="https://www.instagram.com/lokesh_melkani/"
                className="pl-4"
              >
                <i className="bx bxl-instagram text-2xl text-white hover:text-black"></i>
              </a>
            </div>
          </div>
        </div>
      </>{" "}
    </>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const client = createClient({
    projectId: "fq9jmibn",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blog,
      profile,
    },
  };
};
