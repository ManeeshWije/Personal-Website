import { Typography } from "@material-tailwind/react";
import tulipLogo from "../assets/tulip-logo.png";
import tulipApp from "../assets/tulip-app.png";

const S24: React.FC = () => {
    return (
        <>
            <div className="text-[#ddc7a1] animate-in slide-in-from-left-20 duration-700 p-5 pt-8 flex flex-col justify-center items-center">
                <a href="https://www.tulip.com">
                    <img src={tulipLogo} width={150} height={50} alt="tulip-retail-logo" />
                </a>
                <i className="pt-2">Summer 2024</i>
                <section>
                    <Typography className="pt-4 text-[#d3869b]" variant="h3">
                        About the Company
                    </Typography>
                    <Typography variant="lead">
                        (see <a href="https://www.wijeproject.com/#/S23">here</a>)
                    </Typography>
                    <div className="pt-8"></div>
                    <figure className="p-4 float-right text-center">
                        {
                        <img src={tulipApp} width={500} height={400} alt="tulip-clienteling" className="rounded-lg" />
                        }
                    </figure>
                    <Typography variant="h3" className="text-[#d3869b]">
                        My Role
                    </Typography>
                    <Typography variant="lead">
                        This term, I returned once again to Tulip as a Software Developer Intern on the Connect team. My team deals with our Clienteling app which has a mix of iOS components and web components. I focused mainly on building new features,
                        maintaining old ones, and working more on the backend side of things.
                    </Typography>
                    <div className="pt-8"></div>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Goals/Reflections
                    </Typography>
                    <Typography variant="lead">
                        I created 3 goals this term that revolved around working on larger features, 
                        being a dependable co-worker, and leadership. These included:
                    </Typography>
                    <br />
                    <ul>
                        <Typography variant="lead" as="li">
                            <b>1.</b> Work on larger features with minimal external guidance in order to gain more confidence as a developer.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>2.</b> Showcase dependability as a developer to the team.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>3.</b> Take leadership/ownership of the features I build.
                        </Typography>
                    </ul>
                    <div className="pt-4"></div>
                    <Typography className="font-bold" variant="h4">
                        Reflections
                    </Typography>
                    <ul>
                        <Typography variant="lead" as="li">
                            <b>1.</b>
                            To achieve this goal, I implemented a new app filter called "Social Outreach" which
                            relied on working with unfamiliar technologies such as Solr search engine. I also took on another
                            large feature that marked customers in the app as duplicates based on certain critera which made me learn complex
                            SQL queries and optimization strategies on larger data sets. I was able to successfully deliever both of these features
                            with minimal guidance and as a byproduct, gained more confidence as a developer.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>2.</b>
                            To acheive this goal, I performed several bug fixes on a new SMS video sending feature without needing a knowledge transfer session. This
                            happened due to the owner of the feature going on vacation and the team needed someone to fill in and take over the development for it.
                            I also worked on and resolved several bugs blocking regular release schedules of the Clienteling app. I was always available and demonstrated
                            initiative to work on these priority bugs which showed my team that I was someone who can be depended on.
                        </Typography>
                        <br />
                        <Typography variant="lead" as="li">
                            <b>3.</b>
                            Finally, to achieve this goal, I successfully conducted multiple demos for customer success teams, which helped in clarifying the capabilities and limitations of the
                            features I developed. This led to an increased confidence and reliance from other teams on my expertise. The frequest questions from various teams highlighted the importance of thorough documentation
                            as well. I made sure every feature I worked on had concise but thorough documentation and as a byproduct, I had the deepest understanding of said features ensuring all teams were on the same 
                            page for them.
                        </Typography>
                    </ul>
                </section>
                <div className="pt-8"></div>
                <section>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Highlights
                    </Typography>
                    <Typography variant="lead">
                        The highlight of my term was near the end when I was able to start playing with Google's Vertex AI product which was powered by Gemini.
                        Since our team had talks about introducing AI features into the app, I was tasked with exploring the capabilities of Gemini and how it can
                        be integrated into the app ensuring benficial features for our clients. I created a small command line tool that took in a JSON format prompt which had information like
                        the clients name and persona, example conversations, etc, and tasked Gemini to create examples of sales outreach emails or even a recommended next SMS message based on a previous
                        conversation. This project helped showcase how Gemini responds and how you can alter the response based tuning the parameters as well as changing the system prompt. Overall, this was 
                        the first time I developed a tool that leveraged a large language model and I feel as though it can definitely provide benefits when used correctly.
                    </Typography>
                    <div className="pt-8"></div>
                    <Typography variant="h3" className="text-[#d3869b]">
                        Conclusion
                    </Typography>
                    <Typography variant="lead">
                        Overall, I had a great experience returning once again to Tulip. This term, I felt like I delivered more features than ever and learned a lot about backend technologies such as Solr, GCP, and even Gemini. I want to thank
                        the Clienteling/Connect team for giving me a warm welcome back once again as well as my manager <a href="https://www.linkedin.com/in/anthonyburkholder/">Anthony</a> for supporting my work and always being there to answer any questions I had.
                    </Typography>
                    <div className="pt-8"></div>
                </section>
            </div>
        </>
    );
};

export default S24;
