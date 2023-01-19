import Image from 'next/image';
import Head from 'next/head';
import { Typography } from '@material-tailwind/react';
import ncr from '/public/assets/ncr-logo.png';
import waterloo from '/public/assets/waterloo.jpg';
import techNcr from '/public/assets/tech-ncr.png';

export default function Ncr() {
  return (
    <>
      <Head>
        <title>NCR</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Co-op experience at NCR by Maneesh Wijewardhana'
        />
      </Head>
      <div className='animate-in slide-in-from-left-20 duration-700 p-5 pt-8 flex flex-col justify-center items-center'>
        <a href='https://www.ncr.com'>
          <Image src={ncr} width={189} height={60} alt='ncr-logo' />
        </a>
        <i>Fall 2022</i>
        <section>
          <Typography className='pt-4' variant='h3'>
            About the Company
          </Typography>
          <Typography variant='lead'>
            NCR is a technology company based in Atlanta, Georgia, United States
            that started off in the financial space with hardware devices. They
            invented the electronic cash register, self checkout machine, and
            many more. They also work in the software space and develop
            applications for banks and other institutions in order to offer
            users digital banking services. Due to the variety of solutions NCR
            provides, there is a high chance that you yourself have come across
            a piece of hardware or software developed by NCR. This could be the
            self checkout machine at your local grocery store, or the app you
            use to access your banking information.
          </Typography>
          <div className='pt-8'></div>
          <figure className='p-4 float-right text-center'>
            <Image
              src={waterloo}
              width={431}
              height={300}
              alt='waterloo-ontario'
              className='rounded-lg'
            />
            <figcaption>
              Waterloo, Ontario <br />{' '}
              <a
                className='text-blue-400'
                href='https://www.intelligentcommunity.org/waterloo_ontario'
              >
                Credits
              </a>
            </figcaption>
          </figure>
          <Typography variant='h3'>My Role</Typography>
          <Typography variant='lead'>
            I'm honoured to have worked at NCR as a Software Developer Intern in
            their Waterloo office for my second Co-op term. As a part of my
            role, I was working with the Channel Services Platform team with a
            primary focus in backend Java development. I was responsible for
            developing new API endpoints that perform certain functionalities
            based on specific business requirements, developing and contributing
            to existing internal micro-services or building new ones,
            contributing to quarterly planning meetings, and overall, work
            effeciently in an Agile environment.
          </Typography>
          <div className='pt-8'></div>
          <Typography variant='h3'>Goals/Reflections</Typography>
          <Typography variant='lead'>
            I created 3 goals this term that revolved around learning new
            technologies, communication, and overall quality of work. These
            included:
          </Typography>
          <br />
          <ul>
            <Typography variant='lead' as='li'>
              <b>1.</b> Get a deeper understanding of backend Java
              applications/microservices to successfully contribute to a feature
              design and implementation. This also ties into learning about the
              technologies I have never used before such as Docker, Jenkins,
              Kubernetes, and more. Being able to learn hands-on with these
              tools will allow me to expand my development toolbox as well as be
              more comfortable using them in the future.
            </Typography>
            <Typography variant='lead' as='li'>
              <b>2.</b> Improve my communication skills whether that be orally
              in daily scrum meetings, and sprint plannings, but also written in
              emails, design documents, and comments. This will allow other
              developers to always be on the same page as me and will decrease
              the amount of clarification needed for work that I have done or
              plan to do. Both types of communication skills are important to
              have as a developer to efficiently produce quality work. do.
            </Typography>
            <Typography variant='lead' as='li'>
              <b>3.</b> Strike a balance between quality/quantity when it comes
              to the work I do. I want to be able to produce high-quality
              designs and implementations with the least errors possible but
              also be able to produce more of them to have more deliverables.
              This means I will have to find an efficient workflow that can
              balance those two ideas properly.
            </Typography>
          </ul>
          <div className='pt-4'></div>
          <Typography className='font-bold' variant='lead'>
            Reflections
          </Typography>
          <ul>
            <Typography variant='lead' as='li'>
              <b>1.</b> I achieved this goal as I was able to work with tools
              such as Kubernetes, Docker, and Jenkins on a daily basis without
              needing guidance from other developers. At the start of my work
              term, I had never worked with these technologies but I knew they
              were important to know in order to grow as a developer. By the end
              of my term, I felt as though I had a good understanding of them
              and I'm comfortable using them when developing at NCR. At the
              beginning of my term, I needed guidance from other developers on
              how these tools worked and how they played an integral role in the
              development life cycle at NCR. However, by the end of my term, I
              was using them when bug fixing, developing new features, and
              rarely had questions during the process. Also, to fast-track my
              understanding, I researched these technologies in my own time
              which benefited me not only in the workplace but also in my own
              projects.
            </Typography>
            <Typography variant='lead' as='li'>
              <b>2.</b> I achieved this goal because throughout my time at NCR,
              I made sure that I conveyed the ideas and comments that I had in a
              concise yet detailed manner. For example, in our daily scrum
              meetings, I always explained exactly what things I accomplished,
              things I needed help with as well as what I was going to do to get
              help. This alleviated any questions that my other teammates might
              have which saved time in the process. I also contributed to our
              sprint retrospectives by writing down key points on what the team
              did well, what we could improve on, etc. This carried over to our
              sprint planning meetings as well where I was able to ask
              meaningful questions about new features and show managers that I
              had a clear understanding of the task at hand. Overall, my oral
              and written communication skills improved and allowed me to
              produce quality work.
            </Typography>
            <Typography variant='lead' as='li'>
              <b>3.</b> I achieved this goal by completing all my assigned
              features/tasks and even more during each sprint. With these tasks,
              I created PR's that needed minimal review comments and changes.
              This showed my teammates that I produced quality work with minimal
              to no errors and that greatly increased the development speed of
              the team. Another resulting factor from striking this balance
              between quality and quantity was being able to help other
              teammates with their work. I learned very quickly how the
              development cycle works at NCR and quickly adapted to it. Whether
              this is coding standards, merge processes, or design
              methodologies, I felt comfortable in all of these parts. Overall,
              I always delivered my features, took the initiative to help
              others, and made sure the work I submitted held the utmost quality
              that I was able to produce.
            </Typography>
          </ul>
        </section>
        <div className='pt-8'></div>
        <section>
          <Typography variant='h3'>Highlights</Typography>
          <figure className='p-4 float-right text-center'>
            <Image
              src={techNcr}
              width={350}
              height={350}
              alt='technologies-used-ncr'
              className='rounded-lg'
            />
            <figcaption>Technologies Used</figcaption>
          </figure>
          <Typography variant='lead'>
            While working at NCR, I contributed heavily to multiple
            micro-services and developed new features as they came from product
            owners. For example, I was able to utilize security vulnerability
            tools such as SonarQube, Coverity, AquaSecurity, and Whitesource in
            order to identify and fix dependency vulnerabilies in certain
            internal micro-services. I also helped develop a new micro-service
            using Java Spring, Docker, Kubernetes, and Jenkins which taught me a
            lot about these tools as they were completely new to me. Along with
            this, I learned how to properly design software architectures for
            new features before implementing them which paved a smooth developer
            experience. My favourite part however was when I utilized Java and
            an internal API building tool to construct multiple API endpoints
            regarding the interaction between Teller Cash Recycler (TCR)
            machines. These devices act as a miniature vault that handles both
            teller transactions and vault buy/sell transactions.
          </Typography>
          <div className='pt-8'></div>
          <Typography variant='h3'>Conclusion</Typography>
          <Typography variant='lead'>
            The 4 months that I spent working at NCR this fall was very
            enjoyable and I was able to learn a myriad of new technologies that
            I previously never worked with. This meant that each day, I was
            always learning something new and overall it made me more marketable
            as a developer. Working in the financial-technology space also
            taught me how to properly communicate and convey information to
            product owners, managers, and senior engineers. I appreciated
            working in an Agile environment for the first time as I was given
            enough time to complete my stories to the best of my ability and be
            able to convey any questions or concerns I had with the team on a
            daily basis. Overall, I admired the time spent working at NCR as a
            Software Developer Intern and accomplished many things that I'm
            proud of.
          </Typography>
          <div className='pt-8'></div>
          <Typography variant='h3'>Acknowledgments</Typography>
          <Typography variant='lead'>
            I'd like to thank Yuktika for being a great mentor and leader for
            the team. Also big thank you to Priyanka for always being there to
            answer any question I had and providing clear explainations to them.
            Finally, I'd like to thank the rest of my team at NCR for the
            opportunity to work with them this fall. It was a fun and memorable
            time with lots of learning happening each and everyday!
          </Typography>
        </section>
      </div>
      <div className='pt-4'></div>
    </>
  );
}
