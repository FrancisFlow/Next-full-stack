import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className="grid grid-flow-col ">
      <div className="">
        <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' >Better design for your digital products.</h1>
        <h3 className='p-4 text-2xl' >Turning your idea into Reality. We bring together the teams from the global tech industry</h3>
        <div className="btn">
        <Link className="bg-green-500 px-1 rounded-sm"  href="/portfolio" >
          See Our works
        </Link>
          
        </div>

      </div>
      <div className="imageContainer">
        <Image src={"/images/hero.png"} width={500} height={500} 
      alt='Hero image' />
      </div>
      
    </div>
    </>
  )
}
