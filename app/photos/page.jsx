import dog1 from "./../../public/images/dog1.png";
import dog2 from "./../../public/images/dog2.png";
import dog3 from "./../../public/images/dog3.png";
import dog4 from "./../../public/images/dog4.png";
import Image from "next/image";

const images = [dog1, dog2, dog3, dog4];

const Page = () => {
  return (
    <div>
      <h1 className="grid-cols-1 mb-8 text-2xl font-semibold md:grid-cols-2">
        My Photos
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((item, index) => (
          <div key={index} className="relative overflow-hidden h-60">
            <Image
              fill
              src={item}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Picture of my dog"
              quality={50}
              placeholder="blur"
              priority={index === 0 || index === 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
