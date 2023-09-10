"use client";
import { Dropdown } from "antd";
import { LuGlobe } from "react-icons/lu";
import Image from "next/image";
import type { MenuProps } from "antd";
import { usePathname, useRouter } from "next-intl/client";
import Button from "@/components/ui/button";

const LangSwitcher = ({ buttonClassName }: { buttonClassName?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="px-1 my-1 flex justify-center"
          onClick={() => switchLang("am")}
        >
          <Image src={`/images/am.svg`} width="20" height="15" alt="am" />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="px-1 my-1 flex justify-center"
          onClick={() => switchLang("ru")}
        >
          <Image src={`/images/ru.svg`} width="20" height="15" alt="ru" />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          className="px-1 my-1 flex justify-center"
          onClick={() => switchLang("en")}
        >
          <Image src={`/images/en.svg`} width="20" height="15" alt="en" />
        </div>
      ),
    },
  ];
  const switchLang = (lang: string) => {
    router.replace(pathname, { locale: lang });
  };
  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      trigger={["click"]}
      overlayClassName={"z-9000"}
    >
      <Button
        className={`${buttonClassName} flex items-center rounded-full bg-transparent px-2 py-1`}
      >
        <LuGlobe />
      </Button>
    </Dropdown>
  );
};

export default LangSwitcher;
