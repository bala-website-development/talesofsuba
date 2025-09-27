import React from "react";

const Style = ({
  font = "Teko, sans-serif",
  bFont = "Rubik, sans-serif",
  black = "#222429",
  text = "#686a6f",
  base = "#ffaa17",
  baseRgb = "255, 170, 23",
  scrollToTopColor = "var(--thm-black)",
  scrollToTopBg = "var(--thm-base)",
  scrollToTopHoverColor = "#ffffff",
  scrollToTopHoverBg = "var(--thm-black)",
  blackRgb = "",
  gray = "",
}) => {
  return (
    <style global jsx>{`
      :root {
        --thm-font: ${font};
        --thm-b-font: ${bFont};
        --thm-black: ${black};
        --thm-text: ${text};
        --thm-base: ${base};
        --thm-base-rgb: ${baseRgb};
        --thm-black-rgb: ${blackRgb};
        --thm-gray: ${gray};
      }
      .scroll-to-top {
        color: ${scrollToTopColor};
        background-color: ${scrollToTopBg};
      }

      .scroll-to-top:hover {
        background-color: ${scrollToTopHoverBg};
        color: ${scrollToTopHoverColor};
      }
    `}</style>
  );
};

export default Style;
