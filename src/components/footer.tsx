import {
  CirclePlusIcon,
  CircleUserRoundIcon,
  HomeIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 h-16 w-full border-t-2 bg-white">
      <div className="m-auto flex h-full max-w-[480px] items-center justify-between p-2">
        <Link href="/" className="flex w-20 justify-center">
          <HomeIcon />
        </Link>
        <Link href="" className="flex w-20 justify-center">
          <SearchIcon />
        </Link>
        <Link href="" className="flex w-20 justify-center">
          <CirclePlusIcon />
        </Link>
        <Link href="" className="flex w-20 justify-center">
          <CircleUserRoundIcon />
        </Link>
      </div>
    </footer>
  );
}
