import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <div>
            <div className='text-[#ddc7a1] py-4 gap-9 flex flex-row items-center justify-center'>
                <a
                    aria-label='email'
                    href='mailto:m.mwije1@gmail.com'
                    className='hover:opacity-30 duration-300'
                >
                    <Icon width={40} icon='carbon:email' />
                </a>
                <a
                    aria-label='github'
                    href='https://github.com/ManeeshWije'
                    className='hover:opacity-30 duration-300'
                >
                    <Icon width={40} icon='mdi:github' />
                </a>
                <a
                    aria-label='linkedin'
                    href='https://www.linkedin.com/in/maneeshwije/'
                    className='hover:opacity-30 duration-300'
                >
                    <Icon width={40} icon='mdi:linkedin' />
                </a>
            </div>
            <footer className='flex flex-row justify-center relative bottom-0 left-0 p-4 rounded-lg drop-shadow-lg'>
                <span className='text-sm text-[#7c6f64] sm:text-center'>
                    Made with ❤️ by Maneesh
                </span>
            </footer>
        </div>
    );
}
