import {BsFillMoonStarsFill} from 'react-icons/bs';

const Navigation = () => {
  return (
    <nav className='py-10 flex justify-between'>
        <h1 className='text-xl font-burtons'>PORTFOLOI</h1>

        <ul className='flex items-center'>
            <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
            </li>
            <li>
                <a className='bg-gradient-to-tr from-cyan-500 to-teal-500 
                text-white 
                px-4 
                py-2 
                ml-4
                rounded-2xl' href="#"
                >
                  Resume
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation