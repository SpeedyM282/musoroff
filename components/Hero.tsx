import Image from "next/image";
import blur from "@/public/blur.svg";
import lineIcon from "@/public/Vector_5.svg";
import musorBag from "@/public/musorbag.png";
import musorMan from "@/public/musorman.png";
import doorImage from "@/public/door.png";
import musoroffWhite from "@/public/musoroff-white.png";

export const Hero = () => {
    return (
        <section className='p-20 flex justify-center items-center relative'>
            <div
                className='max-w-[1260px] w-full h-[550px] rounded-3xl relative'
                style={{backgroundImage:'linear-gradient(0.891turn, rgba(57, 228, 152, 1) 0%, rgba(44, 172, 115, 1) 100%)'}}
            >
                <Image src={blur} alt='Blur icon' className='absolute -left-72 -bottom-28 h-[700px]' />
                <Image src={lineIcon} alt='Line icon' className='absolute -left-[95%] -z-10' />

                <Image src={musorBag} alt='Man' className='absolute left-20 bottom-10 h-[200px] w-[150px] z-10' />
                <Image src={musorMan} alt='Man' className='absolute left-40 bottom-0 h-[600px] w-[350px] z-10' />

                <Image src={doorImage} alt='Door image' className='absolute left-[20%] h-full w-[550px]' />

                <div className='absolute -right-10 -top-10 rounded-[28px] overflow-hidden p-1 bg-white size-[140px] -rotate-[30deg]' style={{boxShadow: '0px 10px 10px 0px rgba(45,134,96,1)'}}>
                    <div className='bg-[#69b47a] px-2 pt-5 rounded-[26px] size-full'>
                        <Image src={musoroffWhite} alt='Door image' className='object-fit size-full' />
                    </div>
                </div>

                <div className='bg-white px-10 py-5 rounded-3xl absolute right-20 top-20 w-[550px]'>
                    <p className='text-6xl font-bold text-[#212121]'>Выбросим ваш<br /> мусор за</p>
                </div>

                <div className='bg-[#212121] px-7 py-5 rounded-3xl absolute -right-20 top-44'>
                    <p className='text-white font-bold text-6xl'>139 000 сум</p>
                </div>

                <div className='bg-white px-10 py-5 rounded-3xl absolute right-20 bottom-20 w-[550px]'>
                    <p className='text-4xl font-bold text-[#212121]'>Ежемесячная<br /> подписка</p>
                </div>

                <div className='bg-[#212121] px-7 py-5 rounded-3xl absolute right-0 bottom-4'>
                    <p className='text-white font-bold text-2xl'>со скидкой 40%</p>
                    <p className='text-white font-bold text-5xl'>от 900 000 сум</p>
                </div>

                <Image src={lineIcon} alt='Line icon' className='absolute -right-[35%] -top-10 -z-10' />
            </div>
        </section>
    );
};
