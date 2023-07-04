import Image from "next/image"
import homeImg from "../../public/home.png"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


async function Welcome({providers,signIn}) {

  return (
    <main className="flex flex-col justify-center xl:flex-row items-center max-w-screen-lg mx-auto ">
    {console.log(providers)}
        <div className="space-y-6 xl:space-y-10 xl:min-w-[390px] xl:!ml-[70px] pt-16 px-12 xl:px-0">
        <h1 className="text-3xl md:text-5xl text-amber-900/80 !leading-snug pl-4 xl:pl-0">Welcome to your professional community!</h1>
        <div className="bullet">
            <h2 className="pr-2 text-gray-700 text-xl">Explore collaborative articles</h2>
            <DoubleArrowIcon className="text-gray-800"/>
        </div>
        <div className="bullet">
            <h2 className="pr-2 text-gray-700 text-xl">Find the right job</h2>
            <DoubleArrowIcon className="text-gray-800"/>
        </div>
        <div className="bullet">
            <h2 className="pr-2 text-gray-700 text-xl">Post your job for millions</h2>
            <DoubleArrowIcon className="text-gray-800"/>
 
        </div>
        {
                /* With the help of Object.values we can have arrays of object in this case! */
                Object.values(providers).map((provider)=>(
                    <button key={provider.id} className="flex border font-semibold rounded-full px-5 py-4 border-gray-700 hover:border-2" onClick={()=>signIn(provider.id,{callbackUrl:"/dashboard"})}><Image className="mr-2" src="/google.png" height={25} width={25} />Sign in with Google</button>
                ))
            }
        </div>
        <div className="pl-4 min-w-full ">
            <Image src={homeImg} priority/>
        </div>
    </main>
  )
}

export default Welcome

