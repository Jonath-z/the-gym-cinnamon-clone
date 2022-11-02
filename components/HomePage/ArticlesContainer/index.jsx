/* eslint-disable @next/next/no-img-element */
import React from "react";
import { articles } from "../../data";
import { DescriptionCard, ViewMoreCard } from "../../modules/cards";

const ArticleContainer = () => {
  return (
    <section>
      <div className="px-5 relative pb-20 flex flex-col gap-10 xl:max-w-6xl xl:mx-auto xl:px-0 xl:py-28">
        <h1 className="font-montBold text-4.5xl md:leading-large lg:text-large lg:leading-[72px]">
          Stay in the loop <br className="hidden md:block" /> on tech topics
        </h1>

        <div className="flex gap-8 overflow-x-scroll scrollbar-hide lg:mt-10">
          {articles.map(
            ({ imageUrl, title, date, readingTime, theme, author }, index) => {
              return (
                <div key={index} className="flex flex-col gap-3">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-[175px] h-[107px] md:w-[218px] md:h-[132px] lg:w-[352px] lg:h-[215px]"
                  />
                  <p className="uppercase text-sm font-montBold">{theme}</p>
                  <div className="flex justify-around items-center lg:justify-between w-[175px] lg:w-[352px]">
                    <div className="max-w-[11rem] hidden lg:block overflow-hidden whitespace-nowrap text-ellipsis">
                      <DescriptionCard>{author}</DescriptionCard>
                    </div>
                    <div className="w-[6px] h-[6px] bg-yellow-400 rounded-full" />
                    <DescriptionCard>
                      <span>{date}</span>
                    </DescriptionCard>
                    <div className="w-[6px] h-[6px] bg-yellow-400 rounded-full" />
                    <DescriptionCard>
                      <span>{readingTime}</span>
                    </DescriptionCard>
                  </div>

                  <h1 className="text-slg font-montBold md:w-[218px] lg:w-[352px]">
                    {title}
                  </h1>
                </div>
              );
            }
          )}
        </div>

        <ViewMoreCard title="View more blogs" />
      </div>
    </section>
  );
};

export default ArticleContainer;
