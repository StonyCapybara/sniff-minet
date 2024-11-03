import Image from "next/image";
import Link from "next/link";

export default function Map() {
  return <main className="w-fit flex justify-center items-center m-auto mt-12 pb-12">
    <div className="bg-lblue flex-[1] border-4 border-dblue rounded-3xl dblue-shadow w-fit m-auto">
      <div className="flex justify-stretch items-center p-3">
        <div className="bg-dlblue w-11 h-11 border-2 border-dblue rounded flex-shrink-0"></div>
        <div className="flex flex-col justify-between items-stretch flex-grow gap-1 m-4">
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
        </div>
        <div className="font-barlow font-semibold text-dblue text-4xl flex-shrink-0">MYSTERY MAP</div>
        <div className="flex flex-col justify-between items-stretch flex-grow gap-1 m-4">
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
          <div className="bg-dblue h-[2px] w-full min-w-7"></div>
        </div>
        <div className="flex w-fit gap-2 flex-shrink-0">
          <Link href={"/home"}>
            <div className="bg-dlblue w-11 h-11 border-2 border-dblue rounded flex items-end py-2 px-1">
              <div className="bg-dblue w-full h-1"></div>
            </div>
          </Link>
          <Link href={"/home"}>
            <div className="bg-dlblue w-11 h-11 border-2 border-dblue rounded flex items-center justify-center">
              <Image src={"/closebtnreal.svg"} alt="expand" height={32} width={32} />
            </div>
          </Link>
        </div>
      </div>
      <Image src={"/map.png"} alt="" width={1185} height={706} className="mx-8 mb-8" />
    </div>
  </main>
}