import { CanDeactivate } from '@angular/router';
import { HomeComponent } from '../home/home.component';


export class UnsavedChangesGuard implements CanDeactivate<HomeComponent> {
   
    canDeactivate(component:HomeComponent){

        if(component.search.dirty){

            return window.confirm("You have Unsaved changes. still you want leave")
        }else{

            return true;
        }

    
    }


}


