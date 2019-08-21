import { Component, OnInit } from '@angular/core';
import { SalaService } from '../services/sala.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Sala } from '../models/sala.model';

@Component({
  selector: 'app-detalhes-sala',
  templateUrl: './detalhes-sala.page.html',
  styleUrls: ['./detalhes-sala.page.scss']
})
export class DetalhesSalaPage implements OnInit {
  Sala: Sala;
  sala: any[];
  idSala: number;

  constructor(
    private salaService: SalaService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
   this.route.params.subscribe(params => {
     this.idSala = params.id;
     console.log(this.idSala);
     this.obterSalaId(this.idSala);
   });
 }
  ionViewWillEnter() {
 }

 obterSalaId(id: number) {
  this.salaService.obterPorId(id).subscribe(dados => {
   const keys = Object.keys(dados);
   this.Sala = dados;
  });
 }

 agendarSala(): void  {

 }
 editSala(id): void {
  this.router.navigateByUrl('edit-sala/' + id);
 }
}
