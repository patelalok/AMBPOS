import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersistenceService } from './services/persistence.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: [PersistenceService]
})
export class SharedModule { }
