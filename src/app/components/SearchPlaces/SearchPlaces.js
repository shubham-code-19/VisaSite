"use client";

import Link from "next/link";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import seaarchData from "./SearachPlacesData";
import SearchPlaceCard from "./SearchPlaceCard";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import Image from "next/image";







export default function SearchPlaces() {
  // const [loadMore, setLoadMore] = useState(8);
  const[flagsData,setFlagsData]=useState()
  const [ApiData,setApiData]=useState()

  const [filterCard,setFilterCard]= useState(seaarchData)
  const [cardbtnFilter,setCardbtnFilter]=useState("")

  const [inpuValue,setInpuValue]=useState("")
  const[searchCounty,setSearchCounty]=useState(true)
const fetchflagData=async ()=>{
  const res=await axios.get("https://api.countrystatecity.in/v1/countries",{
    headers:{
      
        'X-CSCAPI-KEY': 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
      }
  })

  console.log('My country',res.data)
  setApiData(res.data)
  // setApiData(re)
  // console.log(res.data)
}
useEffect(()=>{
  if(cardbtnFilter.toLowerCase()=="all"){
    setFilterCard(seaarchData)
  }
  else if(cardbtnFilter){
       const filterCard=seaarchData.filter((elm)=>{
        return elm.visa.toLowerCase().trim()==cardbtnFilter.toLowerCase().trim()
       })
       setFilterCard(filterCard)
  }
  else{
    setFilterCard(seaarchData)  
  }
    
},[cardbtnFilter])

useEffect(()=>{
  fetchflagData()
 
},[])

useEffect(()=>{
  let filterData=ApiData&& ApiData.filter((elm)=>{
    return elm.name.toLowerCase().includes(inpuValue.toLowerCase())
  })
  setFlagsData(filterData)
  console.log(filterData)
},[ inpuValue])

  const cardBtns = [
    "All",
    "Popular",
    "Visa in a Week",
    "Easy Visa",
    "Schengen Visa",
    "Visa Free",
    "Free Season",
  ];


  function countryCodeToEmoj(countryCode) {
    // Ensure the countryCode is in uppercase and has exactly 2 characters
 
    
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => char.charCodeAt(0) + 127397);
  
      console.log(String.fromCodePoint(...codePoints))
    return String.fromCodePoint(...codePoints);
  }


  countryCodeToEmoj('IN')
  

  return (
    <div className="SearchPlace bg-[#E7F4F6] mt-10 py-10 overflow-hidden">
      <div className="px-3 md:px-10 lg:px-20 py-2">
        <div className="navigation-links-parent  flex justify-between flex-col items-center gap-5  lg:flex-row ">
         <div className="w-full xl:w-[30%] relative flex flex-col ">
           <div className="w-full  z-40   text-black bg-white py-2 flex items-center gap-5 rounded-full px-5 shadow-md">
            <label htmlFor="searchPlace">
              <GiAirplaneDeparture className="text-[#E96525] text-xl " />
            </label>
            <input
              className="w-[100%] h-full border-0 outline-none"
              value={inpuValue}
              onChange={(e)=>{setInpuValue(e.target.value)}}
              maxLength="30"
              id="searchPlace"
              type="text"
              placeholder="Where to, captain?"
              autoComplete="off"
            />
            <label
              htmlFor="searchPlace"
              className="bg-[#E96525] p-3 rounded-full text-white"
            >
              <IoSearch className="" />
            </label>
          </div>
         {inpuValue && searchCounty && flagsData&&<div className={`SearchReasult absolute z-20  w-full  flex flex-col gap-1   bg-white rounded rounded-tl-2xl rounded-tr-2xl ${flagsData.length && "pt-20 pb-5"} `}>
            {flagsData.map((elm)=>{
              return(
                <>
                {console.log(elm)}
                <div onClick={()=>{setInpuValue(elm.name), setSearchCounty(false)}} className="flex justify-between px-5 hover:bg-zinc-100 py-3 duration-150">

                <span>{elm.emoji}</span>
                 
                  {elm.name}
                 {/* <img src={elm.emoji} width={200} height={400} className="w-40 h-40" /> */}
                </div>
                </>
              )
            })}
             
          </div>
         } 
         </div>
          <div className="card-navigation-btns w-[80%] lg:w-[60%] xl:w-[60%] ">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                310: {
                  slidesPerView: 2,
                },
                420: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1199: {
                  slidesPerView: 6,
                },
              }}
              className="mySwiper"
            >
              {cardBtns.map((elm, index) => (
                <SwiperSlide 
                  onClick={()=>{setCardbtnFilter(elm)}}
                  key={index}
                  className="bg-white cursor-pointer w-[150px] text-center rounded-3xl py-2 text-xs text-zinc-600 capitalize shadow-sm hover:bg-zinc-100 transition"
                >
                  <button >{elm}</button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="cards-parent">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 py-10">

            {filterCard.map((elm, index) => {
              return  (
                <SearchPlaceCard key={elm.id} cardElment={elm} />
              )   
             
            })}
          </div>

          {/* <div className="flex gap-5 justify-center">
            <div
              onClick={() => setLoadMore(loadMore + 8)}
              className="cursor-pointer flex justify-center items-center text-base"
            >
              <h6>Load More</h6>
              <MdKeyboardArrowDown />
            </div>
            {loadMore >= 16 && (
              <div
                onClick={() => setLoadMore(loadMore - 8)}
                className="cursor-pointer flex justify-center items-center text-base"
              >
                <h6>Load Less</h6>
                <MdKeyboardArrowDown className="rotate-180" />
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
