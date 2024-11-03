import Image from "next/image";
import ScrollToTopButton from "@/components/ScrollTopBtn";

export default function Leaderboard() {
  const charData = [
    ["Shrek", 54],
    ["Spiderman", 50],
    ["Olaf", 47],
    ["Batman", 46],
    ["Robin", 43],
    ["Hrithik Roshan", 40],
    ["Henry Cavill", 34],
    ["Black Widow", 32],
    ["Pushan", 30],
  ]
  return <main>
    <div className="w-fit m-auto mt-24">
      <div className="font-retro text-highlight text-9xl text-shadow">Leaderboard</div>
      <div className="font-blatant text-dblue text-4xl relative bottom-5 left-48">Winner gets to meet the Mystery Inc.</div>
    </div>
    <div className="flex justify-center items-center gap-52 text-center font-barlow font-medium text-accent text-4xl mb-24">
      <div>
        <Image src={"/leaderboard2.png"} alt="" width={221} height={327} />
        <div className="font-semibold text-dblue mt-3">2nd</div>
        <div>Renaya (You)</div>
        <div>62 mysteries</div>
      </div>
      <div>
        <Image src={"/leaderboard1.png"} alt="" width={282} height={419} />
        <div className="font-semibold text-highlight mt-3">1st</div>
        <div>Ishita</div>
        <div>69 mysteries</div>
      </div>
      <div>
        <Image src={"/leaderboard3.png"} alt="" width={194} height={280} />
        <div className="font-semibold text-pink mt-3">3rd</div>
        <div>SRK</div>
        <div>57 mysteries</div>
      </div>
    </div>
    <div className="flex gap-6 flex-col justify-center items-stretch font-barlow text-cyellow text-5xl px-28">
      {charData.map(chararr => {
        const index = charData.indexOf(chararr) + 4;
        return <div key={index} className="bg-accent flex rounded-[22px] items-center justify-between">
          <div className="flex items-center gap-16">
            <Image src={`/leaderboard${index}.png`} alt="" height={105} width={105} />
            <div>{index}</div>
            <div>{chararr[0]}</div>
          </div>
          <div className="mr-16">{chararr[1]} mysteries</div>
        </div>
      })}
    </div>
    <div className="flex w-full justify-end">
      <ScrollToTopButton className={"w-fit my-8 mr-12 ml-auto"} />
    </div>
  </main>
}