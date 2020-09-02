import React from 'react';


export function Select({ register, options, name, ...rest }) {
    return (
        <select name={name} ref={register} {...rest}>
            {options.map((value) => (
                <option value={value} key={value}>
                    {value}
                </option>
            ))}
        </select>
    );
}
