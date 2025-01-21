import React from 'react';
import './StatsSection.css';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const StatsSection = () => {
 
  const doughnutData = {
    labels: ['Client Satisfaction', 'Project Completion'],
    datasets: [
      {
        data: [80, 90], 
        backgroundColor: ['#f39c12', '#3498db'],
        borderColor: ['#ecf0f1', '#ecf0f1'],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            let value = context.raw || '';
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };


  const barData = {
    labels: ['Happy Clients', 'Projects Completed', 'Countries Served'],
    datasets: [
      {
        label: 'Stats',
        data: [500, 100, 10], 
        backgroundColor: '#f39c12',
        borderColor: '#f39c12',
        borderWidth: 1,
        hoverBackgroundColor: '#e67e22',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Our Achievements',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 600,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  return (
    <section className="stats">
      <h2 className="stats-title">Our Achievements</h2>
      <p className="stats-subtitle">We are proud of what we've achieved so far.</p>
      <div className="stats-container">
        <div className="stat">
          <h3>500+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h3>10</h3>
          <p>Countries Served</p>
        </div>
      </div>


      <div className="progress-bars">
        <div className="progress">
          <p>Client Satisfaction</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="progress">
          <p>Project Completion</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

     
      <div className="chart-container">
        <h3>Client Satisfaction & Project Completion</h3>
        <Doughnut data={doughnutData} options={doughnutOptions} />
      </div>

      <div className="chart-container">
        <h3>Our Stats</h3>
        <Bar data={barData} options={barOptions} />
      </div>
    </section>
  );
};

export default StatsSection;
