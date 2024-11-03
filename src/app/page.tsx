import Image from "next/image";
import ScrollToTopButton from "@/components/ScrollTopButton";
import GetStartedButton from "@/components/GetStartedButton";

export default function Landing() {
  return (
    <main>
      <div className="p-16 flex">
        <div className="flex-[2] flex flex-col gap-16">
          <div className="font-retro text-7xl text-ldblue text-shadow-accent">
            Like Scooby-Doo, but the mystery is yours to solve!
          </div>
          <div className="font-blatant text-accent text-4xl">
            <span className="font-bold font-barlow text-highlight">SNIFF</span> is a digital mystery-solving hub made by us, Mystery Inc.!
            It includes a map to track cases, a shop for detective gear, a forum for sharing leads,
            a space to make friends, and a clue board to organize all your discoveries.
            It&apos;s like having your own Scooby-Doo to help crack the case!
          </div>
          <GetStartedButton />
        </div>
        <div className="flex-[1]">
          <Image src={"/scooby.png"} alt="" width={593} height={739} className="object-contain" /></div>
      </div>
      <div className="h-[3px] bg-accent mx-16"></div>
      <div>
        <div className="font-retro text-pink text-8xl text-center mt-24 abtus">About Us</div>
        <Image src={"/aboutus.gif"} alt="" width={1000} height={1000} className="m-auto mt-12" />
      </div>
      <div className=" bg-[url('/abtusbg.png')] text-pink font-blatant text-5xl px-40 py-12 mt-24 text-center">
        Welcome to SNIFF, the coolest online forum created by us, Mystery Incorporated for like-minded mystery enthusiasts!
        This forum is a place where you can chat with fellow mystery lovers about all the odd events happening in your city—a digital
        clubhouse where you can share your own urban mysteries—whether it&apos;s a spooky manor or a ghost story from your neighborhood,
        everyone&apos;s welcome to join in the fun and try to solve it together while making great memories. The gang might not be around
        to help, but with our platform, we can guarantee you&apos;ll find people that can. <br /><br /><br /> On SNIFF, you&apos;ll find multiple
        threads brimming with ideas, theories, and plenty of laughs. Members can swap tips and clues like they&apos;re solving a case straight out
        of a Scooby-Doo episode! Whether you&apos;re brainstorming about a queer sound coming from the park, or trying to figure out those odd
        footprints on the ground, it&apos;s all about the adventure! Put on your thinking caps, and dive into the mystery-solving excitement,
        for our platform is the perfect spot to have fun while solving the unsolvable.
        <br />
        <br />
        <ScrollToTopButton />
      </div>
      <footer className="pt-32">
        <span className="text-white block font-barlow text-center text-3xl">&copy; 1995 Mystery Incorporated</span>
        <span className="text-white block font-barlow text-center text-3xl">Made with &#9825; by MINET</span>
      </footer>
    </main>
  );
}
