"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { IoMdStopwatch } from "react-icons/io";
import TouritsSingleProdcutVisa from "../components/TouritsSingleProdcutVisa";
import { useState } from "react";
import SingleProductFaq from "../components/SingleProductFaq";
import visaData from "./VisaCardData"
export default function Page() {
  const [visaCardFilter, setvisaCardFilter] = useState(visaData);
  const [trouristCard,setTouristCard]=useState("all")
  useEffect(()=>{
    if(trouristCard=="all"){
      setvisaCardFilter(visaData)
    }
    else{
      const newdata= visaData.filter((info)=>{
        return info.type.toLocaleLowerCase()==trouristCard.toLowerCase()
      })
      setvisaCardFilter(newdata)
    }
  },[trouristCard])
  
  return (
    <div className="SingleProductData mt-10 md:mt-20">
      <section className="px-5 md:px-10 lg:px-32  md:my-20">
              <section className="flex flex-col items-center gap-10 md:flex-row justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl xl:text-[2.5rem] text-slate-700 font-bold text-center md:text-start">
              Get your Usa visa
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-5 ">
              <div className="flex gap-5 items-center bg-[#F16035] lg:w-fit text-white py-3 px-5 rounded-3xl">
              <div>
                <IoMdStopwatch className="text-2xl" />
              </div>
              <div className=" flex flex-col gap-2">
                <h2 className="font-bold text-md ">Get your visa by 6 Sep 2024,</h2>
                <p className="text-xs">if you apply today</p>
              </div>
              </div>

              <div className=" flex w-full  items-center justify-center md:w-fit md:flex-col xl:flex-row">
                <div className="relative mb-0 mr-2 h-6 w-14">
                  <img
                    alt="review image person 0"
                    src="/img/asset 13.png"
                    width={24}
                    height={24}
                    className="absolute top-0 h-6 w-6 rounded-full border border-whitesmoke-700 object-cover"
                  />
                  <img
                    alt="review image person 1"
                    src="/img/asset 16.png"
                    width={24}
                    height={24}
                    className="absolute top-0 h-6 w-6 rounded-full border border-whitesmoke-700 object-cover"
                    style={{ left: "18px" }}
                  />
                  <img
                    alt="review image person 2"
                    src="/img/asset 12.png"
                    width={24}
                    height={24}
                    className="absolute top-0 h-6 w-6 rounded-full border border-whitesmoke-700 object-cover"
                    style={{ left: "36px" }}
                  />
                </div>
                <p className="text-xs text-slategray-200">
                  20+ applied recently
                </p>
              </div>
            </div>
          </div>

          <section className="relative flex h-[216px] w-full flex-col self-center align-middle md:w-[30%] lg:min-w-[386px]">
            <img
              alt="Banner Image"
              src="/img/UK.webp"
              width={386}
              height={216}
              className="h-full xl:w-full rounded-lg border border-whitesmoke-700 object-cover"
            />
            
            <div className="absolute right-2 top-2 rounded-lg bg-[#F7E499] px-2 py-1 font-inter text-xs font-semibold text-[#5B4C0D]">
              Last issued 2hrs ago
            </div>
            <div className="absolute -right-4 top-20 flex w-[146px] flex-col overflow-hidden rounded-lg border border-whitesmoke-700 bg-white drop-shadow-sm">
              <img
                alt="Recommendation Image"
                src="/img/VisaMiniCard.avif"
                width={146}
                height={86}
                className="h-[86px] w-[146px] object-cover"
              />
              <p className="p-2 pb-5 text-xs font-normal text-slategray-200">
                “Applied for UK visa, had a super smooth experience with
                Teleport services.”
              </p>
            </div>
          </section>

        </section>
      </section>

      <div className=" singleCardBtns top-0 z-20 flex  w-full gap-x-5 bg-white px-5 text-gray-900 sticky md:justify-center cursor-pointer my-10">
        <div className="mx-1.5 min-w-max border-b-2 border-transparent py-4 text-sm font-medium text-slategray-200 hover:border-blue-700 hover:text-[#0747A6] sm:text-base">
          Types of Visa
        </div>
        <div className="mx-1.5 min-w-max border-b-2 border-transparent py-4 text-sm font-medium text-slategray-200 hover:border-blue-700 hover:text-[#0747A6] sm:text-base">
          Process
        </div>
        <div className="mx-1.5 min-w-max border-b-2 border-transparent py-4 text-sm font-medium text-slategray-200 hover:border-blue-700 hover:text-[#0747A6] sm:text-base">
          Document Checklist
        </div>
        <div className="mx-1.5 min-w-max border-b-2 border-transparent py-4 text-sm font-medium text-slategray-200 hover:border-blue-700 hover:text-[#0747A6] sm:text-base">
          FAQs
        </div>
      </div>

      <div className="SingleMultipleEntry">
        <div className="md:my-6 w-full grid grid-cols-2 gap-5 sm:flex justify-center gap-x-3 px-5 md:py-3 text-gray-500 SingleMultipleEntryBtnsParent">
          <button onClick={()=>setTouristCard("all")} className=
          {`min-w-max cursor-pointer rounded-lg px-6 py-2 text-sm ${ trouristCard=="all"?"bg-[#006251] text-white":"bg-[#DFDFDF] text-gray-500" }  `}>
            All
          </button>
          <button onClick={()=>setTouristCard("Tourist")} className={`min-w-max cursor-pointer rounded-lg px-6 py-2 text-sm ${ trouristCard=="Tourist"?"bg-[#006251] text-white":"bg-[#DFDFDF] text-gray-500" } `}>
            Tourist
          </button>
          <button onClick={()=>setTouristCard("Business")} className={`min-w-max cursor-pointer rounded-lg px-6 py-2 text-sm ${ trouristCard=="Business"?"bg-[#006251] text-white":"bg-[#DFDFDF] text-gray-500" }`}>
            Business
          </button>
          <button onClick={()=>setTouristCard("Study")} className={`min-w-max cursor-pointer rounded-lg px-6 py-2 text-sm ${ trouristCard=="Study"?"bg-[#006251] text-white":"bg-[#DFDFDF] text-gray-500" }`}>
            Study
          </button>
        </div>

        <div className="grid lg:grid-cols-2 justify-items-center-center md:px-10 lg:px-20 ">
         
          {visaCardFilter.map((elm,index)=>{
            return  <TouritsSingleProdcutVisa key={index} elm={elm} />
          })}
        </div>
      </div>

      {/* faq  */}
      <div className="flex flex-col mt-5 md:mt-0 md:flex-row items-center md:px-20 ">
          <div className="flex justify-center w-[60%] h-full" >
            <img src="/img/visaImg.jpg" alt="visaa" className="rounded w-[90%] h-[100%]" />
          </div>
          <div className=" w-[80%] h-[100%]">
          <SingleProductFaq />
          </div>
      </div>
      

      {/* faq end */}
    </div>
  );
}
