import "./style.scss";
import Sidebar from "../../components/Sidebar";
import Header from "../../layouts/Header";
import DriveFolderuploadoutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewContainer = ({ props: { InputsData, title } }) => {
  const [file, setFile] = useState("");

  console.log("file", file);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Header />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
              }
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderuploadoutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="inputCuFile"
                />
              </div>
              {InputsData?.map((InputData, key) => (
                <div className="formInput" key={InputData.id}>
                  <label>{InputData.label}</label>
                  <input
                    type={InputData.type}
                    placeholder={InputData.placeholder}
                  />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContainer;
