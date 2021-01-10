import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.page.html',
  styleUrls: ['./nba.page.scss'],
})
export class NbaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nba = [
    {
      year: '2018',
      champion: 'Golden State Warriors',
      logo: '../../../assets/golden.png',
      player:['Kevin Duran', 'Klay Thompson', 'Stephen Curry', 'Jordan Poole'],
    }, {
      year: '2019',
      champion: 'Toronto Raptors',
      logo: '../../../assets/raptors.png',
      player:['Chris Boucher', 'Oshae Brissett', 'Terence Davis', 'Marc Gasol'],
    }, {
      year: '2020',
      champion: 'Lakers',
      logo:'../../../assets/lakers.png',
      player: ['LeBron James', 'Anthony Davis', 'Head Coach', 'Frank Vogel'],
    },
  ]

}
