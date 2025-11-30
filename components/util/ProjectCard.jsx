"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ProjectCard(props) {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure window is defined (client-side)
      const userAgent = navigator.userAgent;
      setIsIOS(/iPhone|iPad|iPod/i.test(userAgent));
    }
  }, []);

  return (
    <CardContainer className="inter-var py-5">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4 relative h-60">
          <Image
            src={props.image}
            fill
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt={props.alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 mt-2 dark:text-white"
        >
          {props.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {props.description}
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            target="__blank"
            href={isIOS ? props.iosLink : props.link}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            View Project
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
