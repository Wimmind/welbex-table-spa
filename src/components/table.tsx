import React from "react";
import { useEffect, useState } from "react";
import DATA from '../data';

const Table: React.FC = () => {
    const [data, setData] = useState(DATA)
    const [firstRow, setFirstRow] = useState(0)
    const [sortColumn, setSortColumn] = useState('Название')
    const [userValue, setUserValue] = useState('')

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
            <div className="header__wrapper">
                <select value={sortColumn} onChange={e => setSortColumn(e.target.value)}>
                    <option value='Название'>Название</option>
                    <option value='Колличество'>Колличество</option>
                    <option value='Расстояние'>Расстояние</option>
                </select>
                <select>
                    {sortColumn === 'Название' ? (
                        <option value='Содержит'>Содержит</option>
                    ) : (
                        <>
                            <option value='Равно'>{'='}</option>
                            <option value='Больше'>{'>'}</option>
                            <option value='Меньше'>{'<'}</option>
                        </>
                    )}
                </select>
                <input type="text" value={userValue} onChange={e => setUserValue(e.target.value)} />
            </div>

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