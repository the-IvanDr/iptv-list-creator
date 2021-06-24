import React from 'react';


export default function TableRow({ idx, name, href, onChange, checked, onCheckboxChange }) {
    return (
        <div key={idx} className='table__row'>
            <div className='table__col table__col_0'>
                <span className={`checkbox ${checked && 'checked'}`} onClick={() => onCheckboxChange(idx)} />
            </div>

            <div className='table__col table__col_1'>
                {idx}
            </div>

            <div className='table__col table__col_2'>
                <input
                    name='name'
                    type='text'
                    value={name}
                    onChange={(ev) => onChange(idx, ev.target.name, ev.target.value)}
                    onClick={(ev) => ev.target.select()}
                />
            </div>

            <div className='table__col table__col_3'>
                <input
                    name='href'
                    type='text'
                    value={href}
                    onChange={(ev) => onChange(idx, ev.target.name, ev.target.value)}
                    onClick={(ev) => ev.target.select()}
                />
            </div>
        </div>
    )
}