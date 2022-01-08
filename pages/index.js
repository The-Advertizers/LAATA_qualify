import Head from 'next/head';
import Header from "../components/header";
import ParticlesBackground from "../components/particles_background";
import Footer from "../components/footer";
import {basePath} from "../next.config";

function ImageEntry({image, desc}) {
    return (
        <>
            <div className={'m-4 flex'}>
                <div className={'max-w-4xl h-auto p-8 bg-accent-lighter rounded-md'}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={'rounded-md'} src={image} alt={'image'}/>
                    {(desc && desc !== '') &&
                    <div className={'mt-8 text-secondary'}>
                        {desc}
                    </div>
                    }
                </div>
            </div>
        </>
    );
}

// noinspection JSUnusedGlobalSymbols
export default function Home() {
    return (
        <div>
            <Head>
                <title>London Aesthetics and Training Academy</title>
                <link rel="icon" href={`${basePath}/favicon.png`}/>
            </Head>

            <ParticlesBackground/>
            <main className={'pt-8'}>
                <div className={'container mx-auto'}>
                    <Header/>
                </div>

                <div className={'container flex flex-col items-center justify-center mx-auto space-y-8 mb-8'}>
                    {images.map((image, i) =>
                        <ImageEntry key={i} image={`${basePath}${image.src}`} desc={image.desc}/>
                    )}
                </div>

                <Footer/>
            </main>
        </div>
    )
}


