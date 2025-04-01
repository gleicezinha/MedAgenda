import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendario',
  standalone: false,
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {
  calendarOptions: any;

  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    const eventos = [
      {
        title: 'Maria Eliane',
        start: '2025-01-01',
        color: 'green',
      },
      {
        title: 'João',
        start: '2025-01-17',
        color: 'red',
      },
    ];

    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      events: eventos, 
      dateClick: this.onDateClick.bind(this),
      eventClick: this.onEventClick.bind(this),
    };
  }

  onDateClick(event: any): void {
    alert(`Data selecionada: ${event.dateStr}`);
  }

  onEventClick(event: any): void {
    alert(`Paciente: ${event.event.title}`);
  }
}