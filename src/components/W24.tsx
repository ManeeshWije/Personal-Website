import { Typography } from "@material-tailwind/react";
import tulipLogo from "../assets/tulip-logo.png";
import tulipHome from "../assets/tulip-home.png";

const W24: React.FC = () => {
    return (
        <>
            <div className="text-[#ddc7a1] animate-in slide-in-from-left-20 duration-700 p-5 pt-8 flex flex-col justify-center items-center">
                <a href="https://www.tulip.com">
                    <img src={tulipLogo} width={150} height={50} alt="tulip-retail-logo" />
                </a>
                <i className="pt-2">Winter 2024</i>
                <section>
                    <Typography className="pt-4 text-[#d3869b]" variant="h3">
                        About the Company
                    </Typography>
                    <Typography variant="lead">
                        (see <a href="https://www.wijeproject.com/#/S23">here</a>)
                    </Typography>
                    <div className="pt-8"></div>
                    <figure className="p-4 float-right text-center">
                        <img src={tulipHome} width={500} height={400} alt="tulip-home-page" className="rounded-lg" />
                    </figure>
                    <Typography variant="h3" className="text-[#d3869b]">
                        My Role
                    </Typography>
                    <Typography variant="lead">
                        This term, I returned to Tulip as a Software Developer Intern on the Clienteling/Connect team.
                        Along with being responsible for developing new features during build cycles and fixing bugs, I was also able to maintain a key
                        piece of software I worked on with my manager last term called Customer Capture V2.
                    </Typography>
                    <div className="pt-8"></div>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Goals/Reflections
                    </Typography>
                    <Typography variant="lead">
                        I created 3 goals this term that revolved around exploration of new projects,
                        being more initiative, and documentation. These included:
                    </Typography>
                    <br />
                    <ul>
                        <Typography variant="lead" as="li">
                            <b>1.</b> Explore products and projects that I have not worked on before.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>2.</b> Take initiative to develop new features and improvements for existing projects without being asked.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>3.</b> Create clear and concise documentation for features/bug fixes I work on.
                        </Typography>
                    </ul>
                    <div className="pt-4"></div>
                    <Typography className="font-bold" variant="h4">
                        Reflections
                    </Typography>
                    <ul>
                        <Typography variant="lead" as="li">
                            <b>1.</b> During my last term, I mainly focused on Customer Capture V2 which was a singular project that included a TypeScript frontend and
                            PHP backend. However, along with maintaining that project, this term I explored our customer facing admin console product, developed new backend API's, 
                            and even explored a fast search engine we utilized call Apache Solr. In our admin console, I mainly developed new UI components ensuring they were properly tested
                            and documented which allowed for them to be used in other parts of the project. In terms of our backend, I dove deeper into our database by writing migration scripts
                            for new features as well as migrating legacy API's into a more modern version using Symfony in PHP. A new feature I developed was a customer contact date filter for the
                            "All Customers" section of the app so associates could gain a better view of who they need to reach out to next.
                            Since we used Apache Solr for this task, I gained knowledge on how these search engines were indexed and many queries that can be run on
                            the stored data.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>2.</b> Tulip has an ongoing migration process for their backend API's where old endpoints are being migrated to a more modern standard
                            coupled with any new endpoints written this way as well. One such API that has to do with doing CRUD operations on customer phone, email, and address types
                            was still written in the old way. Since I was writing a feature for our admin console that needed to use this API, I decided it would be better if I also migrated it
                            to the new standard since I was working with it anyways and knew how the API should function. After my feature was completed, I also had migrated a legacy
                            endpoint correctly and now being used my multiple areas of the app. Along with this, since I was maintaining the project I worked on last term, Customer Capture V2,
                            I made sure to make enhancements during build cycle cooldown periods. These included UI changes to make the experience more accessible and refactoring certain parts 
                            of the code (written a few months prior by the way 😅). Overall, I felt as though I was more in control of what I was working on and provided solutions without being 
                            asked due to having a bigger oversight on the projects this time around.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>3.</b> During this term, I was assigned more features as I was more familiar with the codebases but one thing that I wanted to make sure was to write clear
                            and concise documentation. This is because a lot of the time, I needed to demo these features to customer success teams and also point them somewhere that has
                            the steps on enabling and using the features I developed. For example, the customer contact date filter I developed had a few steps to enable them in certain
                            environments so documenting the process was key. Along with this, making sure to explain any limitations was important so customer success and our development team
                            were always on the same page as to what the feature was and was not intended to do. Overall, during the end of each build cycle, I wrote clear and concise documentation for
                            the feature I worked on and on-boarding these features for clients went smoothly as a result.
                        </Typography>
                    </ul>
                </section>
                <div className="pt-8"></div>
                <section>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Highlights
                    </Typography>
                    <Typography variant="lead">
                        The highlight this term for me was when we Tulip hosted their quarterly hackday where everyone was encouraged to create any type of project they wanted in
                        8 hours after which, were demo'd to the company. It didn't matter how polished or what the project was about, as long as it involved some sort of software/hardware,
                        it was allowed. For this hackday, I decided to create a developer tool based on some shortcomings I noticed while doing everyday development on the team. Along with having a 
                        local dev environment that covers most functionalities, Tulip also has environments that mimic staging and production more closely whereby developers can deploy their code onto.
                        This ensures that the code will behave properly when merged and rules out any odd configuration differences between local and staging/production that might cause a bug. Since these
                        "dev tenants" use Terraform to configure which commit SHA each service was pointing to, sometimes you would run into an issue where another developer has pinned the SHA but you
                        have no context of what branch or feature that SHA is for. To solve this, I created a web dashboard using React and some other technologies I always wanted to try such as Bun and ShadCN UI.
                        This dashboard communicated with the GitLab API to get a list of our dev tenant repos whereby clicking on one revealed its main Terraform file. After this, if a service had a pinned SHA,
                        it would be clickable and would provide the commit author information, branch information, and the merge request if there was one. Overall, I enjoyed working on this idea and received
                        positive feedback during my demo!
                    </Typography>
                    <div className="pt-8"></div>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Conclusion
                    </Typography>
                    <Typography variant="lead">
                        Overall, I had a great experience returning to Tulip. I felt as though I was given more responsibilities when it came to fixing bugs and creating new features which I appreciated. I want
                        to thank the Clienteling/Connect team for giving me a warm welcome back to the team as well as my manager <a href="https://www.linkedin.com/in/anthonyburkholder/">Anthony</a> for being a great mentor and always providing clear feedback on my work.
                        We were able to have multiple pair programming sessions together which boosted my productivity and allowed us to iterate quickly on feature work.
                    </Typography>
                    <div className="pt-8"></div>
                </section>
            </div>
        </>
    );
};

export default W24;
