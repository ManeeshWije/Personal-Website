import { Typography } from '@material-tailwind/react';
import tulipLogo from '../assets/tulip-logo.png';

const Tulip: React.FC = () => {
    return (
        <>
            <div className='text-[#ddc7a1] animate-in slide-in-from-left-20 duration-700 p-5 pt-8 flex flex-col justify-center items-center'>
                <a href='https://www.tulip.com'>
                    <img src={tulipLogo} width={150} height={50} alt='tulip-retail-logo' />
                </a>
                <i>Summer 2023</i>
                <div className='py-80'></div>
            </div>
        </>
    );
};

export default Tulip;
