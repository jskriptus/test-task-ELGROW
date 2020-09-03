import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div>Тестовое задание на джуна React для elgrow.ru</div>
            <br />
            <br />
            <div>
                <input type="radio" name="rb" id="rb1" checked />{' '}
                <label for="rb1">Переключатель 1</label>
            </div>
            <div>
                * Использованы: HTML5, CSS3, JavaScript и React. <br />* Библиотеки: React Router
                Dom, React Hook Form, React Google Recaptcha.
            </div>
            <br />
            <br />
        </div>
    );
};

export default Home;
