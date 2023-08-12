"use client";
import { FaFacebook, FaViber, FaMapMarkerAlt } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
// import CommentForm from "./comment-form";
import Container from "../ui/container";
import Link from "next-intl/link";
import FooterForm from "./footer-form";
import { isMobile } from "@/lib/utils";
import { useEffect, useState } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      {!isMobile() && (
        <footer className="border-t-2 border-orange-600 bg-neutral-100">
          <Container>
            <div className="text-center my-5 mt-8">
              <h3 className="font-bold text-orange-600 text-xl sm:text-2xl lg:text-3xl sm:max-w-2xl max-w-xs mb-2 mx-auto">
                {"Ուղարկել Գնահատական"}
              </h3>
              <p>{"Ավելացրեք ձեր մեկնաբանությունը, դա մեզ համար կարևոր է"}</p>
            </div>

            <FooterForm />

            <div className="flex justify-center mb-3">
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/%D5%95%D5%BD%D5%BF+%D5%A3%D5%AB%D5%B6%D5%AB+%D6%87+%D5%B8%D6%82%D5%BF%D5%A5%D5%AC%D5%AB%D6%84/@40.1863517,44.5067303,19z/data=!4m6!3m5!1s0x406abd1cd8698cd1:0x9db6587a27e7704b!8m2!3d40.1860145!4d44.5074907!16s%2Fg%2F11c7wf0zb0"
                className="me-3"
              >
                <span className="mr-2 flex items-center">
                  <FaMapMarkerAlt className="text-orange-600 mr-1 text-lg" />
                  {"Սարյան փող., 16 շենք"}
                </span>
              </Link>
              <Link href="tel:+37410234334">
                <span className="flex items-center">
                  <IoCall className="text-orange-600 mr-1 text-lg" />
                  010 234 334
                </span>
              </Link>
            </div>

            <div className="flex justify-center mb-8">
              <Link
                href="https://www.facebook.com/OstFoodsAndWine/"
                target="_blank"
                className="mr-3"
              >
                <FaFacebook className="text-4xl text-orange-600" />
              </Link>
              <Link
                href="https://www.instagram.com/ost.restaurant/"
                target="_blank"
                className="mr-3"
              >
                <SlSocialInstagram className="text-4xl text-orange-600" />
              </Link>
              <Link href="#">
                <FaViber className="text-4xl text-orange-600" />
              </Link>
            </div>
          </Container>
          <div className="mx-auto py-8 bg-black/90">
            <p className="text-center text-xs text-white">
              &copy; 2023 Store, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
