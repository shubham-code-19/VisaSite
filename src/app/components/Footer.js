"use client";
import Image from "next/image";
import TravelDesination from "./TravelDesination";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="Footer  bg-[#035D53] mt-32  ">
  <div className="relative -top-28">
    <TravelDesination/>
    </div>


    <div className="text-white">
      <div className=" px-5 md:px-15 lg:px-20 ">
      <Link href={"/"}>
      <figure className="w-[200px] bg-white rounded p-2">
            <img
              className="w-[100%] h-auto rounded-full object-cover"
              src="/img/travelCompanyLogo.png"
              width={200}
              height={100}
              alt="Site Logo"
            />
          </figure>
      </Link>
        <div className="flex flex-col gap-10  lg:grid  lg:grid-cols-3 mt-5 lg:justify-items-center">

          <div className="flex flex-col gap-8">
            <h6>Address</h6>
            <div>
              <h6>❤️ Bengaluru</h6>
              <p>
                BHIVE Workspace - No.112, AKR Tech Park, &ldquo; B &ldquo; and, 7th Mile Hosur
                Rd Krishna Reddy Industrial Area, Bengaluru, Karnataka 560068
              </p>
            </div>
            <div className="  bg-[#60A765]  flex gap-2 items-center w-fit px-2 py-2 rounded">
              <figure>
                <img
                  className="w-full"
                  src="/img/asset 2.svg"
                  width={120}
                  height={120}
                  alt="waitt for img"
                />
              </figure>
              <a href="" className="opacity-80 text-md">Chat with us</a>
            </div>
          </div>
         <div className="flex justify-between md:hidden">  
          <div className="flex flex-col gap-5">
            <h6>FAQs</h6>
            <h6 className="cursor-pointer">About us</h6>
            <h6>Contact us</h6>
            <h6>Blogs</h6>
          </div>
          <div className="flex flex-col gap-5">
            <h6>Privacy Policy</h6>
            <h6>Refund & cancellation policy</h6>
            <h6>Pricing</h6>
            <h6>Terms & conditions</h6>
          </div>
          </div>
          <div className="hidden md:flex flex-col gap-5">
            <h6>FAQs</h6>
            <a href="about" className="cursor-pointer">About us</a>
            <h6>Contact us</h6>
            <h6>Blogs</h6>
          </div>
          <div className="hidden md:flex flex-col gap-5">
            <h6>Privacy Policy</h6>
            <h6>Refund & cancellation policy</h6>
            <h6>Pricing</h6>
            <h6>Terms & conditions</h6>
          </div> 
        </div>
      </div>
        <hr className="mt-16" />

        <div className=" px-5 md:px-15 lg:px-20 py-10 lg:py-20 ">
        <h2 className="mb-5 text-2xl font-semibold">Read more about visas</h2>
      
        <ul
    className="flex flex-row flex-wrap gap-y-2 pb-6"
    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(10%, 1fr))" }}
  >
    <a className="shrink-0 gap-x-3" href="/country-blogs/france">
      France<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/turkey">
      Turkey<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/hongkong">
      Hong Kong<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/switzerland">
      Switzerland<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/australia">
      Australia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/united-arab-emirates">
      United Arab Emirates<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/malaysia">
      Malaysia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/japan">
      Japan<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/singapore">
      Singapore<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/indonesia">
      Indonesia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/vietnam">
      Vietnam<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/azerbaijan">
      Azerbaijan<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/united-kingdom">
      United Kingdom<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/spain">
      Spain<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/greece">
      Greece<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/united-states">
      United States<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/southkorea">
      South Korea<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/poland">
      Poland<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/germany">
      Germany<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/georgia">
      Georgia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/hungary">
      Hungary<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/finland">
      Finland<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/italy">
      Italy<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/china">
      China<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/norway">
      Norway<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/egypt">
      Egypt<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/oman">
      Oman<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/sweden">
      Sweden<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/austria">
      Austria<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/denmark">
      Denmark<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/uzbekistan">
      Uzbekistan<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/czech-republic">
      Czech Republic<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/cambodia">
      Cambodia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/morocco">
      Morocco<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/newzealand">
      New Zealand<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/bahrain">
      Bahrain<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/netherlands">
      Netherlands<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/russia">
      Russia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/philippines">
      Philippines<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/brazil">
      Brazil<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/saudi-arabia">
      Saudi Arabia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/kenya">
      Kenya<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/portugal">
      Portugal<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/belgium">
      Belgium<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/croatia">
      Croatia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/lithuania">
      Lithuania<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/ireland">
      Ireland<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/luxembourg">
      Luxembourg<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/romania">
      Romania<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/bulgaria">
      Bulgaria<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/slovakia">
      Slovakia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/latvia">
      Latvia<span className="mx-2">•</span>
    </a>
    <a className="shrink-0 gap-x-3" href="/country-blogs/estonia">
      Estonia
    </a>
  </ul>
       
    </div>
    </div>
    </div>
  );
}
