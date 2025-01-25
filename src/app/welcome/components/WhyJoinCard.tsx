import React from "react";
import { WhyJoinItemsTypes } from "../types/whyJoinItems";

interface WhyJoinCardProps {
  whyJoinData: WhyJoinItemsTypes[];
}

const WhyJoinCard: React.FC<WhyJoinCardProps> = ({ whyJoinData }) => {
  return (
    <React.Fragment>
      {whyJoinData?.map((card) => (
        <div
          key={card.key}
          aria-label="why-join-us-card"
          className="bg-white p-5 rounded-xl w-full"
        >
          <span
            aria-label="icon-wrapper"
            className="bg-[#F5F6F8] rounded-xl p-4 w-20 h-20 flex flex-col items-center justify-center flex-shrink-0 flex-grow-0 basis-auto mb-4"
          >
            {card.icon}
          </span>
          <h4
            aria-label="title"
            className="text-lg font-semibold text-neutral-800 mb-3"
          >
            {card.title}
          </h4>
          <p className="text-neutral-600 text-base font-normal">
            {card.shortDescription}
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default WhyJoinCard;
