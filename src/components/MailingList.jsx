import Button from "./Button";

const MailingList = ({ data }) => {
  return (
    <>
      <div className="w-[501px] p-[24px] bg-[#f2f2f1] border-2 border-gray-800 rounded-xl flex flex-col justify-center items-start">
        <h2 className="mt-[12px] text-[25px] text-gray-800 font-bold">Join With Us!</h2>
        <h4 className="mt-[12px] text-[20px] text-gray-600">Keep up to date on web dev.</h4>
        <div className="relative mt-[24px] flex justify-end items-center">
            <input className="w-[453px] h-[56px] py-[20px] px-[16px] bg-white rounded-lg border-2 border-gray-800" type="email" placeholder="Enter your email"/>
            <Button className={`absolute text-gray-800 text-[16px] font-bold w-[100px] h-[40px] border-2 border-gray-800 rounded-lg flex justify-center items-center -translate-x-[16px] hover:bg-gray-800 hover:text-white transition`} name={`subsBttn`} children={'Subscribe'}/>
        </div>
      </div>
    </>
  );
};

export default MailingList;
