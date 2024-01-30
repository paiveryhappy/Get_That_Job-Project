import "tailwindcss/tailwind.css";
import Image from "next/image";

export default function Header() {
  return (
    <html lang="en">
      <body>
        <div className="w-full  flex justify-around shadow-lg shadow-gray-300">
          <Image
            src="/images/get-that-job.png"
            width={160}
            height={30}
            className="p-2 mr-68"
          />
          <div className="flex ml-72 ">
            <div className="mx-2 my-2 p-1">
              <Image
                src="/images/signup.png"
                width={127}
                height={55}
                className="hover:bg-[#eabfcd] rounded-xl active:bg-[#F48FB1] "
              />
            </div>
            <div className="mx-2 my-2 p-1">
              <Image
                src="/images/login.png"
                height={40}
                width={112}
                className="hover:bg-[#eabfcd] rounded-xl active:bg-[#F48FB1] "
              />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
