import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function PicItems(props) {
    return(
            <div className='relative p-3 rounded-xl mt-6'>
                 <span>
                  <img src={props?.Source} alt="Food" className='relative w-full h-[24rem] blur-[0.2px] rounded-xl'></img>
                 </span>
                 <div className="">
                      <div className='absolute top-[18rem] py-14 lg:px-[16.75rem] px-[12.2rem] rounded-xl bg-gradient-to-b from-[#2a2a2a00] via-[#2d3b50] to-[#304058]'></div>
                      <h1 className="absolute top-[17rem] right-[2rem] text-white font-bold text-lg">{props?.Name}</h1>
                      <h1 className="absolute top-[19rem] right-[2rem] text-[#A4A6AA] font-bold text-base">{props?.Desc}</h1>
                      <h1 className="absolute top-[22rem] right-[2rem] text-white font-bold text-lg ">{props?.Price}
                        <span className="text-[#ffffff] absolute top-1 mr-2 font-normal text-sm">تومان </span>
                      </h1>
                 </div>
                 <button onClick={"#"} className='absolute top-[18rem] left-[2rem]'>
                    <FontAwesomeIcon icon={faPlus} onClick={'#'} className='text-white text-sm bg-[#f44336] rounded-xl p-3 mt-14 ' />
                 </button>
          </div>
            
            
    )
}