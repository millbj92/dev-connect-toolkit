import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [IconComponent],
})
export class DcIconModule {}
