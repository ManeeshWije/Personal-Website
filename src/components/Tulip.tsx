import { Typography } from "@material-tailwind/react";
import tulipLogo from "../assets/tulip-logo.png";
import kitchener from "../assets/kitchener.jpeg";
import techTulip from "../assets/tech-tulip.png";
import campTulip from "../assets/camp-tulip.jpeg";

const Tulip: React.FC = () => {
    return (
        <>
            <div className="text-[#ddc7a1] animate-in slide-in-from-left-20 duration-700 p-5 pt-8 flex flex-col justify-center items-center">
                <a href="https://www.ncr.com">
                    <img src={tulipLogo} width={150} height={50} alt="tulip-retail-logo" />
                </a>
                <i className="pt-2">Summer 2023</i>
                <section>
                    <Typography className="pt-4 text-[#d3869b]" variant="h3">
                        About the Company
                    </Typography>
                    <Typography variant="lead">
                        Tulip Retail is a Canadian software company that builds products for retailers to help them run
                        their businesses. Their products include a mobile app for store associates to assist customers,
                        a point-of-sale system, and a cloud-based platform for managing omnichannel operations among
                        many others. These mobile software platforms empower leading retailers such as Mulberry, Chanel,
                        Saks Fifth Avenue, Kate Spade, Coach, and Michael Kors and in turn, help associates elevate
                        services, sell more, and provide a personalized experience. Tulip Retail was founded in 2013 and
                        is headquartered in Kitchener, Ontario.
                    </Typography>
                    <div className="pt-8"></div>
                    <figure className="p-4 float-right text-center">
                        <img src={kitchener} width={431} height={300} alt="waterloo-ontario" className="rounded-lg" />
                        <figcaption>
                            Kitchener, Ontario <br />{" "}
                            <a
                                className="text-[#d3869b]"
                                href="https://en.wikipedia.org/wiki/Kitchener,_Ontario#/media/File:Downtown_Kitchener,_Ontario_2.jpg"
                            >
                                Credits
                            </a>
                        </figcaption>
                    </figure>
                    <Typography variant="h3" className="text-[#d3869b]">
                        My Role
                    </Typography>
                    <Typography variant="lead">
                        I worked as a Software Developer Intern on the Clienteling/Connect team at Tulip. We were
                        responsible for the development of the Clienteling mobile app which is used by store associates
                        to assist customers. The app allows associates to view customer profiles, create wishlists, view
                        past purchases, and many more functions that are invaluable to store associates. My role was to
                        develop new features and fix bugs that were assigned to me by my manager but I also worked with
                        other developers on the team to design a new feature and implement it from scratch.
                    </Typography>
                    <div className="pt-8"></div>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Goals/Reflections
                    </Typography>
                    <Typography variant="lead">
                        I created 3 goals this term that revolved around learning new technologies/languages,
                        collaboration, and improving code quality/maintainability. These included:
                    </Typography>
                    <br />
                    <ul>
                        <Typography variant="lead" as="li">
                            <b>1.</b> Improve code quality and maintainability by attending code reviews, understanding
                            best practices for writing clean code, and refactoring existing code. This will allow me to
                            produce high-quality code that is easy to read and understand for other developers. I should
                            see a decrease in the number of bugs that are found in my code and recieve positive feedback
                            from other developers on my code quality.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>2.</b> Develop proficiency in a new programming language or technology. This will allow
                            me to become more marketable as a developer and be able to work on a wider range of
                            projects. I should be able to complete tasks assigned to me in this new language/technology
                            with minimal guidance from other developers. Reading documentation and working on a relevant
                            project would boost my productivity/proficiency as well.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>3.</b> Improve collaboration skills by communicating effectively with other developers,
                            product owners, and managers. This will allow me to work more efficiently and produce
                            quality work that is inline with the team's goals. I should be able to convey my ideas and
                            thoughts in a concise yet detailed manner that is easy to understand for other developers. I
                            should also be able to ask meaningful questions that will help me understand the task at
                            hand. I should see an increase in the number of tasks I complete each sprint and recieve
                            positive feedback from other developers on my communication skills.
                        </Typography>
                    </ul>
                    <div className="pt-4"></div>
                    <Typography className="font-bold" variant="h4">
                        Reflections
                    </Typography>
                    <ul>
                        <Typography variant="lead" as="li">
                            <b>1.</b> While working on a new product called Customer Capture V2, I had to develop new
                            APIs and modify existing ones in PHP. These APIs were built using an architecture of
                            controllers, interfaces, and models. I routinely wrote tests for each functionality from the
                            database level to the backend logic level. Only then did I feel satisfied and push my code
                            to be reviewed. Also, since this product was an improved version of V1, I was able to move
                            away from the old practices which were outdated and hard to iterate on and focus on current
                            best practices. One of these was with regards to web technologies where I utilized UI
                            frameworks such as React and TypeScript which allowed for fast iteration, easy to understand
                            code, and a product that was polished and ready for demo'ing. Along with this, I utilized a
                            framework called Vitest in order to write unit tests on the frontend which ensured UI
                            correctness and helped me catch bugs early on.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>2.</b> I developed proficiency in PHP and the Symfony backend framework during this work
                            term. At the start, I was able to fix small backend bugs which dove me straight into
                            different codebases written in PHP. After taking on the Customer Capture V2 task, I had to
                            write more PHP code for our backend except in this case, from scratch instead of editing
                            already existing code. This allowed me to understand a lot of standard PHP functions and
                            since we used Symfony as our backend web framework, I was easily able to relate it to what I
                            already knew from side projects which were Next.js and Express.js and this allowed me to
                            become efficient with it quicker.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>3.</b> During my work term, I attended frequent retrospectives on past build cycles and
                            contributed to what we did wrong, what we should continue doing, and any other shoutouts we
                            had for each other. It allowed me to connect with my team better and understand where
                            everyone's headspace was at. Also, when working on a new feature, I made sure to communicate
                            with my manager about what I was doing, if I got stuck at any point, and also set up
                            sessions for us to pair program. Pair programming allowed iteration on our new feature to be
                            faster and allowed my manager and I to plan out how long each task would take and better
                            understand which ones to assign to us. Lastly, I took initiative during the developement of
                            Customer Capture V2 by demo'ing the product to managers and customer success teams in order
                            to gather feedback from it which in-turn, allowed me me to improve my presentation skills.
                        </Typography>
                    </ul>
                </section>
                <div className="pt-8"></div>
                <section>
                    <figure className="p-4 float-right text-center">
                        <img
                            src={techTulip}
                            width={350}
                            height={350}
                            alt="technologies-used-ncr"
                            className="rounded-lg"
                        />
                        <figcaption>Technologies Used</figcaption>
                    </figure>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Highlights
                    </Typography>
                    <Typography variant="lead">
                        After a few weeks of working at Tulip, I was assigned a task to work on a new product called
                        Customer Capture V2. It was a new and improved version of Customer Capture V1 which was form
                        builder that allowed store associates to create forms for customers to fill out. The problem
                        with V1 was the amount of effort it took to maintain forms for every one of our clients. Since
                        certain clients want to know different information about their customers, the developers had to
                        manually change the corresponding form for the client when an issue arose or when a new feature
                        was requested. Along with this, it was built using outdated technologies which made it difficult
                        to work on. My manager and I were tasked to build a new version using React and TypeScript which
                        would allow for fast iteration, easy to understand code, and a product that was more polished.
                        The main goal however, was to create a modular system where clients can pick and choose certain
                        widgets to be included in their forms, customize widget options such as requiredness, options,
                        default values, etc, and most importantly, remove the need for developer support for changing
                        the form. We also designed and implemented a fully featured ootb default form that all clients
                        would recieve. I was able to work on the frontend and backend of this project which was a great
                        learning experience for me.
                    </Typography>
                    <div className="pt-8"></div>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Conclusion
                    </Typography>
                    <Typography variant="lead">
                        Overall, I had a great experience working at Tulip. I was able to learn a lot of new skills and
                        technologies that I can apply to future projects. I was also able to improve my communication
                        skills and collaboration skills by working with other developers on my team. I completed all of
                        my goals and I am proud of the work I have done knowing that it will be used by many people in
                        the future.
                    </Typography>
                    <figure className="px-4 float-right text-center">
                        <img
                            src={campTulip}
                            width={370}
                            height={250}
                            alt="camp-tulip"
                            className="rounded-lg float-right"
                        />
                        <figcaption>Camp Tulip, Toronto</figcaption>
                    </figure>
                    <div className="pt-8"></div>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Acknowledgments
                    </Typography>
                    <Typography variant="lead">
                        I would like to thank my manager Anthony for being a great mentor, helping me grow as a
                        developer, and always ready to pair program and work productively together. I would also like to
                        thank the Connect team for being so welcoming and helpful throughout my work term.
                    </Typography>
                </section>
            </div>
        </>
    );
};

export default Tulip;
