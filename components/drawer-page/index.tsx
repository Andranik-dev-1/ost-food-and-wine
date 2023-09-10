"use client";
import React, { useState } from "react";
import { Drawer, DrawerProps } from "antd";
import { useRouter } from "next-intl/client";
import IconButton from "../ui/icon-button";
import { LuChevronLeft } from "react-icons/lu";

interface DrawerPageProps extends DrawerProps {
  onCloseDrawer?: () => void;
}

const DrawerPage = ({
  children,
  placement,
  open,
  onCloseDrawer,
}: DrawerPageProps) => {
  const router = useRouter();

  const onCloseHandler = () => {
    onCloseDrawer ? onCloseDrawer() : router.back();
  };
  return (
    <Drawer
      placement={placement}
      push={false}
      height="100%"
      width="100%"
      open={open}
      onClose={onCloseHandler}
      closeIcon={
        <span className="rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition">
          <LuChevronLeft />
        </span>
      }
      headerStyle={{
        top: 24,
        right: 0,
        zIndex: 1,
        background: "transparent",
        padding: 20,
        paddingBottom: 10,
        paddingTop: 50,
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <div className="pb-16">{children}</div>
    </Drawer>
  );
};

export default DrawerPage;
