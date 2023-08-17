import recentPostData from "@/data/RecentPostData";
import { AiOutlineEye, AiOutlineComment } from "react-icons/ai"

const RecentPostComponent = () => {
  return (
    <>
      {recentPostData.map((post) => (
        <>
          <div
            key={post.key}
            className="w-[576px] h-[625px] p-[24px] rounded-[16px] border-2 border-gray-800 flex flex-col justify-between items-start gap-[24px]"
          >
            <div className="flex justify-center items-center gap-[16px]">
              <div
                className={`bg-cover bg-no-repeat ${post.picture.profile} h-[40px] w-[40px] rounded-full`}
              ></div>
              <div className="flex flex-col justify-start items-start">
                <h5 className=" text-[16px] text-gray-800 font-bold">
                  {post.name}
                </h5>
                <h5 className=" text-[16px] text-gray-500">{post.date}</h5>
              </div>
            </div>
            <h2 className="text-[25px] text-gray-800 font-bold text-left w-[435px]">
              {post.title}
            </h2>
            <div className="w-[495px] h-[248px]">
              <div
                className={`w-[495px] h-[248px] rounded-xl bg-cover bg-no-repeat ${post.picture.postPic}`}
              ></div>
            </div>
            <p className="text-left text-[16px] text-gray-800">{post.parag}</p>
            <div className="w-full flex justify-between items-center">
              {post.button}
              <div className="flex justify-center items-center gap-[24px]">
                <div className="flex justify-center items-center gap-[8px]">
                  <AiOutlineEye className="text-2xl"/>
                  <p className="text-[16px] text-gray-800">{post.views}</p>
                </div>
                <div className="flex justify-center items-center gap-[8px]">
                  <AiOutlineComment className="text-xl"/>
                  <p className="text-[16px] text-gray-800">{post.views}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default RecentPostComponent;
