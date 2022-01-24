//Componente novo criado
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TemplateFormComponent,//Iomportado
    FormDebugComponent,//Iomportado
    CampoControlErroComponent//Iomportado
  ],
  imports: [
    CommonModule,
    FormsModule,//Iomportado
    HttpClientModule//Iomportado
  ]
})
export class TemplateFormModule { }
