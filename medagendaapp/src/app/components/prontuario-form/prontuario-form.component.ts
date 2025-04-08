import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-prontuario-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './prontuario-form.component.html',
  styleUrls: ['./prontuario-form.component.scss']
})
export class ProntuarioFormComponent implements OnInit {
  prontuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.prontuarioForm = this.fb.group({
      dataAtendimento: [''],
      tipoAtendimento: [''],
      doencasCognitivas: [''],
      alergias: [''],
      usaRemedios: [''],
      problemaRelatado: [''],
      descricao: [''],
      prescricao: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.prontuarioForm.value);
  }

  onCancel(): void {
    this.prontuarioForm.reset();
  }
}