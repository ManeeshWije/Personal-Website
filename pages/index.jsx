import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Icon } from '@iconify/react';
import { Typography, Button, Tooltip } from '@material-tailwind/react';
import portrait from '/public/assets/portrait0.jpeg';
import yosemite from '/public/assets/yosemite.jpg';
import { useEffect } from 'react';

export default function Home() {
  const scrollHalf = () => {
    window.scrollBy(0, document.body.scrollHeight / 3);
  };

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        document.body.style.setProperty(
          '--scroll',
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
  }, []);
  return (
    <>
      <Head>
        <title>Maneesh Wijewardhana</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='A personal portfolio website for Maneesh Wijewardhana that contains his projects, work experience, and more'
        />
      </Head>
      <div
        onClick={() => scrollHalf()}
        id='main'
        className='cursor-pointer'
      ></div>
      <div className='text-center flex p-12 flex-col justify-center items-center'>
        <div className='animate-in duration-2s slide-in-from-left-full fade-in-5'>
          <Image
            alt='maneesh-portrait'
            src={portrait}
            width={600}
            height={450}
            className='rounded-md'
          />
        </div>
        <div className='text-center flex justify-center flex-col items-center animate-in duration-2s slide-in-from-left-80'>
          <Typography variant='h1' className='pb-6 pt-6' color='blue-gray'>
            Hi I'm Maneesh.
          </Typography>
          <Typography
            variant='lead'
            className='md:w-7/12 sm:w-full'
            color='blue-gray'
          >
            A Computer Science student studying at the University of Guelph who
            is passionate about developing software and always curious to learn
            new technologies in the industry
          </Typography>
        </div>
        <div className='py-8 animate-in duration-2s slide-in-from-right-full'>
          <Link href='/contact'>
            <Button color='blue-gray' className='animate-pulse duration-2s'>
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
      <Typography
        id='tech-title'
        className='py-12 text-center animate-in fade-in-5 duration-1000'
        variant='h3'
      >
        Here are the technologies I work with 👨🏽‍💻
      </Typography>
      <div
        id='icon-container'
        className='overflow-hidden w-full p-4 text-center justify-center items-center content-center flex flex-row flex-wrap'
      >
        <div
          id='icons'
          className='animate-in slide-in-from-right-full duration-700 w-6/12 p-4 flex flex-row flex-wrap float-right justify-center items-center gap-5'
        >
          <Tooltip content='JavaScript'>
            <a>
              <Icon width={75} icon='logos:javascript' />
            </a>
          </Tooltip>
          <Tooltip content='HTML5'>
            <a>
              <Icon width={75} icon='vscode-icons:file-type-html' />
            </a>
          </Tooltip>
          <Tooltip content='CSS3'>
            <a>
              <Icon width={75} icon='vscode-icons:file-type-css' />
            </a>
          </Tooltip>
          <Tooltip content='React.js'>
            <a>
              <Icon width={75} icon='logos:react' />
            </a>
          </Tooltip>
          <Tooltip content='Next.js'>
            <a>
              <Icon width={75} icon='logos:nextjs' />
            </a>
          </Tooltip>
          <Tooltip content='Node.js'>
            <a>
              <Icon width={100} icon='logos:nodejs' />
            </a>
          </Tooltip>
          <Tooltip content='Express.js'>
            <a>
              <Icon width={100} icon='logos:express' />
            </a>
          </Tooltip>
          <Tooltip content='jQuery'>
            <a>
              <Icon width={100} icon='mdi:jquery' />
            </a>
          </Tooltip>
          <Tooltip content='Three.js'>
            <a>
              <Icon width={75} icon='logos:threejs' />
            </a>
          </Tooltip>
          <Tooltip content='Socket.io'>
            <a>
              <Icon width={75} icon='logos:socket-io' />
            </a>
          </Tooltip>
          <Tooltip content='Python'>
            <a>
              <Icon width={75} icon='logos:python' />
            </a>
          </Tooltip>
          <Tooltip content='Java'>
            <a>
              <Icon width={75} icon='logos:java' />
            </a>
          </Tooltip>
          <Tooltip content='C'>
            <a>
              <Icon width={75} icon='logos:c' />
            </a>
          </Tooltip>
          <Tooltip content='MySQL'>
            <a>
              <Icon width={75} icon='logos:mysql' />
            </a>
          </Tooltip>
          <Tooltip content='Bash'>
            <a>
              <Icon width={75} icon='codicon:terminal-bash' />
            </a>
          </Tooltip>
          <Tooltip content='Lua'>
            <a>
              <Icon width={75} icon='logos:lua' />
            </a>
          </Tooltip>
          <Tooltip content='Selenium'>
            <a>
              <Icon width={75} icon='logos:selenium' />
            </a>
          </Tooltip>
          <Tooltip content='Bootstrap'>
            <a>
              <Icon width={75} icon='logos:bootstrap' />
            </a>
          </Tooltip>
          <Tooltip content='Tailwind'>
            <a>
              <Icon width={75} icon='logos:tailwindcss-icon' />
            </a>
          </Tooltip>
          <Tooltip content='Git'>
            <a>
              <Icon width={75} icon='logos:git-icon' />
            </a>
          </Tooltip>
          <Tooltip content='Docker'>
            <a>
              <Icon width={75} icon='logos:docker-icon' />
            </a>
          </Tooltip>
          <Tooltip content='Jenkins'>
            <a>
              <Icon width={75} icon='logos:jenkins' />
            </a>
          </Tooltip>
          <Tooltip content='Google Cloud Platform'>
            <a>
              <Icon width={75} icon='logos:google-cloud' />
            </a>
          </Tooltip>
          <Tooltip content='MongoDB'>
            <a>
              <Icon width={50} icon='logos:mongodb-icon' />
            </a>
          </Tooltip>
          <Tooltip content='Neovim'>
            <a>
              <Icon width={100} icon='logos:neovim' />
            </a>
          </Tooltip>
          <Tooltip content='Postman'>
            <a>
              <Icon width={75} icon='logos:postman-icon' />
            </a>
          </Tooltip>
        </div>
        <Typography
          id='tech'
          className='w-5/12 animate-in slide-in-from-right-full duration-700'
          variant='lead'
        >
          I started my journey learning C which taught me a lot about the
          fundamentals of programming, low-level computing, and allowed me to
          have an appreciation for higher-level languages. These days, however,
          I often work with a lot of different web technologies which lets me
          develop my software ideas quickly, relatively efficiently, and be able
          to enjoy the process. I also love polishing up my algorithmic and
          problem-solving abilities in Python
        </Typography>
      </div>

      <Typography
        id='hobby-title'
        className='py-10 text-center animate-in fade-in-5 duration-700'
        variant='h3'
      >
        And a fun fact about me 🧗🏽
      </Typography>
      <div className='w-full p-4 text-center justify-center items-center content-center flex flex-row flex-wrap'>
        <Typography
          id='hobby'
          className='px-4 w-5/12 animate-in slide-in-from-left-full duration-500'
          variant='lead'
        >
          Apart from programming, I also like to stay active by going climbing.
          Whether it's a crag in the area or the local gym, I participate in all
          of it, however, as of now, I mainly focus on bouldering. I've been
          bouldering for around 6 months now and some PB's of mine are V5 (6C+)
          indoors with outdoors coming soon.{' '}
          <b>
            (gyms are relative so grades don't really paint the full picture).
          </b>{' '}
          Overall, I greatly enjoy the problem-solving aspect of figuring out a
          route and being able to push myself physically is an added bonus
        </Typography>
        <div
          id='yosemite'
          className='animate-in slide-in-from-left-full duration-500 w-5/12 p-4 flex flex-row flex-wrap float-right justify-center items-center'
        >
          <Image
            src={yosemite}
            alt='yosemite-boulder'
            width={600}
            height={400}
            className='max-w-full h-auto rounded-md'
          />
          <p>Midnight Lightning, Yosemite</p>
        </div>
      </div>
    </>
  );
}
