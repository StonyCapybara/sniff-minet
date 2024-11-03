'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Loading() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      document.getElementById("loading1")?.classList.add("hidden");
      if (pathname == "/") {
        document.getElementById("loading2")?.classList.remove("hidden");
        setTimeout(() => { setOpen(false) }, 1000)
      }
      else setOpen(false);
    }, 3000);
  }, [pathname]);

  return <>{open ? <div className='loading-bg fixed top-0 left-0 w-full h-full flex justify-center items-center z-50'>
    <div>
      <Image src={"/loading1.gif"} height={512} width={2048} alt='' id='loading1' unoptimized />
      <Image src={"/loading2.png"} height={512} width={2048} alt='' id='loading2' className='hidden max-w-xl' />
    </div>
  </div> : <></>}</>;
}