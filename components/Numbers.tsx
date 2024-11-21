import React from "react";
import { numbers } from "@/constants";

const Numbers = () => {
  return (
    <section className="p-20 bg-primary w-full flex-center flex-between max-sm:px-0 flex flex-row max-md:flex-col max-md:gap-8">
      {numbers.map(({ number, ref }) => (
        <div key={ref} className="m-3">
          <p className="flex-center h2 max-sm:h2 text-white">{number}</p>
          <p className="flex-center paragraph-regular max-lg:body-regular mt-2 text-white">
            {ref}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Numbers;
