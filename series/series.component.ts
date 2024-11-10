import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { Serie } from './Serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSeries():void{
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  getAverage(): number {
    if (this.series.length === 0) return 0;
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }

  ngOnInit(){
    this.getSeries();
  }

}
