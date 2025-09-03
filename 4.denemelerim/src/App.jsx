import React, { useState } from "react";
const ilkRuhHali = 'Nasıl hissettiğimi bilmiyorum :-|';
const mutluRuhHali = 'Oldukça mutlu :)';
const uzgunRuhHali = 'Oldukça üzgün :(';

export default function App() {
  const [sayruhHaliac, setsayruhHaliac] = useState(ilkRuhHali);
  const mutluEt = () => {
    setsayruhHaliac(sayruhHaliac => mutluRuhHali);
  };
  const uZ = () => {
    setsayruhHaliac(sayruhHaliac => uzgunRuhHali);
  };
  const reset = () => {
    setsayRuhHaliac(sayruhHaliac => ilkRuhHali);
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: sayruhHaliac == mutluRuhHali ? "royalblue" : "crimson"
  }
};

return (
  <div className="widget-moods container">
    <h2>RuhHalleri</h2>
    <div id="ruhHali" style={stil}>
      {ilkRuhHali}
    </div>
    <div>
      <button id="mutluEt" onClick={mutluEt}>
        {mutluEt}
      </button>
      <button id="uz" onClick={uZ}>
        {uZ}
      </button>
      <button id="resetRuhHali" onClick={reset}>
        {reset}
      </button>
    </div>
  </div>
);

