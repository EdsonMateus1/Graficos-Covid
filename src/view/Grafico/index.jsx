import React, { useState, useEffect, useCallback } from "react";
import Chart from "react-google-charts";
export default function Grafico({ title, url }) {
  const [dataStatePais, setDataPais] = useState([]);

  const getDataBRasil = useCallback(() => {
    fetch(`https://api.thevirustracker.com/free-api?countryTotal=${url}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setDataPais(res.countrydata);
      });
  }, [url]);
  useEffect(() => {
    getDataBRasil();
  }, [getDataBRasil, url]);

  const coutPais = dataStatePais.map((e) => {
    const DataGrafico = [
      ["BRASIL", "Numero de casos"],
      ["TOTAL DE CASOS", e.total_cases],
      ["TOTAL DE MORTOS", e.total_deaths],
      ["TOTAL DE CASOS ATIVOS", e.total_active_cases],
    ];
    return DataGrafico;
  });

  return (
    <Chart
      width="400px"
      height="300px"
      data={coutPais[0]}
      chartType="PieChart"
      options={{
        title: title,
        is3D: true,
      }}
    />
  );
}
