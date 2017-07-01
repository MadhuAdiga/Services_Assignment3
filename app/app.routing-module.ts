import { NgModule } from '@angular/core'; //Import all the inbuilt metadata and user-defined components and modules
import { RouterModule, Routes} from '@angular/router';
import { TaskComponent } from './task.component';
import { AppComponent } from './app.component';

const routes : Routes = [// Declare a routes variable which contains the paths and the corresponding routed component 
    { path: 'task/:id', component: TaskComponent}// Specify the three routes used in this application
]

@NgModule({
  imports:      [ RouterModule.forRoot(routes) ],
  exports:      [ RouterModule ]
})

export class AppRoutingModule {}
export const routingComponents = [AppComponent, TaskComponent]//Export the 3 routed components used in this application
