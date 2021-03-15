export interface IAPIMovieResult {
  video: boolean,
  vote_average: number,
  overview: string,
  release_date: string,
  adult: boolean,
  backdrop_path: string,
  vote_count: number,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  poster_path: string,
  title: string,
  popularity: number,
  media_type: string
}

export interface IAPIData {
  page?: number,
  results?: IAPIMovieResult[],
  total_pages?: number,
  total_results?: number
}

