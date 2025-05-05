import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [RouterModule,CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  sideBarListenCollapsed=input.required<boolean>()
  items=[
    {
      routeLink:'menu',
      label:'Menu'
    },
    {
      routeLink:'nosotros',
      label:'Nosotros'
    },
    {
      routeLink:'carta',
      label:'Carta'
    },
    {
      routeLink:'galeria',
      label:'Galeria'
    },
    {
      routeLink:'login',
      label:'Login'
    }
  ]
}
