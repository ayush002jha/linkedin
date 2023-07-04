import Image from "next/image";
import NavLinks from "./NavLinks";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

function Navbar() {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
        <div className="">
          <Image
            src="/logo.svg"
            alt="LinkedIn Logo"
            width={144}
            height={40}
            priority />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <NavLinks Icon={NewspaperIcon} text="Articles" />
            <NavLinks Icon={PeopleIcon} text="People" />
            <NavLinks Icon={OndemandVideoIcon} text="Learning" />
            <NavLinks Icon={BusinessCenterIcon} text="Jobs" />
          </div>
          <div className="pl-4">
          <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-2 transition-all hover:border-2">Sign in</button>
          </div>
        </div>

      </header>
      
    </div>
  )
}

export default Navbar