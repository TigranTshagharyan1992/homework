import { Select } from 'antd';
import React from 'react';

const onSearch = (value) => {
    console.log('search:', value);
};
const SelectAnt = (props) => {
    const onChange = (selected) => {
        props.onChange(selected, props.id);
    };
    return (
        <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={props.fields}
        />
    )
};
export default SelectAnt;