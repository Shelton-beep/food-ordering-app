import Image from "next/image";

const MenuItem = () => {
  return (
    <>
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="text-center">
          <Image
            src={"/pizzaImage.jpg"}
            alt="menuItem"
            width={100}
            height={100}
            className="max-h-auto max-h-24 block mx-auto"
          />
        </div>
        <h4 className="font-semibold my-3 text-xl">BBQ Pizza</h4>
        <p className="text-gray-500 text-sm">Lorem...</p>
        <button
          type="button"
          className="bg-primary mx-auto m-4 text-white rounded-full px-8 py-2"
        >
          Add to Cart $12
        </button>
      </div>
    </>
  );
};

export default MenuItem;
