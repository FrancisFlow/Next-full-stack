import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="home">
      <Image src={"/images/hero.png"} width={500} height={500} 
      alt='Hero image' />
    </div>
    </>
  )
}
