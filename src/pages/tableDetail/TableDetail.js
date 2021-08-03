import { useLocation } from "react-router-dom";
import "./tableDetail.scss";

const TableDetail = () => {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div className="table-detail">
      <div className="table-detail__title">{(data && data.name) || ""}</div>
      <div className="table-detail__des">{(data && data.des) || ""}</div>
    </div>
  );
};

export default TableDetail;