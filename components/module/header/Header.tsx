"use client";

import { useState } from "react";
import Link from "next/link";

import { BurgerIcon, Logo } from "@/components/icons";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import BaseButton from "@/components/shared/buttons/BaseButton";

import NavMenu from "./NavMenu";

const Header = () => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

  const openMenu = () => setIsNavMenuOpened(true);
  const closeMenu = () => setIsNavMenuOpened(false);

  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center rounded-b-xl bg-white bg-opacity-25 shadow-[inset_0px_-3px_34px_0px_rgba(255,115,0,0.10)] backdrop-blur-[26px] xl:h-[90px]">
      <div className="container flex h-full max-w-[1280px] items-center justify-between">
        <Link href="/" className="cursor-pointer">
          <Logo className="h-[18px] w-[129px] xl:h-6 xl:w-[170px]" />
        </Link>

        <NavMenu isOpen={isNavMenuOpened} closeMenu={closeMenu} />

        <BaseButton
          variant="transparent"
          className="h-6 min-w-6 rounded-none p-0 xl:hidden"
          onClick={openMenu}
          ariaLabel="Відкрити мобільне меню"
        >
          <BurgerIcon />
        </BaseButton>

        <Backdrop onClick={closeMenu} isVisible={isNavMenuOpened} />
      </div>
    </header>
  );
};

export default Header;
