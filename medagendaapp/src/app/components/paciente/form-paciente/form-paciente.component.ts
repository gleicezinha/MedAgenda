import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Paciente } from '../../../models/paciente.model';
import { PacienteService } from '../../../services/paciente.service';
import { ICrudForm } from '../../i-crud-form';

@Component({
  selector: 'app-paciente-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss'] 
})
export class PacienteFormComponent implements ICrudForm<Paciente> {

  constructor(
      private service: PacienteService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (resposta: Paciente) => {
          this.registro = resposta;
        }
      });
    }

  }

  registro: Paciente = <Paciente>{};
  
  save(): void {
    this.service.save(this.registro).subscribe({
      complete: () => {
        alert('Operação realizada com sucesso!');
        this.router.navigate(['/paciente-list']);
      }
    });
  }
  cancelar(): void {
    this.router.navigate(['/paciente-list']);
  }
}