export type User={
    userId: number,
    email: string,
    displayName: string,
    password: string,
}

export type Movie={
    movieId: number,
    title: string,
    genres: number[],
    synopsis: string,
    poster: string,
    starring: string,
    director: string,
}

export type Comment={
    user: number,
    movie: number,
    comment: string,
    time: string,
    isRecommended: boolean,
}

