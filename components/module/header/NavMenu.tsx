import { Close } from "@/components/icons";
import BaseButton from "@/components/shared/buttons/BaseButton";
import { cn } from "@/utils/cn";
import { siteConfig } from "@/config/site";

interface NavMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const NavMenu = ({ isOpen, closeMenu }: NavMenuProps) => {
  return (
    <div
      className={cn(
        "h-full max-xl:absolute max-xl:right-0 max-xl:top-0 max-xl:z-[100] max-xl:min-h-svh max-xl:w-[340px] max-xl:overflow-y-auto max-xl:rounded-l-xl max-xl:bg-light max-xl:p-5 max-xl:transition max-xl:duration-[600ms] max-md:w-[240px] xl:flex xl:items-center xl:gap-7",
        isOpen
          ? "max-xl:no-doc-scroll max-xl:translate-x-0 max-xl:opacity-100"
          : "max-xl:translate-x-full max-xl:opacity-0"
      )}
    >
      <div className="relative flex max-w-full rounded-l-xl max-xl:flex-col xl:items-center">
        <div className="mb-14 flex items-center justify-between xl:hidden">
          <h3 className="text-[16px] font-bold uppercase leading-[20px] tracking-[1px]">
            Навігація
          </h3>

          <BaseButton
            variant="transparent"
            className="h-6 min-w-6 rounded-none p-0 xl:hidden"
            onClick={closeMenu}
          >
            <Close />
          </BaseButton>
        </div>

        <nav className="xl:mr-7">
          <ul className="flex max-xl:flex-col max-xl:gap-8">
            {siteConfig.navItems.map(({ href, label }) => (
              <li key={label}>
                <BaseButton href={href} variant="nav" onClick={closeMenu}>
                  {label}
                </BaseButton>
              </li>
            ))}
          </ul>
        </nav>

        <BaseButton variant="dark" className="h-[46px] w-[204px] max-xl:hidden">
          Зв&apos;язатися з нами
        </BaseButton>
      </div>
    </div>
  );
};

export default NavMenu;
