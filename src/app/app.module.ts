import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Home1Component } from './home1/home1.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemStatComponent } from './item-stat/item-stat.component';
import { AboutGuard } from './about/about.guard';

/*
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent}, //pass id, name
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/edit', component: EditServerComponent} // /:id dynamic id in URL /edit string in URL 
];
*/
// child routes
const itemRoutes: Routes = [
  { path: 'details', component: ItemDetailsComponent },
  { path: 'stat', component: ItemStatComponent },
]

const appRoutes: Routes = [
  { path: '', component: Home1Component },
  { path: 'about', component: AboutComponent, canActivate: [AboutGuard] },
  { path: 'item/:id', component: ItemComponent },
  { path: 'item/:id', component: ItemComponent, children: itemRoutes },
  { path: '**', component: NotfoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    Home1Component,
    AboutComponent,
    NotfoundComponent,
    ItemComponent,
    ItemDetailsComponent,
    ItemStatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService, AboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
