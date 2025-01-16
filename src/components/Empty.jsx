import React from "react";

const Empty = ({ img, txt }) => {
  return (
    <section className="w-full h-full grid place-content-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-gray-200 dark:text-gray-400 text-[120px] ">
          {img}
        </div>
        <p className="text-gray-500 text-center text-base md:text-xl lg:text-2xl ">
          {txt}
        </p>
      </div>
    </section>
  );
};

export default Empty;
