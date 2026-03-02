"use client"
import Image from "next/image"
import Section from "../../global/Wrapper"
import Typewriter from "../gsap/typewritter"

export default function Hero() {

  return (
    <Section
      id="hero"
      className="relative h-[100vh] flex justify-center items-center overflow-hidden py-[72px] bg-[#0e0202]"
    >
      <div className="flex flex-col md:flex-row items-center md:gap-48 sm:gap-32 gap-8">

        <div className="text-white z-30 oxanium text-left">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e83838] to-[#c51f1f] blur-md opacity-70 animate-pulse"></div>
              <Image
                src="/assets/mccut.jpg"
                alt="myProfilePicture"
                className="object-cover rounded-sm relative z-10"
                width={400}
                height={400}
              />
            </div>
          </div>

          <h2 className="oxanium-semibold text-3xl sm:text-4xl md:text-7xl">
            HI! I am Faiz
          </h2>
          <h3 className="text-3xl sm:text-3xl md:text-7xl oxanium-bold">
            A{" "}
            <span className="text-[#e83838] inline-block w-[700px]">
              <Typewriter words={["Software Engineer", "Backend Developer", "Game Developer"]} />
            </span>
          </h3>
        </div>
      </div>
    </Section>
  )
}
