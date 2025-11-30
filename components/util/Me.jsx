import { CometCard } from "@/components/ui/comet-card";
import me from "@/public/img/me.jpeg";
import Image from "next/image";

export function Me() {
  return (
    <CometCard>
      <button
        type="button"
        className="flex w-3/4 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <Image
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
              alt="Invite background"
              src={me}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">Charles Ayomike</div>
        </div>
      </button>
    </CometCard>
  );
}
