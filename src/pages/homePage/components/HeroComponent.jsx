import React from "react";
import { cn } from "@/lib/utils";
import Tesla from "@/assets/tesla.png";

function HeroComponent() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[400px] rounded-2xl flex flex-col items-center justify-center shadow"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5)),url(${Tesla})`,
      }}
    >
      <h1 className="font-bold text-7xl text-white drop-shadow">
        Win a Tesla for a $100!
      </h1>
      <h4 className="font-medium text-xl text-white drop-shadow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        venenatis cursus bibendum. 
      </h4>
    </div>
  );
}

export default HeroComponent;
