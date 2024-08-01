import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import { readExcelFile } from "../utile/ReadExcelFile";
import style from "./style.module.css";

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const excelData = await readExcelFile("data.xlsx");
      setData(excelData);
    };
    loadData();
  }, []);

  return (
    <div className={style.wrapper}>
      {data.length > 0 ? <DataTable data={data} /> : <h1 className={style.loader}>Загрузка...</h1>}
    </div>
  );
};

export default App;
