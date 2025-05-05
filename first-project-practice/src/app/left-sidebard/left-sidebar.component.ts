import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule,CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class leftSideBar {
  isleftSidebarCollapsed=input.required<boolean>()
  changeIsLeftSideBarcollapsed=output<boolean>()
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard',
    },
    {
      routeLink: 'products',
      icon: 'fal fa-box-open',
      label: 'Products',
    }, 
    {
      routeLink: 'pages',
      icon: 'fal fa-file',
      label: 'Pages',
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings',
    },
  ];
  toggleCollapse():void{
    this.changeIsLeftSideBarcollapsed.emit(!this.isleftSidebarCollapsed())
  }
  closeSidenav():void{
    this.changeIsLeftSideBarcollapsed.emit(true)
  }
}
