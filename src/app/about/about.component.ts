import { Component } from '@angular/core';
import { MyLocationComponent } from '../my-location/my-location.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MyLocationComponent, MyLocationComponent, NavBarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
