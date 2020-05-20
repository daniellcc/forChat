import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from '../components/register/register.component';
import { ChatComponent } from '../components/chat/chat.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'room/:id', component: ChatComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: '**', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}
