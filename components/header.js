import {basePath} from "../next.config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div
            className={`duration-300 animate-slidedown border border-gray-200 w-full rounded-md bg-white z-10 shadow-lg mb-8`}
            data-class-in='translate-x-0 opacity-100'
            data-class-out='-translate-x-32 opacity-0'>
            <div
                className={`container sm:py-4 md:py-8 px-8 flex items-center justify-center sm:justify-between`}>
                <div className={'sm:hidden'}/>
                <div className={'flex-shrink-0'}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className={`mx-8 my-8 sm:my-2 w-auto h-10 md:h-12`}
                        src={`${basePath}/logo.png`}
                        alt={'logo'}
                    />
                </div>
                <div className={'flex items-center'}>
                    <a href="mailto:info@londonaestheticsandtrainingacademy.co.uk"
                       className="button">
                        <FontAwesomeIcon className={'w-4 h-auto'} icon={faEnvelope}/>
                        <p className="hidden sm:block">Contact us</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
