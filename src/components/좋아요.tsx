"use client";

import { HeartIcon } from "lucide-react";
import { useState } from "react";

export default function 좋아요() {
  const [like, setLike] = useState(0);
  const [a, b] = useState(false);

  const add = () => {
    setLike((prev) => prev + 1);
    b(true);
  };

  const rm = () => {
    setLike((prev) => prev - 1);
    b(false);
  };

  return (
    <div
      className="flex cursor-pointer items-center space-x-1 text-gray-500"
      onClick={a ? rm : add}
    >
      <HeartIcon className="h-4 w-4" color={!a ? "#6b7280" : "red"} />
      <span>좋아요 {like}</span>
    </div>
  );
}
