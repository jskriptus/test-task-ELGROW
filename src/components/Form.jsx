import React from 'react';
import verif from '../assets/img/verif.svg';
import { useFormContext } from 'react-hook-form';

const errorStyle = {
    color: '#FF6666',
    fontSize: '14px',
    lineHeight: '18px',
    margin: 0,
};

export const Select = ({ title, name, rules, options, ...rest }) => {
    const { register, formState, errors } = useFormContext();
    const { dirtyFields } = formState;

    return (
        <div className="content__form__large_element">
            <div className="title">
                <label forhtml={name}>{title}</label>
                <span>{dirtyFields[name] ? <img src={verif} alt="" /> : null}</span>
            </div>
            <select
                name={name}
                className={errors && errors[name] ? 'large__invalid' : 'large__valid'}
                ref={register(rules)}
                {...rest}>
                {options.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            {errors && errors[name] && <p style={errorStyle}>{errors[name].message}</p>}
        </div>
    );
};

export const Radio = ({ title, name, rules, options, ...rest }) => {
    const { register, formState, errors } = useFormContext();
    const { dirtyFields } = formState;

    return (
        <div className="content__form__short_element">
            <div className="title">
                <label forhtml={name}>{title}</label>
                <span>{dirtyFields[name] ? <img src={verif} alt="" /> : null}</span>
            </div>
            <div className="content__form__gender">
                {options.map((option) => (
                    <div key={option} className="content__form__gender_radio_block">
                        <input
                            name={name}
                            type="radio"
                            value={option}
                            ref={register(rules)}
                            id={option}
                            key={option}
                            {...rest}
                        />
                        <label forhtml={option}>{option}</label>
                    </div>
                ))}
            </div>
            {errors && errors[name] && <p style={errorStyle}>{errors[name].message}</p>}
        </div>
    );
};

export const InputLarge = ({ title, name, rules, ...rest }) => {
    const { register, formState, errors } = useFormContext();
    const { dirtyFields } = formState;

    return (
        <div className="content__form__large_element">
            <div className="title">
                <label forhtml={name}>{title}</label>
                <span>{dirtyFields && dirtyFields[name] ? <img src={verif} alt="" /> : null}</span>
            </div>
            <input
                name={name}
                ref={register(rules)}
                className={errors && errors[name] ? 'large__invalid' : 'large__valid'}
                {...rest}
            />
            {errors && errors[name] && <p style={errorStyle}>{errors[name].message}</p>}
        </div>
    );
};

export const InputShort = ({ title, name, rules, ...rest }) => {
    const { register, formState, errors } = useFormContext();
    const { dirtyFields } = formState;

    return (
        <div className="content__form__short_element">
            <div className="title">
                <label forhtml={name}>{title}</label>
                <span>{dirtyFields && dirtyFields[name] ? <img src={verif} alt="" /> : null}</span>
            </div>
            <input
                name={name}
                ref={register(rules)}
                {...rest}
                className={errors && errors[name] ? 'short__invalid' : 'short__valid'}
            />
            {errors && errors[name] && <p style={errorStyle}>{errors[name].message}</p>}
        </div>
    );
};
