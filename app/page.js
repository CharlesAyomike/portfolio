"use client";
import Header from "@/components/util/Header";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BlockOfCode } from "@/components/util/BlockOfCode";
import { Skills } from "@/components/util/Skills";
import { Me } from "@/components/util/Me";
import { Button } from "@/components/ui/moving-border";
import { TiDownload } from "react-icons/ti";
import { ProjectCard } from "@/components/util/ProjectCard";
import Contact from "@/components/util/Contact";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/img/lyvads.png",
    alt: "thumbnail",
    title: "Lyvads",
    description:
      "Lyvads is a platform that connects creators with businesses, enabling seamless content collaborations through structured requests, fast media delivery, and secure payments.",
    link: "https://play.google.com/store/apps/details?id=com.lyvads.lyvads",
    iosLink: "https://apps.apple.com/ng/app/lyvads/id6741110030,
  },
  {
    image: "/img/ea.png",
    alt: "thumbnail",
    title: "Everythingafrican",
    description:
      "I designed and built the EverythingAfrican mobile app, enabling users to discover, buy, and interact with African-inspired products seamlessly. I handled the full mobile experience: UI/UX, feature development, API integration, state management, and performance optimization",
    iosLink: "https://apps.apple.com/us/app/everythingafrican/id6737781846",
    link: "https://play.google.com/store/apps/details?id=com.lascom.everythingafrican",
  },
  {
    image: "/img/cuzoo.jpg",
    alt: "thumbnail",
    title: "Cuzoo",
    description:
      "I designed the full dashboard interface for Cuzoo, a Nigeria-based courier and logistics app that connects users with verified riders for package pickup & delivery. The dashboard supports core workflows like delivery requests, rider/agent management, package tracking, and order status updates — all wrapped in a clean, intuitive UI to streamline logistics operations.",
    link: "https://play.google.com/store/apps/details?id=com.cuzoo&hl=en",
    iosLink:
      "https://apps.apple.com/ng/app/cuzoo-package-delivery/id6443609618",
  },
];
export default function Home() {
  return (
    <div>
      <div className="fixed w-full z-50">
        <Header />
      </div>
      <div className="md:w-4/5 mx-auto pt-16 lg:pt-28 px-5 md:px-0">
        <div
          id="about"
          className="w-full h-[500px] pt-10 bg-cover bg-center lg:flex"
          style={{ backgroundImage: "url('/hero-background-lines.svg')" }}
        >
          <div className="flex-2 mx-auto">
            <motion.h5
              initial={{ y: 25, x: 40, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-xl"
            >
              Hi there, i'm
            </motion.h5>
            <motion.h3
              initial={{ y: 25, x: -40, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-4xl my-3 font-semibold"
            >
              {" "}
              Charles Ayomike
            </motion.h3>
            <motion.h3
              initial={{ y: 25, x: 40, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-xl"
            >
              a{" "}
              <span className="bg-purple-500 rounded text-white px-2">
                fullstack engineer
              </span>{" "}
              passionate about turning tough problems into smooth, intuitive
              experiences.
            </motion.h3>

            <motion.div
              initial={{ y: 25, x: -40, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex gap-2 mt-4"
            >
              <Link href={""}>
                <AiOutlineTwitter size={30} />
              </Link>

              <Link href={""}>
                <AiOutlineLinkedin size={30} />
              </Link>

              <Link href={""}>
                <AiOutlineGithub size={30} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 25, x: 40, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="gap-3 flex mt-4"
            >
              <button className="flex gap-2 cursor-pointer items-center justify-center bg-cyan-100 px-2 dark:bg-cyan-950 rounded-3xl">
                <TiDownload />
                Download resume
              </button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Hire me
              </Button>
            </motion.div>
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* <Me /> */}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          id="stacks"
        >
          <div className="mb-14 text-center">
            <h4 className="text-3xl font-medium">
              Skills and <span className="text-purple-500">Expertise</span>
            </h4>

            <p>
              Tools and technologies I use to build modern, responsive, and
              scalable web applications.
            </p>
          </div>

          <div className="lg:flex gap-3">
            <div className="flex-1 w-full lg:w-1/2 mb-5 lg:mb-0">
              <div className="w-full">
                <Skills />
              </div>
            </div>
            <div className="flex-1 w-full lg:w-1/2">
              <BlockOfCode />
            </div>
          </div>
        </motion.div>

        <div id="projects">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mb-5  mt-16 text-center"
          >
            <h4 className="text-3xl font-medium">
              My <span className="text-purple-500">Projects</span>
            </h4>

            <p>
              A showcase of my work, featuring modern web and mobile
              applications built with cutting-edge technologies
            </p>
          </motion.div>

          <div className="lg:flex lg:flex-wrap lg:gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>

        <div id="contact" className="my-14">
          <div className="mb-14 text-center">
            <h4 className="text-3xl font-medium">Contact Me</h4>

            <p>
              you can reach me through any of the medium below
            </p>
          </div>
          <Contact />
        </div>
      </div>

      <footer className="p-5">
        <div className="flex justify-center">
          Copyright @2025 CHARLES AYOMIKE. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
