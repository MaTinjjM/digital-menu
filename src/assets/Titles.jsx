export function Titles(props) {
    return(
            <div id={props?.ID} className="flex justify-center mt-10">
                <h1 className="order-2 text-white font-bold mx-1">{props?.Titel}</h1>
                <img className="order-1 h-5 w-5 mt-1" src="https://mt2.ir/assets/images/catagories/symbol50.png"></img>
                <img className="order-3 h-5 w-5 mt-1"  src="https://mt2.ir/assets/images/catagories/symbol50.png"></img>
            </div>
    )
}
