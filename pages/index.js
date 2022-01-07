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
        "desc": ""
    },
    {
        "src": "/img/img_02.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_03.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_04.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_05.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_06.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_07.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_08.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_09.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_10.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_11.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_12.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_13.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_14.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_15.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_16.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_17.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_18.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_19.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_20.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_21.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_22.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_23.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_24.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_25.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_26.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_27.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_28.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_29.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_30.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_31.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_32.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_33.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_34.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_35.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_36.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_37.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_38.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_39.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_40.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_41.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_42.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_43.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_44.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_45.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_46.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_47.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_48.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_49.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_50.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_51.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_52.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_53.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_54.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_55.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_56.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_57.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_58.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_59.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_60.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_61.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_62.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_63.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_64.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_65.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_66.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_67.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_68.jpg",
        "desc": ""
    },
    {
        "src": "/img/img_69.jpg",
        "desc": ""
    }
]
