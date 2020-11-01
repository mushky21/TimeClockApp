import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.component.html',
  styleUrls: ['./display-map.component.css'],
  template: `
  <mgl-map
    [style]="'mapbox://styles/mapbox/streets-v9'"
    [zoom]="[9]"
    [center]="[-74.50, 40]"
  >
  <mgl-control 
     mglNavigation
   ></mgl-control>
   <mgl-control
   mglGeolocate
   [positionOptions]="{
     enableHighAccuracy: true
   }"
   [trackUserLocation]="true"
   position="top-right"
   ></mgl-control>
  </mgl-map>
  `,
  styles: [`
    mgl-map {
      height: 50%;
      width: 100%;
    }
  `]
})
export class DisplayMapComponent implements OnInit {
  @Output() sendLocation = new EventEmitter();
  myLocation: [number, number];
  constructor() {
/*     navigator.geolocation.getCurrentPosition((position) => {
      this.myLocation = [position.coords.latitude, position.coords.longitude];
      this.sendLocation.emit(this.myLocation);
    }); */
  }

  ngOnInit() {


  }

}
