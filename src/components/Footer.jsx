import MailingList from "./MailingList";

const Footer = () => {
  return (
    <>
      <div className="mt-[56px] w-full border-t-2 border-gray-900">
        <div className="w-[1440px] h-[400px] p-[64px] mx-auto flex justify-between items-start">
          <a
            href="/"
            className="w-[135px] h-[48px] bg-no-repeat bg-contain bg-logo-light-mode text-gray-800"
          />
          <div className="flex flex-col justify-start items-start gap-[24px]">
            <h3 className="text-[20px] font-bold">About Us</h3>
            <div className=" text-gray-900 text-[16px] flex flex-col justify-start items-start gap-[24px]">
              <a href="/">About Poppin' Swing</a>
              <a href="/">Careers</a>
              <a href="/">Legal</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Cookie Policy</a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-[24px]">
            <h3 className="text-[20px] font-bold">Contact Us</h3>
            <div className=" text-gray-900 text-[16px] flex justify-center items-center gap-[24px]">
              <a href="/">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5 0.5H1.5C0.946875 0.5 0.5 0.946875 0.5 1.5V24.5C0.5 25.0531 0.946875 25.5 1.5 25.5H24.5C25.0531 25.5 25.5 25.0531 25.5 24.5V1.5C25.5 0.946875 25.0531 0.5 24.5 0.5ZM21.6125 7.79688H19.6156C18.05 7.79688 17.7469 8.54062 17.7469 9.63437V12.0437H21.4844L20.9969 15.8156H17.7469V25.5H13.85V15.8188H10.5906V12.0437H13.85V9.2625C13.85 6.03437 15.8219 4.275 18.7031 4.275C20.0844 4.275 21.2688 4.37813 21.6156 4.425V7.79688H21.6125Z"
                    fill="#121420"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="27"
                  height="22"
                  viewBox="0 0 27 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.0002 2.94689C26.0439 3.35939 25.0033 3.65626 23.9314 3.77189C25.0443 3.11075 25.8777 2.06626 26.2752 0.834388C25.2309 1.4556 24.0869 1.89121 22.8939 2.12189C22.3953 1.58885 21.7923 1.1642 21.1224 0.874411C20.4525 0.584623 19.7301 0.435901 19.0002 0.437513C16.0471 0.437513 13.6721 2.83126 13.6721 5.76876C13.6721 6.18126 13.7221 6.59376 13.8033 6.99064C9.38144 6.75939 5.4377 4.64689 2.81582 1.41251C2.33809 2.2285 2.08774 3.15759 2.09082 4.10314C2.09082 5.95314 3.03144 7.58439 4.46582 8.54376C3.62052 8.51047 2.79502 8.27813 2.05645 7.86564V7.93126C2.05645 10.5219 3.8877 12.6688 6.32832 13.1625C5.87007 13.2815 5.39865 13.3424 4.9252 13.3438C4.57832 13.3438 4.25019 13.3094 3.91894 13.2625C4.59394 15.375 6.55957 16.9094 8.90019 16.9594C7.06894 18.3938 4.7752 19.2375 2.28457 19.2375C1.8377 19.2375 1.4252 19.2219 0.99707 19.1719C3.35957 20.6875 6.16269 21.5625 9.18144 21.5625C18.9814 21.5625 24.3439 13.4438 24.3439 6.39689C24.3439 6.16564 24.3439 5.93439 24.3283 5.70314C25.3658 4.94376 26.2752 4.00314 27.0002 2.94689Z"
                    fill="#121420"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4156 3.25313C27.2562 2.65949 26.9437 2.11814 26.5094 1.68324C26.075 1.24834 25.5341 0.935141 24.9406 0.775C22.7562 0.1875 14 0.1875 14 0.1875C14 0.1875 5.24375 0.1875 3.05937 0.771875C2.46569 0.931497 1.92445 1.24452 1.49002 1.6795C1.05558 2.11448 0.743248 2.65611 0.584375 3.25C-1.19209e-07 5.4375 0 10 0 10C0 10 -1.19209e-07 14.5625 0.584375 16.7469C0.90625 17.9531 1.85625 18.9031 3.05937 19.225C5.24375 19.8125 14 19.8125 14 19.8125C14 19.8125 22.7562 19.8125 24.9406 19.225C26.1469 18.9031 27.0938 17.9531 27.4156 16.7469C28 14.5625 28 10 28 10C28 10 28 5.4375 27.4156 3.25313ZM11.2188 14.1875V5.8125L18.4688 9.96875L11.2188 14.1875Z"
                    fill="#121420"
                  />
                </svg>
              </a>
            </div>
          </div>
          <MailingList />
        </div>
      </div>
    </>
  );
};

export default Footer;
