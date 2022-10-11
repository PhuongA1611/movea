import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    now_playing: 'now_playing',
    popular: 'popular',
    top_rated: 'top_rated',
    up_coming: 'upcoming',
    similar: 'similar'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

export const movieTypeName = {
    now_playing: 'Movies now playing',
    popular: 'Popular movies',
    top_rated: 'Top rated moives',
    up_coming: 'Upcoming',
    similar: 'Similar'
}

export const tvTypeName = {
    popular: 'Popular TVshows',
    top_rated: 'Top rated TVshows',
    on_the_air: 'TVshows on the air'
}

const dbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getDetail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    getSimilar: (cate, id, params) => {
        const url = category[cate] + '/' + id + '/similar'
        return axiosClient.get(url, params)
    }
}

export default dbApi;