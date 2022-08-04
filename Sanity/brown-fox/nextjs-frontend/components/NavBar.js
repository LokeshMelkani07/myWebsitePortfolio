import { createClient } from "next-sanity";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect } from "react";
import Link from "next/link";

export const NavBar = () => {
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
    <div>
      <div className="w-full z-50 top-0 py-3 sm:py-5  absolute  bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container flex items-center justify-between">
          <div>
            <Link href="/">
              <h2 className="text-white text-2xl font-bold">Lokesh Melkani</h2>
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
                <Link href="/#services">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Services
                  </span>
                </Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li className="group pl-6">
                <Link href="/#portfolio">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Portfolio
                  </span>
                </Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li className="group pl-6">
                <Link href="/#blog">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Blog
                  </span>
                </Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
              <li className="group pl-6">
                <Link href="/#contact">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Contact
                  </span>
                </Link>
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
              Work
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
    </div>
  );
};

export async function getStaticProps(context) {
  const client = createClient({
    projectId: "fq9jmibn",
    dataset: "production",
    useCdn: false,
  });
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      profile,
    },
  };
}
