import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { leftSideBar } from './left-sidebard/left-sidebar.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,leftSideBar,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="nica"
  isleftSidebarCollapsed=signal<boolean>(false)
  screenWidht=signal<number>(window.innerWidth)
  @HostListener('window:resize')
  onResize(){
    this.screenWidht.set(window.innerWidth)
    if(this.screenWidht()<768){
      this.isleftSidebarCollapsed.set(true)
    }
  }
  changeIsLeftSideBarcollapsed(isleftSidebarCollapsed:boolean):void{
    this.isleftSidebarCollapsed.set(isleftSidebarCollapsed)
  }
}
