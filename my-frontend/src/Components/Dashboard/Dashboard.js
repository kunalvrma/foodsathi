// src/Components/Dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2>FoodSathi Dashboard</h2>
                <ul>
                    <li>NGOs</li>
                    <li>Hotels</li>
                    <li>Volunteers</li>
                    <li>Registrations</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <header className="header">
                    <h1>Dashboard</h1>
                    <div className="header-actions">
                        <button>Notifications</button>
                        <button>Profile</button>
                    </div>
                </header>

                {/* Statistics Summary */}
                <section className="stats-section">
                    <div className="stat-card">
                        <h3>Total NGOs</h3>
                        <p>120</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Hotels</h3>
                        <p>45</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Volunteers</h3>
                        <p>350</p>
                    </div>
                    <div className="stat-card">
                        <h3>Meals Distributed</h3>
                        <p>5,000+</p>
                    </div>
                </section>

                {/* Recent Registrations Table */}
                <section className="registrations-section">
                    <h2>Recent Registrations</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Location</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hope NGO</td>
                                <td>NGO</td>
                                <td>Lucknow</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>Green Hotel</td>
                                <td>Hotel</td>
                                <td>Delhi</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>Volunteer</td>
                                <td>Mumbai</td>
                                <td>Active</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
