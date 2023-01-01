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
          Currently a student studying Computer Science at the University of
          Guelph. As of now, I'm well versed in languages such as JavaScript,
          Python, Java, and C, but also frameworks/libraries such as Node.js,
          Express.js, React.js, and many more. To see what I'm currently working
          on and other past projects, you can check out my projects page or my
          Github. Have a question? Contact me through email, LinkedIn, or the
          form on this website.
        </Typography>
      </div>
    </>
  );
}
