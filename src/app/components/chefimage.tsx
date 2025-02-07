// import React from "react";
// import Image from "next/image";

// interface ChefImageProps {
//   name: string;
//   detail: string;
//   image: string;
// }

// const ChefImage: React.FC<ChefImageProps> = ({ name, detail, image }) => {
//   return (
//     <div className="flex w-[312px] h-[446px] relative bg-red-400">
//       {/* Using the dynamic prop values for image, alt text, etc. */}
//       <Image
//         src={image}  // Dynamic image prop
//         alt={name}  // Using name for alt text
//         width={312}
//         height={446}
//         className="object-cover"
//       />
//       <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
//         <h3 className="text-xl">{name}</h3>
//         <p>{detail}</p>
//       </div>
//     </div>
//   );
// };

// export default ChefImage;
