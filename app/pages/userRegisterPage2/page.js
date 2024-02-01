import Image from "next/image";
import "tailwindcss/tailwind.css";
import Header from "@/app/components/Header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RegisterPage2() {
  return (
    <>
      <Header />
      <div className="wrapper ml-[400px] mb-[100px] relative mt-8 ">
        <h1 className="text-[48px] mb-4 " style={montserrat.style}>
          Good choice!
        </h1>
        <h2 className="text-[20px] mb-8" style={montserrat.style}>
          Create a new account as...
        </h2>
        <div className="status-user text-[14px] flex gap-[6px] mb-[36px]">
          <div className="mr-1">
            <p style={montserrat.style}>PROFESSIONAL</p>
            <hr className="w-[112px] border-b-[1px] border-[#F48FB1] " />
          </div>
          <div>
            <p className="text-[#bdbdbd]" style={montserrat.style}>
              RECRUITER
            </p>
            <hr className="w-[83px] border-b-[1px] border-[#bdbdbd]" />
          </div>
        </div>
        <div className="status-login flex flex-row mb-5">
          <div className="first-status relative pl-[45px] ">
            <p className="text-[10px] " style={montserrat.style}>
              DONE!
            </p>
            <p className="text-[18px]" style={montserrat.style}>
              Login
            </p>
            <p className="text-[18px]" style={montserrat.style}>
              information
            </p>
            <Image
              src="/images/1black.png"
              width={35}
              height={35}
              alt="number1"
              className="absolute top-1 left-0"
            />
          </div>
          <div className="secound-status ml-[10px] relative pl-[45px]">
            <p className="text-[10px]" style={montserrat.style}>
              IN PROGRESS
            </p>
            <p className="text-[18px]" style={montserrat.style}>
              Personal
            </p>
            <p className="text-[18px]" style={montserrat.style}>
              information
            </p>
            <Image
              className="absolute top-1 left-0"
              src="/images/2pink.png"
              width={35}
              height={35}
              alt="number2 "
            />
          </div>
          <div className="thrid-status ml-[10px] relative pl-[45px]">
            <p className="text-[10px]" style={montserrat.style}>
              PENDING
            </p>
            <p className="text-[18px]" style={montserrat.style}>
              Professional
            </p>
            <p className="text-[18px]" style={montserrat.style}>
              information
            </p>
            <Image
              className="absolute top-1 left-0"
              src="/3-grey.png"
              width={35}
              height={35}
              alt="number3"
            />
          </div>
        </div>
        <div className="input-information">
          <div
            class="w-[380px] text-zinc-600 text-[10px]  uppercase tracking-wider mb-2"
            style={montserrat.style}
          >
            You can complete this information later but we reccomend you to do
            it now
          </div>
          <p style={montserrat.style}>NAME</p>
          <input
            className="w-[350px] h-[36px] rounded-lg text-sm p-2 border border-[#F48FB1] mb-2 mt-1"
            type="text"
            id="text"
            name="name"
            placeholder="John Doe"
            style={montserrat.style}
          />

          <p style={montserrat.style}>PHONE</p>
          <input
            className="w-[350px] h-[36px] rounded-lg text-sm p-2 border border-[#F48FB1] mt-1"
            type="number"
            id="number"
            name="telephone"
            placeholder="+XXXXXXXX"
            style={montserrat.style}
          />
          <div
            class="text-neutral-400 text-xs font-normal font-['Inter'] leading-none tracking-wide mt-1"
            style={montserrat.style}
          >
            +[country code][number]
          </div>
          <p style={montserrat.style} className="mt-2">
            BIRTHDATE
          </p>
          <div className="flex relative">
            <input
              className="w-[350px] h-[36px] rounded-lg text-sm p-2 border border-[#F48FB1] mt-1 "
              type="date"
              id="birthdate"
              name="birthdate"
              placeholder="Pick a date"
              style={montserrat.style}
            />
          </div>

          <p style={montserrat.style} className="mt-2">
            Linkedin url
          </p>
          <input
            className="w-[350px] h-[36px] rounded-lg text-sm p-2 border border-[#F48FB1] mt-1"
            type="text"
            id="url"
            name="linkedin"
            placeholder="https://www.linkedin.com/in/username"
            style={montserrat.style}
          />
        </div>
        <div className="w-[350px] flex   items-center justify-center ">
          <button
            type="submit"
            className="p-2 w-[100px] h-10  border border-[#F48FB1] mt-4 mx-2 rounded-2xl text-sm  "
            style={montserrat.style}
          >
            SKIP THIS!
          </button>
          <button className="p-2 w-[100px] h-10 bg-[#F48FB1] mt-4  rounded-2xl text-sm flex align-middle">
            <a
              type="submit"
              className=" w-[100px] h-10  text-white rounded-2xl text-sm ml-1 "
              style={montserrat.style}
            >
              NEXT
            </a>
            <Image
              src="/arrow-right.png"
              width={40}
              height={20}
              alt="arrow"
              className=" mr-2 mb-1 "
            />
          </button>
        </div>
        <Image
          src="/woman.png"
          width={400}
          height={400}
          alt="woman"
          className="absolute ml-[500px] top-[315px]"
        />
      </div>
    </>
  );
}
