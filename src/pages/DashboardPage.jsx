import React, { useState,useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import StatsCard from '../components/dashboard/StatsCard'
import { LuUserCircle2 } from "react-icons/lu";
import { RiParentFill } from "react-icons/ri";
import { FaChildReaching } from "react-icons/fa6";
import { MdInsertPageBreak } from "react-icons/md";
import ThemeChart from '../components/general/ThemeChart';
import faker from 'faker'
import { useDashbordQuery } from "../store/apis/userApi";
const DashboardPage = () => {
    const { isLoading: isStatsLoading, data: userStats } = useDashbordQuery();
    const [data, setData] = useState([
        {
            title: "Total User",
            count: "1,000",
            color: "bg-purple",
            icon: <LuUserCircle2 className='icon' />,
        },
        {
            title: "Blocked User",
            count: "40",
            color: "bg-yellow",
            icon: <RiParentFill className="icon" />,
          },
    ])
    const [labels, setLabels] = useState([
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]);
    const [chartData, setChartData] = useState({
        labels: labels,
        datasets: [
          {
            label: "Dataset 1",
            data: labels.map(() =>
              faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
    });
    useEffect(() => {
        setData([
          {
            title: "Total User",
            count: userStats?.data?.usersCount || 0,
            color: "bg-purple",
            icon: <LuUserCircle2 className="icon" />,
          },
          {
            title: "Blocked User",
            count: userStats?.data?.usersblocked || 0,
            color: "bg-yellow",
            icon: <RiParentFill className="icon" />,
          },
        //   {
        //     title: "Deleted User",
        //     count: userStats?.data?.usersDeleted || 0,
        //     color: "bg-blue",
        //     icon: <FaChildReaching className="icon" />,
        //   },
        ]);
    }, [isStatsLoading]);
    useEffect(() => {
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "users",
              data: userStats?.data?.monthly_users.map((item) =>
                labels.includes(item.month) ? item.users : 0
              ),
              borderColor: "rgb(255, 99, 132)",
              // backgroundColor: 'rgba(255, 99, 132, 0.5)',
              backgroundColor: [
                "rgb(255, 99, 132)", // January
                "rgb(54, 162, 235)", // February
                "rgb(255, 205, 86)", // March
                "rgb(75, 192, 192)", // April
                "rgb(153, 102, 255)", // May
                "rgb(255, 159, 64)", // June
                "rgb(255, 99, 132)", // July
                "rgb(54, 162, 235)", // August
                "rgb(255, 205, 86)", // September
                "rgb(75, 192, 192)", // October
                "rgb(153, 102, 255)", // November
                "rgb(255, 159, 64)", // December
              ],
            },
          ],
        });
    }, [isStatsLoading]);
    

    return (
        <div className='pages dashboard-page'>
            <Row>
                <Col xs={12} className='mb-4'>
                    <h2 className='text-black fw-800'>Dashboard</h2>
                </Col>
                {
                    data?.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={6} lg={6} xl={6} className='mb-3'>
                            <StatsCard data={item} />
                        </Col>
                    ))
                }
            </Row>

            <Row className='mt-4'>
                <Col xs={6}>
                    <ThemeChart type="line" data={chartData} />
                </Col>

                <Col xs={6}>
                    <ThemeChart type="bar" data={chartData} />
                </Col>
            </Row>
        </div>
    )
}

export default DashboardPage