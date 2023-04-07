import React from 'react';
import Movies from '../../components/Movies';
import Search from '../../components/Search';
import Movie from '../../components/Movie';

export default class Main extends React.Component {
    state = {
        show: 'index', 
        movies: [], 
        movie: {}, 
        loading: true, 
    }

    
    handleEnter = (search, type) => {
        if (search.trim() === "") return;
        this.setState({
            loading: true,
            show: 'search'
        });
        search = encodeURIComponent(search);
        let url = `http://www.omdbapi.com/?apikey=a2b07930&s=${search}`;
        if (type !== 'all') {
            url = url + `&type=${type}`;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.Search ? data.Search : [], 
                    loading: false
                });
            });
    }

    
    handleReadMore = (id) => {
        this.setState({
            loading: true,
            show: 'movie'
        });
        fetch(`http://www.omdbapi.com/?apikey=a2b07930&i=${id}&plot=full`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movie: data.Title ? data : {},
                    loading: false
                });
            });
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=a2b07930&s=')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.Search ? data.Search : [],
                    loading: false
                });
            });
    }

    render() {
        return (
            <main className="container">
                <Search enterHandler={this.handleEnter} />
                {
                    this.state.loading ? (
                        <div className="loader">Загрузка...</div>
                    ) : this.state.show === 'movie' ? (
                        <Movie {...this.state.movie} />
                    ) : (
                        <Movies
                            movies={this.state.movies}
                            readMoreHandler={this.handleReadMore}
                        />
                    )
                }
            </main>
        );
    }
}




