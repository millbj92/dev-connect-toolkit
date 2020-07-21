import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerPanelComponent } from './drawer-panel/drawer-panel.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DcDrawerListComponent } from './drawer/dc-drawer-list/dc-drawer-list.component';
import { DcDrawerListItemComponent } from './drawer/dc-drawer-list/dc-drawer-list-item/dc-drawer-list-item.component';
import { DcIconModule } from '../dc-icon/dc-icon.module';
import { DrawerSlideDirective } from './drawer/drawer-slide.directive';
import { DcPanelContainerComponent } from './dc-panel-container/dc-panel-container.component';
import { DcPanelContentComponent } from './dc-panel-content/dc-panel-content.component';

@NgModule({
  declarations: [
    DrawerPanelComponent,
    DrawerComponent,
    DcDrawerListComponent,
    DcDrawerListItemComponent,
    DrawerSlideDirective,
    DcPanelContainerComponent,
    DcPanelContentComponent,
  ],
  imports: [CommonModule, DcIconModule],
  exports: [
    DrawerPanelComponent,
    DrawerComponent,
    DcDrawerListComponent,
    DcDrawerListItemComponent,
    DrawerSlideDirective,
    DcPanelContainerComponent,
    DcPanelContentComponent,
  ],
})
export class DcPanelsModule {}
