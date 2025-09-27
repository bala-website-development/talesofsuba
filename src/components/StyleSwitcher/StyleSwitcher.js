import React, { useState } from "react";

const StyleSwitcher = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`style-switcher${open ? " active" : ""}`}>
      <a onClick={() => setOpen((pre) => !pre)} id="switcher-toggler">
        <i className="fa fa-cog"></i>
      </a>
      <h3>Color Skins</h3>
      <ul id="styleOptions" title="Switch Color">
        {Array.from(Array(6)).map((_, i) => (
          <li key={i}>
            <a
              href=""
              data-theme={i === 0 ? "color-default" : `color-${i + 1}`}
              className={i === 0 ? "color-default" : `color-${i + 1}`}
            ></a>
          </li>
        ))}
      </ul>
      <div className="language-feature">
        <button className="ltr-switcher" data-href="#googtrans(en|en)">
          LTR
        </button>
        <button className="rtl-switcher" data-href="#googtrans(en|ar)">
          RTL
        </button>
      </div>
      <div className="layout-feature">
        <a href="#" className="dark-switcher">
          Dark
        </a>
        <button className="boxed-switcher">Boxed</button>
      </div>
    </div>
  );
};

export default StyleSwitcher;
