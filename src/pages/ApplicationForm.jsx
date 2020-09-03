import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { InputLarge, InputShort, Select, Radio } from '../components/Form';

const ApplicationForm = () => {
    const methods = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    const { register, errors, handleSubmit } = methods;

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const onChange = (value) => {
        console.log('Captcha value:', value);
    };

    return (
        <div className="container">
            <h1 className="content__title">Работа твоей мечты</h1>
            <div className="content__block">
                <div className="content__form">
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Select
                                title="Вакансия *"
                                name="profession"
                                rules={{ required: 'Обязательное поле' }}
                                options={['', 'товаровед']}
                            />

                            <InputLarge
                                type="text"
                                title="ФИО *"
                                placeholder="Фамилия Имя Отчество"
                                name="fio"
                                rules={{ required: 'Обязательное поле' }}
                            />

                            <div className="content__form__together_short">
                                <InputShort
                                    type="text"
                                    title="Дата рождения *"
                                    placeholder="28.07.2002"
                                    name="DOB"
                                    rules={{ required: 'Обязательное поле' }}
                                />

                                <Radio
                                    name="gender"
                                    title="Пол"
                                    type="radio"
                                    options={['man', 'woman']}
                                />
                            </div>
                            <div className="content__form__together_short ">
                                <InputShort
                                    type="text"
                                    title="Контактный телефон *"
                                    placeholder="+7 ("
                                    name="phone"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'обязательное поле',
                                        },
                                        pattern: {
                                            value: /^((\+7|7|8)+([0-9]){10})$|\b\d{3}[-.]?\d{3}[-.]?\d{4}d/,
                                            message: 'поле заполнено не правильно',
                                        },
                                    }}
                                />

                                {/**

                                <section className="content__form__short_element ident">
                                    <div className="title">
                                        <label forhtml="phone">Контактный телефон *</label>
                                        {dirtyFields.phone && !errors.phone ? (
                                            <img src={verif} alt="" />
                                        ) : null}
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
                                                message: 'обязательное поле',
                                            },
                                            pattern: {
                                                value: /^((\+7|7|8)+([0-9]){10})$|\b\d{3}[-.]?\d{3}[-.]?\d{4}d/,
                                                message: 'поле заполнено не правильно',
                                            },
                                        })}
                                    />

                                    {errors.phone && (
                                        <p style={errorStyle}>{errors.phone.message}</p>
                                    )}
                                </section>

                                <section className="content__form__short_element">
                                    <label forhtml="email">Электронная почта</label>

                                    {dirtyFields.email && !errors.email ? (
                                        <img src={verif} alt="" />
                                    ) : null}
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
                                                value: /^\S+@\S+$/i,
                                                message: 'поле заполнено не корректно',
                                            },
                                        })}
                                    />
                                    {console.log(errors)}
                                    {errors.email && (
                                        <p style={errorStyle}>{errors.email.message}</p>
                                    )}
                                </section>


 */}
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
                                    я подтверждаю согласие на обработку персональных данных и
                                    принимаю условия рассмотрения обращений *
                                </p>
                            </section>

                            <input type="submit" />
                        </form>
                    </FormProvider>
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
