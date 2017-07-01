import { Injectable } from '@angular/core'

@Injectable()
export class AppServices {
    getData() {
        return [{
             id:1,
             time:'8:00 AM',
             task:'Drinking a pint of lemon water'},
            {id:2,
            time:'8:15 AM',
            task:'Preparing and drinking a nutritious smoothie'},
            {id:3,
            time:'9:00 AM',
             task:'Reviewing my goals'},
            {id:4,
            time:'6:00 PM',
             task:'Writing down two to four important tasks for the day'}];
        
    }
}