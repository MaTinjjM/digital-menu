import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function Headerlogo() {
    return(
        <div id='T-H' className="flex justify-between mt-2 content-normal	">
        <h1 className="order-2 text-xl text-center mt-2  text-white">نیلا فود</h1>
        <button onClick={"#"} className='order-1'>
          <FontAwesomeIcon icon={faCartShopping} onClick={'#'} className='mt-2 w-4 h-4 p-2 text-white bg-[#4D4D4D] hover:text-black border rounded-full border-[#4D4D4D]' />
        </button>
        <button className='order-3 w-10 h-10 mt-1' onClick="">
           <img src="http://menutik.ir/panel/storeImage/18/18_1287461600.png" />
        </button>
        </div>
    )
}