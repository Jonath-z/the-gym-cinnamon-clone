/* eslint-disable @next/next/no-img-element */
import React from "react";
import { articles } from "../../data";
import { DescriptionCard, ViewMoreCard } from "../../modules/cards";

const ArticleContainer = () => {
  return (
    <section className="px-5 relative pb-20 flex flex-col gap-10">
      <h1 className="font-montBold text-4.5xl">
        Stay in the loop on tech topics
      </h1>

      <div className="flex gap-8 overflow-x-scroll">
        {articles.map(
          ({ imageUrl, title, date, readingTime, theme }, index) => {
            return (
              <div key={index} className="flex flex-col gap-3">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-[175px] h-[107px]"
                />
                <p className="uppercase text-sm font-montBold">{theme}</p>
                <div className="flex justify-around items-center w-[175px]">
                  <div className="w-[6px] h-[6px] bg-yellow-400 rounded-full" />
                  <DescriptionCard>
                    <p>{date}</p>
                  </DescriptionCard>
                  <div className="w-[6px] h-[6px] bg-yellow-400 rounded-full" />
                  <DescriptionCard>
                    <p>{readingTime}</p>
                  </DescriptionCard>
                </div>

                <h1 className="text-slg font-montBold">{title}</h1>
              </div>
            );
          }
        )}
      </div>

      <ViewMoreCard title="View more blogs" />
    </section>
  );
};

export default ArticleContainer;
