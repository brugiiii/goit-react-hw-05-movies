import axios from 'axios';

const KEY = '83584156b00a2d23d72a1dbc78073946';
const BASE_URL = 'https://api.themoviedb.org/3/';

export class Api {
  constructor() {
    this._query = '';
    this._movieId = null;
  }

  async fetch(type) {
    let res;

    switch (type) {
      case 'trending':
        res = await axios(
          `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US`
        );
        break;

      case 'byQuery':
        res = await axios(
          `${BASE_URL}search/movie?api_key=${KEY}&query=${this._query}&include_adult=false&language=en-US&page=1`
        );
        break;

      case 'details':
        res = await axios(
          `${BASE_URL}movie/${this._movieId}?api_key=${KEY}&language=en-US`
        );
        return res.data;

      case 'credits':
        res = await axios(
          `${BASE_URL}movie/${this._movieId}/credits?api_key=${KEY}&language=en-US`
        );
        return res.data.cast;

      case 'reviews':
        res = await axios(
          `${BASE_URL}movie/${this._movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
        );
        break;

      default:
        return;
    }

    return res.data.results;
  }

  get query() {
    return this._query;
  }

  set query(newQuery) {
    this._query = newQuery;
  }

  get movieId() {
    return this._movieId;
  }

  set movieId(id) {
    this._movieId = id;
  }
}
