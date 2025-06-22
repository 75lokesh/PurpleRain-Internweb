import React from 'react';
import './Filters.css';

export default function Filters({
    departments,
    statuses,
    filterDept,
    setFilterDept,
    filterStatus,
    setFilterStatus,
}) {
    return (
        <section className="filtersContainer">
            <select
                className="filterDropdown"
                value={filterDept}
                onChange={e => setFilterDept(e.target.value)}

            >
                {departments.map(dept => (
                    <option key={dept} value={dept}>
                        {dept}
                    </option>
                ))}
            </select>
            <select
                className="filterDropdown"
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
            >
                {statuses.map(status => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
            <button type="button" className="addInternBtn">
                + Add New Intern
            </button>
        </section>
    );
}