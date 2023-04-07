export default function Movie(props) {
    if (!props.Title) {
        return <p>Фильм не найден</p>
    }
    const {
        Title,
        Year,
        Runtime,
        Genre,
        Actors,
        Plot,
        Poster
    } = props;
    const text = Title.replace(/^a-z0-9 /i, '').replace(/\s/, '+');
    return (
        <div className="row">
            <div className="col s12">
                <h1 style={{marginTop: 0}}>{Title}</h1>
            </div>
            <div className="col s5">
                {Poster !== 'N/A' ? (
                    <img
                        className="responsive-img"
                        src={Poster}
                        alt=""
                    />
                ) : (
                    <img
                        className="responsive-img"
                        src={`https://via.placeholder.com/300x430.png?text=${text}`}
                        alt=""
                    />
                )}
            </div>
            <div className="col s7">
                <ul style={{marginTop: 0}}>
                    <li>Год: {Year}</li>
                    <li>Время: {Runtime}</li>
                    <li>Жанр: {Genre}</li>
                    <li>Актеры: {Actors}</li>
                </ul>
                <p>{Plot}</p>
            </div>
        </div>
    );
}

