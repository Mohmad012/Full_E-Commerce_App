import "./style.scss";
import "react-circular-progressbar/dist/styles.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";

import KeyboardArpcowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpoutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

let data = [
  {
    name: "Target",
    sttusClass: "negative",
    price: "$12.4k",
  },
  {
    name: "Last Week",
    sttusClass: "positive",
    price: "$12.4k",
  },
  {
    name: "Last Month",
    sttusClass: "positive",
    price: "$12.4k",
  },
];

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title"> Total Revenue</h1>
        <MoreVertIcon fontSize="small " />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>

        <p className="title"> Total sales made today </p>
        <p className="amount"> $420 </p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included .
        </p>

        <div className="summary">
          {data.map(({ name, sttusClass, price }, key) => (
            <div className="item" key={key}>
              <div className="itemTitle"> {name}</div>
              <div className={`itemResult ${sttusClass}`}>
                {sttusClass === "negative" ? (
                  <KeyboardArpcowDownIcon fontsize="smallf" />
                ) : (
                  <KeyboardArrowUpoutlinedIcon fontsize="smallf" />
                )}

                <div className="resultAmount">{price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
