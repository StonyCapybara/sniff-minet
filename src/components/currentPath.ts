"use client";

import { usePathname } from "next/navigation";

const CurrentPath = () => {
  const pathname = usePathname();

  return pathname;
};

export default CurrentPath;
