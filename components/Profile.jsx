import deved from '../public/dev-ed-wave.png';
import Image from 'next/image';

const Profile = props => {
  return (
    <div className='relative 
        mx-auto
        bg-gradient-to-b from-teal-500 
        rounded-full
        w-80
        h-80
        mt-14
        overflow-hidden
        md:h-96 
        md:w-96'
        >
        <Image src={props.imageSrc} layout='fill' objectFit='cover'/>
    </div>
  )
}

export default Profile