import Image from "next/image"

export default function Chatrooms() {
  return <div className="px-12">
    <div className="dblue-shadow bg-lblue rounded-lg max-w-7xl m-auto mt-8 w-fit border-2 border-dblue min-h-[500px]">
      <div className="w-full bg-[#4D6192] text-lblue font-barlow font-semibold text-6xl rounded-t-lg px-6 py-2">CHATROOMS</div>
      <div className="flex w-full justify-stretch items-stretch">
        <div className="flex-[1] pt-1 pl-3">
          <Image src={"/chatleft.svg"} alt="" width={353} height={673} />
        </div>
        <div className="flex-[3] flex items-end pt-4 border-l-4 border-dblue">
          <Image src={"/chatright.svg"} alt="" width={1111} height={706} />
        </div>
        <div></div>
      </div>
    </div>
  </div>
}