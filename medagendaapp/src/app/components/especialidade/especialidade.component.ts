import { Component } from '@angular/core';
import { ICrudList } from '../i-crud-list';
import { EspecialidadeService } from '../../services/especialidade.service';
import { Router } from '@angular/router';
import { Especialidade } from '../../models/especialidade.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-especialidade',
    imports: [    CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule],
    templateUrl: './especialidade.component.html',
    styleUrls: ['./especialidade.component.scss'],
})
export class EspecialidadeComponent implements ICrudList<Especialidade> {

    termoBuscaAtual?: string;

    constructor(
        private servico: EspecialidadeService,
        private router: Router
    ) { }
    registros: Especialidade[] = [];

    ngOnInit(): void {
        this.get();
    }

    get(termoBusca?: string): void {
        this.termoBuscaAtual = termoBusca;
        this.servico.get(this.termoBuscaAtual).subscribe({
            next: (resposta: Especialidade[]) => {
                this.registros = resposta;
                console.log(this.registros);
            }
        });
    }

    cadastrar(): void {
        this.router.navigate(['/especialidade-form']);
    }

    delete(id: number): void {
        if (confirm('Deseja realmente EXCLUIR a especialidade?')) {
            this.servico.delete(id).subscribe({
                complete: () => {
                    this.get();
                }
            });
        }
    }
}
