import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import reduction from "../public/assets/reduction.jpg";
import pokedex from "../public/assets/pokedex.png";
import tasker from "../public/assets/todo-list.png";
import gochat from "../public/assets/real-time-chat.png";
import twitterBot from "../public/assets/twitter_like_bot.png";
import personal from "../public/assets/personal-blog.png";

export default function Projects() {
  return (
    <div className="animate-in fade-in-10 duration-1000 flex flex-col justify-center flex-wrap gap-x-9 gap-y-20 py-12 md:flex-row">
      <Card className="w-96 drop-shadow-md">
        <CardHeader className="relative h-56">
          <Image
            src="https://media.giphy.com/media/n53ayMhbbkn2QHZSfA/giphy.gif"
            alt="solar-gif"
            width={480}
            height={310}
            className="h-full w-full rounded-lg"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Solar
          </Typography>
          <Typography color="blue-gray">
            This application roughly simulates our solar system with relative
            values that can be scaled and also displays important information
            about each planet. The purpose of it was to familiarize myself with
            3D objects, animations, texture mapping, and camera views/controls.
            I was able to use the Three.js library, React functional components
            for the UI, and The Solar System OpenData API to retrieve
            information. This project can be expanded in the future for more
            celestial bodies as well as more information about them.
          </Typography>
        </CardBody>
        <CardFooter className="flex flex-row absolute bottom-0">
          <Typography variant="paragraph" color="black" className="mt-64 pt-24">
            <Button size="sm">
              <a href="https://maneeshwije.github.io/Solar/">View</a>
            </Button>
          </Typography>
          <Typography
            variant="paragraph"
            color="black"
            className="ml-52 mt-64 pt-24"
          >
            <Button size="sm">
              <a href="https://github.com/ManeeshWije/Solar">Github</a>
            </Button>
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-96 drop-shadow-md">
        <CardHeader className="relative h-56">
          <Image
            src={reduction}
            width={1280}
            height={810}
            alt="reduction"
            className="h-full w-full rounded-lg"
          />
        </CardHeader>
        <CardBody className="text-center p-8">
          <Typography color="blue-gray" variant="h5" className="mb-2">
            Reduction
          </Typography>
          <Typography color="blue-gray">
            A minimal new tab chrome extension built with JavaScript and
            HTML/CSS. I learned a lot about API's and how to send requests to
            them since I had to retrieve information from the Unsplash API,
            Quotable API and Darksky API. I was able to parse all of this
            information in a pleasing manner for the user as well. This was also
            my first time making any chrome extension and so working with this
            environment was a good experience for me and will allow me to easily
            make more extensions in the future.
          </Typography>
        </CardBody>
        <CardFooter className="flex flex-row absolute bottom-0">
          <Typography variant="paragraph" color="black" className="mt-64 pt-24">
            <Button size="sm">
              <a href="https://chrome.google.com/webstore/detail/reduction/jphgbbmchajohadnmdifemndmbjfpjdj">
                View
              </a>
            </Button>
          </Typography>
          <Typography
            variant="paragraph"
            color="black"
            className="ml-52 mt-64 pt-24"
          >
            <Button size="sm">
              <a href="https://github.com/ManeeshWije/Reduction">Github</a>
            </Button>
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-96 drop-shadow-md">
        <CardHeader className="relative h-56">
          <Image
            src={pokedex}
            width={1182}
            height={750}
            alt="pokedex"
            className="h-full w-full rounded-lg"
          />
        </CardHeader>
        <CardBody className="text-center py-8">
          <Typography color="blue-gray" variant="h5" className="mb-2">
            Pokedex
          </Typography>
          <Typography color="blue-gray">
            This is a MERN application that utilizes the PokeAPI in order to get
            random Pokemon to save into my database. Using my database, I show
            crucial stats about each Pokemon and allow users to add a Pokemon to
            their Pokedex. In the Pokedex section, users are able to see all of
            their selected Pokemon in a concise manner and also have the ability
            to remove Pokemon. Building this app allowed me to learn more about
            saving data from an API into my own database and how to create
            routes in React for different pages.
          </Typography>
        </CardBody>
        <CardFooter className="flex flex-row absolute bottom-0">
          <Typography variant="paragraph" color="black" className="mt-64 pt-24">
            <Button size="sm">
              <a href="https://maneeshs-pokedex.netlify.app">View</a>
            </Button>
          </Typography>
          <Typography
            variant="paragraph"
            color="black"
            className="mt-64 pt-24 ml-52"
          >
            <Button size="sm">
              <a href="https://github.com/ManeeshWije/pokedex">Github</a>
            </Button>
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-96 drop-shadow-md">
        <CardHeader className="relative h-56">
          <Image
            src={tasker}
            width={821}
            height={948}
            alt="tasker"
            className="h-full w-full rounded-lg"
          />
        </CardHeader>
        <CardBody className="text-center py-8">
          <Typography color="blue-gray" variant="h5" className="mb-2">
            Tasker
          </Typography>
          <Typography color="blue-gray">
            This todo list app was built using the MERN stack and allowed me to
            work with a database and react for the first time. Throughout this
            experience, I learned a lot about how databases worked and how to
            set up an express server that can manipulate my dataset. I store all
            of my todo's in a MongoDB database and created endpoints to perform
            most CRUD capabilities all while developing a clean front-end to
            call onto my API.
          </Typography>
        </CardBody>
        <CardFooter className="flex flex-row absolute bottom-0">
          <Typography variant="paragraph" color="black" className="mt-64 pt-28">
            <Button size="sm">
              <a href="https://maneeshs-tasker.netlify.app/">View</a>
            </Button>
          </Typography>
          <Typography
            variant="paragraph"
            color="black"
            className="mt-64 pt-28 ml-52"
          >
            <Button size="sm">
              <a href="https://github.com/ManeeshWije/Tasker">Github</a>
            </Button>
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-96 drop-shadow-md">
        <CardHeader className="relative h-56">
          <Image
            src={gochat}
            width={1235}
            height={900}
            alt="GoChat"
            className="h-full w-full rounded-lg"
          />
        </CardHeader>
        <CardBody className="text-center py-8">
          <Typography color="blue-gray" variant="h5" className="mb-2">
            GoChat
          </Typography>
          <Typography color="blue-gray">
            This real-time chat app was built using tools/languages such as
            Socket.io, Express.js, Node.js, HTML, and some simple styling using
            CSS. This project allowed me to learn more about how websockets
            truly work for real time capabilities. Along with this, I was able
            to deploy this onto Render as a web app so other users can join in.
            In order to do this, I had to learn Express.js so I could properly
            send requests to my server.
          </Typography>
        </CardBody>
        <CardFooter className="flex flex-row absolute bottom-0">
          <Typography variant="paragraph" color="black" className="mt-64 pt-24">
            <Button size="sm">
              <a href="https://gochat.up.railway.app/">View</a>
            </Button>
          </Typography>
          <Typography
            variant="paragraph"
            color="black"
            className="mt-64 pt-24 ml-52"
          >
            <Button size="sm">
              <a href="https://github.com/ManeeshWije/GoChat">Github</a>
            </Button>
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-96 drop-shadow-md">
        <CardHeader className="relative h-56">
          <Image
            src={twitterBot}
            width={1920}
            height={1250}
            alt="twitter-like-bot"
            className="h-full w-full rounded-lg"
          />
        </CardHeader>
        <CardBody className="text-center py-8">
          <Typography color="blue-gray" variant="h5" className="mb-2">
            Twitter Like Bot
          </Typography>
          <Typography color="blue-gray">
            This bot is built with Python and more specifically, uses the
            library Selenium WebDriver which is the backbone of all the
            automation. The bot will open your browser, log into your Twitter
            account, and then will start liking tweets based on the keyword
            inputted into the program. It does this by selecting certain DOM
            elements and manipulating their contents. Overall, I learned more
            about how automation works in the browser as well as scripting in
            Python.
          </Typography>
        </CardBody>
        <CardFooter className="flex flex-row absolute bottom-0">
          <Typography variant="paragraph" color="black" className="mt-80">
            <Button size="sm">
              <a href="https://github.com/ManeeshWije/twitterLikeBot">Github</a>
            </Button>
          </Typography>
        </CardFooter>
      </Card>
      <Card className="w-96 drop-shadow-md">
        <CardHeader className="relative h-56">
          <Image
            src={personal}
            width={1614}
            height={950}
            alt="personal-website"
            className="h-full w-full rounded-lg"
          />
        </CardHeader>
        <CardBody className="text-center py-8">
          <Typography color="blue-gray" variant="h5" className="mb-2">
            Personal Website
          </Typography>
          <Typography color="blue-gray">
            This very website is something that is always in progress. Built
            with Next.js and Tailwind, I am able to document my progress in the
            industry as well as share some of my projects at the same time.
          </Typography>
        </CardBody>
        <CardFooter className="flex flex-row absolute bottom-0">
          <Typography variant="paragraph" color="black" className="mt-44">
            <Button size="sm">
              <a href="https://github.com/ManeeshWije/Personal-Website">
                Github
              </a>
            </Button>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
