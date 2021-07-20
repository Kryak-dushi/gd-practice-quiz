import '../mainpage/Mainpage.css';
import '../quiz/Quiz.css';
import '../content/Content.css';
import '../button/Button.css'
import './History.css'
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