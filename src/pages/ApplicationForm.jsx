import React from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import uploadSvg from '../assets/img/upload.svg';
import { Select } from '../components/Form';

const ApplicationForm = () => {
    const { register, errors, handleSubmit } = useForm({
        mode: 'onChange',
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

    return (
        <div className="container">
            <h1 className="content__title">Работа твоей мечты</h1>
            <div className="content__block">
                <div className="content__form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <section className="content__form__large_element">
                            <label forhtml="profession">Вакансия *</label>
                            <Select id="profession" name="profession" options={['товаровед']} />
                        </section>

                        <section className="content__form__large_element">
                            <label forhtml="FIO">ФИО *</label>
                            <input
                                type="text"
                                placeholder="Фамилия Имя Отчество"
                                name="FIO"
                                id="FIO"
                                ref={register({ required: 'Обязательное поле' })}
                            />
                            {errors.FIO && errors.FIO.type === 'required' && (
                                <p style={errorStyle}>{errors.FIO.message}</p>
                            )}
                        </section>
                        <div className="content__form__together_short">
                            <section className="content__form__short_element">
                                <label forhtml="DOB">Дата рождения *</label>
                                <input
                                    className="content__form__short_element_input"
                                    type="text"
                                    placeholder="28.07.2002"
                                    name="DOB"
                                    id="DOB"
                                    ref={register({ required: 'Обязательное поле' })}
                                />
                                {errors.DOB && errors.DOB.type === 'required' && (
                                    <p style={errorStyle}>{errors.DOB.message}</p>
                                )}
                            </section>

                            <section className="content__form__short_element">
                                <label>Пол</label>
                                <div className="content__form__gender">
                                    <div className="content__form__gender_radio_block">
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="man"
                                            ref={register}
                                            id="man"
                                        />
                                        <label forhtml="man">мужской</label>
                                    </div>
                                    <div className="content__form__gender_radio_block">
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="woman"
                                            ref={register}
                                            id="woman"
                                        />
                                        <label htmlFor="woman">женский</label>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="content__form__together_short">
                            <section className="content__form__short_element">
                                <label forhtml="phone">Контактный телефон *</label>
                                <input
                                    className="content__form__short_element_input"
                                    type="text"
                                    id="phone"
                                    placeholder="+7 ("
                                    name="phone"
                                    ref={register({ required: 'Обязательное поле' })}
                                />
                                {errors.phone && errors.phone.type === 'required' && (
                                    <p style={errorStyle}>{errors.phone.message}</p>
                                )}
                            </section>

                            <section className="content__form__short_element">
                                <label forhtml="email">Электронная почта</label>
                                <input
                                    className="content__form__short_element_input"
                                    type="text"
                                    id="email"
                                    placeholder="qwe@qwe.com"
                                    name="email"
                                />
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
