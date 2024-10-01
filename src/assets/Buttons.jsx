export function Buttons(props) {
    return(
            <div className='flex flex-nowrap items-center justify-between content-normal flex-shrink-0'>
                <a href='#' target='_blank' className='flex ml-3 shadow-xl shadow-[#212230] text-white text-xs items-center gap-0 p-3 rounded-lg bg-[#4D4D4D]'>
                 <span>
                  <img src={props?.Source} className='me-2 w-8 h-8 '></img>
                 </span>
                 {props?.Text}

                </a> 
            </div>
    )
}