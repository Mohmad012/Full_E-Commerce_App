import Sidebar from "../../components/Sidebar";
import Widget from "../../components/Widget";
import Featured from "../../components/Featured";
import Chart from "../../components/Chart";
import Header from "../../layouts/Header";
import "./style.scss"

const HomeContainer = () => {

    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Header />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earrning" />
            <Widget type="balance" />
          </div>

          <div className="charts">
            <Featured />
            <Chart />
          </div>
        </div>
      </div>
    );
}

export default HomeContainer;

