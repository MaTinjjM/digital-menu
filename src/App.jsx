import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <body>
    <div id='Main' className="bg-[#232323] font-IYME">
        <div className="flex items-center justify-center h-screen">
            <div className="h-full w-full lg:w-1/3 bg-[#be9999]">
               <div id='header' className='mt-2 mx-14 px-5'>
                    <div className="flex justify-between mt-2 content-normal	">
                        <h1 className="order-2 text-xl text-center aviny text-white">نیلا فود</h1>
                        <img className='order-1 ' src="http://menutik.ir/panel/storeImage/18/18_1287461600.png" alt='Error' width={35} height={32}></img>
                        <FontAwesomeIcon icon={faCartShopping} className='order-3 w-35 h-35 p-2 text-white hover:text-black border rounded-full border-white' />
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
