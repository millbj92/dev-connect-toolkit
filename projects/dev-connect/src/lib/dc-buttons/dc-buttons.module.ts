import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [IconButtonComponent],
  imports: [CommonModule, CoreModule],
  exports: [IconButtonComponent],
})
export class DcButtonsModule {}
