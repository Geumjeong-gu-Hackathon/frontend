"use client";

import {
  CirclePlusIcon,
  CircleUserRoundIcon,
  HomeIcon,
  MessageCircleMoreIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [selected, setSelected] = useState(0);

  return (
    <footer className="fixed bottom-0 z-50 h-16 w-full border-t-2 bg-white">
      <div className="m-auto flex h-full max-w-[480px] items-center justify-between p-2">
        <Link
          href="/"
          className="flex w-20 flex-col items-center justify-center gap-1 text-xs font-semibold"
          onClick={() => setSelected(1)}
        >
          <HomeIcon color={selected === 1 ? "#0D7CFF" : "#BCBCBC"} />
          <span
            className={selected === 1 ? "text-[#0D7CFF]" : "text-[#BCBCBC]"}
          >
            홈
          </span>
        </Link>
        <Link
          href="/search"
          className="flex w-20 flex-col items-center justify-center gap-1 text-xs font-semibold"
          onClick={() => setSelected(2)}
        >
          <SearchIcon color={selected === 2 ? "#0D7CFF" : "#BCBCBC"} />
          <span
            className={selected === 2 ? "text-[#0D7CFF]" : "text-[#BCBCBC]"}
          >
            검색
          </span>
        </Link>
        <Link
          href="/post"
          className="flex w-20 flex-col items-center justify-center gap-1 text-xs font-semibold"
          onClick={() => setSelected(3)}
        >
          <CirclePlusIcon color={selected === 3 ? "#0D7CFF" : "#BCBCBC"} />
          <span
            className={selected === 3 ? "text-[#0D7CFF]" : "text-[#BCBCBC]"}
          >
            게시
          </span>
        </Link>
        <Link
          href="/qna"
          className="flex w-20 flex-col items-center justify-center gap-1 text-xs font-semibold"
          onClick={() => setSelected(4)}
        >
          <MessageCircleMoreIcon
            color={selected === 4 ? "#0D7CFF" : "#BCBCBC"}
          />
          <span
            className={selected === 4 ? "text-[#0D7CFF]" : "text-[#BCBCBC]"}
          >
            Q&A
          </span>
        </Link>
        <Link
          href="/my"
          className="flex w-20 flex-col items-center justify-center gap-1 text-xs font-semibold"
          onClick={() => setSelected(5)}
        >
          <CircleUserRoundIcon color={selected === 5 ? "#0D7CFF" : "#BCBCBC"} />
          <span
            className={selected === 5 ? "text-[#0D7CFF]" : "text-[#BCBCBC]"}
          >
            MY
          </span>
        </Link>
      </div>
    </footer>
  );
}
