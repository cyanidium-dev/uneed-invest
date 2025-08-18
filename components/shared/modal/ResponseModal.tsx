import type { RefObject } from "react";
import Image from "next/image";

import { cn } from "@/utils/cn";
import { downloadFile } from "@/utils/downloadFile";

import BaseButton from "../buttons/BaseButton";
import BaseModal from "./BaseModal";

interface IResponseModalProps {
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement>;
  isError: boolean;
  isPresentation?: boolean;
}

const ResponseModal = ({
  dialogRef,
  onClose,
  isError,
  isPresentation = false,
}: IResponseModalProps) => {
  const title = isError ? "Упс!" : "Дякуємо!";
  const description = isError
    ? "Щось пішло не за планом! Спробуйте пізніше"
    : "Найближчим часом наш менеджер звʼяжеться з Вами.";

  return (
    <BaseModal
      dialogRef={dialogRef}
      onClose={onClose}
      modalClassName="overflow-hidden"
    >
      <div className="h-hull relative z-[1] w-full pt-9 text-center md:pt-10">
        <p
          id="modal-title"
          className="mb-3 text-[28px] font-bold uppercase leading-none"
        >
          {title}
        </p>
        <p className="mx-auto mb-8 w-[202px] font-manrope font-light md:w-[250px] md:text-[16px]">
          {description}
        </p>

        {isPresentation && (
          <BaseButton
            variant="dark"
            className="w-[248px]"
            onClick={() =>
              downloadFile(
                "/files/presentation.pdf",
                "Uneed Invest презентація.pdf"
              )
            }
          >
            Отримати презентацію
          </BaseButton>
        )}
      </div>

      <div
        className={cn(
          "absolute left-0 h-[193px] w-full md:h-[191px]",
          isPresentation ? "-bottom-10" : "bottom-0"
        )}
      >
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

export default ResponseModal;
