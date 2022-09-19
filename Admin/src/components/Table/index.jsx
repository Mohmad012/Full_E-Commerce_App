import "./style.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function createData(id, product, img, customer, date, amount, method, status) {
  return { id, product, img, customer, date, amount, method, status };
}

const rows = [
  createData(
    1143155,
    "Acer Nitro 5",
    "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    "John Smith",
    "1 March",
    785,
    "Cash on Delivery",
    "Approved"
  ),

  createData(
    2235235,
    "Playstation 5",
    "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    "Michael Doe",
    "1 March",
    900,
    "Online Payment",
    "Pending"
  ),

  createData(
    2342353,
    "Redragon S101",
    "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    "John Smith",
    "1 March",
    35,
    "Cash on Delivery",
    "Pending"
  ),

  createData(
    2357741,
    "Razer Blade 15",
    "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "Jane Smith",
    "1 March",
    920,
    "Online",
    "Approved"
  ),
  createData(
    2342355,
    "ASUS ROG Strix",
    "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    "Harold Carol",
    "1 March",
    2000,
    "Online",
    "Pending"
  ),
];

const TableSec = () => {
  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell"> Tracking ID </TableCell>
            <TableCell className="tableCell"> Product</TableCell>
            <TableCell className="tableCell"> Customer </TableCell>
            <TableCell className="tableCell"> Date </TableCell>
            <TableCell className="tableCell"> Amount </TableCell>
            <TableCell className="tableCell"> Payment Method </TableCell>
            <TableCell className="tableCell"> Statusg </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSec;
