import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCartShopping, faHome, faPersonRifle, faPhone, faPhoneAlt, faPhoneSquare, faUser, faUserAlt, faUserAltSlash, faUserCheck, faUserCircle, faUserCog, faUserFriends, faUserLarge, faUserMd, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from '@fortawesome/free-solid-svg-icons/faPerson';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons/faUserDoctor';

export function Footer(props) {
    return(
        <div className='fixed bottom-0 bg-black'>
                <div id='Right-Footer' className=' absolute bottom-0 md:bottom-[10rem] lg:bottom-0 right-[0.3rem] lg:right-[-0.1rem]' >
                   <div className='flex rounded-tr-xl text-[#B7B9C8] bg-[#232323] lg:py-[0.5rem] px-[1.0rem] lg:px-[3.4rem] shadow-[rgba(40,40,40,1)_0px_0px_10px_7px]'>
                      <button onClick={"#"} className=''>
                         <FontAwesomeIcon icon={faHome} onClick={'#'} className='mt-2 w-6 h-6 p-5  hover:text-red-500' />
                      </button>
                       <button onClick={"#"} className=''>
                         <FontAwesomeIcon icon={faUser} onClick={'#'} className='mt-2 w-6 h-6 p-5  hover:text-red-500' />
                      </button>
                   </div>
                </div>

                <div id='Left-Footer' className='absolute bottom-0 lg:bottom-0 right-[15rem] lg:right-[19.2rem] '>
                    <div className='flex bg-[#232323] rounded-tl-xl lg:py-[0.5rem] px-[1.2rem] lg:px-[3.8rem] text-[#B7B9C8] shadow-[rgba(40,40,40,1)_0px_0px_10px_7px]'>
                       <button onClick={"#"} className=''>
                         <FontAwesomeIcon icon={faCartShopping} onClick={'#'} className='mt-2 w-6 h-6 p-5  hover:text-red-500' />
                       </button>
                       <button onClick={"#"} className=''>
                         <FontAwesomeIcon icon={faPhone} onClick={'#'} className='mt-2 w-6 h-5 p-5 hover:text-red-500' />
                       </button>
                      </div>
                </div>
                <div id='Middle' className='absolute bottom-[1.5rem] lg:bottom-[2.3rem] right-[10.9rem] lg:right-[15.2rem] mb-4 bg-red-500 rounded-2xl'>
                   <div className='absolute top-[3.8rem]  py-[2rem] left-[-1rem] lg:left-[-0.8rem] px-[3rem] lg:px-[4rem] bg-[#232323] '></div>
                   <button onClick={"#"} className='shadow-[rgba(33,34,48,0.5)_10px_50px_5px_10px]'>
                     <FontAwesomeIcon icon={faBell} onClick={'#'} className='mt-2 w-6 h-6 py-3 px-4 text-white' />
                   </button>
                </div>
        </div>
    )
}