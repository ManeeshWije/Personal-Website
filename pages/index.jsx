import Image from 'next/image';
import { Typography } from '@material-tailwind/react';
import portrait from '../public/assets/portrait0.jpeg';

export default function Home() {
  return (
    <>
      <div className='text-center flex p-12 animate-in duration-500 slide-in-from-left-36 flex-col justify-center items-center'>
        <Image
          alt='maneesh-portrait'
          src={portrait}
          width={600}
          height={450}
          className='rounded-md'
        />
        <Typography variant='h1' className='pb-4 pt-4' color='blue-gray'>
          Hi I'm Maneesh.
        </Typography>
        <Typography
          variant='lead'
          className='md:w-7/12 sm:w-full'
          color='blue-gray'
        >
          A Computer Science student studying at the University of Guelph who is
          passionate about developing software and always curious to learn new
          technologies in the industry. Have a question? Contact me through
          LinkedIn, email, or the form on this website.
        </Typography>
      </div>
    </>
  );
}
