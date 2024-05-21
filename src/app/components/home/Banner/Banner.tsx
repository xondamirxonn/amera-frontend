// import React from "react";
// import { BannerCarusel } from "../../home-carusel/banner-carusel";
// import { getBanner } from "@/services/getBanner";
// import Image from "next/image";

// const Banner = async () => {
//   const data = await getBanner();
//   return (
//     <BannerCarusel>
//       {data.results.map((item) => (
//         <div className="">
//           <Image
//             priority
//             width={200}
//             height={200}
//             className="w-full max-h-[500px] min-h-[300px] xs:min-h-[300px] sm:h-[500px]  ml:h-[600px] object-cover bg-center "
//             src={item.image}
//             alt={item.title}
//           />
//           <div className="">
//             <h1 className="text-medium text-xl">{item.title}</h1>
//             <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
//           </div>
//         </div>
//       ))}
//     </BannerCarusel>
//   );
// };

// export default Banner;

import React from "react";
import { BannerCarusel } from "../../home-carusel/banner-carusel";
import { getBanner } from "@/services/getBanner";

const Banner = async () => {
  const data = await getBanner();
  return (
    <BannerCarusel>
      {data.results.map((item) => (
        <div key={item.id} className="relative w-full max-h-[500px] min-h-[300px] xs:min-h-[300px] sm:h-[500px] ml:h-[600px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute  inset-0 bg-black bg-opacity-30 text-start flex flex-col justify-center items-start p-5">
            <h1 className="text-white text-2xl font-bold">{item.title}</h1>
            <p className="text-white mt-2 " dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </div>
        </div>
      ))}
    </BannerCarusel>
  );
};

export default Banner;
