import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="max-w-md mx-auto text-gray-500 mt-4 flex flex-col gap-4">
          <p>
            lorem hagfjagjgajgyuauuyaguysafguauyasuayuasfg yafgagugafgua
            yafguasgfy ayfagyua fygasfasfu syfgufg sgf ysgfyusgf uyygfusfgaufg
            sdyfgus fg ayf yasufga zfgsg fsiu gs iggi
          </p>
          <p>
            lorem hagfjagjgajgyuauuyaguysafguauyasuayuasfg yafgagugafgua
            yafguasgfy ayfagyua fygasfasfu syfgufg sgf ysgfyusgf uyygfusfgaufg
            sdyfgus fg ayf yasufga zfgsg fsiu gs iggi
          </p>
        </div>
      </section>
      <section className="text-center my-8 ">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+263785463154"
          >
            +263 785 463 154
          </a>
        </div>
      </section>
    </>
  );
}
