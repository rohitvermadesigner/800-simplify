"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";

const aboutList = [
  {
    title: "Value-Driven",
    des: "Efficient financial solutions priced smartly for your business and budget.",
  },
  {
    title: "Licensed",
    des: "Licensed by the Department of Economic Development (DED).",
  },
  {
    title: "Registered",
    des: "Registered with the Ministry of Economy (MoE).",
  },
  {
    title: "Certified",
    des: "ISO 9001:2015 certified.",
  },
];

function About() {
  return (
    <section className="relative bg-[#e4763d] text-[#fff]" id="about">
      <Image
        src="/images/icons/2sqare-outline-bg.png"
        alt=""
        width="100"
        height="0"
        className="w-48 absolute -top-12 -left-20"
      />
      <Image
        src="/images/icons/sqare-bg.png"
        alt=""
        width="100"
        height="0"
        className="w-48 absolute -bottom-24 -left-24"
      />
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-0 md:px-0 pb-88 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.8fr] gap-4 md:gap-8 items-center text-center md:text-left px-4 md:px-0">
          <div>
            <span className="uppercase text-xl md:text-2xl font-semibold text-[var(--purple)]">
              About Us
            </span>
            <h2 className="mt-5 text-[1.3rem] md:text-4xl font-bold">
              Ensuring Compliance is tight, <br className="hidden md:block" />
              while the Spends are light.
            </h2>
            <p className="mt-5">
              800-Simplify is the finance buddy you call when things get real.
              We understand that building and running a business requires
              significant investment. That&apos;s why we work with a service
              model that fits your business, placing the right structures and
              maintaining audit-ready books. Our objective is simple: Through
              our accounting, audit, and tax solutions, we take the weight off
              your shoulders so that you can shift your focus to things that
              truly matter - your vision, your people, and your operations.
            </p>
          </div>
          <div>
            <Image
              src="/images/about-800-simplify.png"
              alt=""
              width="1200"
              height="0"
              className="w-[40rem] absolute -right-12 md:right-0 bottom-0"
            />
          </div>
        </div>

        <div className="md:w-[60%] ml-4 md:ml-0">
          <Swiper
            className="mt-4 md:mt-16"
            modules={[Grid]}
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                grid: {
                  rows: 1,
                },
              },
              768: {
                slidesPerView: 2,
                grid: {
                  rows: 1,
                },
              },
              1024: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
          >
            {aboutList.map((item) => (
              <SwiperSlide key={item.title} className="!h-auto">
                <div className="bg-[var(--purple)] hover:shadow-lg p-4 rounded-lg h-full">
                  <div className="grid grid-cols-[0.1fr_1.9fr] items-start justify-start">
                    <Check className="w-10 mt-2" />
                    <div>
                      <h6 className="text-[1.2rem] font-bold mb-2">
                        {item.title}
                      </h6>
                      <p className="text-[0.9rem]">{item.des}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default About;
