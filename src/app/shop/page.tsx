import Image from "next/image"

export default function Shop() {
  return <div className="p-12">
    <div className="dblue-shadow bg-lblue rounded-lg max-w-7xl m-auto border-2 border-dblue min-h-[500px]">
      <div className="w-full bg-[#4D6192] text-lblue font-barlow font-semibold text-6xl rounded-t-lg px-6 py-2">SHOP</div>
      <div className="flex items-center justify-between px-7">
        <div className="font-barlow font-semibold text-dblue text-4xl flex items-end gap-3">
          <div>Sort by</div>
          <Image src={"/sort.png"} alt="" width={16} height={16} className="w-auto h-4 mb-2" />
        </div>
        <div><Image src={"/shopsearch.png"} priority alt="" width={128} height={32} /></div>
      </div>
      <Image src={"/shop.svg"} priority alt="" width={1294} height={562} className="px-12 py-8" />
    </div>
  </div>
}