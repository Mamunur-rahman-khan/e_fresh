
import './App.css'
import Container from './componentes/Container'
import Flex from './componentes/Flex'
import Image from './componentes/Image'
import Logo from '../src/assets/logo.png'
import BannerImg from '../src/assets/bannerImage.png'
import BannerImg2 from '../src/assets/banner2.png'
import Coll1 from '../src/assets/collection1.png'
import Coll2 from '../src/assets/collection2.png'
import Coll3 from '../src/assets/collection3.png'
import CounterImage1 from '../src/assets/counterImage1.png'
import CounterImage2 from '../src/assets/counterImage2.png'
import Shop1 from '../src/assets/shop1.png'
import Shop2 from '../src/assets/shop2.png'
import Menu from './componentes/Menu'
import Button from './componentes/Button'
import Heading from './componentes/Heading'
import { FaStar } from "react-icons/fa";


function App() {

  return (
    <>
    {/* Header part start */}
      <div className="bg-headerBg py-4">
        <Container>
          <Flex>
            <div className="w-[10%] pt-2">
              <Image imgSrc={Logo}/>
            </div>
            <div className="w-[70%] pt-4">
              <Flex className={'justify-center gap-x-14 ml-20'}>
                <Menu menuName={'Men'}/>
                <Menu menuName={'Woman'}/>
                <Menu menuName={'Kids'}/>
                <Menu menuName={'Collection'}/>
                <Menu menuName={'Trends'}/>
              </Flex>
            </div>
            <div className="w-[20%]">
              <Button btnName={'Login'} className={'py-[0.938rem] px-[1.875rem] drop-shadow-lg mr-2 border rounded-2xl border-btnBdr hover:bg-btnHover hover:rounded-2xl'}/>
              <Button btnName={'Sign up'} className={'py-[0.938rem] px-[0.938rem] drop-shadow-lg border rounded-2xl border-btnBdr hover:bg-btnHover hover:rounded-xl'}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header part end */}

      {/* Banner part start */}
      <div className='bg-headerBg py-[115px]'>
        <Container>
          <Flex>
            <div className="w-1/2">
            <Heading as={'h1'} text={'Find The Best Fashion Style For You'} className={'mr-[114px] font-pop font-semibold text-[64px]'}/>
            <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '} className={'pt-[5px] pb-[78px] mr-[120px] font-pop text-[22px]'}/>

            <Button btnName={'SHOP NOW'} className={'py-[30px] px-[90px] rounded-xl bg-black text-white'}/>
            </div>
            <div className="w-1/2">
            <Image imgSrc={BannerImg} className={'ml-24 relative z-10'}/>
            <Image imgSrc={BannerImg2} className={'absolute top-[622px] left-[942px]'}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Banner part end */}
      
      {/* Collection part Start */}
      <div className='py-28'>
        <Container>
          <Heading as={"h2"} text={"New Collection"} className={"text-center text-[64px] font-frank font-bold pt-[150px] pb-[110px]"}/>
          <Flex className={"justify-between"}>
            <div className="w-[350px] rounded-lg relative">
              <Image imgSrc={Coll1}/>
              <Button btnName={"Sweater"} className={"bg-white font-normal rounded-2xl absolute bottom-11 left-1/2 -translate-x-1/2 py-3 px-24"}/>
            </div>
            <div className="w-[350px] rounded-lg relative">
              <Image imgSrc={Coll2}/>
              <Button btnName={"Jeans"} className={"bg-white font-normal rounded-2xl absolute bottom-11 left-1/2 -translate-x-1/2 py-3 px-24"}/>
            </div>
            <div className="w-[350px] rounded-lg relative">
              <Image imgSrc={Coll3}/>
              <Button btnName={"Baskets"} className={"bg-white font-normal rounded-2xl absolute bottom-11 left-1/2 -translate-x-1/2 py-3 px-24"}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Collection part End */}

      {/* Counter part start */}
      <div className="py-40 relative">
      <Container>
        <Flex className={"justify-between"}>
          <div className="w-1/2">
            <Image imgSrc={CounterImage1}/>
            {/* <Image imgSrc={CounterImage2} className={"absolute bottom- right-1/3"}/> */}
          </div>
          <div className="w-1/2 pl-36">
            <Heading as={'h1'} text={'Best Fashion Since 2010'} className={'font-frank font-bold text-[64px]'}/>
            <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '} className={'py-12 mr-[120px] font-pop font-semibold text-[22px]'}/>
          </div>
        </Flex>
        <div className="w-[793px] bg-counterColor rounded-xl p-16 text-center absolute -bottom-[40px] right-[310px] -z-10">
          <Flex className={"justify-between"}>
            <div className="w-1/3 border-r-2 border-black">
              <Heading as={"h3"} text={"2010"} className={"font-podkova font-bold text-[64px]"}/>
              <Heading as={"h4"} text={"Founded"} className={"font-pop font-medium text-[28px]"}/>
            </div>
            <div className="w-1/3 border-r-2 border-black">
              <Heading as={"h3"} text={"5000+"} className={"font-podkova font-bold text-[64px]"}/>
              <Heading as={"h4"} text={"Product Sold"} className={"font-pop font-medium text-[28px]"}/>
            </div>
            <div className="w-1/3">
              <Heading as={"h3"} text={"4500+"} className={"font-podkova font-bold text-[64px]"}/>
              <Heading as={"h4"} text={"Best Reviews"} className={"font-pop font-medium text-[28px]"}/>
            </div>
          </Flex>
        </div>
      </Container>
      </div>
      {/* Counter part start */}

      {/* Shop part start */}
      <div className="py-20 mt-[200px] bg-shopBg">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-1/3">
              <Heading as={'h1'} text={'Best Seller Product'} className={'font-frank font-bold text-[64px] leading-tight text-white'}/>
              <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.'} className={'font-frank font-bold text-2xl mt-8 text-white'}/>

              <Button btnName={'Learn MORE'} className={'font-pop font-semibold text-2xl capitalize py-5 px-16 mt-20 text-white bg-black rounded-lg transition ease-in duration-500 hover:bg-btnColor hover:text-black'}/>
            </div>
            <div className="w-1/3 mx-3">
              <Image imgSrc={Shop1} className={"w-full"}/>
              <div className="bg-white px-4 py-3">
                <Flex>
                  <FaStar className={"text-starColor"}/>
                  <FaStar className={"text-starColor"}/>
                  <FaStar className={"text-starColor"}/>
                  <FaStar className={"text-starColor"}/>
                  <FaStar className={"text-starColor"}/>
                </Flex>
                <Heading as={"h3"} text={"Sweater Shirt"} className={"font-pop font-semibold text-[22px] py-1"}/>
                <Flex>
                  <Heading as={"p"} text={"$45.99"} className={"font-pop font-regular text-2xl text-gray-300"}/>
                  <Heading as={"p"} text={"$35.99"} className={"font-pop font-regular text-2xl ml-10"}/>
                </Flex>
              </div>
            </div>
            <div className="w-1/3 ml-4">
              <Image imgSrc={Shop2} className={"w-full"}/>
              <div className="bg-white px-4 py-3">
                <Flex>
                  <FaStar className={"text-starColor"}/>
                  <FaStar className={"text-starColor"}/>
                  <FaStar className={"text-starColor"}/>
                  <FaStar className={"text-starColor"}/>
                  <FaStar className={"text-starColor"}/>
                </Flex>
                <Heading as={"h3"} text={"Pants fashion"} className={"font-pop font-semibold text-[22px] py-1"}/>
                <Flex>
                  <Heading as={"p"} text={"$55"} className={"font-pop font-regular text-2xl text-gray-300"}/>
                  <Heading as={"p"} text={"$44.99"} className={"font-pop font-regular text-2xl ml-10"}/>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Shop part start */}
    </>
  )
}

export default App
