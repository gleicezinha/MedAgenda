import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  standalone: false,
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {
  dias: { numero: number; paciente?: string; cor?: string }[] = [];

  ngOnInit(): void {
    this.carregarDias();
  }

  carregarDias(): void {
    this.dias = [
      { numero: 1, paciente: 'Maria Eliane', cor: 'green' },
      { numero: 2 },
      { numero: 3 },
      { numero: 4 },
      { numero: 5 },
      { numero: 6 },
      { numero: 7 },
      { numero: 8 },
      { numero: 9 },
      { numero: 10 },
      { numero: 11 },
      { numero: 12 },
      { numero: 13 },
      { numero: 14 },
      { numero: 15 },
      { numero: 16 },
      { numero: 17, paciente: 'João', cor: 'red' },
      { numero: 18 },
      { numero: 19 },
      { numero: 20 },
      { numero: 21 },
      { numero: 22 },
      { numero: 23 },
      { numero: 24 },
      { numero: 25 },
      { numero: 26 },
      { numero: 27 },
      { numero: 28 },
      { numero: 29 },
      { numero: 30 },
      { numero: 31 },
    ];
  }
}