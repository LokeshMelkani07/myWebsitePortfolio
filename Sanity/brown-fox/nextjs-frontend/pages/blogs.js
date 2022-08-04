import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Script from "next/script";
import { useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { NavBar } from "../components/NavBar";
// <NavBar />

const Blogs = ({ blogs, profile }) => {
  const client = createClient({
    projectId: "fq9jmibn",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    console.log("thanks");
  }, []);
  return (
    <div className="bg-gray-20">
      <div className="bg-grey-50 my-10" id="blog">
        <div className="container mx-auto py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-cyan-500 sm:text-5xl lg:text-6xl">
            I also like to read Blogs
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my Favourite Blogs
          </h4>
          <div className="mx-auto grid w-full  grid-cols-1 shadow-lg xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 shadow-black my-10 gap-6 pt-12 lg:w-full sm:w-full xl:gap-10 md:px-3 md:w-full sm:px-3">
            {blogs.map((item) => {
              return (
                <Link
                  key={item.slug.current}
                  href={"/blog/" + item.slug.current}
                  className="shadow cursor-pointer "
                >
                  <div className="mx-10 shadow-lg shadow-black my-10 sm:mx-0 md:mx-2">
                    <div
                      style={{
                        backgroundImage: `url(${
                          builder.image(item.blogImage).width(200).url() ||
                          "/assets/img/post-01.png"
                        })`,
                      }}
                      className="group  relative h-72 bg-cover shadow-lg  shadow-cyan-500 bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                    >
                      <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-50  transition-opacity-10 group-hover:opacity-50 scale-50"></span>
                      <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold object-fill uppercase text-white md:text-base cursor-pointer bg-black hover:scale-110">
                        Read More
                      </span>
                    </div>
                    <div className="bg-white py-6 px-5 xl:py-8">
                      <span className="block font-body text-lg font-semibold text-black">
                        {" "}
                        {item.title}
                      </span>
                      <span className="block pt-2 font-body text-grey-20">
                        {item.metadesc}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
            <Link href="/">
              <button className="bg-cyan-500 my-10 rounded-lg h-8 hover:bg-cyan-300 hover:border hover:border-black cursor-pointer font-bold md:w-72 md:ml-11 lg:w-full lg:ml-[187px] grid mt-auto xl:ml-[260px] ">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "fq9jmibn",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blogs,
      profile,
    },
  };
}

// xl:ml-[317px]
// xl:mt-auto
