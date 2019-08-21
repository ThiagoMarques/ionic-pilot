import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SalaService } from '../services/sala.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Sala } from '../models/sala.model';

@Component({
  selector: 'app-edit-sala',
  templateUrl: './edit-sala.page.html',
  styleUrls: ['./edit-sala.page.scss']
})
export class EditSalaPage implements OnInit {
  formEdit: FormGroup;
  Sala: Sala;
  sala: any[];
  idSala: number;

  customActionSheetOptions: any = {
   header: 'Selecione o espaço:',
 };

  constructor(
    private fb: FormBuilder,
    private salaService: SalaService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private navCtrl: NavController
  ) {
   this.formEdit = this.fb.group({
     nome: [''],
     status: [''],
     espaco: [''],
     localizacao: [''],
     descricao: ['']
   });
 }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idSala = params.id;
      console.log(this.idSala);
      this.obterSalaId(this.idSala);
    });
  }
  obterSalaId(id: number) {
   this.salaService.obterPorId(id).subscribe(dados => {
    this.Sala = dados;
    // tslint:disable-next-line:no-string-literal
    this.formEdit.controls['nome'].setValue(dados.nome);
    // tslint:disable-next-line:no-string-literal
    this.formEdit.controls['status'].setValue(dados.espaco);
    // tslint:disable-next-line:no-string-literal
    this.formEdit.controls['espaco'].setValue(dados.espaco);
    // tslint:disable-next-line:no-string-literal
    this.formEdit.controls['localizacao'].setValue(dados.localizacao);
    // tslint:disable-next-line:no-string-literal
    this.formEdit.controls['descricao'].setValue(dados.descricao);
   });
  }
  editarSala(): void {
   // this.Sala[0] = this.formEdit;
   console.log(this.Sala);
   if (this.formEdit.invalid) {
    console.log('Erro');
   } else {
     this.salaService.updateSala(this.idSala, this.formEdit.value)
       .subscribe(data => {
         if (data) {
          console.log('Atualizado!');
          this.locationBack();
         }
       });
   }
 }
  get form() {
   return this.formEdit.controls;
 }
  locationBack(): void {
   this.location.back();
  }
}
