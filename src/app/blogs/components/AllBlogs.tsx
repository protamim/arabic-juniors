import BlogCard from "@/components/homepage/BlogCard";
import { BlogCardData } from "@/components/homepage/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const AllBlogs = () => {
  return (
    <React.Fragment>
      <section aria-label="all-blogs-section" className="py-5 sm:py-10">
        <div className="container">
          <div aria-label="all-blogs-wrapper">
            <Tabs defaultValue="all">
              <div aria-label="blog-top-operation-bar" className="flex items-center justify-between gap-x-10 flex-wrap gap-y-4">
                <TabsList className="mx-0 bg-transparent p-0 gap-x-3">
                  {BLOGS_DATA?.map((blog) => (
                    <TabsTrigger key={blog.key} value={blog.key} className="rounded-lg border border-neutral-100 shadow-sm text-sm md:text-sm lg:text-sm hover:text-white hover:bg-orange-500 transition-colors ease-in-out duration-300">
                      {blog.category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div aria-label="blog-search-bar">
                  <Input placeholder="Search..." className="border border-neutral-100 rounded-lg h-10 transition-colors ease-in-out duration-300 focus-within:border-pink-400"/>
                </div>
              </div>

              {BLOGS_DATA?.map((blog) => (
                <TabsContent key={blog.key} value={blog.key}>
                  <div
                    aria-label="all-blog-card-wrapper"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8"
                  >
                    <BlogCard CardData={blog.children} />
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div
              aria-label="all-blog-button"
              className="flex items-center justify-center flex-col mt-10 md:mt-20"
            >
              <Button asChild className="md:text-base max-w-60 w-full">
                <Link href="#">
                  See all blog
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AllBlogs;

interface AllBlogsDataTypes {
  key: string;
  category: string;
  children: BlogCardData[];
}
const BLOGS_DATA: AllBlogsDataTypes[] = [
  {
    key: "all",
    category: "All",
    children: [
      {
        key: "blog-1",
        title: "Learning with Games? Why n",
        shortDescription:
          "Embrace the joy of games to enhance your learning experience!",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161090/blog-2_xlvgku.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-2",
        title: "10 Learning Game Ideas",
        shortDescription:
          "10 ideas for learning with for your kids to have fun.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161084/blog-4_a7zhja.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-3",
        title: "Fun Activities for Kids Games",
        shortDescription:
          "Want to do something outside  home and games laptop? Here are our recomment.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161082/blog-3_oxfubh.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-4",
        title: "10 Learning Game Ideas",
        shortDescription:
          "Want to do something outside  home and games laptop? Here are our recomment.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161018/450d30a2e71ff211efe7fc2ef693cd22_txmlzk.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-5",
        title: "Learning with Games? Why n",
        shortDescription:
          "Embrace the joy of games to enhance your learning experience!",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161090/blog-2_xlvgku.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-6",
        title: "10 Learning Game Ideas",
        shortDescription:
          "10 ideas for learning with for your kids to have fun.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161084/blog-4_a7zhja.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-7",
        title: "Fun Activities for Kids Games",
        shortDescription:
          "Want to do something outside  home and games laptop? Here are our recomment.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161082/blog-3_oxfubh.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-8",
        title: "10 Learning Game Ideas",
        shortDescription:
          "Want to do something outside  home and games laptop? Here are our recomment.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161018/450d30a2e71ff211efe7fc2ef693cd22_txmlzk.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
    ],
  },
  {
    key: "arabic",
    category: "Arabic",
    children: [
      {
        key: "blog-0",
        title: "10 Learning Game Ideas",
        shortDescription:
          "Want to do something outside  home and games laptop? Here are our recomment.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161018/450d30a2e71ff211efe7fc2ef693cd22_txmlzk.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-1",
        title: "Learning with Games? Why n",
        shortDescription:
          "Embrace the joy of games to enhance your learning experience!",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161090/blog-2_xlvgku.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-2",
        title: "10 Learning Game Ideas",
        shortDescription:
          "10 ideas for learning with for your kids to have fun.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161084/blog-4_a7zhja.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-3",
        title: "Learning with Games? Why n",
        shortDescription:
          "Embrace the joy of games to enhance your learning experience!",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161090/blog-2_xlvgku.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-4",
        title: "Fun Activities for Kids Games",
        shortDescription:
          "Want to do something outside  home and games laptop? Here are our recomment.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161082/blog-3_oxfubh.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-5",
        title: "10 Learning Game Ideas",
        shortDescription:
          "Want to do something outside  home and games laptop? Here are our recomment.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161018/450d30a2e71ff211efe7fc2ef693cd22_txmlzk.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
      {
        key: "blog-6",
        title: "Fun Activities for Kids Games",
        shortDescription:
          "Want to do something outside  home and games laptop? Here are our recomment.",
        action: {
          link: "#",
          text: "Read More",
        },
        image: {
          link: "https://res.cloudinary.com/dromjx3rx/image/upload/v1738161082/blog-3_oxfubh.png",
          width: 1380,
          height: 920,
          altText: "learning with game blog",
        },
      },
    ],
  },
];
