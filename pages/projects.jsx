import Image from 'next/image';
import Head from 'next/head';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import reduction from '/public/assets/reduction.png';
import pokedex from '/public/assets/pokedex.png';
import gochat from '/public/assets/real-time-chat.png';
import twitterBot from '/public/assets/twitter_like_bot.png';
import personal from '/public/assets/personal-blog.png';
import solar from '/public/assets/solar.png';
import mash from '/public/assets/mash.png';
import ctypetest from '/public/assets/ctypetest.png';
import pytoshop from '/public/assets/pytoshop.png';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Projects page for Maneesh Wijewardhana'
        />
      </Head>
      <div className='animate-in fade-in-5 duration-2s text-center p-8'>
        <Typography>
          I'm always learning new technologies/frameworks and these are some
          examples of where I apply that knowledge.
        </Typography>
      </div>
      <div className='md:overflow-hidden animate-in fade-in-5 duration-2s flex flex-col justify-center flex-wrap gap-x-9 gap-y-20 py-8 md:flex-row'>
        <Card id='card' shadow={false} className='w-96'>
          <CardHeader shadow={false} className='relative h-56'>
            <Image
              src={pytoshop}
              width={1920}
              height={1250}
              alt='pytoshop'
              className='h-full w-full rounded-lg'
              priority
            />
          </CardHeader>
          <CardBody className='text-center py-14'>
            <Typography variant='h5' color='blue-gray' className='mb-2'>
              Pytoshop
            </Typography>
            <Typography color='blue-gray'>
                This is an image processing tool that performs various operations on greyscale and RGB images all written in scratch using <b>Python</b>.
                I wanted to learn more about how image processing actually works under the hood by implementing the various algorithms used in certain operations such as Bilinear Interpolation, contrast/brightness enchancement, etc. This application is currently 
                a desktop application using <b>Tkinter</b>, but plans are put in place to also add a web interface for easier use. Currently, the toolbox can perform many spatial transformations, single pixel operations, generate and equalize histograms, apply convolution kernels, perform non-linear filtering, and even do edge detection using the Sobel kernels.
                There are many more operations I wish to add and so this project will be ongoing and is open for feedback on Github.
            </Typography>
          </CardBody>
          <CardFooter className='flex flex-row absolute bottom-0'>
            <Typography
              variant='paragraph'
              color='black'
              className='mt-64 pt-24'
            >
              <Button color='blue-gray' size='sm'>
                <a href='https://github.com/ManeeshWije/Pytoshop'>Github</a>
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card id='card' shadow={false} className='w-96'>
          <CardHeader shadow={false} className='relative h-56'>
            <Image
              src={solar}
              width={1920}
              height={1250}
              alt='solar'
              className='h-full w-full rounded-lg'
              priority
            />
          </CardHeader>
          <CardBody className='text-center py-14'>
            <Typography variant='h5' color='blue-gray' className='mb-2'>
              Solar
            </Typography>
            <Typography color='blue-gray'>
              This application roughly simulates our solar system with relative
              values that can be scaled and also displays important information
              about each planet. The purpose of it was to familiarize myself
              with 3D objects, animations, texture mapping, and camera
              views/controls. I was able to use the <b>Three.js</b> library, <b>React</b> functional components for the UI, and The Solar System OpenData
              API to retrieve information. This project can be expanded in the
              future for more celestial bodies as well as more information about
              them.
            </Typography>
          </CardBody>
          <CardFooter className='flex flex-row absolute bottom-0'>
            <Typography
              variant='paragraph'
              color='black'
              className='mt-64 pt-24'
            >
              <Button color='blue-gray' size='sm'>
                <a href='https://maneeshwije.github.io/Solar/'>View</a>
              </Button>
            </Typography>
            <Typography
              variant='paragraph'
              color='black'
              className='ml-[200px] mt-64 pt-24'
            >
              <Button color='blue-gray' size='sm'>
                <a href='https://github.com/ManeeshWije/Solar'>Github</a>
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card id='card' shadow={false} className='w-96 '>
          <CardHeader shadow={false} className='relative h-56'>
            <Image
              src={reduction}
              width={1920}
              height={1250}
              alt='reduction'
              className='h-full w-full rounded-lg'
              priority
            />
          </CardHeader>
          <CardBody className='text-center py-14'>
            <Typography color='blue-gray' variant='h5' className='mb-2'>
              Reduction
            </Typography>
            <Typography color='blue-gray'>
              A minimal new tab chrome extension built with <b>JavaScript</b> and <b>HTML/CSS</b>. I learned a lot about how API's are structured and used
              as I had to retrieve information from many of them. I was able to
              parse all of the needed information and display it in a prettified
              manner for the user. This was also my first time making any chrome
              extension so working in this environment was a good experience for
              me and will allow me to easily make more extensions in the future.
            </Typography>
          </CardBody>
          <CardFooter className='flex flex-row absolute bottom-0'>
            <Typography
              variant='paragraph'
              color='black'
              className='mt-64 pt-24'
            >
              <Button color='blue-gray' size='sm'>
                <a href='https://chrome.google.com/webstore/detail/reduction/jphgbbmchajohadnmdifemndmbjfpjdj'>
                  View
                </a>
              </Button>
            </Typography>
            <Typography
              variant='paragraph'
              color='black'
              className='ml-[200px] mt-64 pt-24'
            >
              <Button color='blue-gray' size='sm'>
                <a href='https://github.com/ManeeshWije/Reduction'>Github</a>
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card id='card' shadow={false} className='w-96 '>
          <CardHeader shadow={false} className='relative h-56'>
            <Image
              src={pokedex}
              width={1182}
              height={750}
              alt='pokedex'
              className='h-full w-full rounded-lg'
              priority
            />
          </CardHeader>
          <CardBody className='text-center py-14'>
            <Typography color='blue-gray' variant='h5' className='mb-2'>
              Pokedex
            </Typography>
            <Typography color='blue-gray'>
              This is a <b>MERN</b> application that utilizes the <b>PokeAPI</b> in order to
              get random Pokemon to save into a Pokedex based on their stats. In
              the Pokedex section, users are able to see all of their selected
              Pokemon in a concise manner and also have the ability to remove
              Pokemon. Building this app allowed me to learn more about REST API's, non-relational databases, and how to create routes in
              React.
            </Typography>
          </CardBody>
          <CardFooter className='flex flex-row absolute bottom-0'>
            <Typography
              variant='paragraph'
              color='black'
              className='mt-64 pt-24'
            >
              <Button color='blue-gray' size='sm'>
                <a href='https://maneeshs-pokedex.netlify.app'>View</a>
              </Button>
            </Typography>
            <Typography
              variant='paragraph'
              color='black'
              className='mt-64 pt-24 ml-[200px]'
            >
              <Button color='blue-gray' size='sm'>
                <a href='https://github.com/ManeeshWije/pokedex'>Github</a>
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card id='card' shadow={false} className='w-96 '>
          <CardHeader shadow={false} className='relative h-56'>
            <Image
              src={gochat}
              width={1920}
              height={1225}
              alt='GoChat'
              className='h-full w-full rounded-lg'
              priority
            />
          </CardHeader>
          <CardBody className='text-center py-14'>
            <Typography color='blue-gray' variant='h5' className='mb-2'>
              GoChat
            </Typography>
            <Typography color='blue-gray'>
              This is a real-time chat app that was built using tools/languages
              such as <b>Socket.io</b>, <b>Express.js</b>, <b>Node.js</b>, <b>HTML</b>, and some simple
              styling using <b>CSS</b>. This project allowed me to learn more about how
              websockets worked for real time capabilities. I was also able to
              deploy this onto Railway as a web app so other users can join into
              the chat room. In order to do this, I had to learn Express.js for
              the first time so I could properly send requests to my server.
            </Typography>
          </CardBody>
          <CardFooter className='flex flex-row absolute bottom-0'>
            <Typography
              variant='paragraph'
              color='black'
              className='mt-64 pt-24'
            >
              <Button color='blue-gray' size='sm'>
                <a href='https://gochat.up.railway.app/'>View</a>
              </Button>
            </Typography>
            <Typography
              variant='paragraph'
              color='black'
              className='mt-64 pt-24 ml-[200px]'
            >
              <Button color='blue-gray' size='sm'>
                <a href='https://github.com/ManeeshWije/GoChat'>Github</a>
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card id='card' shadow={false} className='w-96 '>
          <CardHeader shadow={false} className='relative h-56'>
            <Image
              src={twitterBot}
              width={1920}
              height={1250}
              alt='twitter-like-bot'
              className='h-full w-full rounded-lg'
              priority
            />
          </CardHeader>
          <CardBody className='text-center py-14'>
            <Typography color='blue-gray' variant='h5' className='mb-2'>
              Twitter Like Bot
            </Typography>
            <Typography color='blue-gray'>
              This bot is built with <b>Python</b> and more specifically, uses the
              library <b>Selenium WebDriver</b> which is the backbone of all the
              automation. The bot will open your browser, log into your Twitter
              account, and then will start liking tweets based on the keyword
              inputted into the program. It does this by selecting certain DOM
              elements and manipulating their contents. Overall, I learned more
              about how automation works in the browser as well as scripting in
              Python.
            </Typography>
          </CardBody>
          <CardFooter className='flex flex-row absolute bottom-0'>
            <Typography variant='paragraph' color='black' className='mt-80'>
              <Button color='blue-gray' size='sm'>
                <a href='https://github.com/ManeeshWije/twitterLikeBot'>
                  Github
                </a>
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card id='card' shadow={false} className='w-96 '>
          <CardHeader shadow={false} className='relative h-56'>
            <Image
              src={mash}
              width={1920}
              height={1250}
              alt='mash-project'
              className='h-full w-full rounded-lg'
              priority
            />
          </CardHeader>
          <CardBody className='text-center py-14'>
            <Typography color='blue-gray' variant='h5' className='mb-2'>
              mash
            </Typography>
            <Typography color='blue-gray'>
              A simple shell that has functionalities for common unix commands
              such as 'ls', 'cd', 'mkdir', etc. I also implemented the pipe
              command and input/output redirection using {'<'} and {'>'}. Built
              with <b>C</b>, I learned a lot about threads, forking, common signals on
              certain events, and overall how processes work within a program.
            </Typography>
          </CardBody>
          <CardFooter className='flex flex-row absolute bottom-0'>
            <Typography variant='paragraph' color='black' className='mt-44'>
              <Button color='blue-gray' size='sm'>
                <a href='https://github.com/ManeeshWije/mash'>Github</a>
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card id='card' shadow={false} className='w-96 '>
          <CardHeader shadow={false} className='relative h-56'>
            <Image
              src={ctypetest}
              width={1920}
              height={1250}
              alt='ctypetest'
              className='h-full w-full rounded-lg'
              priority
            />
          </CardHeader>
          <CardBody className='text-center py-14'>
            <Typography color='blue-gray' variant='h5' className='mb-2'>
              ctypetest
            </Typography>
            <Typography color='blue-gray'>
              A cli typing test program that allows the user to enter a text
              file and calculates the users words per minute once the prompt has
              been typed. I utilized the built in clock functions to record time
              and calculate words per minute. Stats include the gross WPM, net
              WPM, as well as overall accuracy. This was a fun project to do
              after a long time of not writing any <b>C</b> code and allowed me to
              familiarize myself with it once again.
            </Typography>
          </CardBody>
          <CardFooter className='flex flex-row absolute bottom-0'>
            <Typography variant='paragraph' color='black' className='mt-44'>
              <Button color='blue-gray' size='sm'>
                <a href='https://github.com/ManeeshWije/mash'>Github</a>
              </Button>
            </Typography>
          </CardFooter>
        </Card>
        <Card id='card' shadow={false} className='w-96 '>
          <CardHeader shadow={false} className='relative h-56'>
            <Image
              src={personal}
              width={1614}
              height={950}
              alt='personal-website'
              className='h-full w-full rounded-lg'
              priority
            />
          </CardHeader>
          <CardBody className='text-center py-14'>
            <Typography color='blue-gray' variant='h5' className='mb-2'>
              Personal Website
            </Typography>
            <Typography color='blue-gray'>
              This very website is something that is always in progress. Built
              with <b>Next.js</b> and <b>Tailwind</b>, I am able to document my progress in
              the industry as well as share some of my projects at the same
              time.
            </Typography>
          </CardBody>
          <CardFooter className='flex flex-row absolute bottom-0'>
            <Typography variant='paragraph' color='black' className='mt-44'>
              <Button color='blue-gray' size='sm'>
                <a href='https://github.com/ManeeshWije/Personal-Website'>
                  Github
                </a>
              </Button>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
