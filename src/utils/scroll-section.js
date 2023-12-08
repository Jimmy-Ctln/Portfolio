import { scroller } from "react-scroll";

export const handleScroll = (section, value, event) => {
  if (
    event.type === "click" ||
    (event.type === "keydown" && event.key === "Enter")
  ) {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      spy: true,
      exact: true,
      offset: value,
    });
  }
};
