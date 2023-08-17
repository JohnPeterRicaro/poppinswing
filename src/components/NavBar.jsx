import navBarData from "@/data/NavBarData";
import Button from "./Button";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="w-full border-b-2 border-nav-stroke">
        <nav className="w-[1440px] h-[92px] px-[32px] py-[28px] mx-auto flex justify-between items-center">
          <div className="h-full flex justify-center items-center gap-[42px]">
            <Link
              href="/"
              className="w-[90px] h-[42px] bg-no-repeat bg-contain bg-logo-light-mode text-gray-800"
            />
            <div className="-translate-y-[5px] h-full flex justify-center items-center text-[16px] font-bold gap-[24px]">
              {navBarData.map((link) => (
                <>
                  <Link href={link.directory} key={link.key}>
                    {link.title}
                  </Link>
                </>
              ))}
            </div>
          </div>
          <div className="h-full flex justify-start items-center gap-[44.5px]">
            <Button
              children={`Log In`}
              name={`logInBttn`}
              className={`text-[16px] font-bold text-gray-900 border-b-2 border-gray-900 border-opacity-0 hover:border-opacity-100 transition`}
            />
            <Button
              children={`Sign Up`}
              mame={`signUpBttn`}
              className={`h-[40px] w-[103px] text-[16px] font-bold text-gray-50 bg-gray-800 rounded-[8px] hover:bg-gray-100 hover:text-gray-900 transition`}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
