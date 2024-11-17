import dog1 from "./../../public/images/dog1.png";
import dog2 from "./../../public/images/dog2.png";
import dog3 from "./../../public/images/dog3.png";
import dog4 from "./../../public/images/dog4.png";
import Image from "next/image";

const images = [dog1, dog2, dog3, dog4];

const Page = () => {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold">My Photos</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((item, index) => (
          <div key={index} className="relative overflow-hidden h-60">
            <Image
              fill
              src={item}
              className="object-cover w-full h-full"
              alt="Picture of my dog"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
