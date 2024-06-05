import React from 'react'
import BarChartBox from "../../components/barChartBox/BarChartBox";
import ChartBoxOthers from "../../components/chartBox/ChartBoxOthers";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import "./home.scss";
import {
    barChartBoxAb,
    chartBoxUser,
    chartBoxAlu,
    
  } from "../../../data";
import { PieChart } from 'recharts';
const admin = () => {
    
  return (
    <div className="home2">
      
      <div className="box box1">
        <ChartBoxOthers {...chartBoxUser} />
      </div>
      <div className="box box1">
        <ChartBoxOthers {...chartBoxAlu} />
      </div>
      
      <div className="box box4">
        <PieChartBox />
        
      </div>
      <div className="box box5">
        <BarChartBox {...barChartBoxAb} />
      </div>
      
    </div>
  )
}

export default admin
