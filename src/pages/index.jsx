import Button from "@/components/Button";
import ComponentTitle from "@/components/ComponentTitle";
import RecentPost from "@/components/RecentPost";
import SliderComponent from "@/components/SliderComponent";
import TrendingComponent from "@/components/TrendingComponent";

const Home = () => {
  return (
    <div className="w-[1192px] h-auto mx-auto mt-[56px]">
      <div>
        <ComponentTitle
          children={`Trending`}
          className={`text-[25px] text-gray-900 font-bold`}
        />
        <TrendingComponent />
        <SliderComponent />
        <div className="w-full h-[4px] my-[56px]  rounded-lg bg-gray-800"></div>
        <ComponentTitle
          name={`recentPost`}
          className={`w-full flex justify-between items-center`}
        >
          <>
            <div className="text-[25px] text-gray-900 font-bold">
              Recent Post
            </div>
            <div className="flex justify-center items-center space-x-[16px]">
              <Button
                name={`filterByBttn`}
                className={`w-[191px] h-[40px] bg-[#f6f6f6] border-2 rounded-lg border-gray-800 flex justify-center items-center gap-[12px]`}
              >
                <>
                  <div className="w-[20px] h-[20px] bg-no-repeat bg-cover bg-filter-icon"></div>
                  <h5 className="text-[16px] text-gray-800">
                    Filter by category
                  </h5>
                </>
              </Button>
              <Button
                name={`sortBttn`}
                className={`w-[84px] h-[40px] border-2 rounded-lg border-gray-800 flex justify-center items-center gap-[14px]`}
              >
                <>
                  <div className="w-[14px] h-[12px] bg-sort-icon bg-no-repeat bg-cover"></div>
                  <h5 className="text-[16px] text-gray-800">Sort</h5>
                </>
              </Button>
              <div className="w-[252px] h-[40px] relative flex justify-center items-center">
                <div className="absoltute w-[13px] h-[13px] bg-search-icon bg-contain bg-no-repeat translate-x-8"></div>
                <input
                  className="w-[252px] py-[12px] pl-[40px] pr-[12px] h-[40px] border-2 border-gray-800 rounded-lg"
                  placeholder="Search"
                  type="search"
                  name=""
                  id=""
                />
              </div>
            </div>
          </>
        </ComponentTitle>
        <RecentPost />
        <div className="mt-[56px] w-full flex justify-end items-center gap-[24px]">
          <Button
            name={`newPostBttn`}
            className={`w-[168px] h-[48px] rounded-lg bg-[#f6f6f6] border-2 border-gray-800 flex justify-center items-center gap-[12px]`}
          >
            <>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.6665 1.6665L1.33317 6.99984L6.6665 12.3332"
                  stroke="#121420"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h5 className="text-[16px] text-gray-800 font-bold">
                Newer Post
              </h5>
            </>
          </Button>
          <Button
            name={`prevPostBttn`}
            className={`w-[168px] h-[48px] rounded-lg bg-[#f6f6f6] border-2 border-gray-800 flex justify-center items-center gap-[12px]`}
          >
            <>
              <h5 className="text-[16px] text-gray-800 font-bold">
                Older post
              </h5>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.3335 1.6665L6.66683 6.99984L1.3335 12.3332"
                  stroke="#121420"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
