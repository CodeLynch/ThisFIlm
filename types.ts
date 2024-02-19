export type User={
    userId: number,
    email: string,
    displayName: string,
    password: string,
}

export type Movie={
    "adult": false;
    "genres": number[];
    "id": number;
    "original_language": string;
    "overview": string;
    "poster_path": string;
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

