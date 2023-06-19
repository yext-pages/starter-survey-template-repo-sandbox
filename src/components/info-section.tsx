import * as React from "react";
import { twMerge } from "tailwind-merge";
interface InfoSectionProps {
  title: string;
  titleCssStyles?: string;
  children?: React.ReactNode;
}

const InfoSection = ({
  title,
  titleCssStyles,
  children,
}: InfoSectionProps): JSX.Element => {
  return (
    <div className="w-full text-center my-4 rounded-2xl bg-gray-200 px-8 py-8 font-display shadow-lg">
      <h2 className={twMerge("pb-2 text-2xl font-bold", titleCssStyles)}>
        {title}
      </h2>
      {children}
    </div>
  );
};

export default InfoSection;
