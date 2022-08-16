import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  latitude: number = 0;
  longitude: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  askPermission() {
    navigator.geolocation.getCurrentPosition(location => {
      this.getCurrentPosition(location);
    })
  }

  getCurrentPosition(location: GeolocationPosition): void {
    this.latitude = location.coords.latitude;
    this.longitude = location.coords.longitude;
  }

}
