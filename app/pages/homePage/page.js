import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import "tailwindcss/tailwind.css";
import Header from "@/app/components/header.js";
import Logos from "@/app/components/logo";

export default function Page() {
  return (
    <>
      {/*พี่บูม*/}
      <Header />
      <div className="flex-col  text-center justify-center items-center w-full h-screen bg-[#f7f3f3] mt-3">
        <div className="text-[61px] p-6" style={montserrat.style}>
          The place where <br />
          you get{" "}
          <a style={montserrat.style} className="text-[#F48FB1]">
            that{" "}
          </a>{" "}
          job
        </div>
        <div className="my-4" style={montserrat.style}>
          With our Machine Learning algorithm you will get that job <br />
          in no time. We promise you! Just give us the money and we <br />
          will take care of it.
          <br />
          <button
            style={montserrat.style}
            className="inline-block border-pink-300 border border-solid p-2 my-4 rounded-xl text-white bg-[#F48FB1] hover:bg-[#efabbf]   active:bg-[#d66d90]"
          >
            CREATE AN ACCOUNT NOW
          </button>
        </div>
        <div className="inline-block ">
          <Image src="/images/humen-group.png" width={833} height={833} />
        </div>
      </div>
      {/*ปิ๊ง */}
      <div className="w-full">
        <div className="w-full h-27 flex flex-row">
          <div className="flex flex-col justify-items-center items-center bg-[#BF5F82] text-[#FFFFFF] w-7/12 py-8 px-4">
            <p className="text-5xl mb-8  w-[580px]  ">Find your next job</p>
            <p className="text-2xl w-[580px] ">
              Our Machine learning algorithm is so good that it's
              <br /> even illegal in some countries. Join us to use our
              <br /> barelly legal algorithm that is actually a group of <br />
              interns that work on our basement.
              <br />
              <br />
              We have a job for you, no matter your background or
              <br /> previous experience. Is sending random memes
              <br /> through chat your only skill? That's ok, we got you,
              <br /> our Rock Star Meme Curator role is here for you.
            </p>
          </div>
          <div className="w-[560px] h-[472px] pl-28 pr-[113px] py-[115px] bg-white justify-center items-center inline-flex relative">
            <img
              className="absolute z-10 left-[150px] top-[120px]"
              src="/images/picture/Magnascope.png"
              width={241}
              height={242}
              alt="Magnascope"
            />
            <img
              className="absolute z-1 left-[350px] top-[120px]"
              src="/images/picture/File.png"
              width={129}
              height={140}
              alt="File"
            />
          </div>
        </div>

        <div className="w-full px-48 py-16 flex-col justify-start items-center gap-[26px] inline-flex bg-[#E1E2E1]">
          <p className="my-4 text-center text-pink-500 text-5xl font-normal">
            Meet the team
          </p>
          <div className=" flex  flex-row justify-around">
            <div className="mx-2 my-8">
              <img
                src="/images/picture/ruby-ramirez.png"
                width={180}
                height={180}
                alt="Ruby Ramirez"
              />
              <p className="my-8 text-center text-black text-2xl font-normal font-['Montserrat']">
                Ruby Ramirez
              </p>
              <Logos />
            </div>
            <div className="mx-2 my-8">
              <img
                src="/images/picture/javier -escribano.png"
                width={180}
                height={180}
                alt="Javier Escribano"
              />
              <p className="my-8 text-center text-black text-2xl font-normal font-['Montserrat']">
                Javier Escribano
              </p>
              <Logos />
            </div>
            <div className="mx-2 my-8">
              <img
                src="/images/picture/francisca-reategui.png"
                width={180}
                height={180}
                alt="Francisca Reategui"
              />
              <p className="my-8 text-center text-black text-2xl font-normal font-['Montserrat']">
                Francisca Reategui
              </p>
              <Logos />
            </div>
            <div className="mx-2 my-8">
              <img
                src="/images/picture/raul-rubina.png"
                width={180}
                height={180}
                alt="Raul Rubina"
              />
              <p className="my-8 text-center text-black text-2xl font-normal font-['Montserrat']">
                Raul Rubina
              </p>
              <Logos />
            </div>
          </div>
        </div>
        <div />
        <div />
        <div className="bg-[#E1E2E1] h-[80px] ">
          <p className="text-center py-5 border-t-2 border-[#BF5F82]">
            © 2021 - Get That Job
          </p>
        </div>
      </div>
    </>
  );
}
