import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import ncr from "../../public/assets/ncr-logo.png";
import Footer from "../footer";

export default function Ncr() {
  return (
    <>
      <div className="animate-in slide-in-from-left-20 duration-700 p-5 pt-8 flex flex-col justify-center items-center">
        <a href="https://www.ncr.com/">
          <Image src={ncr} width={189} height={60} alt="ncr-logo" />
        </a>
        <i>Fall 2022</i>
        <section className="p-4">
          <Typography variant="lead">
            Incoming Software Developer for Fall 2022
          </Typography>
        </section>
        <div className="m-72"></div>
      </div>
      <Footer />
    </>
  );
}
