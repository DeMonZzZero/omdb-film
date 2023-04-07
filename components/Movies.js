import Card from './Card'

export default function Movies(props) {
    return (
        <div className="movies">
            {props.movies.length ? (
                props.movies.map(movie => 
                    <Card
                        key={movie.imdbID}
                        readMoreHandler={props.readMoreHandler}
                        {...movie}
                    />
                )
            ) : (
                <p>Ничего не найдено</p>
            )}
        </div>
    );
}

