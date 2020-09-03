import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import verif from '../assets/img/verif.svg';

const ApplicationForm = () => {
    const { register, errors, handleSubmit, formState } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const onChange = (value) => {
        console.log('Captcha value:', value);
    };

    const errorStyle = {
        color: '#FF6666',
        margin: '2px',
    };

    const { dirtyFields } = formState;
    const [value, setValue] = useState('');
    return (
        <div className="container">
            <h1 className="content__title">Работа твоей мечты</h1>
            <div className="content__block">
                <div className="content__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="content__form__large_element">
                            <div className="title">
                                <label forhtml="profession">Вакансия *</label>
                                <span>
                                    {dirtyFields.profession ? <img src={verif} alt="" /> : null}
                                </span>
                            </div>
                            <select
                                name="profession"
                                className={errors.profession ? 'large__invalid' : 'large__valid'}
                                register={[('required': 'Обязательное поле')]}>
                                <option value=" "> </option>
                                <option value="товаровед">товаровед</option>
                            </select>
                            {errors.profession && errors.profession.type === 'required' && (
                                <p style={errorStyle}>{errors.profession.message}</p>
                            )}
                        </section>

                        <section className="content__form__large_element">
                            <div className="title">
                                <label forhtml="FIO">ФИО *</label>
                                <span>{dirtyFields.FIO ? <img src={verif} alt="" /> : null}</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Фамилия Имя Отчество"
                                name="FIO"
                                id="FIO"
                                className={errors.FIO ? 'large__invalid' : 'large__valid'}
                                ref={register({ required: 'Обязательное поле' })}
                            />
                            {errors.FIO && errors.FIO.type === 'required' && (
                                <p style={errorStyle}>{errors.FIO.message}</p>
                            )}
                        </section>
                        <div className="content__form__together_short">
                            <section className="content__form__short_element ident">
                                <div className="title">
                                    <label forhtml="DOB">Дата рождения *</label>

                                    {dirtyFields.DOB ? <img src={verif} alt="" /> : null}
                                </div>
                                <input
                                    type="text"
                                    placeholder="28.07.2002"
                                    name="DOB"
                                    id="DOB"
                                    className={errors.DOB ? 'short__invalid' : 'short__valid'}
                                    ref={register({ required: 'Обязательное поле' })}
                                />
                                {errors.DOB && errors.DOB.type === 'required' && (
                                    <p style={errorStyle}>{errors.DOB.message}</p>
                                )}
                            </section>

                            <section className="content__form__short_element__light">
                                <div className="title">
                                    <label>Пол</label>
                                    {dirtyFields.gender ? <img src={verif} alt="" /> : null}
                                </div>
                                <div className="content__form__gender">
                                    <div className="content__form__gender_radio_block">
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="man"
                                            ref={register({ required: 'Обязательное поле' })}
                                            id="man"
                                        />
                                        <label forhtml="man">мужской</label>
                                    </div>
                                    <div className="content__form__gender_radio_block">
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="woman"
                                            ref={register({ required: 'Обязательное поле' })}
                                            id="woman"
                                        />
                                        <label htmlFor="woman">женский</label>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="content__form__together_short ">
                            <section className="content__form__short_element ident">
                                <div className="title">
                                    <label forhtml="phone">Контактный телефон *</label>
                                    {dirtyFields.phone ? <img src={verif} alt="" /> : null}
                                </div>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="+7 ("
                                    name="phone"
                                    className={errors.phone ? 'short__invalid' : 'short__valid'}
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: 'the email field is required',
                                        },
                                        pattern: {
                                            value: /^((\+7|7|8)+([0-9]){10})$|\b\d{3}[-.]?\d{3}[-.]?\d{4}d/,
                                            message: 'Enter a valid e-mail address',
                                        },
                                    })}
                                />

                                {errors.phone && errors.phone.type === 'required' && (
                                    <p style={errorStyle}>{errors.phone.message}</p>
                                )}
                            </section>

                            <section className="content__form__short_element">
                                <label forhtml="email">Электронная почта</label>
                                {dirtyFields.email ? <img src={verif} alt="" /> : null}
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="qwe@qwe.com"
                                    name="email"
                                    className={errors.email ? 'short__invalid' : 'short__valid'}
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: 'the email field is required',
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'Enter a valid e-mail address',
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p style={errorStyle}>{errors.email.message}</p>
                                )}
                            </section>
                        </div>
                        <section className="content__form__large_element">
                            <label forhtml="resume">Резюме</label>
                            <textarea name="resume" id="rezume" rows="10"></textarea>
                        </section>

                        <section>
                            <label htmlFor="captcha">Капча</label>
                            <ReCAPTCHA
                                sitekey="6LcJr8YZAAAAAG5KqV_DAdJ675IcW_upC6Q3tFnc"
                                onChange={onChange}
                            />
                            <p>* поля для обязательного заполнения</p>
                        </section>

                        <section>
                            <input
                                type="checkbox"
                                name="accept"
                                ref={register({ required: 'Обязательное поле' })}
                            />
                            {errors.accept && <p>{errors.accept.message}</p>}
                            <p>
                                я подтверждаю согласие на обработку персональных данных и принимаю
                                условия рассмотрения обращений *
                            </p>
                        </section>

                        <input type="submit" />
                    </form>
                </div>
                <div className="content__info">
                    <h2 className="content__info__title">Наша суперцель</h2>
                    <div className="content__info__words">
                        — стать любимым магазином для каждой российской семьи.
                    </div>
                    <div className="content__info__words">
                        Сотни тысяч наших сотрудников ежедневно работают над её достижением.
                    </div>
                    <div className="content__info__words">
                        Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если
                        вместе с тобой.
                    </div>
                    <button className="content__info__button">+7 (926) 433-14-16</button>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;
