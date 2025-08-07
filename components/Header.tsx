import Image from "next/image";
import logo from '@/public/logo.svg';
import apple from '@/public/apple.svg';
import googlePlay from '@/public/google-play.svg';
import telegram from '@/public/telegram.svg';

export const Header = () => {
    return (
        <nav className='py-6 px-10'>
            <div className='flex gap-5 justify-between items-center flex-wrap lg:flex-nowrap max-w-[1440px] mx-auto'>
                <div className='flex gap-5 flex-wrap'>
                    <Image width={200} src={logo} alt='Мусорофф лого' />
                    <p className='text-lg uppercase leading-6'>сервис по выносу<br/> бытового мусора из квартир</p>
                </div>


                <button className='bg-[#2cac73] px-6 py-2 size-fit rounded-3xl flex gap-4 items-center text-white font-bold'>
                    СКАЧАТЬ ПРИЛОЖЕНИЕ

                    <Image src={apple} alt='Apple logo' width={20} height={20} />
                    <Image src={googlePlay} alt='Google Play logo' width={20} height={20} />
                </button>

                <div className='flex gap-5 flex-wrap'>
                    <button className='px-6 py-1.5 rounded-3xl flex gap-3 items-center border-2 border-[#0B5D51] text-[#0B5D51] font-medium '>
                        <Image src={telegram} alt='Telegram logo' width={20} height={20} />
                        Telegram
                    </button>

                    <button className='px-6 py-1.5 rounded-3xl flex gap-3 items-center border-2 border-[#0B5D51] text-[#0B5D51] font-medium '>
                        +998 (77) 777-77-77
                    </button>
                </div>
            </div>
        </nav>
    );
};
