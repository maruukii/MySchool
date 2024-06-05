import React from 'react'
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import "./home.scss";
import {
    barChartBoxVisit,
    chartBoxUser,
    chartBoxHead,
    chartBoxSup,
    chartBoxTea,
    barChartBoxWork
  } from "../../../data";
const admin = () => {
    
  return (
    <div className="home">
      
      <div className="box box1">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box1">
        <ChartBox {...chartBoxHead} />
      </div>
      <div className="box box1">
        <ChartBox {...chartBoxSup} />
      </div>
      
      <div className="box box1">
        <ChartBox {...chartBoxTea} />
        
      </div>
      <div className="box box5">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box5">
        <BarChartBox {...barChartBoxWork} />
      </div>
    </div>
  )
}

export default admin
