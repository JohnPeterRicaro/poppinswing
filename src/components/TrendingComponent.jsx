import trendingData from "@/data/TrendingData";
import Button from "./Button";

const TrendingComponent = ({ data }) => {
  return (
    <>
      <div className="mt-[24px] p-[40px] border-4 border-gray-800 rounded-xl flex justify-center items-center gap-[40px]">
        <div className="w-1/2 flex flex-col justify-center items-start space-y-[24px]">
          <div className="flex justify-center items-center gap-[16px]">
            <div className=" bg-brook-40x40 bg-cover bg-no-repeat w-[40px] h-[40px] rounded-full" />
            <div className="leading-1">
              <h3 className="text-[16px] text-gray-900 font-bold">
                Brooklyn Simmons
              </h3>
              <h4 className="text-[16px] text-gray-500">5 August 2022</h4>
            </div>
          </div>
          <div className="flex justify-center items-start gap-[8px]">
            {trendingData.map((data) => (
              <>
                <div key={data.key} className={data.className}>
                  {data.title}
                </div>
              </>
            ))}
          </div>
          <h1 className="text-[39.06px] font-bold text-gray-800">
            Converting Speech to PDF with NextJS and ExpressJS
          </h1>
          <p className="text-[16px] text-[#333333]">
            With speech interfaces becoming more of a thing, it’s worth
            exploring some of the things we can do with speech interactions.
            Like, what if we could say something and have that transcribed and
            pumped out as a downloadable PDF? Well, spoiler alert: we absolutely
            can do that! There are libraries and frameworks we can cobble ...
          </p>
          <div className="w-full flex justify-between items-center">
            <Button
              name={`readMoreBttn`}
              className={`w-[161px] h-[40px] bg-[#FBFBFB] border-2 border-[#33322E] flex justify-center items-center gap-[14px] rounded-[8px]`}
            >
              <>
                <h1 className="text-[16px] text-gray-800 font-bold">
                  Read More
                </h1>
                <div className=" bg-arrow-icon bg-contain bg-no-repeat w-[12px] h-[12px]"></div>
              </>
            </Button>
            <div className="flex justify-center items-center gap-[26px]">
                <div className="flex justify-center items-center gap-[10px]">
                    <div className=" bg-eye-icon bg-cover bg-no-repeat w-[20px] h-[20px]"></div>
                    <h5>5</h5>
                </div>
                <div className="flex justify-center items-center gap-[10px]">
                    <div className=" bg-comment-icon bg-cover bg-no-repeat w-[20px] h-[18.47px]"></div>
                    <h5>1</h5>
                </div>
            </div>
          </div>
        </div>
        <div className=" bg-laptop-img bg-fit bg-no-repeat w-[480px] h-[480px] rounded-lg">
        </div>
      </div>
    </>
  );
};

export default TrendingComponent;
