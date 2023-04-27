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
                    window.pageYOffset /
                        (document.body.offsetHeight - window.innerHeight)
                );
            },
            false
        );
    }, []);
    return (
        <>
            <Head>
                <title>Home</title>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <meta name='darkreader-lock' content='' />
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
            <div className='p-24 justify-center text-center items-center flex flex-col animate-in duration-1000 slide-in-from-left-80 fade-in-5'>
                <Image
                    alt='maneesh-portrait'
                    className='rounded-lg transition'
                    src={portrait}
                    priority
                    width={500}
                    height={400}
                />
                <div className='text-center flex justify-center flex-col items-center animate-in duration-2s slide-in-from-left-80'>
                    <Typography
                        variant='h1'
                        className='pb-6 pt-6 text-[#d3869b]'
                    >
                        Hi I'm Maneesh.
                    </Typography>
                    <Typography
                        variant='lead'
                        className='md:w-7/12 sm:w-full text-[#ddc7a1]'
                    >
                        A Computer Science student studying at the University of
                        Guelph who is passionate about developing software and
                        always curious to learn new technologies in the
                        industry.
                    </Typography>
                </div>
                <div className='py-8 animate-in duration-2s slide-in-from-right-full'>
                    <Link href='mailto:m.mwije1@gmail.com'>
                        <Button
                            id='main-btn'
                            aria-label='contact-me'
                            className='animate-pulse duration-2s'
                            variant='outlined'
                        >
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>
            <Typography
                id='tech-title'
                className='py-12 text-center animate-in fade-in-5 duration-1000 text-[#d3869b]'
                variant='h3'
            >
                Here are the technologies I work with 👨🏽‍💻
            </Typography>
            <div
                id='icon-container'
                className='overflow-hidden w-full p-4 text-center justify-center items-center content-center flex flex-row flex-wrap text-[#ddc7a1]'
            >
                <div
                    id='icons'
                    className='animate-in slide-in-from-right-full duration-700 w-6/12 p-4 flex flex-row flex-wrap float-right justify-center items-center gap-5 text-[#ddc7a1]'
                >
                    <Tooltip content='JavaScript'>
                        <a>
                            <Icon
                                width={75}
                                icon='teenyicons:javascript-outline'
                            />
                        </a>
                    </Tooltip>
                    <Tooltip content='HTML5'>
                        <a>
                            <Icon width={75} icon='teenyicons:html5-outline' />
                        </a>
                    </Tooltip>
                    <Tooltip content='CSS3'>
                        <a>
                            <Icon width={75} icon='teenyicons:css3-outline' />
                        </a>
                    </Tooltip>
                    <Tooltip content='React.js'>
                        <a>
                            <Icon width={75} icon='teenyicons:react-outline' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Next.js'>
                        <a>
                            <Icon width={75} icon='teenyicons:nextjs-outline' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Node.js'>
                        <a>
                            <Icon width={100} icon='mdi:nodejs' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Express.js'>
                        <a>
                            <Icon width={70} icon='simple-icons:express' />
                        </a>
                    </Tooltip>
                    <Tooltip content='jQuery'>
                        <a>
                            <Icon width={70} icon='mdi:jquery' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Three.js'>
                        <a>
                            <Icon width={75} icon='tabler:brand-threejs' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Socket.io'>
                        <a>
                            <Icon width={75} icon='simple-icons:socketdotio' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Python'>
                        <a>
                            <Icon width={75} icon='teenyicons:python-outline' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Java'>
                        <a>
                            <Icon width={80} icon='mdi:language-java' />
                        </a>
                    </Tooltip>
                    <Tooltip content='C'>
                        <a>
                            <Icon width={75} icon='mdi:language-c' />
                        </a>
                    </Tooltip>
                    <Tooltip content='MySQL'>
                        <a>
                            <Icon width={75} icon='simple-icons:mysql' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Bash'>
                        <a>
                            <Icon width={75} icon='codicon:terminal-bash' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Lua'>
                        <a>
                            <Icon width={75} icon='simple-icons:lua' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Selenium'>
                        <a>
                            <Icon width={70} icon='simple-icons:selenium' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Bootstrap'>
                        <a>
                            <Icon width={75} icon='simple-icons:bootstrap' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Tailwind'>
                        <a>
                            <Icon width={75} icon='simple-icons:tailwindcss' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Git'>
                        <a>
                            <Icon width={75} icon='simple-icons:git' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Docker'>
                        <a>
                            <Icon width={75} icon='simple-icons:docker' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Jenkins'>
                        <a>
                            <Icon width={75} icon='simple-icons:jenkins' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Google Cloud Platform'>
                        <a>
                            <Icon width={75} icon='mdi:google-cloud' />
                        </a>
                    </Tooltip>
                    <Tooltip content='MongoDB'>
                        <a>
                            <Icon width={70} icon='simple-icons:mongodb' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Neovim'>
                        <a>
                            <Icon width={70} icon='simple-icons:neovim' />
                        </a>
                    </Tooltip>
                    <Tooltip content='Postman'>
                        <a>
                            <Icon width={70} icon='simple-icons:postman' />
                        </a>
                    </Tooltip>
                </div>
                <Typography
                    id='tech'
                    className='w-5/12 animate-in slide-in-from-right-full duration-700'
                    variant='lead'
                >
                    I started my journey learning C which taught me a lot about
                    the fundamentals of programming, low-level computing, and
                    allowed me to have an appreciation for higher-level
                    languages. These days, however, I often work with a lot of
                    different web technologies and frameworks which lets me
                    develop my software ideas as full applications. In addition
                    to this, I have experience working with certain DevOps tools
                    from my past internships which include Kubernetes, GCP,
                    Jenkins, and more. I also enjoy polishing up my algorithmic
                    and problem-solving abilities whether this be in the annual
                    Advent of Code or other code katas.
                </Typography>
            </div>

            <Typography
                id='hobby-title'
                className='py-10 text-center animate-in fade-in-5 duration-700 text-[#d3869b]'
                variant='h3'
            >
                And a fun fact about me 🧗🏽
            </Typography>
            <div className='w-full p-4 text-center justify-center items-center content-center flex flex-row flex-wrap'>
                <Typography
                    id='hobby'
                    className='px-4 w-5/12 animate-in slide-in-from-left-full duration-500 text-[#ddc7a1]'
                    variant='lead'
                >
                    Apart from programming, I also love to stay active by going
                    climbing whether it's a crag in the area or the local gym.
                    As of now, I mainly focus on bouldering and I've been doing
                    it for around 9 months with my PB being V6 (7a). Overall, I
                    greatly enjoy the problem-solving aspect of figuring out a
                    boulder problem and being able to push myself physically is
                    an added bonus.
                </Typography>
                <div
                    id='yosemite'
                    className='animate-in slide-in-from-left-full duration-500 w-5/12 p-4 flex flex-col flex-wrap float-right justify-center items-center'
                >
                    <Image
                        src={yosemite}
                        alt='yosemite-boulder'
                        width='600px'
                        height='400px'
                        className='max-w-full h-auto rounded-md'
                        priority
                    />
                    <p className='text-[#ddc7a1]'>
                        Midnight Lightning, Yosemite
                    </p>
                    <a
                        className='text-[#d3869b]'
                        href='https://gripped.com/news/tom-herbert-51-sends-midnight-lightning-v8-in-yosemite/'
                    >
                        Credits
                    </a>
                </div>
            </div>
        </>
    );
}
