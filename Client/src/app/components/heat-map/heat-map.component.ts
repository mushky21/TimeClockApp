import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { FeatureCollection, Feature, Geometry } from 'geojson';
import { async } from 'q';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {
  locations: [[number, number]] = [[82, 82]];
  features: JSON[] = [];
  constructor() { }

  async ngOnInit() {
    console.log(this.locations[0]);
    this.loadFeatures();
    this.loadMap();
  }
  loadFeatures() {
    let loaction;
    let feature;
    for (let index = 0; index < this.locations.length; index++) {
      loaction: [] = this.locations[index];
      feature = {
        // feature for Mapbox DC
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [location]
        },
        "properties": {

        }
      };
      this.features.push(feature);
    };


  }
  private async convertCollection(): Promise<any[]> {
    let converted = [];

    if (this.locations) {
      // Iterate over the coordinate storing collection
      for (let i = 0; i < this.locations.length; i++) {
        let loaction: [Number, Number] = this.locations[i];

        // Create the GeoJson
        let c = {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "Point",
            "coordinates": location
          }
        };

        /* 	// If the entry has a position, modify the data within the generated GeoJson
              if (e.position)*/
        /*   c.geometry.coordinates = [location[0], location[1]]; */

        // Add the GeoJson entry into the converted collection
        converted.push(c);
      }
    }


    // Return a list featuring GeoJsons
    return converted
  }



  loadMap() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoibXVzaG11c2g3MjIiLCJhIjoiY2szOHBzamVkMDgxYjNscGI4bDJnbzc5bCJ9.gL5wPA4KhrYqTW9nX1GgJA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-120, 50],
      zoom: 2
    });


    map.on('load', function () {

      map.addSource('locations', {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": this.features as Feature[]
        }
      });
      map.addLayer({
        "id": "loactions-heat",
        "type": "heatmap",
        "source": "locations",
        "maxzoom": 9,
        "paint": {
          // Increase the heatmap weight based on frequency and property magnitude
          "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", "mag"],
            0, 0,
            6, 1
          ],
          // Increase the heatmap color weight weight by zoom level
          // heatmap-intensity is a multiplier on top of heatmap-weight
          "heatmap-intensity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0, 1,
            9, 3
          ],
          // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
          // Begin color ramp at 0-stop with a 0-transparancy color
          // to create a blur-like effect.
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0, "rgba(33,102,172,0)",
            0.2, "rgb(103,169,207)",
            0.4, "rgb(209,229,240)",
            0.6, "rgb(253,219,199)",
            0.8, "rgb(239,138,98)",
            1, "rgb(178,24,43)"
          ],
          // Adjust the heatmap radius by zoom level
          "heatmap-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0, 2,
            9, 20
          ],
          // Transition from heatmap to circle layer by zoom level
          "heatmap-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            7, 1,
            9, 0
          ],
        }
      }, 'waterway-label');

      map.addLayer({
        "id": "locations-point",
        "type": "circle",
        "source": "locations",
        "minzoom": 7,
        "paint": {
          // Size circle radius by earthquake magnitude and zoom level
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            7, [
              "interpolate",
              ["linear"],
              ["get", "mag"],
              1, 1,
              6, 4
            ],
            16, [
              "interpolate",
              ["linear"],
              ["get", "mag"],
              1, 5,
              6, 50
            ]
          ],
          // Color circle by earthquake magnitude
          "circle-color": [
            "interpolate",
            ["linear"],
            ["get", "mag"],
            1, "rgba(33,102,172,0)",
            2, "rgb(103,169,207)",
            3, "rgb(209,229,240)",
            4, "rgb(253,219,199)",
            5, "rgb(239,138,98)",
            6, "rgb(178,24,43)"
          ],
          "circle-stroke-color": "white",
          "circle-stroke-width": 1,
          // Transition from heatmap to circle layer by zoom level
          "circle-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            7, 0,
            8, 1
          ]
        }
      }, 'waterway-label');
    });

  }

}
