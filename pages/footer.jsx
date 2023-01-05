import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div>
      <div className='py-4 gap-9 flex flex-row items-center justify-center'>
        <a aria-label='email me' href='mailto:m.mwije1@gmail.com'>
          <Icon width={40} icon='carbon:email' />
        </a>
        <a aria-label='github' href='https://github.com/ManeeshWije'>
          <Icon width={40} icon='mdi:github' />
        </a>
        <a
          aria-label='linkedin'
          href='https://www.linkedin.com/in/maneeshwije/'
        >
          <Icon width={40} icon='mdi:linkedin' />
        </a>
      </div>
      <footer className='bg-white flex flex-row justify-center relative bottom-0 left-0 p-4 rounded-lg drop-shadow-lg dark:bg-gray-800'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Made with ❤️ by Maneesh
        </span>
      </footer>
    </div>
  );
}
