import trendingData from "@/data/TrendingData";

const Post = () => {
  return (
    <>
      <section className="w-[853px] h-auto mx-auto mt-[56px]">
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <div className="flex flex-col justify-center items-center gap-[24px]">
              <div className="flex flex-col justify-center items-center gap-[16px]">
                <div className="h-[64px] w-[64px] bg-brook-40x40 bg-cover bg-no-repeat rounded-full"></div>
                <div className="text-center space-y-[12px]">
                  <h4 className=" text-gray-900 text-[20px] font-bold">
                    Brooklyn Simmons
                  </h4>
                  <h5 className=" text-gray-500 text-[16px]">5 August 2022</h5>
                </div>
              </div>
              <div className="flex justify-center items-center gap-[24px]">
                <div className="flex justify-center items-center gap-[8px]">
                  <div className="w-[23px] h-[20px] bg-eye-icon bg-no-repeat bg-cover"></div>
                  <div className="text-[16px] text-gray-800">5</div>
                </div>
                <div className="flex justify-center items-center gap-[8px]">
                  <div className="w-[19px] h-[18px] bg-comment-icon bg-no-repeat bg-cover"></div>
                  <div className="text-[16px] text-gray-800">1</div>
                </div>
              </div>
              <div className="flex justify-center items-start gap-[12.8px]">
                {trendingData.map((data) => (
                  <>
                    <div key={data.key} className={data.className}>
                      {data.title}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="mt-[24px] flex flex-col justify-start items-start gap-[24px]">
              <h1 className="text-[40px] text-gray-900 font-bold">
                Converting Speech to PDF with NextJS and ExpressJS
              </h1>
              <div className=" w-[853px] h-[480px] rounded-lg bg-cover bg-no-repeat bg-laptop-img-post"></div>
              <p className=" text-[20px] text-gray-800">
                With speech interfaces becoming more of a thing, it’s worth
                exploring some of the things we can do with speech interactions.
                Like, what if we could say something and have that transcribed
                and pumped out as a downloadable PDF? <br/><br/> Well, spoiler alert: we
                absolutely can do that! There are libraries and frameworks we
                can cobble together to make it happen, and that’s what we’re
                going to do together in this article.
              </p>
              <div className="w-full h-[4px] rounded-lg bg-gray-900"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
