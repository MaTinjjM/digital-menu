import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <body>
    <div id='Main' dir='rtl' className="bg-[#232323] font-IYME">
        <div className="flex items-center justify-center h-screen">
            <div className="h-full w-full lg:w-1/3 bg-[#232323]">
               <div id='header' className='mt-2 mx-14 px-5'>
                    <div id='T-H' className="flex justify-between mt-2 content-normal	">
                        <h1 className="order-2 text-xl text-center aviny text-white">نیلا فود</h1>
                        <button onClick={"#"} className='order-1'>
                          <FontAwesomeIcon icon={faCartShopping} onClick={'#'} className='button w-4 h-4 p-2 text-white bg-[#4D4D4D] hover:text-black border rounded-full border-[#4D4D4D]' />
                        </button>
                        <button className='order-3 w-10 h-10' onClick="#">
                           <img src="http://menutik.ir/panel/storeImage/18/18_1287461600.png" />
                        </button>
                    </div>
                    <div className='mt-4 flex flex-nowrap items-center justify-between'>
                       <a href='#' target='_blank' className='btn flex items-center gap-2 py-1 pl-4 rounded-3xl bg-gradient-to-r from-[#2A2A2A] via-[#808080] to-[#ffffff]'>
                         <span>
                           <img src='https://mt2.ir/assets/images/instagramlogo.png' className='me-2 w-5 h-8 rounded '></img>
                         </span>
                         صفحه اینستاگرام
                       </a> 
                       <a href='#' target='_blank' className='btn flex items-center gap-2 py-1 pl-4 rounded-3xl bg-gradient-to-r from-[#2A2A2A] via-[#808080] to-[#ffffff]'>
                         <span>
                           <img src='https://mt2.ir/assets/images/phone.png' className='me-2 w-5 h-8 rounded '></img>
                         </span>
                         09026718543
                       </a> 
                    </div>
                </div> 
            </div>
        </div>
    </div>
</body>
    </>
  )
}

export default App
