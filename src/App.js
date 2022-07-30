/*global chrome*/
import Particles from "particlesjs";
import "flag-icons";
import "./App.css";
import React from "react";
import Quote from "./quotes/quote";

export default function App() {
  const [gradientColor1, SetGradientColor1] = React.useState({});

  const [gradientColor2, SetGradientColor2] = React.useState({});

  const [direction, setDirection] = React.useState();

  const [timeZones, setTimeZones] = React.useState([]);

  const clientTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

  React.useEffect(() => {
    const direction = Math.round(Math.random() * 360);

    const r1 = Math.round(Math.random() * 255);
    const g1 = Math.round(Math.random() * 255);
    const b1 = Math.round(Math.random() * 255);
    const a1 = Math.round(Math.random() * 10) / 10;

    const r2 = Math.round(Math.random() * 255);
    const g2 = Math.round(Math.random() * 255);
    const b2 = Math.round(Math.random() * 255);
    const a2 = Math.round(Math.random() * 10) / 10;

    SetGradientColor1({
      r1,
      g1,
      b1,
      a1,
    });

    SetGradientColor2({
      r2,
      g2,
      b2,
      a2,
    });

    setDirection(direction);
  }, []);

  React.useEffect(() => {
    chrome.storage.sync.get(["countryList"], function (result) {
      const list = result.countryList || {};
      setTimeZones(list);
    });
  }, []);
  React.useEffect(() => {
    Particles.init({
      selector: ".background",
      color: ["white", "white", "white", "#Be255d", "#07468C", "#548C07"],
      connectParticles: false,
      sizeVariations: 5,
    });
  }, []);
  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(${direction}deg, rgba(${gradientColor1.r1},${gradientColor1.g1},${gradientColor1.b1},${gradientColor1.a1}), rgba(${gradientColor2.r2},${gradientColor2.g2},${gradientColor2.b2},${gradientColor2.a2}))`,
      }}
    >
      {/* {Object.keys(timeZones).length > 0 && ( */}
      <div className="clock-container">
        <Clock timeZone={clientTZ} country={""} code={""} />
        {Object.keys(timeZones).map((tz, index) => {
          const [, t] = tz.split("__");
          const details = timeZones[tz];
          return (
            <Clock
              timeZone={t}
              country={details.name}
              code={details.country_code.toLowerCase()}
            />
          );
        })}
      </div>
      {/* )} */}

      <Quote />

      <canvas className="background"></canvas>
    </div>
  );
}

const Clock = ({ timeZone, country, code }) => {
  const [hour, setHour] = React.useState(0);
  const [min, setMin] = React.useState(0);
  const [sec, setSec] = React.useState(0);

  React.useEffect(() => {
    if (!timeZone) {
      return;
    }
    const time = new Date().toLocaleTimeString("en-EN", {
      hour12: false,
      timeZone: timeZone,
    });
    const [h, m, s] = time.split(":");
    setHour(parseInt(h, 10));
    setMin(parseInt(m, 10) < 10 ? `${m}` : parseInt(m, 10));
    setSec(parseInt(s, 10));
    setTimeout(() => {
      setSec(0);
      const minute = min + 1;
      if (minute === 60) {
        const hr = hour + 1;
        setMin("00");
        if (hr === 25) {
          setHour(1);
        } else {
          setHour(hr);
        }
      } else {
        setMin(min + 1);
      }
    }, 60000 - sec * 1000);
  }, [timeZone, hour, min, sec]);

  return (
    <div className="clock-item">
      <div className="country-flag">
        {code && <span className={`fi fi-${code} flag`}></span>}
      </div>
      <div className="country-name">{country}</div>
      <div className="clock-time">
        <span className="hour"> {hour}</span>
        <span className="blink"> : </span>
        <span className="min"> {min}</span>
      </div>
    </div>
  );
};
