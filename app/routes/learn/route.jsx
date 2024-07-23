import Nav from "../../components/nav/nav";

import "../../root.css";
import "../../css/container.css";
import "../../css/card.css";
import "../../css/text.css";
import "../../css/background.css";
import "../../css/assets.css";
import "../../css/button.css";

export default function Learn() {
  return (
    <>
      <Nav />
      <div className="container0">
        <div className="containerA conAPosition">
          <main className="main">
            <div className="containerB bgImg">
              <div className="test"></div>
              {/* The height of this container detrmines the height of the bgImg because of the height auto property in the parent container*/}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
