export type User={
    userId: number,
    email: string,
    displayName: string,
    password: string,
}

export type Movie={
    "adult": false;
    "genre_ids": number[];
    "id": number;
    "language": string;
    "synopsis": string;
    "poster": string;
    "backdrop": string;
    "release_date": string;
    "title": string;
    "original_title": string;
    "runtime": number;
}

export type Comment={
    user: number,
    movie: number,
    comment: string,
    time: string,
    isRecommended: boolean,
}

