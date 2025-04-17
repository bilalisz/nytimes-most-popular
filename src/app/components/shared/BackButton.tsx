import React, { FC } from "react";
import Link from "next/link";
import { LeftArrow } from "../icons/svgs";

type PropsType = {
  route?: string;
};

const BackButton: FC<PropsType> = ({ route }) => {
  return (
    <Link
      href={route || "/"}
      className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
    >
      <LeftArrow />
      Back to Articles
    </Link>
  );
};

export default BackButton;
