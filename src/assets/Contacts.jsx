export function Contacts(props) {
    return(
            <div className='flex flex-nowrap items-center justify-between content-normal flex-shrink-0'>
                <a href='#' target='_blank' className='flex items-center gap-0 py-0 pl-2 rounded-3xl bg-gradient-to-r from-[#2A2A2A] via-[#808080] to-[#ffffff]'>
                 <span>
                  <img src={props?.Source} className='me-2 w-8 h-8 rounded '></img>
                 </span>
                 {props?.Text}

                </a> 
            </div>
    )
}