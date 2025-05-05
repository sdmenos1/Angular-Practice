import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project-practice-personal';
  sideBarListenCollapsed=signal<boolean>(false)
  screenWidth=signal<number>(window.innerWidth)
  @HostListener('window:resize')
  onResize(){
    this.screenWidth.set(window.innerWidth)
    if(this.screenWidth()<768){
      this.sideBarListenCollapsed.set(true)
    }else{
      this.sideBarListenCollapsed.set(false)
    }
  }
}
