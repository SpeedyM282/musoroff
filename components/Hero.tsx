import Image from "next/image";
import blur from "@/public/blur.svg";
import lineIcon from "@/public/Vector_5.svg";
import musorBag from "@/public/musorbag.png";
import musorMan from "@/public/musorman.png";
import doorImage from "@/public/door.png";
import musoroffWhite from "@/public/musoroff-white.png";

export const Hero = () => {
    return (
        <section className='p-0 sm:p-20 flex justify-center items-center relative mt-20'>
            <div
                className='max-w-[1260px] mx-5 w-full h-[600px] sm:h-[450px] xl:h-[550px] rounded-3xl relative'
                style={{backgroundImage:'linear-gradient(0.891turn, rgba(57, 228, 152, 1) 0%, rgba(44, 172, 115, 1) 100%)'}}
            >
                <Image src={blur} alt='Blur icon' className='absolute -left-72 -bottom-28 h-[700px]' />
                <Image src={lineIcon} alt='Line icon' className='absolute -left-[95%] -z-10' />

                <Image src={musorBag} alt='Bag' className='hidden md:block absolute left-10 xl:left-20 bottom-10 h-[200px] w-[150px] z-10' />
                <Image src={musorMan} alt='Man' className='absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-5 lg:left-20 xl:left-40 bottom-0 h-[110%] w-[90%] min-w-[290px] max-w-[400px] sm:w-[250px] xl:w-[350px] z-10' />

                <Image src={doorImage} alt='Door image' className='absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[30%] xl:left-[20%] top-[5%] h-[90%] sm:w-[420px] xl:w-[550px]' />

                <div className='absolute -right-5 -top-5 sm:-right-10 sm:-top-10 rounded-[28px] overflow-hidden p-1 bg-white size-[90px] sm:size-[140px] -rotate-[30deg]' style={{boxShadow: '0px 10px 10px 0px rgba(45,134,96,1)'}}>
                    <div className='bg-[#69b47a] px-2 pt-5 rounded-[26px] size-full'>
                        <Image src={musoroffWhite} alt='Door image' className='object-fit size-full' />
                    </div>
                </div>

                <div className='bg-white px-5 py-3 sm:px-10 sm:py-5 rounded-4xl absolute z-30 right-20 top-[50%] sm:top-[20%] w-56 sm:w-72 lg:w-96 xl:w-[550px]'>
                    <p className='text-2xl lg:text-4xl xl:text-6xl font-bold text-[#212121]'>Выбросим ваш<br /> мусор за</p>
                </div>

                <div className='bg-[#212121] px-4 sm:px-7 py-3 sm:py-5 rounded-4xl absolute z-30 right-[1%] lg:-right-[1%] xl:-right-[8%] top-[60%] sm:top-[32%] lg:top-[36%]'>
                    <p className='text-white font-bold text-2xl lg:text-4xl xl:text-6xl'>139 000 сум</p>
                </div>

                <div className='bg-white px-5 sm:px-10 py-3 sm:py-5 rounded-4xl absolute z-30 right-20 bottom-12 sm:bottom-20 w-56 sm:w-72 lg:w-96 xl:w-[550px]'>
                    <p className='text-xl lg:text-2xl xl:text-4xl font-bold text-[#212121]'>Ежемесячная<br /> подписка</p>
                </div>

                <div className='bg-[#212121] px-5 py-3 sm:px-7 sm:py-5 rounded-4xl absolute z-30 -right-5 lg:right-[6%] xl:right-0 xl:bottom-4 sm:bottom-7 -bottom-1'>
                    <p className='text-white font-bold text-xl xl:text-2xl'>со скидкой 40%</p>
                    <p className='text-white font-bold text-2xl xl:text-5xl'>от 900 000 сум</p>
                </div>

                <Image src={lineIcon} alt='Line icon' className='absolute -right-[35%] -top-10 -z-10' />
            </div>
        </section>
    );
};
