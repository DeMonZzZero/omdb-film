import React, {useState} from 'react';

export default function Search(props) {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            props.enterHandler(search, type);
        }
    }

    const handleFilter = (event) => {
        setType(event.target.value);
        props.enterHandler(search, event.target.value);
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="text"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    onKeyUp={handleEnter}
                    placeholder="Поиск....."
                />
                <button
                    className="btn"
                    onClick={() => props.enterHandler(search, type)}>
                    Поиск
                </button>
            </div>
            <p>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="all"
                        onChange={handleFilter}
                        checked={type === "all"}
                        className="with-gap"
                    />
                    <span>Все</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="movie"
                        onChange={handleFilter}
                        checked={type === "movie"}
                        className="with-gap"
                    />
                    <span>Только фильмы</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value="series"
                        onChange={handleFilter}
                        checked={type === "series"}
                        className="with-gap"
                    />
                    <span>Только сериалы</span>
                </label>
            </p>
        </div>
    );
}