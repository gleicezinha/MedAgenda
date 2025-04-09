import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AtendimentoService } from "../../services/atendimento.service";
import { ProntuarioService } from "../../services/prontuario.service";
import { Prontuario } from "../../models/prontuario.model";
import { Atendimento } from "../../models/atendimento.model";


@Component({
  selector: 'app-prontuario-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './prontuario-form.component.html',
  styleUrls: ['./prontuario-form.component.scss'],
})
export class ProntuarioFormComponent {

  constructor(
    private servico: ProntuarioService,
    private atendimentoService: AtendimentoService,
    private rota: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

    const id = this.rota.snapshot.queryParamMap.get('id');
    if (id){
      this.servico.getById(+id).subscribe({
        next: (resposta: Prontuario) => {
          this.registro = resposta;
          this.atendimento = resposta.atendimento;
        }
      })
    }

    const idAtendimento = this.rota.snapshot.queryParamMap.get('idAtendimento');
    if (idAtendimento && id == null){
      this.servico.getByAtendimento(+idAtendimento).subscribe({
        next: (resposta: Prontuario) => {
          if (resposta != null){
            this.registro = resposta;
            console.log(resposta.atendimento)
            this.atendimento = resposta.atendimento;
          } else {
              this.atendimentoService.getById(+idAtendimento).subscribe({
                next: (resposta: Atendimento) => {
                  this.atendimento = resposta;
                  this.registro.atendimento = resposta;
                }
              })
          }
        }
      })
      
    }
  }

  registro: Prontuario = <Prontuario>{};
  atendimento: Atendimento = <Atendimento>{};
  
  compareById = (a: any, b: any) => {
    return a && b && a.id == b.id;
  }

  save(): void {
    this.servico.save(this.registro).subscribe({
      complete: () => {
        alert('Prontuário salvo com sucesso!');
        //console.log(this.atendimento.paciente.id)
        //const idPaciente = this.atendimento.paciente.id
        this.router.navigate(['/atendimento'])
      },
      error(err) {
        alert('Erro ao salvar prontuário');
      },
    })
  }

  cancelar(): void {
    this.router.navigate(['/atendimento'])
  }

}
