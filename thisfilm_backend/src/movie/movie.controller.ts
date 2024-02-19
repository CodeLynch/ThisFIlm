import { BadRequestException, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { MovieDTO } from './dto/movie.dto';

@Controller('movie')
export class MovieController {


    /* 
    Id value for each genre:
    Action          28
    Comedy          35
    Drama           18
    Romance         10749
    Horror          27
    Science Fiction 878
    Fantasy         14
    Mystery         9648
    */
    @Get('genre/:genre')
    async getMoviesByGenre(
        @Req() req: Request,
        @Param('genre') genre: string,
    ){
        const movieData:MovieDTO[] = [];
        let genreId;
        if(genre.toLowerCase() === 'action'){
            genreId = 28;
        }else if(genre.toLowerCase() === 'comedy'){
            genreId = 35;
        }else if(genre.toLowerCase() === 'drama'){
            genreId = 18;
        }else if(genre.toLowerCase() === 'romance'){
            genreId = 10749;
        }else if(genre.toLowerCase() === 'horror'){
            genreId = 27;
        }else if(genre.toLowerCase() === 'scifi'){
            genreId = 878;
        }else if(genre.toLowerCase() === 'fantasy'){
            genreId = 14;
        }else if(genre.toLowerCase() === 'mystery'){
            genreId = 9648;
        }else{
            throw new BadRequestException('Genre not found');
        }

        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${req.query.page || 1}&with_genres=${genreId}&sort_by=popularity.desc`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_TOKEN}`
        }
        };

        const api_res = await fetch(url, options);
        const {page, total_pages, total_results, ...data} = await api_res.json();
        data.results.map((movie)=>{
            movieData.push(movie);

        })
        return{
            page,
            total_pages,
            total_results,
            movieData
        }
    }

    @Get('/fresh')
    async getNewMovies(
        @Req() req:Request
    ){
        const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&sort_by=primary_release_date.desc`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_TOKEN}`
        }
        };
        const api_res = await fetch(url, options);
        const data = await api_res.json();
        return data;
    }

    @Get('/:id')
    async getMovie(
        @Param('id') id: number
    )
    {
        const url = `https://api.themoviedb.org/3/movie/${id}`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_TOKEN}`
        }
        };
        const api_res = await fetch(url, options);
        const data = await api_res.json();
        return data;
        
    }


}
