"use client"
import React from 'react'
import { BsFillStarFill } from "react-icons/bs";
export default function TestMonialCard({elm}) {
    const {reviewName,reviewPara,reviewImg,reviewComeFromimg,reviewUserName}=elm
    console.log(elm,"sss")
  return (
    <div className="Reviw mt-5  ">
    <div className="review-box relative border-2 border-[#FFD115] px-2 py-3 md:p-6  min-h-[320px] rounded-lg shadow-lg bg-white">
     <div className="absolute -top-5 border p-3 rounded-full w-10 bg-[#F0F5F8]">
     <img src="/img/left-quote.png" alt="reviews " className="w-[100%]   " />
     </div>
      <div className="review-conten flex flex-col gap-5 md:gap-4">
        <h2 className="text-lg md:text-2xl font-bold text-gray-800">{reviewName}</h2>
        <div className="flex gap-2 text-[#FFD115]">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
        </div>
        <p className="text-gray-600 md:text-lg leading-relaxed">
          {reviewPara}
        </p>
        <div className="py-[0.5px] bg-slate-300"></div>
        <div>
          <div className="reviewUserDetails flex gap-4 items-center">
            <figure className="w-16 h-16">
              <img
                src={reviewImg}
                alt="user review"
                className="rounded-full object-cover"
              />
            </figure>
            <div className="flex flex-col">
              <h3 className="capitalize font-semibold text-gray-800">{reviewUserName}</h3>
              <p className="text-sm text-gray-500">Senior Instructor, KnowledgeHut</p>
            </div>
            <img className="w-8 ml-auto" src={reviewComeFromimg} alt="reviews" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
