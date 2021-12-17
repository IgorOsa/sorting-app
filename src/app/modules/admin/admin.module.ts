import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar.component';
import { DialogNewServiceConfirmComponent } from './components/dialog-new-service-confirm/dialog-new-service-confirm.component';
import { DialogAddNewServiceComponent } from './components/dialog-add-new-service/dialog-add-new-service.component';
import { DialogUpdateServiceComponent } from './components/dialog-update-service/dialog-update-service.component';
import { DialogDeleteServiceComponent } from './components/dialog-delete-service/dialog-delete-service.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { MapComponent } from '../map/components/map/map.component';
import { MapModule } from '../map/map.module';

@NgModule({
  declarations: [
    AdminSidebarComponent,
    DialogNewServiceConfirmComponent,
    DialogAddNewServiceComponent,
    DialogUpdateServiceComponent,
    DialogDeleteServiceComponent,
  ],
  imports: [AdminRoutingModule, CommonModule, MapModule, SharedModule],
  providers: [],
})
export class AdminModule {}
