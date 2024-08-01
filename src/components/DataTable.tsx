import { useState } from "react";
import ReactPaginate from "react-paginate";
import style from "./style.module.css";

const DataTable = ({ data }: { data: any[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;

  const currentData = data.slice(offset, offset + itemsPerPage);

  return (
    <div className={style.data}>
      <table className={style.table}>
        <thead>
          <tr>
            {Object.keys(currentData[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value: any, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={Math.ceil(data.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={style.pagination}
        activeClassName={style.active}
      />
    </div>
  );
};

export default DataTable;
