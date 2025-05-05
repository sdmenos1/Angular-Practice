import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CartaComponent } from './carta/carta.component';
import { LoginComponent } from './login/login.component';
import { GaleriaComponent } from './galeria/galeria.component';
export const routes: Routes = [
    {path:'',redirectTo:'carta',pathMatch:'full'},
    {path:'menu',component:MenuComponent},
    {path:'nosotros',component:NosotrosComponent},
    {path:'carta',component:CartaComponent},
    {path:'login',component:LoginComponent},
    {path:'galeria',component:GaleriaComponent}
];
