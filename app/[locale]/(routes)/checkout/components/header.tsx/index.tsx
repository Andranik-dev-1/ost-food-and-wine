"use client";
import IconButton from "@/components/ui/icon-button";
import { LuChevronLeft } from "react-icons/lu";
import { useRouter } from "next-intl/client";

const Header = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center">
      <IconButton onClick={() => router.back()} icon={<LuChevronLeft />} />
      <h1 className="text-3xl font-bold text-black">{title}</h1>
    </div>
  );
};

export default Header;
