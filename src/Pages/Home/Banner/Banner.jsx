import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import bg1 from "../../../assets/assets/images/banner/1.jpg";
import bg2 from "../../../assets/assets/images/banner/2.jpg";
import bg3 from "../../../assets/assets/images/banner/3.jpg";
import bg4 from "../../../assets/assets/images/banner/4.jpg";
import bg5 from "../../../assets/assets/images/banner/5.jpg";
import bg6 from "../../../assets/assets/images/banner/6.jpg";
import SliederComponent from "./SliederCompontn";
const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <SliederComponent bg={bg1}></SliederComponent>
        </div>
        <div className="keen-slider__slide number-slide2">
          <SliederComponent bg={bg2}></SliederComponent>
        </div>
        <div className="keen-slider__slide number-slide3">
          <SliederComponent bg={bg3}></SliederComponent>
        </div>
        <div className="keen-slider__slide number-slide4">
        <SliederComponent bg={bg4}></SliederComponent>
        </div>
        <div className="keen-slider__slide number-slide5"><SliederComponent bg={bg5}></SliederComponent></div>
        <div className="keen-slider__slide number-slide6">
        <SliederComponent bg={bg6}></SliederComponent>
        </div>
      </div>
    </>
  );
};

export default Banner;
