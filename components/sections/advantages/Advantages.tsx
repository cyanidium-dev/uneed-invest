import AdvantagesListMob from "./AdvantagesListMob";

const Advantages = () => {
  return (
    <section className="pb-[118px] pt-[74px]">
      <div className="container max-w-[500px] xl:max-w-[1280px]">
        <h2 className="mb-6 w-[210px] text-[24px] font-bold uppercase leading-none">
          Переваги нашої моделі
        </h2>

        <AdvantagesListMob />
      </div>
    </section>
  );
};

export default Advantages;
