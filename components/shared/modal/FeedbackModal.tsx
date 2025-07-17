import type { RefObject } from "react";
import Image from "next/image";

import BaseModal from "./BaseModal";

interface IFeedbackModalProps {
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement>;
  isError: boolean;
}

const FeedbackModal = ({
  dialogRef,
  onClose,
  isError,
}: IFeedbackModalProps) => {
  const title = isError ? "Упс!" : "Дякуємо!";
  const description = isError
    ? "Щось пішло не за планом! Спробуйте пізніше"
    : "Найближчим часом наш менеджер звʼяжеться з Вами.";

  return (
    <BaseModal dialogRef={dialogRef} onClose={onClose}>
      <div className="h-hull w-full pt-9 text-center md:pt-10">
        <p
          id="modal-title"
          className="mb-3 text-[28px] font-bold uppercase leading-none"
        >
          {title}
        </p>
        <p className="mx-auto mb-8 w-[202px] font-manrope font-light md:w-[250px] md:text-[16px]">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-[193px] w-full md:h-[191px]">
        <Image
          src={"/images/components/modal-bg-mob.webp"}
          alt="Фонове зображення"
          fill
          sizes="347px"
          className="object-cover md:hidden"
        />

        <Image
          src={"/images/components/modal-bg-desk.webp"}
          alt="Фонове зображення"
          fill
          sizes="347px"
          className="object-cover max-md:hidden"
        />
      </div>
    </BaseModal>
  );
};

export default FeedbackModal;
