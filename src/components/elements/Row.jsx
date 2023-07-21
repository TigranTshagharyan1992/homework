import React from 'react';
import SelectAnt from './../elements/select'

const Row = (props) => {
    let item = props.item;

    let fields = [
        {
            value: 'check',
            label: 'check',
        },
        {
            value: 'hide',
            label: 'hide',
        },
        {
            value: 'delete',
            label: 'delete',
        },
        {
            value: 'edith',
            label: 'edith',
        },
    ];

    return (
        <div className='list'>
            <span className={`${item.status} name`} id={item.id} >
                {item.name}
            </span>
            <SelectAnt fields={fields} onChange={props.onChange} id={item.id}/>
        </div>

    );
};

export default Row;