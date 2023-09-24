import React, { useEffect, useState } from "react";

export default function useCustomSearchResultPage(searchData, setsearchData) {
  const [searchKey, SetListData] = useState(searchData);
  const [data, setdata] = useState([]);
  useEffect(() => {
    const sd = searchData ? searchData : undefined;
    if (sd && sd.length === 1) {
      setdata([]);
    }
    SetListData(sd);
  }, [searchData]);

  const getdata = (data) => {
    setdata(data);
  };
  useEffect(() => {
    return () => {
      setsearchData("");
    };
  }, []);
  return {
    searchKey,
    data,
    getdata,
    SetListData,
  };
}
