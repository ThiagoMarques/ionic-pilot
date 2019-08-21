import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SalaService } from '../services/sala.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Sala } from '../models/sala.model';

@Component({
  selector: 'app-add-sala',
  templateUrl: './add-sala.page.html',
  styleUrls: ['./add-sala.page.scss']
})
export class AddSalaPage implements OnInit {
  formAdd: FormGroup;
  Sala: Sala;
  sala: any[];
  idSala: number;

  customActionSheetOptions: any = {
    header: 'Selecione o espaço:'
  };

  constructor(
    private fb: FormBuilder,
    private salaService: SalaService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.formAdd = this.fb.group({
      nome: [''],
      status: [''],
      espaco: [''],
      localizacao: [''],
      descricao: ['']
    });
  }

  ngOnInit() {}

  addSala(): void {
   console.log(this.formAdd.value);
   if (this.formAdd.invalid) {
     console.log('Erro');
   } else {
     this.salaService.addSala(this.formAdd.value).subscribe((data) => {
       if (data) {
        this.router.navigateByUrl('salas');
       }
     });
   }
 }
  get form() {
    return this.formAdd.controls;
  }
  locationBack(): void {
    this.location.back();
  }
}
