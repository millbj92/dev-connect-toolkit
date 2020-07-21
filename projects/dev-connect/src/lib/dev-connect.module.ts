import { NgModule } from '@angular/core';
import { DevConnectComponent } from './dev-connect.component';
import { DcIconModule } from './dc-icon/dc-icon.module';
import { DcPanelsModule } from './dc-panels/dc-panels.module';
import { DcButtonsModule } from './dc-buttons/dc-buttons.module';
import { DcNavModule } from './dc-nav/dc-nav.module';

@NgModule({
  declarations: [DevConnectComponent],
  imports: [DcIconModule, DcPanelsModule, DcButtonsModule, DcNavModule],
  exports: [DcIconModule, DcPanelsModule, DcButtonsModule, DcNavModule],
})
export class DevConnectModule {}
