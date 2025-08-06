import {Header} from "@/components/Header";
import Image from "next/image";
import lineIcon from '@/public/Vector_5.svg';
import doorImage from '@/public/door.png';
import musorMan from '@/public/musorman.png';
import musorBag from '@/public/musorbag.png';
import blur from '@/public/blur.svg';

export default function Home() {
  return (
    <main className='overflow-x-hidden h-screen'>
        <Header />

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

                <Image src={lineIcon} alt='Line icon' className='absolute -right-[35%] -top-10 -z-10' />
            </div>
        </section>
    </main>
  );
}
