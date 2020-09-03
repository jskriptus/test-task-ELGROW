import React from 'react';
import { useForm, FormProvider, useFormContext  } from 'react-hook-form';
import verif from '../assets/img/verif.svg';

const errorStyle = {
    color: '#FF6666',
    fontSize: '14px',
    lineHeight: '18px',
    margin: 0,
};

export const Form = ({ defaultValues, children, onSubmit }) => {
    const methods = useForm({ defaultValues });
    const { handleSubmit, formState } = methods;
    const { dirtyFields } = formState;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            {React.Children.map(children, (child) => {
                return child.props.name
                    ? React.createElement(child.type, {
                          ...{
                              ...child.props,
                              register: methods.register,
                              errors: methods.errors,
                              key: child.props.name,
                              dirtyFields: dirtyFields,
                          },
                      })
                    : child;
            })}
        </form>
    );
};

export const InputLarge = ({ register, errors, title, dirtyFields, name, rules, ...rest }) => {
    return (
        <div>
            <div className="title">
                <label forhtml={name}>{title}</label>
                <span>{dirtyFields[name] ? <img src={verif} alt="" /> : null}</span>
            </div>
            <input
                name={name}
                ref={register(rules)}
                className={errors[name] ? 'large__invalid' : 'large__valid'}
                {...rest}
            />
            {errors[name] && <p style={errorStyle}>{errors[name].message}</p>}
        </div>
    );
};

export const InputShort = ({ register, errors, title, dirtyFields, name, rules, ...rest }) => {
    console.log(name);
    return (
        <div className="content__form__short_element">
            <div className="title">
                <label forhtml={name}>{title}</label>
                <span>{dirtyFields[name] ? <img src={verif} alt="" /> : null}</span>
            </div>
            <input
                name={name}
                ref={register(rules)}
                {...rest}
                className={errors[name] ? 'short__invalid' : 'short__valid'}
            />
            {errors[name] && <p style={errorStyle}>{errors[name].message}</p>}
        </div>
    );
};
