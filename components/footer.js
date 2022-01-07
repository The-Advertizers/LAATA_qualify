import {AtSymbolIcon, LocationMarkerIcon, PhoneIcon} from "@heroicons/react/solid";

function Phone({number}) {
    return (
        <div className={'flex items-center space-x-2'}>
            <PhoneIcon className={'w-4'}/>
            <a href={`tel:${number}`} className='text-sm'>{number}</a>
        </div>
    );
}

function Whatsapp({number}) {
    return (
        <div className={'flex items-center space-x-2'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                 className="bi bi-whatsapp w-4 p-px" viewBox="0 0 16 16">
                <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            <a href={`https://wa.me/${number.replace(/[()\s]/g, '')}`} className='text-sm'>{number}</a>
        </div>
    );
}

export default function Footer() {
    return (
        <>
            <div className={'animate-slideup'}>
                <div className={`bg-secondary sticky w-full`}>
                    <div className='container mx-auto w-full h-auto pb-8 pt-10 px-4'>
                        <div className='pb-4 w-full grid md:grid-cols-2 grid-cols-1 overflow-auto md:overflow-hidden text-accent-lighter sm:place-items-center'>
                            <div className='w-full max-w-xl mt-8 md:mt-12 px-2 space-y-1'>
                                <h1 className='text-2xl font-bold'>UK Office</h1>
                                <div className={'flex items-center space-x-2'}>
                                    <LocationMarkerIcon className={'w-4'}/>
                                    <a href="https://goo.gl/maps/NMBERHFiWXkv32B77" className='text-sm'>
                                        {'84 St Leonard\'s St, London E3 3LR, UK'}
                                    </a>
                                </div>
                                <div className={'flex items-center space-x-2'}>
                                    <AtSymbolIcon className={'w-4'}/>
                                    <a href="mailto:info@londonaestheticsandtrainingacademy.co.uk"
                                       className='text-sm'>info@londonaestheticsandtrainingacademy.co.uk</a>
                                </div>
                                <Phone number={'+44 (0)208 062 5439'}/>
                                <Whatsapp number={'+44 (0)7377 55 6533'}/>
                            </div>
                            <div className='w-full max-w-xl mt-8 md:mt-12 px-2 space-y-1'>
                                <h1 className='text-2xl font-bold'>Islamabad Office</h1>
                                <div className={'flex items-center space-x-2'}>
                                    <LocationMarkerIcon className={'w-4'}/>
                                    <a href="https://goo.gl/maps/8C617K19muqxxFpt9" className='text-sm'>
                                        Plaza #2, Sector E, Main Jinnah Boulevard, <br/>
                                        DHA 2, Islamabad.
                                    </a>
                                </div>
                                <div className={'flex items-center space-x-2'}>
                                    <AtSymbolIcon className={'w-4'}/>
                                    <a href="mailto:info@londonaestheticsandtrainingacademy.com.pk"
                                       className='text-sm'>info@londonaestheticsandtrainingacademy.com.pk</a>
                                </div>
                                <Phone number={'+92 307 1114204'}/>
                            </div>
                            <div className='w-full max-w-xl mt-8 md:mt-12 px-2 space-y-1'>
                                <h1 className='text-2xl font-bold'>Lahore Office</h1>
                                <div className={'flex items-center space-x-2'}>
                                    <LocationMarkerIcon className={'w-4'}/>
                                    <a href="https://goo.gl/maps/TSBePbLBsvwee2pw8" className='text-sm'>
                                        18CCA, Street 7, Sector DD, Dha Phase 4, Lahore.
                                    </a>
                                </div>
                                <div className={'flex items-center space-x-2'}>
                                    <AtSymbolIcon className={'w-4'}/>
                                    <a href="mailto:info@londonaestheticsandtrainingacademy.com.pk"
                                       className='text-sm'>info@londonaestheticsandtrainingacademy.com.pk</a>
                                </div>
                                <Phone number={'+92 320 8465075'}/>
                            </div>
                            <div className='w-full max-w-xl mt-8 md:mt-12 px-2 space-y-1'>
                                <h1 className='text-2xl font-bold'>Karachi Franchise</h1>
                                <div className={'flex items-center space-x-2'}>
                                    <LocationMarkerIcon className={'w-4'}/>
                                    <span className='text-sm'>
                                        Plot 148, Block 3, B.M.C.H.S, Near Shaheen Park,<br/>
                                        Bahadurabad, Karachi.
                                    </span>
                                </div>
                                <Phone number={'+92 337 1440999'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-2 bg-accent-lighter'>
                    <div
                        className='flex items-center justify-center flex-wrap text-xs text-secondary font-semibold font-mono'>
                        <p>London Aesthetics And Training Academy</p>&nbsp;
                        <p>| Powered by&nbsp;
                            <a href="https://www.theadvertizers.co.uk/">
                                The Advertizers.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
