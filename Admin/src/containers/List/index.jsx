import Datatable from "../../components/Datatable";
import Sidebar from "../../components/Sidebar";
import Header from "../../layouts/Header";
import "./style.scss"

const ListContainer = () => {

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Header/>
        <Datatable />
      </div>
    </div>
  );
}

export default ListContainer