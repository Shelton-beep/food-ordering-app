import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">
            Everything
            <br />
            is better
            <br />
            with a&nbsp;
            <span className="text-primary">Pizza</span>
          </h1>
          <p className="my-6 text-gray-500 text-sm">
            Pizza is the missing piece that makes a day complete, a simple yet
            delicious joy in life
          </p>
          <div className="flex gap-4 text-sm">
            <button className="bg-primary flex gap-2 text-white uppercase items-center py-2 px-4 rounded-full ">
              Order now
              <Right />
            </button>
            <button className="flex outline gap-2 py-2 px-4 rounded-full text-gray-600 font-semibold">
              Learn more
              <Right />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/pizzaImage.jpg"}
            alt={"pizza"}
            objectFit={"contain"}
            layout={"fill"}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
