import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
import "tailwindcss/tailwind.css";
import Header from "../components/header.js";

export default function Page() {
  return (
    <>
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
    </>
  );
}
