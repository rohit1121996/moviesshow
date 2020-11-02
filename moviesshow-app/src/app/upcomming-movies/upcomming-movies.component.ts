import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-upcomming-movies',
  templateUrl: './upcomming-movies.component.html',
  styleUrls: ['./upcomming-movies.component.css'],
})
export class UpcommingMoviesComponent implements OnInit {
  upcommingMovies = [];
  constructor() {}

  ngOnInit(): void {
    this.getUpCommingMovies();
  }
  getUpCommingMovies() {
    $.get(
      'https://developers.themoviedb.org/3/movies/get-upcoming',
      (data, status) => {
        console.log(data);
      }
    );
  }
}
