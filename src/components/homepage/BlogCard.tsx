import React from "react";
import { BlogCardData } from "./types";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogImage2, BlogImage3, BlogImage4, LearningWithGameBlog } from "@/assets";

interface BlogCardProps {
  CardData?: BlogCardData[];
}

const BlogCard: React.FC<BlogCardProps> = ({ CardData = BLOG_DATA }) => {
  return (
    <React.Fragment>
      {CardData?.map((cardItem) => (
        <div
          key={cardItem.key}
          aria-label="blog-card"
          className="h-full flex flex-col border border-transparent rounded-2xl bg-[#F5F5F5] transition-all ease-in-out duration-300 hover:border-neutral-100"
        >
          <div
            aria-label="blog-image-wrapper"
            className="max-w-screen-sm flex-shrink-0 flex-grow-0 basis-auto"
          >
            <Image
              src={cardItem.image.link}
              width={cardItem.image.width}
              height={cardItem.image.height}
              alt={cardItem.image.altText}
              priority
              className="rounded-t-2xl aspect-video object-cover object-top"
            />
          </div>

          <div
            aria-label="blog-card-body"
            className="p-4 flex-1 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-base text-neutral-900 font-semibold mb-2">
                {cardItem.title.length >= 26
                  ? cardItem.title.slice(0, 26) + "..."
                  : cardItem.title}
              </h4>

              <p className="text-neutral-700 text-xs font-normal mb-5">
                {cardItem.shortDescription.length > 75
                  ? cardItem.shortDescription.slice(0, 75) + "..."
                  : cardItem.shortDescription}
              </p>
            </div>

            <Button asChild variant={"destructive"} className="w-full">
              <Link href={cardItem.action.link}>
                {cardItem.action.text}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default BlogCard;

const BLOG_DATA: BlogCardData[] = [
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
      link: LearningWithGameBlog,
      width: 1380,
      height: 920,
      altText: "learning with game blog",
    },
  },
  {
    key: "blog-2",
    title: "10 Learning Game Ideas",
    shortDescription: "10 ideas for learning with for your kids to have fun.",
    action: {
      link: "#",
      text: "Read More",
    },
    image: {
      link: BlogImage2,
      width: 1380,
      height: 920,
      altText: "10 ideas for learning",
    },
  },
  {
    key: "blog-3",
    title: "Fun Activities for Kids Games",
    shortDescription:
      "Want to do something outside home and games laptop? Here are our recomment. something",
    action: {
      link: "#",
      text: "Read More",
    },
    image: {
      link: BlogImage3,
      width: 1380,
      height: 920,
      altText: "do something outside home",
    },
  },
  {
    key: "blog-4",
    title: "Fun Activities for Kids Games",
    shortDescription:
      "Want to do something outside home and games laptop? Here are our recomment.",
    action: {
      link: "#",
      text: "Read More",
    },
    image: {
      link: BlogImage4,
      width: 826,
      height: 826,
      altText: "do something outside home",
    },
  },
];
