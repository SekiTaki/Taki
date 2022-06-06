import React, { Component } from 'react';

export default class appMain extends Component {
    cStyle = {
        container: 'flex justify-center items-center h-screen bg-blue-100',
        card:'text-center text-blue-600 rounded-lg bg-gray-50 border p-8 shadow-sm',
        title: 'font-bold text-6xl',
        subTitle: 'text-2xl text-blue-400',
    }
    render() {
        return (
            <div className={this.cStyle.container}>
                <div className={this.cStyle.card}>
                    <h1 className={this.cStyle.title}>React App</h1>
                    <h2 className={this.cStyle.subTitle}>Learning React new</h2>
                </div>
            </div>
        );
    }
}