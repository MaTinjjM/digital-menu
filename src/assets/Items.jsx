import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function Items(props) {
    return(
            <div className='relative flex flex-nowrap mx-4  p-3 rounded-xl bg-[#282828] mt-6'>
                 <span>
                  <img src={props?.Source} className='flex me-2 w-24 h-24 rounded-xl'></img>
                 </span>
                 <div className="flex flex-col mt-1 ml-28 mr-2">
                      <h1 className="text-white font-bold text-lg">{props?.Name}</h1>
                      <h1 className="text-[#757575] font-bold text-base">{props?.Desc}</h1>
                      <h1 className="text-white font-bold text-lg ">{props?.Price}
                        <span className="text-[#6A717E] mr-3 font-bold text-sm">تومان </span>
                      </h1>
                 </div>
                 <button onClick={"#"} className='absolute buttom-0 left-4'>
                    <FontAwesomeIcon icon={faPlus} onClick={'#'} className='text-white text-sm bg-[#f44336] rounded-xl p-3 mt-14 ' />
                 </button>
            </div>
            
    )
}