import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <>
      <section className="hero mt-8">
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
          <div className="flex gap-4 text-sm items-center">
            <button
              type="button"
              className="bg-primary flex whitespace-nowrap uppercase items-center gap-2 mx-auto text-white rounded-full py-2"
            >
              Order now
              <Right />
            </button>

            <button
              type="button"
              className="flex whitespace-nowrap gap-2 uppercase mx-auto items-center text-gray-500 rounded-full px-8 py-2"
            >
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
