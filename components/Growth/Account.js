import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Acount() {
  const paramList = [
    {
      number: 1000,
      minNumber: 10,
      heading1: 'Laboratories',
      heading2: '($1.1billion global industry CAGR 15.4%)'
    },
    {
      number: 8500,
      minNumber: 50,
      heading1: 'Growers',
      heading2: '($1.8 billion globally, CAGR 21.4%)'
    },
    {
      number: 40000,
      minNumber: 200,
      heading1: 'Dispensaries and Retailers',
      heading2: '($13.2 billion globally, CAGR 25.5%)'
    },
    {
      number: 100000,
      minNumber: 500,
      heading1: 'Product Manufacturers',
      heading2: '($18.38 billion globally, CAGR 21.15%)'
    },
    {
      number: 289000000,
      minNumber: 1000000,
      heading1: 'Consumers and Patients',
      heading2: '($323.9 billion globally, CAGR 21.4%)'
    },
  ]

  const parameterRef = useRef([]);
  const [parameters, setParameters] = useState([
    {
      number: 10,
      minNumber: 10,
      heading1: 'Laboratories',
      heading2: '($1.1billion global industry CAGR 15.4%)'
    },
    {
      number: 50,
      minNumber: 50,
      heading1: 'Growers',
      heading2: '($1.8 billion globally, CAGR 21.4%)'
    },
    {
      number: 200,
      minNumber: 200,
      heading1: 'Dispensaries and Retailers',
      heading2: '($13.2 billion globally, CAGR 25.5%)'
    },
    {
      number: 500,
      minNumber: 500,
      heading1: 'Product Manufacturers',
      heading2: '($18.38 billion globally, CAGR 21.15%)'
    },
    {
      number: 1000000,
      minNumber: 1000000,
      heading1: 'Consumers and Patients',
      heading2: '($323.9 billion globally, CAGR 21.4%)'
    },
  ])

  useEffect(() => {
    const countScolltrigger0 = countUp(0);
    const countScolltrigger1 = countUp(1);
    const countScolltrigger2 = countUp(2);
    const countScolltrigger3 = countUp(3);
    const countScolltrigger4 = countUp(4);
    const [fadeOutParameterTimeline0, fadeOutParameterScrollTrigger0] = fadeOutParameter(0);
    const [fadeOutParameterTimeline1, fadeOutParameterScrollTrigger1] = fadeOutParameter(1);
    const [fadeOutParameterTimeline2, fadeOutParameterScrollTrigger2] = fadeOutParameter(2);
    const [fadeOutParameterTimeline3, fadeOutParameterScrollTrigger3] = fadeOutParameter(3);
    const [fadeOutParameterTimeline4, fadeOutParameterScrollTrigger4] = fadeOutParameter(4);
    return () => {
      countScolltrigger0 && countScolltrigger0.kill();
      countScolltrigger1 && countScolltrigger1.kill();
      countScolltrigger2 && countScolltrigger2.kill();
      countScolltrigger3 && countScolltrigger3.kill();
      countScolltrigger4 && countScolltrigger4.kill();
      fadeOutParameterScrollTrigger0 && fadeOutParameterScrollTrigger0.kill();
      fadeOutParameterTimeline0 && fadeOutParameterTimeline0.progress(1);
      fadeOutParameterScrollTrigger1 && fadeOutParameterScrollTrigger1.kill();
      fadeOutParameterTimeline1 && fadeOutParameterTimeline1.progress(1);
      fadeOutParameterScrollTrigger2 && fadeOutParameterScrollTrigger2.kill();
      fadeOutParameterTimeline2 && fadeOutParameterTimeline2.progress(1);
      fadeOutParameterScrollTrigger3 && fadeOutParameterScrollTrigger3.kill();
      fadeOutParameterTimeline3 && fadeOutParameterTimeline3.progress(1);
      fadeOutParameterScrollTrigger4 && fadeOutParameterScrollTrigger4.kill();
      fadeOutParameterTimeline4 && fadeOutParameterTimeline4.progress(1);
    }
  },[])

  const fadeOutParameter = (index) => {
    const fadeOutParameterTimeline = gsap.timeline({
      defaults: { ease: Linear.easeNone }
    });

    fadeOutParameterTimeline
      .fromTo(
        parameterRef.current[index],
        {
          opacity: 0
        },
        {
          opacity: 1,
          color: 'purple',
          duration: 1
        }
      )
      .to(
        parameterRef.current[index],
        {
          opacity: 0,
          duration: 1
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: parameterRef.current[index],
      start: "top bottom",
      end: "bottom top",
      scrub: 0,
      animation: fadeOutParameterTimeline
    });
    return [fadeOutParameterTimeline, scrollTrigger];
  }

  const countUp = (index) => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: parameterRef.current[index],
      start: "bottom bottom",
      // endTrigger: parameterRef.current[index + 1],
      end: "center center",
      scrub: 0,
      onUpdate: (self) => {
        const progress = Math.max(paramList[index].minNumber, Math.ceil(self.progress * paramList[index].number/paramList[index].minNumber) * paramList[index].minNumber);
        setParameters(prevState => {
          return [
            ...prevState.slice(0, index),
            {
              ...prevState[index],
              number: progress
            },
            ...prevState.slice(index + 1)
          ];
        });
        // console.log(
        //   "progress:",
        //   progress,
        //   "direction:",
        //   self.direction,
        //   "velocity",
        //   self.getVelocity()
        // );
      }
    });
    return scrollTrigger;
  }

  return (
    <div>
      <div className="relative">

        {parameters && parameters.map((parameter, i) => (
          <div key={parameter.heading1} ref={(ref) => (parameterRef.current[i] = ref)}>
            <h3 className="mt-[33px] text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold italic">{`${parameter.number}+`}</h3>
            <div className="h-[4.5rem] w-[60%] sm:w-[45%] lg:w-[35%] relative bg-linear skew-x-[-20deg] m-auto z-[-1]"></div>
            <div id="revenue-description" className="mt-[-4.5rem] py-[.5rem]">
              <div id="revenue-laboratories">
                <h6 className="text-[2rem] font-bold italic text-white leading-none mb-[.5rem]">{parameter.heading1}</h6>
                <p className="text-[1rem] text-white leading-none">{parameter.heading2}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute left-[15vw] top-[15%]">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={window.innerWidth > 1024 ? 100 : 60}
            height={window.innerWidth > 1024 ? 100 : 60}
          />
        </div>
        <div className="absolute right-[12vw] top-[42%] rotate-45 opacity-80">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={window.innerWidth > 1024 ? 80 : 50}
            height={window.innerWidth > 1024 ? 80 : 50}
          />
        </div>
        <div className="absolute left-[10vw] top-[75%] -rotate-45 opacity-30">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={window.innerWidth > 1024 ? 25 : 15}
            height={window.innerWidth > 1024 ? 25 : 15}
          />
        </div>
        <div className="absolute right-[15vw] top-[90%] -rotate-45 opacity-30">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={window.innerWidth > 1024 ? 25 : 15}
            height={window.innerWidth > 1024 ? 25 : 15}
          />
        </div>
        <h2 className="text-[60px] lg:text-[100px] font-bold bg-linear bg-clip-text text-transparent
        absolute left-[8vw] top-[25%]">$</h2>
        <h2 className="text-[60px] lg:text-[100px] font-bold bg-linear bg-clip-text text-transparent
        absolute right-[20vw] top-[12%]">$</h2>
        <h2 className="text-[50px] lg:text-[80px] font-bold bg-linear bg-clip-text text-transparent
        absolute right-[15vw] top-[30%] opacity-80">$</h2>
        <h2 className="text-[20px] lg:text-[40px] font-bold bg-linear bg-clip-text text-transparent
        absolute right-[25vw] top-[45%] opacity-40">$</h2>
        <h2 className="text-[15px] lg:text-[30px] font-bold bg-linear bg-clip-text text-transparent
        absolute left-[15vw] top-[90%] opacity-20">$</h2>
      </div>
    </div>
  )
}


