import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-my-location',
  standalone: true,
  templateUrl: './my-location.component.html',
  styleUrls: ['./my-location.component.scss'],
})
export class MyLocationComponent implements AfterViewInit {
  private map!: L.Map;

  // Definição das opções do mapa, incluindo a configuração para ocultar a atribuição
  public options: L.MapOptions = {
    attributionControl: false, // Desativa o controle de atribuição
  };

  ngAfterViewInit() {
    // Inicializa o mapa com as opções definidas
    this.map = L.map('map', this.options).setView([0, 0], 2); // Visualização global inicial

    // Adiciona a camada do mapa com estilo cinza do CartoDB
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    ).addTo(this.map);

    // Adiciona marcador com popup
    const portoLatLng: L.LatLngExpression = [41.1579, -8.6291];
    L.marker(portoLatLng, {
      icon: L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl:
          'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
      }),
    })
      .addTo(this.map)
      .bindPopup('Porto, Portugal')
      .openPopup();

    // Animação de zoom
    setTimeout(() => {
      this.map.flyTo(portoLatLng, 13, {
        duration: 5, // Duração da animação em segundos
      });
    }, 1000); // Espera 1 segundo antes de iniciar a animação
  }
}
