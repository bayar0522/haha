import { link } from "fs";
import Image from "next/image";
import CodeIcon from '@mui/icons-material/Code';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Home() {
  return (

    
      <div className="w-[100vw] h-[45vh] bg-gray-900 ">
        <div className="flex justify-end items-center gap-9 my-14">
          <div className="text-[36px] font-black text-amber-50">
           <div className=" w-[35vw] flex justify-start"><CodeIcon style={{fontSize:"90px"}}/></div>

          </div>
          <div className=" border-1 rounded-full border-gray-600 p-4">

          <LocalPhoneIcon className="text-white"/>
          </div>
        <p className="text-white pr-25"> 976+7007-12345</p> 
        <div className="border-1 rounded-full border-gray-600 p-4">

        <EmailIcon className="text-white "/>
        </div>
        <p className="text-white pr-25">contact@ecommerce.mn</p>
        </div>
        <div className=" flex justify-between items-center my-14 ">
          <p className="text-white pl-25">@2024 Ecommerce MN</p>
          <div className="mr-50 ">

         <FacebookIcon className="text-white"/>
         <InstagramIcon className="text-white"/>
         <TwitterIcon className="text-white"/>
         <LinkedInIcon className="text-white"/>
          </div>

        </div>
        

      </div>
  )
}
