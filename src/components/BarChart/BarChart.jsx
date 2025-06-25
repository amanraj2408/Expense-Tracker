import React,{ PureComponent} from "react";
import{
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import styles from "./BarChart.module.css";

export default function BarChartComponent({ data }){
    return (
        <div className={styles.expenseChart}>
            <h2>Top Expense</h2>

            <div className={styles.expenseChart}>
                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={data} layout="vertical">
                        <XAxis type="number" axisLine={false} display="none" />
                       <YAxis
                        type="category"
                        width={100}
                        datakey="name"
                        axisLine={false}
                        />
                        <Bar datakey="value" fill="#8884d8" barSize={25} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
