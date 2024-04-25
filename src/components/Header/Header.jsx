// import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { Nav } from "./Nav";
import Hamburger from "../Hamburger/Hamburger";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// { useRef, useState }

export const Header = () => {
  // const [isActive, setIsActive] = useState(false);
  const burger = useRef();

  return (
    <div>
      <div className="absolute top-0 text-white z-10 flex justify-between w-full">
        <div>
          <p className="m-0 pl-1">
            © Code By Steve Drewery{" "}
            <a href="https://www.linkedin.com/in/steve-drewery-b84191234/">
              <img
                src="\Images\LinkedIn.svg"
                width={40}
                height={0}
                alt=""
              ></img>
            </a>
          </p>
        </div>
        <div className="pr-5">
          <Nav />
        </div>
      </div>
      <div className="absolute right-0 flex z-10" ref={burger}>
        <Hamburger />
      </div>
    </div>
  );
};
