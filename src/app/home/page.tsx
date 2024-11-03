import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <main className="pb-12">
    <div className="flex w-full justify-center items-center gap-12 mt-5">
      <Image src={"/renaya.png"} width={192} height={192} alt="" />
      <div className="font-retro text-dblue text-6xl text-center" style={{ textShadow: "4px 4px 0px #A5876BA1" }}>Renaya&apos;s Mystery Board</div>
    </div>
    <div className="flex justify-center items-center gap-12 px-32 mt-20">
      <div className="bg-lpink flex-[1] border-4 border-dblue rounded-3xl dblue-shadow h-full">
        <div className="flex justify-between items-center p-3">
          <div className="bg-[#F3BACB] w-11 h-11 border-2 border-dblue rounded"></div>
          <div className="font-barlow font-semibold text-dblue text-4xl">ARCHIVE</div>
          <div className="flex gap-2">
            <div className="bg-[#F3BACB] w-11 h-11 border-2 border-dblue rounded flex items-end py-2 px-1">
              <div className="bg-dblue w-full h-1"></div>
            </div>
            <div className="bg-[#F3BACB] w-11 h-11 border-2 border-dblue rounded flex items-center justify-center">
              <Image src={"/expandarrow.png"} alt="expand" height={32} width={32} />
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-wrap justify-center py-8">
          {[1, 2, 3, 4].map(num => <Image src={`/archive${num}.png`} key={num} alt="" width={300} height={192} className="object-contain w-[40%]" />)}
        </div>
      </div>
      <div className="flex-[1] flex flex-col justify-between items-stretch gap-12">
        <div className="bg-lblue flex-[1] border-4 border-dblue rounded-3xl dblue-shadow">
          <div className="flex justify-between items-center p-3">
            <div className="bg-dlblue w-11 h-11 border-2 border-dblue rounded"></div>
            <div className="font-barlow font-semibold text-dblue text-4xl">CLUE BOARD</div>
            <div className="flex gap-2">
              <div className="bg-dlblue w-11 h-11 border-2 border-dblue rounded flex items-end py-2 px-1">
                <div className="bg-dblue w-full h-1"></div>
              </div>
              <div className="bg-dlblue w-11 h-11 border-2 border-dblue rounded flex items-center justify-center">
                <Link href={"/clueboard"}>
                  <Image src={"/expandarrow.png"} alt="expand" height={32} width={32} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-6 lg:gap-8 justify-center py-8">

            {[1, 2, 3, 4].map(num => <Link href={"/clueboard"} key={num} className="object-contain w-[20%]"><Image src={`/clue${num}.png`} alt="" width={300} height={192} /></Link>)}
          </div>
        </div>
        <div className="bg-lblue flex-[1] border-4 border-dblue rounded-3xl dblue-shadow">
          <div className="flex justify-between items-center p-3">
            <div className="bg-dlblue w-11 h-11 border-2 border-dblue rounded"></div>
            <div className="font-barlow font-semibold text-dblue text-4xl">MYSTERY MAP</div>
            <div className="flex gap-2">
              <div className="bg-dlblue w-11 h-11 border-2 border-dblue rounded flex items-end py-2 px-1">
                <div className="bg-dblue w-full h-1"></div>
              </div>
              <Link href={"/map"}>
                <div className="bg-dlblue w-11 h-11 border-2 border-dblue rounded flex items-center justify-center">
                  <Image src={"/expandarrow.png"} alt="expand" height={32} width={32} />
                </div>
              </Link>
            </div>
          </div>
          <Link href={"/map"}>
            <Image src={"/mapcropped.png"} alt="" width={592} height={113} className="m-auto w-[90%] my-7" />
          </Link>
        </div>
      </div>
    </div>
  </main>
}