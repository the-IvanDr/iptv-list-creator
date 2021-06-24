import React from 'react';
import TableRow from './TableRow';

export default function Table({list, checkboxes, inputChangeHandler, onCheckboxChange}) {

    return (
        <div className='table'>
            <div className='table__row table__row_head'>
                <div className='table__col table__col_0'>
                    <span className='checkbox' onClick={() => onCheckboxChange(list.map((_, idx) => idx))} />
                </div>

                <div className='table__col table__col_1'>
                    ID
                </div>

                <div className='table__col table__col_2'>
                    Name
                </div>

                <div className='table__col table__col_3' onClick={() => console.log('checkboxes:', checkboxes)}>
                    Url
                </div>
            </div>

            {
                list.length
                    ? list.map((item, idx) => <TableRow
                        key={idx}
                        idx={idx}
                        name={item.name}
                        href={item.href}
                        onChange={inputChangeHandler}
                        checked={checkboxes.includes(idx)}
                        onCheckboxChange={onCheckboxChange}
                    />)
                    : <div className='table__row'><p>The list is empty</p></div>
            }

        </div>
    )
}