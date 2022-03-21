import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";

import AppHead from "@/components/AppHead";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCardBox from "@/components/BlogCardBox";
import Footer from "@/components/Footer";
import { getAllPosts } from "utils/api";
import { MdxMeta } from "../posts/[slug]";

type Props = {
  posts: MdxMeta[];
  categories: string[];
};

const Blog: NextPage<Props> = ({ categories, posts }) => {
  return (
    <>
      <AppHead
        title="Blog - Sat Naing"
        meta={{ description: "my blog desc" }}
      />
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="mb-20 min-h-[70vh]">
            <div className="mt-16 py-2 md:pt-16 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h1 className="text-3xl lg:text-4xl font-bold">Categories</h1>
            </div>
            {categories.map((category) => (
              <div
                key={category}
                className="px-4 sm:px-8 md:px-20 mt-4 mb-6 max-w-4xl mx-auto"
              >
                <Link href={`/blog/categories/${category}`}>
                  <a className="inline-block">
                    <h2 className="text-xl font-medium pl-2 border-l-4 hover:text-marrsgreen dark:hover:text-carrigreen border-marrsgreen dark:border-carrigreen">
                      {category}
                    </h2>
                  </a>
                </Link>
                <div className="flex space-x-4 overflow-x-auto snap-x touch-pan-x">
                  {posts.map(
                    (post, index) =>
                      post.category === category &&
                      index < 6 && <BlogCardBox post={post} key={post.slug} />
                  )}
                </div>
              </div>
            ))}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "datetime",
    "category",
  ]);
  const categories = posts
    .map((post) => post.category)
    .filter((x, i, a) => a.indexOf(x) == i);

  return {
    props: {
      categories,
      posts,
    },
  };
};

export default Blog;