import PostComponent from "./PostComponent";

const RecentPost = () => {
  return (
    <>
      <div className="mt-[40px] w-full h-auto flex flex-wrap justify-center items-center gap-[40px]">
        <PostComponent />
      </div>
    </>
  );
};

export default RecentPost;
