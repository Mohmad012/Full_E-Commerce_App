import Sidebar from "../../components/Sidebar";
import Widget from "../../components/Widget";
import Featured from "../../components/Featured";
import Chart from "../../components/Chart";
import Header from "../../layouts/Header";
import "./style.scss";
import Table from "../../components/Table";

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

        <div className="listContainer">
          <div className="listTitle">latest transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
