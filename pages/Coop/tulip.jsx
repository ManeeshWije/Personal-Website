import Image from 'next/image';
import Head from 'next/head';
import { Typography } from '@material-tailwind/react';
import tulip from '/public/assets/tulip.png';

export default function Tulip() {
    return (
        <>
            <Head>
                <title>Tulip</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <meta
                    name='description'
                    content='Co-op experience at Tulip Retail by Maneesh Wijewardhana'
                />
                <meta name='darkreader-lock' content='' />
            </Head>
            <div className='text-[#ddc7a1] animate-in slide-in-from-left-20 duration-700 p-5 pt-8 flex flex-col justify-center items-center'>
                <a href='https://www.tulip.com'>
                    <Image src={tulip} width={150} height={50} alt='ncr-logo' />
                </a>
                <i>Summer 2023</i>
                <div className='py-80'></div>
            </div>
        </>
    );
}
