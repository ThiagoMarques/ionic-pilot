import { Component, OnInit } from '@angular/core';
import { SalaService } from '../services/sala.service';
import { Sala } from '../models/sala.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MeusAgendamentosPage } from '../meus-agendamentos/meus-agendamentos.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-salas',
  templateUrl: './salas.page.html',
  styleUrls: ['./salas.page.scss']
})
export class SalasPage implements OnInit {
  Sala: Sala[];
  idSala: number;

  constructor(
   private salaService: SalaService,
   private route: ActivatedRoute,
   private router: Router,
   private navCtrl: NavController) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.obterSalas();
  }

  obterSalas(): void {
    this.salaService.getSala().subscribe(dados => (this.Sala = dados));
  }

  async deletarSala(id) {
    const size = this.Sala.length;
    const index = this.Sala.findIndex(i => i.id === id);
    this.Sala.splice(index, 1);
    if (size !== this.Sala.length) {
      this.salaService.removerPorId(id).subscribe(() => console.log(`Sala = ${id} deletada`), err => console.log(err));
    }
  }
  detalheSala(id): void {
   this.router.navigateByUrl('detalhes-sala/' + id);
  }
  addSala(): void {
   this.router.navigateByUrl('add-sala');
  }
}
