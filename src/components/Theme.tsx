import { useState } from "react";

export default function Switch() {
  const [theme, setTheme] = useState(false);

  function Toggle() {
    setTheme(!theme);
  }

  return (
    <>
      <main className={!theme ? "light" : "dark"}>
        <div className="container">
          <div className={!theme ? "external1" : "external2"} onClick={Toggle}>
            <div className={!theme ? "internal1" : "internal2"}></div>
          </div>

          <p>Dark | Light</p>
        </div>

        <div className="logo">
          <h1>Just do It</h1>
        </div>
      </main>
    </>
  );
}
