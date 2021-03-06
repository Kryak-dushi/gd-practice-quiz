import '../mainpage/Mainpage.css';
import './History.css'
import Button from '../button/Button';
import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: this.getGames()
        };
    }

    getGames() {
        if (localStorage.getItem('games') !== null && localStorage.getItem('games') !== undefined) {
            return JSON.parse(localStorage.getItem('games'));
        } else return []
    }

    getDate(data) {
        const date = new Date(data);
        let field = '';
        field = (date.getDate() < 10) ? `0${date.getDate()}.` : `${date.getDate()}.`;
        field += (date.getMonth() < 10) ? `0${(date.getMonth() + 1)}.` : `${(date.getMonth() + 1)}.`;
        field += `${date.getFullYear()}`;
        return field;
    }

    render() {
        return (
            <div className="mainpage history">
                <div className="mainpage__button-container">
                    <Button className="button button_red" text='ГЛАВНАЯ' onClick={() => { window.location.assign('http://localhost:3000/index') }} />
                    <Button className="button button_red" text='НАЧАТЬ' onClick={() => { window.location.assign('http://localhost:3000/quiz') }} />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Дата</th>
                            <th>Тема</th>
                            <th>Результат</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.games.map((game, index) => {
                            return <tr key={index}>
                                <td>{game.id}</td>
                                <td>{this.getDate(game.date)}</td>
                                <td>{game.theme}</td>
                                <td>{game.correctAnswers}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default History;