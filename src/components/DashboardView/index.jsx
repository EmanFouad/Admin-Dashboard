import React, { useState, useEffect } from "react";
import DashboardHead from "./Head";
import DashboardTabs from "./Tabs";
import DashboardTable from "./Table";
import DashboardPagination from "./Pagination";

const DashboardView = () => {
  const minNumOfRecords = 10;
  const [dataSliceStart, setDataSliceStart] = useState(0);
  const [dataSliceEnd, setDataSliceEnd] = useState(10);
  const [numOfRecord, setNumOfRecord] = useState(minNumOfRecords);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataRows, setDataRows] = useState("");
  const [inputSearchTerm, setInputSearchTerm] = useState("");
  const [optionSelected, setOptionSelected] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [searchData, setSearchData] = useState("");

  const getData = async () => {
    const response = await fetch("MockData.json").then((response) =>
      response.json()
    );
    setDataRows(response);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let filteredData = [];
      dataRows &&
      dataRows.map((rowItem) => {
        return rowItem.map((item) => {
          if (
            inputSearchTerm !== "" &&
            item.name === "complaintNumber" &&
            item.value.toString()?.includes(inputSearchTerm.toString())
          ) {
            return filteredData.push(rowItem);
          } else if (
			optionSelected !== "" &&
            (item.name === "complaintDepartment" ||
              item.name === "complaintStatus") && 
            item.label?.includes(optionSelected)
          ) {
            return filteredData.push(rowItem);
          }
		  console.log("item",item)

          return filteredData;
        });
      });
	
    setSearchData(filteredData);
  }, [inputSearchTerm,optionSelected]);

  useEffect(() => {
    setDataSliceStart(currentPage === 1 ? 0 : (currentPage - 1) * numOfRecord);
    setDataSliceEnd(
      currentPage === 1
        ? numOfRecord
        : (currentPage - 1) * numOfRecord + numOfRecord
    );
  }, [currentPage, numOfRecord]);

  return (
    <div className="p-5 bg-light">
      <DashboardHead />
      <DashboardTabs />
      <DashboardTable
        data={dataRows}
        start={dataSliceStart}
        end={dataSliceEnd}
        inputSearchTerm={inputSearchTerm}
        setInputSearchTerm={setInputSearchTerm}
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        dateFrom={dateFrom}
        setDateFrom={setDateFrom}
        dateTo={dateTo}
        setDateTo={setDateTo}
        searchData={searchData}
      />
      {dataRows.length > minNumOfRecords ? (
        <DashboardPagination
          numOfRecord={numOfRecord}
          setNumOfRecord={setNumOfRecord}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          data={dataRows}
          resultsStart={dataSliceStart}
          resultsEnd={dataSliceEnd}
        />
      ) : null}
    </div>
  );
};

export default DashboardView;
