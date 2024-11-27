import {  ChevronDown, Dot, Slice } from 'lucide-react'
import React, { PureComponent } from 'react';
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import SideNavigation from '../partials/SideNavigation'
import DashboardCard from './DashboardCard'
import DashboardAccordion from './DashboardAccordion'
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts"
import { menus } from '../menu-data'




const Dashboard = () => {
   
  return (
    <>
      <section className='layout-main '>
        <div className=" layout-division ">
       <SideNavigation menu="dashboard"/>
            <main >
               <Header title='Dashboard' subtitle='Welcome to Jollibee'/>
               <div className="p-8">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="grid grid-cols-4 gap-5">
                   <DashboardCard title='Chicken joy' filterby='Chickenjoy'/>
                   <DashboardCard title='Value Meal' filterby='Value meal'/>
                   <DashboardCard title='Burger' filterby='Burger'/>
                   <DashboardCard title='Spaghetti' filterby='Spaghetti'/>
                   <DashboardCard title='Palabok' filterby='Palabok'/>
                   <DashboardCard title='Sides' filterby='Sides'/>
                   <DashboardCard title='Dessert' filterby='Dessert'/>
                   <DashboardCard title='BurgerSteak' filterby='BurgerSteak'/>
                  </div>
              
               
        <div className='chart mt-10'>
            <h3>Menu Pricess</h3>
       
        <BarChart
          width={1200}
          height={400}
          data={menus.slice(0,10)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="menu_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="menu_price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        
        </BarChart>
     
      

        </div>
                </div>
                <div className="sidebar overflow-auto custom-scroll h-[calc(100ch-200px)]">
                    <DashboardAccordion title='Dessert' filterby='Dessert' />
                    <DashboardAccordion title='Value Meal' filterby='Value meal' />
                    <DashboardAccordion title='Burger' filterby='Burger' />
                    <DashboardAccordion  title='Spaghetti' filterby='Spaghetti' />
                    <DashboardAccordion title='Dessert' filterby='Dessert' />
                    <DashboardAccordion title='Dessert' filterby='Dessert' />
                    <DashboardAccordion title='Dessert' filterby='Dessert' />
                </div>
              </div>
            </div>
                <Footer/>
            </main>
        </div>
    </section>
    </>
  )
}

export default Dashboard
