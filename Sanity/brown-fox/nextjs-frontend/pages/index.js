import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";

import Script from "next/script";
import { useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
// import NavBar from "../components/NavBar";

export default function Home({ blogs, profile }) {
  // createClient will create a client for our sanity studio , projectId is in sanity.JSON
  const client = createClient({
    projectId: "fq9jmibn",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  // builder is used when we want to access the image URL of our client in sanity

  // Instead of making a profile object we will create a profile schema in sanity
  // const Profile = {
  //   title: "Lokesh Melkani",
  //   name: "Lokesh",
  //   image:
  //     "https://media-exp1.licdn.com/dms/image/C4E03AQEuBOCdLULoUQ/profile-displayphoto-shrink_800_800/0/1634400320435?e=1663804800&v=beta&t=FJRAD2Kwa86MYoY-yX-yr0-tHjhCaqHYj-ULa8bI-GY",
  // };
  useEffect(() => {}, []);

  return (
    <>
      <>
        <Script src="/assets/js/main.js"></Script>
        <Head>
          <meta charset="utf-8" />
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />
          <title>{profile.title} : Developer | Coder</title>
          <meta property="og:title" content="Homepage | Atom Template" />
          <meta property="og:locale" content="en_US" />
          <link rel="canonical" href="//" />
          <meta property="og:url" content="//" />
          <meta name="description" content="Portfolio Website and Blog Page." />
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
        </Head>
        <div className="w-full z-50 top-0 py-3 sm:py-5  absolute  bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container flex items-center justify-between">
            <div>
              <Link href="/">
                <h2 className="text-white text-2xl font-bold">
                  {profile.title}
                </h2>
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group pl-6">
                  <Link href="/#about">
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      About
                    </span>
                  </Link>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
                <li className="group pl-6">
                  <a href="#services">
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      Services
                    </span>
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
                <li className="group pl-6">
                  <a href="#portfolio">
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      Portfolio
                    </span>
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
                <li className="group pl-6">
                  <a href="#blog">
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      Blog
                    </span>
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
                <li className="group pl-6">
                  <a href="#contact">
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      Contact
                    </span>
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
        <div className="hidden absolute right-0 min-h-screen w-2/3 bg-red py-4 px-8 shadow md:w-1/3">
          <button className="absolute top-0 right-0 mt-4 mr-4">
            <img
              src="/assets/img/icon-close.svg"
              className="h-10 w-auto"
              alt=""
            />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                About
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Services
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Portfolio
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Clients
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Work
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Statistics
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Blog
              </span>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </>
      <>
        <div>
          <div
            className="relative bg-cover bg-red bg-center bg-no-repeat py-8"
            style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
          >
            <div className="absolute inset-0 z-20  bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-center bg-no-repeat"></div>

            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
              <div className="flex flex-col items-center justify-center lg:flex-row -my-20">
                <div className="rounded-full border-8 border-orange-500 shadow-xl">
                  <img
                    src={builder.image(profile.image).width(200).url()}
                    className="h-48 rounded-full sm:h-56"
                    alt="author"
                  />
                </div>
                <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                  <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                    Hello I am
                    <span className="text-black">{profile.name}</span>
                  </h1>
                  <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                      <p className="font-body text-lg uppercase text-white">
                        Let us connect
                      </p>
                      <div className="hidden sm:block">
                        <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                      <a href="https://www.facebook.com/Lokesh.Melkani77">
                        <i className="bx bxl-facebook-square text-2xl text-white hover:text-black"></i>
                      </a>
                      <a
                        href="https://twitter.com/MelkaniLokesh"
                        className="pl-4"
                      >
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
                  <Link href={"/blogs"}>
                    <div className="buttons text-center md:text-left">
                      <button className="bg-cyan-500 font-bold text-white border-2 px-4 py-1 my-4 rounded-2xl hover:bg-orange-500">
                        All Blogs
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
              <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2 className="font-header text-4xl font-semibold uppercase text-orange-500 sm:text-5xl lg:text-6xl">
                  Who am I?
                </h2>
                <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  I am Lokesh Melkani, a Web Developer & Enginnering
                  Undergraduate
                </h4>
                <p className="pt-6 font-body leading-relaxed text-grey-20">
                  Hey ! Welcome to my Portfolio Website. I am currently{" "}
                  <span className="text-orange-500">
                    pursuing btech in Electrical and Electronics Engineeering
                  </span>{" "}
                  from Maharaja Agrasen Insititute of Technology, Rohini Sec-22
                  , New Delhi. I like Doing coding and making projects. My
                  hobbies include Reading Books , Making Web App Projects ,
                  Gymming , Cricket and sometimes Writing.I have Working
                  knowledge of{" "}
                  <span className="text-orange-500">
                    HTML , CSS , JavaScript , ReactJs , NextJs , Sanity ,
                    Tailwind CSS , Bootstrap , NodeJs , ExpressJs , MongoDB
                  </span>{" "}
                  I have included all my socials links for you to connect with
                  me and{" "}
                  <span className="text-orange-500">
                    have attached my projects below
                  </span>{" "}
                  with that I also have attached my favourite blogs below which
                  I liked while I was going through them.There is a form where
                  you can connect with me and ask me anything or collaborate.
                  Hope to connect with you soon. Thank You !!
                </p>
                <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                  <div className="flex items-center justify-center sm:justify-start">
                    <p className="font-body text-lg font-semibold uppercase text-black-20">
                      Connect with me
                    </p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-2xl text-black"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                    <a href="https://www.facebook.com/Lokesh.Melkani77">
                      <i className="bx bxl-facebook-square text-2xl text-orange-500 hover:text-black"></i>
                    </a>
                    <a
                      href="https://twitter.com/MelkaniLokesh"
                      className="pl-4"
                    >
                      <i className="bx bxl-twitter text-2xl text-orange-500 hover:text-black"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lokesh-melkani-22572b218"
                      className="pl-4"
                    >
                      <i className="bx bxl-linkedin text-2xl text-orange-500 hover:text-black"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/lokesh_melkani/"
                      className="pl-4"
                    >
                      <i className="bx bxl-instagram text-2xl text-orange-500 hover:text-black"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                <div>
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      HTML & CSS
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-black">
                      85%
                    </h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div
                      className="h-3 rounded-full bg-orange-500"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      JavaScript & ReactJs
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-black">
                      60%
                    </h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div
                      className="h-3 rounded-full bg-orange-500"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      C++
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-black">
                      98%
                    </h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div
                      className="h-3 rounded-full bg-orange-500"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex items-end justify-between">
                    <h4 className="font-body font-semibold uppercase text-black">
                      Nextjs & Bootstrap
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-black">
                      60%
                    </h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <div
                      className="h-3 rounded-full bg-orange-500"
                      style={{ width: "61%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="services">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-orange-500 sm:text-5xl lg:text-6xl">
              Here is what I am good at
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              My Skills
            </h3>

            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
              <div className="group rounded px-8 py-12 shadow hover:bg-black">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="block">
                    <Image src="/webd.jpg" width={1000} height={1000} />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-orange-500 group-hover:text-orange-500 lg:text-xl">
                    WEB DEVELOPMENT
                  </h3>
                  <p className="text-black pt-4 font-bold group-hover:text-white md:text-base">
                    I have Decent Knowledge of Html , Tailwind CSS , Vanilla CSS
                    , JS , ReactJs ,NextJs , Sanity , Nodejs , Express ,
                    Bootstrap , MongoDB.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-black">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="block rounded-lg">
                    <Image src="/problem.jpg" width={2900} height={2900} />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-orange-500 group-hover:test-orange-500 lg:text-xl">
                    Problem Solving
                  </h3>
                  <p className="text-black pt-4 font-bold group-hover:text-white md:text-base">
                    I have solved over 230 Questions of DSA which includes
                    Topics like Tree , Stack , Queue , Graph etc.
                  </p>
                </div>
              </div>
              <div className="group rounded px-8 py-12 shadow hover:bg-black">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="block">
                    <Image src="/cs.webp" width={2900} height={2900} />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="pt-8 text-lg font-semibold uppercase text-orange-500 group-hover:text-orange-500 lg:text-xl">
                    Core Subjects
                  </h3>
                  <p className="text-black pt-4 font-bold group-hover:text-white md:text-base">
                    I have good knowledge of core subjects like Operating System
                    , DBMS , Computer Network etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="portfolio">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-orange-500 sm:text-5xl lg:text-6xl">
              Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              My Projects
            </h3>

            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
              <a
                href="https://github.com/LokeshMelkani07/MyFitness_Gym.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="/gym.png"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="https://github.com/LokeshMelkani07/expense_tracker.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="/expense.png"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="https://github.com/LokeshMelkani07/EasyPay.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="pro1.png"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="https://github.com/LokeshMelkani07/Amazon_clone.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="/pro3.png"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="https://github.com/LokeshMelkani07/dance_pe_chance.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="project4.png"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>

              <a
                href="https://github.com/LokeshMelkani07/TravelGuru.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="project5.png"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="https://github.com/LokeshMelkani07/Grapple.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="pro9.jpg"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>

              <a
                href="https://github.com/LokeshMelkani07/Spotify.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="pro6.jpg"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href=" https://github.com/LokeshMelkani07/CodingMania.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="pro7.jpg"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="https://github.com/LokeshMelkani07/Amazon_FrontLayout_Clone.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="pro8.jpg"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="https://github.com/LokeshMelkani07/Goggle_Keep_Clone.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="pro10.png"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
              <a
                href="https://github.com/LokeshMelkani07/Foodie_We.git"
                className="mx-auto transform transition-all hover:scale-105 md:mx-0"
              >
                <img
                  src="pro2.png"
                  className="w-full shadow"
                  alt="portfolio image"
                />
              </a>
            </div>
          </div>

          <div className="bg-grey-50" id="blog">
            <div className="container py-16 md:py-20">
              <h2 className="text-center font-header text-4xl text-orange-500 font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to read Blogs
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my Top 3 Favourite Blogs.
              </h4>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                {blogs.map((item) => {
                  return (
                    <Link
                      key={item.slug.current}
                      href={"/blog/" + item.slug.current}
                      className="shadow cursor-pointer"
                    >
                      <div>
                        <div
                          style={{
                            backgroundImage: `url(${
                              builder.image(item.blogImage).width(200).url() ||
                              "/assets/img/post-01.png"
                            })`,
                          }}
                          className="group  relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                        >
                          <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-5  transition-opacity group-hover:opacity-50"></span>
                          <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold object-fill uppercase text-white md:text-base cursor-pointer">
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
                {/* <a href="/post" className="shadow">
              <div style={{"backgroundImage": "url(/assets/img/post-02.png)"}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">My personal productivity system</span>
                <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </div>
            </a>
            <a href="/post" className="shadow">
              <div style={{"backgroundImage": "url(/assets/img/post-03.png)"}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">My year in review 2020</span>
                <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </div>
            </a> */}
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="contact">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-orange-500 sm:text-5xl lg:text-6xl">
              Here is a contact form
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Ask Me Anything
            </h4>
            <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
              <p className="font-body text-grey-10">
                Here is a form given below by which you can contact me and ask
                me any query or anything you want to discuss, Feel Free to write
                me.
              </p>
            </div>
            <form className="mx-auto w-full pt-10 sm:w-3/4">
              <div className="flex flex-col md:flex-row">
                <input
                  className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                <input
                  className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                  placeholder="Email"
                  type="text"
                  id="email"
                />
              </div>
              <textarea
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
                placeholder="Message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <button className="mt-6 flex items-center justify-center rounded bg-orange-500 px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-orange-300">
                Send
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
            </form>
            <div className="flex flex-col pt-16 lg:flex-row space-x-3">
              <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2 shadow-sm shadow-orange-500 hover:scale-105 m-2">
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-black lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-orange-500 lg:text-md">
                  lokeshmelkani5102001@gmail.com
                </p>
              </div>
              <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2 shadow-sm shadow-orange-500 hover:scale-105 m-2">
                <div className="flex items-center">
                  <i className="bx bx-map text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-black lg:text-md">
                    My Address
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-orange-500 lg:text-md">
                  New Delhi , India
                </p>
              </div>
              <div className="w-auto border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2 shadow-sm shadow-orange-500 hover:scale-105 m-2">
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-black lg:text-md">
                    Alternate Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-orange-500 lg:text-md ">
                  msdianlokeshmelkani77@gmail.com
                </p>
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
      </>
    </>

    // <div className="home bg-slate-600 text-red">
    //   <h1>{blogs[0].title}</h1>
    //   <div className="nav bg-black text-white">
    //     <PortableText
    //       // Pass in block content straight from Sanity.io
    //       content={blogs[0].content}
    //       projectId="fq9jmibn"
    //       dataset="production"
    //       // Optionally override marks, decorators, blocks, etc. in a flat
    //       // structure without doing any gymnastics
    //       serializers={{
    //         h1: (props) => <h1 style={{ color: "red" }} {...props} />,
    //         li: ({ children }) => (
    //           <li className="special-list-item">{children}</li>
    //         ),
    //       }}
    //     />
    //   </div>
    // </div>
  );
}
export async function getStaticProps(context) {
  const client = createClient({
    projectId: "fq9jmibn",
    dataset: "production",
    useCdn: false,
  });
  // *[_type == "movie"] is a groq command its just a list of caommands , query language used in sanity and search 'groq sanity' you get a cheatsheet in which there are many such commands
  // all the commands help us in connecting our nextjs app with sanity
  // Website : https://www.sanity.io/docs/query-cheat-sheet
  // client.fetch of sanity is different than fetchAPI of JS
  // useCDN : false will help us in reflecting (changes we do in our santiy) in Nextjs faster otherwise changes will reflect slowly
  // query and profileQuery are the queries used using GROQ language.using profile we fetch the profile.js shcme a we have created and using blog wfetch first 3 blogs
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  // we are using [0] so that it cn fetch the first profile and in sanity studio first profile will be the one which is latest updated so this way we get the latest result and stay up to date
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      blogs,
      profile,
    },
  };
}
