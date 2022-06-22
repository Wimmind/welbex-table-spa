import React from "react";
import { useEffect, useState } from "react";
import DATA from '../data';

const Table: React.FC = () => {
    const [data, setData] = useState(DATA)
    const [firstRow, setFirstRow] = useState(0)

    useEffect(() => {

    }, []);

    const sortedTable = () => {
        // if (!isSorted) {
        //     return array;
        // }
        // if (!isSortedDesc) {
        //     array.sort((a, b) => (a.name > b.name ? 1 : -1));
        // } else {
        //     array.sort((a, b) => (a.name < b.name ? 1 : -1));
        // }
        // return array;
    };


    return (
        <div className="citiesTable__wrapper">
            <table className="citiesTable">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Название</th>
                        <th>Колличество</th>
                        <th>Расстояние</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>{item.distance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;