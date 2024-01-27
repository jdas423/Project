import People from "../icons/Feature1/People";
import Location from "../icons/Feature1/Location";
import Product from "../icons/Feature1/Product";
import Program from "../icons/Feature1/Program";
import { heading, bodyText, btnText } from "./export";
import Button from "../Button";
import "../scss/Feature1.scss";
export default function Feature1() {
  const Icons = [<People />, <Location />, <Product />, <Program />];
  return (
    <div className="feature1-wrap">
      <div className="feature1-ins">
        {Icons.map((icon, index) => {
          return (
            <Component
              key={index}
              Icon={icon}
              heading={heading[index]}
              bodyText={bodyText[index]}
              btnText={btnText[index]}
            />
          );
        })}
      </div>
    </div>
  );
}

export function Component({ Icon, heading, bodyText, btnText }) {
  return (
    <div className="top-cont-1">
      <div className="top-cont-2">
        <div className="icon-heading">
          <div className="icon">{Icon}</div>
          <div className="heading">{heading}</div>
        </div>
        <div className="body">{bodyText}</div>
        <div className="btn-wrap">
          <Button
            style={{
              borderRadius: "8px",
              border: "1px solid #8064A2",
              background: "#FFF",
              display: "inline-flex",
              padding: "12px 31px 12px 30px",
              justifyContent: "center",
              alignItems: "center",
            }}
            text={btnText}
          />
        </div>
      </div>
    </div>
  );
}