const images = [
    {
        "src": "/img/img_01.jpg",
        "desc": "London Aesthetics, always working hard on its way to bring out the best learning experience for all. We are proud to announce that we are now offering QUALIFI accredited courses in Pakistan. QUALIFI is a leading organization that is fulfilling the learning needs of passionate trainees and employers from the UK and worldwide."
    },
    {
        "src": "/img/img_02.jpg",
        "desc": "The more you #learn, the more you #earn. Lay the foundation to your lucrative career with an accredited, flexible and affordable diploma programme from Qualifi."
    },
    {
        "src": "/img/img_03.jpg",
        "desc": "Falling down is an accident, staying down is a choice. Get up and try again - whether it is a failed exam or a lost competition."
    },
    {
        "src": "/img/img_04.jpg",
        "desc": "Twenty Years From Now You Will Be More Disappointed By The Things You Didn't Do Than By The Ones You Did Do"
    },
    {
        "src": "/img/img_05.jpg",
        "desc": "qualifiltd For students seeking career and professional development, Qualifi offers accredited qualifications, which are flexible and affordable. All our courses are offered via distance learning, so you get to choose your pace of study. Get in touch with us today."
    },
    {
        "src": "/img/img_06.jpg",
        "desc": "Qualifi is recognised as an awarding organisation by Ofqual in England, QiW in Wales and the CCEA. Our accredited diploma programmes are flexible and affordable. Enrol for a Qualifi diploma of your choice and gain accelerated entry into a British degree."
    },
    {
        "src": "/img/img_07.jpg",
        "desc": "\"Success is steady progress towards one's goals.\" - Jim Rohn"
    },
    {
        "src": "/img/img_08.jpg",
        "desc": "Qualifi programmes are developed to fit the Regulated Qualifications Framework (RQF) so that learners receive a consistent and credible recognition along with a structured career progression route."
    },
    {
        "src": "/img/img_09.jpg",
        "desc": "\"Your positive action combined with positive thinking results in success.\" - Shiv Khera"
    },
    {
        "src": "/img/img_10.jpg",
        "desc": "The University of Derby was recently recognised to be a top 20 university for its quality teaching through TEF. Enrol for Qualifi's Level 6 or 7 Diploma programmes to be eligible for advanced admission into the University."
    },
    {
        "src": "/img/img_11.jpg",
        "desc": "\"Strive for progress, not perfection.\" - Anonymous"
    },
    {
        "src": "/img/img_12.jpg",
        "desc": "Ensuring quality higher education is one of the most important things we can do for future generations. - Ron Lewis"
    },
    {
        "src": "/img/img_13.jpg",
        "desc": "Secure your Qualifi award and fast track your way towards a Bachelor's or Master's degree programme at the University of Northampton. Get in touch to learn more about our progression pathways."
    },
    {
        "src": "/img/img_14.jpg",
        "desc": "The University of Northampton is an award winning body praised for its teaching excellence and student experience. Gain direct entry to your degree at on through Qualifi."
    },
    {
        "src": "/img/img_15.jpg",
        "desc": "Genius is 1% inspiration & 99% perspiration. - Thomas Edison"
    },
    {
        "src": "/img/img_16.jpg",
        "desc": "\"Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.\" - Jack Welch. Lead the way with Qualifi's Diploma in Strategic Management and Leadership."
    },
    {
        "src": "/img/img_17.jpg",
        "desc": "By enrolling for Qualifi's diploma courses, our learners will receive a credible recognition of learning, along with a career progression route that promotes life. long learning. Speak to our support team today."
    },
    {
        "src": "/img/img_18.jpg",
        "desc": "The best way to predict the future is to create it. - Abraham Lincoln"
    },
    {
        "src": "/img/img_19.jpg",
        "desc": "Qualifi is recognised as an Awarding Organisation by the qualification regulators in the UK. All certificates & diplomas awarded by Qualifi are regulated by the Office of the Qualifications & Examinations Regulator (Ofqual) in England."
    },
    {
        "src": "/img/img_20.jpg",
        "desc": "Progress directly into a Bachelor's or Master's degree from the University of Bedfordshire after your Qualifi diploma."
    },
    {
        "src": "/img/img_21.jpg",
        "desc": "Is parenthood holding you back from chasing after your dreams? Flexible and affordable qualifications provided by Qualifi, gives you the opportunity to secure a recognised British diploma at the comfort of your own home."
    },
    {
        "src": "/img/img_22.jpg",
        "desc": "It can always be a little daunting to figure out diplomas in various fields, from business mangement to cyber security, and our support system would be happy to help you."
    },
    {
        "src": "/img/img_23.jpg",
        "desc": "Always do your best. What you plant now, you will harvest later. - OG Mandino"
    },
    {
        "src": "/img/img_24.jpg",
        "desc": "Set your career goals and work hard towards achieving it. One of the benefits of studying with Qualifi is that we offer various progression routes to give you direct entry to renowned UK universities such as De Montfort University. Get your qualification today!"
    },
    {
        "src": "/img/img_25.jpg",
        "desc": "However difficult life may seem there is always something you can do and succeed at"
    },
    {
        "src": "/img/img_26.jpg",
        "desc": "Set yourcGoalschigh & don't stop till you get there"
    },
    {
        "src": "/img/img_27.jpg",
        "desc": "Qualifi partner with employers to design and offer specialised qualifications that have specific relevance to their organisation or industry. Recognised workforce development supports recruitment, productivity & retention."
    },
    {
        "src": "/img/img_28.jpg",
        "desc": "Start where you are. Use what you have. Do what you can. - Arthur Ashe"
    },
    {
        "src": "/img/img_29.jpg",
        "desc": "Qualifi is recognised as an Awarding Organisation by the qualification regulators in the UK. All certificates & diplomas awarded by Qualifi are regulated by the Office of the Qualifications & Examinations Regulator (Ofqual) in England."
    },
    {
        "src": "/img/img_30.jpg",
        "desc": "A sound education paves the way towards a successful career. Grab your place at the Cardiff Metropolitan University upon completion of one of Qualifi's accredited diploma programmes. Visit our website for more information."
    },
    {
        "src": "/img/img_31.jpg",
        "desc": "Gain advanced entry for your degree at the prestigious University of Chichester, in West Sussex, upon completing a relevant diploma from Qualifi. Get in touch with us today to learn more about progression pathways."
    },
    {
        "src": "/img/img_32.jpg",
        "desc": "qualifiltd Learners receive credit exemptions towards a Master's degree through our wide range of regulated Level 7 Diploma courses ranging from accounting, strategic management, leadership and innovation to business law, hospitality and HM. Contact us today."
    },
    {
        "src": "/img/img_33.jpg",
        "desc": "Take a Qualifi University Progression route to save time on your Master's or Bachelor's degree, while gaining an internationally-recognised and Ofqual-approved diploma. Get in touch with us today to learn more about our progression routes."
    },
    {
        "src": "/img/img_34.jpg",
        "desc": "Cardiff Metropolitan University is ranked as the top post-1992 University in the UK for world leading or internationally excellent research in the latest Research Excellence Framework. Learn how you can complete your degree there."
    },
    {
        "src": "/img/img_35.jpg",
        "desc": "97% of postgraduates from Leeds Beckett University are in employment within 6 months after graduating. Gain advanced entry to your Master's Degree here, after completing a Qualifi Level 7 Diploma."
    },
    {
        "src": "/img/img_36.jpg",
        "desc": "By pursuing higher education, you stand to gain much more than just a good job with a good salary. It allows you to grow personally and acquire valuable skills along the way, such as adaptability, problem solving and time management. Get started today."
    },
    {
        "src": "/img/img_37.jpg",
        "desc": "Rated gold by the Teaching Excellence Framework, the Bangor University in Wales can be your destination to complete the degree. Gain advanced entry through a Qualifi diploma."
    },
    {
        "src": "/img/img_38.jpg",
        "desc": "Are you looking to jump to the final year of a UK university honours degree? This Ofqual-approved Level 5 Diploma in Business Management should be the ideal stepping stone for you."
    },
    {
        "src": "/img/img_39.jpg",
        "desc": "Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination and dedication."
    },
    {
        "src": "/img/img_40.jpg",
        "desc": "Find the best time to study. Some work better in the morning, others work better at night. Work out which time suits you and follow it on a daily basis."
    },
    {
        "src": "/img/img_41.jpg",
        "desc": "Save significant time and costs by enroling with Qualifi and gain advanced entry towards securing a degree of your choice"
    },
    {
        "src": "/img/img_42.jpg",
        "desc": "Qualifi operates with the firm belief that learning should have no limits and that education is the right path towards a promising career. Inquire about our Certificate and Diploma programmes today."
    },
    {
        "src": "/img/img_43.jpg",
        "desc": "Would you like to help motivated learners study further and fulfil their dreams? Join Qualifi's network of approved learning centres. We will provide you with the necessary support and guide you towards success."
    },
    {
        "src": "/img/img_44.jpg",
        "desc": "Establishing and educational or career goal will motivate you to stay focused. You can begin with shorter, more immediate objectives to stay on track."
    },
    {
        "src": "/img/img_45.jpg",
        "desc": "Qualifi works with a number of different universities. This means that upon completion of one of our diploma programmes, you can select a university of your preference and we will facilitate."
    },
    {
        "src": "/img/img_46.jpg",
        "desc": "There aré no secrets to success. It is the result of preparation, hard work, and learning from failure. - Colin Powell"
    },
    {
        "src": "/img/img_47.jpg",
        "desc": "The University of Cumbria is reputed for its exceptional employability prospects and outstanding student satisfaction scores of 90%. You can complete your Bachelor's or Master's qualification at this university."
    },
    {
        "src": "/img/img_48.jpg",
        "desc": "The whole purpose of education is to turn mirrors into windows. - Sydney J. Harris"
    },
    {
        "src": "/img/img_49.jpg",
        "desc": "Take a smarter route to save #time and #money on your Master's or Bachelor's degree through a globally recognised Qualifi diploma."
    },
    {
        "src": "/img/img_50.jpg",
        "desc": "Complete a Master's degree of your choice at the Bath Spa University after a Level 7 Postgraduate Diploma at Qualifi. Get in touch with us today to learn more."
    },
    {
        "src": "/img/img_51.jpg",
        "desc": "Join the pack! Finish your undergraduate and postgraduate qualifications at the University of Wolverhampton by following our progression routes."
    },
    {
        "src": "/img/img_52.jpg",
        "desc": "Did you know that upon completion one of Qualifi's Level 7 diploma programmes, you only need to do your dissertation to receive a master's degree?"
    },
    {
        "src": "/img/img_53.jpg",
        "desc": "What to look for in a legitimate online British course: Ensure that the course provider is accredited by a UK government depatment and that the courses are globally recognised. Accreditation proves your qualification is offered by a quality education institution."
    },
    {
        "src": "/img/img_54.jpg",
        "desc": "The University of Lincoln is a TEF gold standard institute recognised for its teaching excellence. Gaining a Qualifi diploma would help you meet the entry requirements for your degree at this university."
    },
    {
        "src": "/img/img_55.jpg",
        "desc": "Securing a Qualifi Level 4 or 5 Diploma programme within a year will allow you to fast track to the final year of an honours degree. That is an entire year less than progressing through a traditional honours degree. Contact us for more info."
    },
    {
        "src": "/img/img_56.jpg",
        "desc": "Go do it the modern way through distance learning at Arden University in the UK. Get advanced entry after finishing your Qualifi diploma today."
    },
    {
        "src": "/img/img_57.jpg",
        "desc": "qualifiltd Upon successfully securing a Qualifi Level 7 Diploma in Human Resource Management, you will gain direct progression to a master's programme of your choice at a UK university."
    },
    {
        "src": "/img/img_58.jpg",
        "desc": "The University of Derby has climbed to 29th in The Guardian University Guide 2019, making it the sixth most improved university in the country. Start your degree of choice here after completing your Qualifi diploma today."
    },
    {
        "src": "/img/img_59.jpg",
        "desc": "When browsing for legitimate online diploma programmes, a good place to start is the institution's accreditations. Qualifi is recognised as an awarding body by Ofqual, QiW and the CCEA."
    },
    {
        "src": "/img/img_60.jpg",
        "desc": "The University of West of Scotland is regarded as one of the top young universities in the UK according to Times Higher Education rankings. Complete your degree at UW through our progression routes."
    },
    {
        "src": "/img/img_61.jpg",
        "desc": "Looking for an ideal UK qualification that is accredited, flexible and affordable all at the same time? Qualifi's offers classroom-based blended learning or distance learning to support your career aspirations. Contact us for more information."
    },
    {
        "src": "/img/img_62.jpg",
        "desc": "Save significant time and costs by enroling with Qualifi and gain advanced entry towards securing a degree of your choice from Staffordshire University."
    },
    {
        "src": "/img/img_63.jpg",
        "desc": "The award-winning University of Bolton is known for its top student satisfaction scores each year. Step into a degree directly from this university after completing a Qualifi diploma of your choice."
    },
    {
        "src": "/img/img_64.jpg",
        "desc": "The harder you work for something the greater you'll feel when you achieve it."
    },
    {
        "src": "/img/img_65.jpg",
        "desc": "Excuses don't get Results. Start Today. Start Now."
    },
    {
        "src": "/img/img_66.jpg",
        "desc": "Success is doing ordinary things extraordinarily well. - Jim Rohn"
    },
    {
        "src": "/img/img_67.jpg",
        "desc": "One of the many benefits of securing a diploma is that these programmes offer students an option of getting a quick qualification in order to move quickly into a career. Are you ready to begin yours?"
    },
    {
        "src": "/img/img_68.jpg",
        "desc": "Everyone wants to live on top of the mountain and growth occurs while you're climbing it. - Andy Rooney"
    },
    {
        "src": "/img/img_69.jpg",
        "desc": "Gain an advanced placement into the final year of a Buckinghamshire New University Bachelor's or Master's degree programme, by successfully completing Qualifi's Level 5 or Level 7 course."
    }
]
