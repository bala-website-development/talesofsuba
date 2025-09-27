import demoFeatures from "@/data/demoFeatures";
import React from "react";
import { Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, features } = demoFeatures;

const DemoFeatures = () => {
  return (
    <section className="demo-features">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>{title}</h2>
        </div>
        <div className="demo-features__wrapper">
          {features.map(({ id, icon, title }) => (
            <div key={id} className="demo-features__box">
              <Image
                src={require(`@/images/demo-icons/${icon}`).default.src}
                alt=""
                width={121}
                height={121}
              />
              <h4>
                <TextSplit text={title} />
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoFeatures;
