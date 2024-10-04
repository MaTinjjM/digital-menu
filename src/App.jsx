import { Headerlogo } from './assets/Headerlogo'
import { Contacts } from './assets/Contacts'
import { Buttons } from './assets/Buttons'
import { Titles } from './assets/Titles'
import { Items } from './assets/Items'
import { PicItems } from './assets/Picitems'
import { Footer } from './assets/Footer'

function App() {
  return (
    <>
<body className='bg-[#232323] h-fit'>
    <div id='Main' dir='rtl' className=" font-sans ">
        <div className="flex items-center justify-center">
            <div className="w-[35rem] lg:w-[35rem] ">
               <div id='header' className='mt-2 mx-4'>
                    <Headerlogo/>
                    <div className='mt-4 flex flex-nowrap items-center justify-between'>
                    <Contacts Text="صفحه اینستاگرام" Source="https://mt2.ir/assets/images/instagramlogo.png"/>
                    <Contacts Text="44444444" Source="https://mt2.ir/assets/images/phone.png"/>
                    </div>
                </div> 
                <div id='Sort' className='flex flex-row items-center mx-4 mt-14'>
                    <Buttons Bookmark="#C1" Text="خوراک" Source="http://menutik.ir/panel/storeImage/18/5/category/18_952454325.png" />
                    <Buttons Bookmark="#C2" Text="سالاد ها " Source="http://menutik.ir/panel/storeImage/18/5/category/18_708506862.png" />
                    <Buttons Bookmark="#C3" Text="غذای اصلی" Source="http://menutik.ir/panel/storeImage/18/5/category/18_1015704951.png" />
                </div>
                <div id='main-menu'>
                    <Titles Bookmark="C1" Titel="خوراک"/>
                    <Items Name="ترشه بادمجان" Desc="خوراک بادمجان ویژه" Price="85,000" Source="http://menutik.ir/panel/storeImage/18/5/18_261810300.jpg"/>
                    <Titles Bookmark="C2" Titel="سالادها"/>
                    <PicItems Name="سالاد خاص" Desc="کاهو ، سیب زمینی ، گوجه طعم دار شده ، خیار ، گردو شور" Price="65,000" Source="https://menutik.ir/panel/storeImage/18/5/18_1992519922.jpg"/>
                    <Items Name="ترشه بادمجان" Desc="خوراک بادمجان ویژه" Price="85,000" Source="http://menutik.ir/panel/storeImage/18/5/18_261810300.jpg"/>
                    <Titles Bookmark="C3" Titel="غذای اصلی"/>
                    <Items Name="ترشه بادمجان" Desc="خوراک بادمجان ویژه" Price="85,000" Source="http://menutik.ir/panel/storeImage/18/5/18_261810300.jpg"/>
                    <Items Name="ترشه بادمجان" Desc="خوراک بادمجان ویژه" Price="85,000" Source="http://menutik.ir/panel/storeImage/18/5/18_261810300.jpg"/>

                </div>
                <div className='mt-[11rem]'>
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
</body>
    </>
  )
}
export default App
