package TestBHDStar.RestAPI.PublicAPI;

import TestBHDStar.Service.UserService;
import TestBHDStar.entity.MovieEntity;
import TestBHDStar.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class HomeController {

@GetMapping("/movies")
public Object getExample() {
    List<MovieEntity> movies = new ArrayList<>();
    MovieEntity movie1 = new MovieEntity("ANT-MAN AND THE DEATH WASP : QUANTUMANIA",
            "/static/media/Movie1.0a9bb5a90ffd5c62018b.png",
            "Movie Info");
    MovieEntity movie2 = new MovieEntity("SOME DAY OR ONE DAY",
            "/static/media/Movie2.f4a2376d157d1c662a66.jfif",
            "Movie Info");
    MovieEntity movie4 = new MovieEntity("THE FABELMANS",
            "/static/media/Movie4.5d82678d17136a613d55.jfif",
            "Movie Info");
    MovieEntity movie5 = new MovieEntity("SWORD ART ONLINE PROGRESSIVE - SCHERZO OF DEEP",
            "/static/media/Movie5.0ac791b783b6882b1b41.jfif",
            "Movie Info");
    MovieEntity movie6 = new MovieEntity("ANT-MAN AND THE DEATH WASP : QUANTUMANIA",
            "/static/media/Movie6.83adbfe9747705bcd5f6.jfif",
            "Movie Info");
    MovieEntity movie3 = new MovieEntity("TO THE ONLY ONE WHO LOVE YOU, ME",
            "/static/media/Movie3.f51a9965643d5c23d921.jfif",
            "Movie Info");
    MovieEntity movie7 = new MovieEntity("TO EVERY YOU I'VE LOVED BEFORE",
            "/static/media/Movie7.9af860db4cdfb7c0ddb5.png",
            "Movie Info");
    MovieEntity movie8 = new MovieEntity("ANT-MAN AND THE DEATH WASP : QUANTUMANIA",
            "/static/media/Movie8.bf03e371f6722a978537.jfif",
            "TITANIC: 25TH ANIVERSARY");
    MovieEntity movie9 = new MovieEntity("KNOCK AT THE CABIN",
            "/static/media/Movie9.440e14ca36f0b68692b5.jfif",
            "Movie Info");
    MovieEntity movie10 = new MovieEntity("ANT-MAN AND THE DEATH WASP : QUANTUMANIA",
            "/static/media/Movie10.39066161d178ba4d71a6.jfif",
            "BABYLON");
    movies.add(movie1);
    movies.add(movie2);
    movies.add(movie3);
    movies.add(movie4);
    movies.add(movie5);
    movies.add(movie6);
    movies.add(movie7);
    movies.add(movie8);
    movies.add(movie9);
    movies.add(movie10);


    return movies;
}

}
