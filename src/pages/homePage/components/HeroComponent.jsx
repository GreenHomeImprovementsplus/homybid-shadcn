import React from "react";
import { cn } from "@/lib/utils";
import Tesla from "@/assets/tesla.png";

function HeroComponent() {
  return (
    <section
      className={cn(
        "h-[50vh]",
        "flex",
        "flex-col",
        "items-center",
        "bg-cover",
        "bg-center",
        "bg-no-repeat",
        "rounded",
        "overflow-hidden",
        "rounded-2xl",
      )}
      style={{ backgroundImage: `url(${Tesla})` }}
    >
      <div
        className={cn(
          "flex-1",
          "flex",
          "justify-center",
          "items-center",
          "text-center",
          "text-white",
          "p-4"
        )}
      >
        <div>
          <h1 className={cn("text-7xl", "font-bold", "mb-4")}>
            Win a Tesla for a $100
          </h1>
          <p className={cn("text-lg", "font-light")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            venenatis cursus bibendum
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
