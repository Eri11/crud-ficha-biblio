import { HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { Ficha } from './ficha';
import { FichasService } from './ficha.service';

@Component({
  selector: 'ngx-ficha',
  //templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
  template: `
  <ng2-smart-table 
  [settings]="settings" 
  (createConfirm)="onCreateConfirm($event)" 
  (editConfirm)="onEditConfirm($event)"
  (deleteConfirm)="onDeleteConfirm($event)"  
  [source]="source">
  </ng2-smart-table>
  `
})


export class FichasComponent  {
  ficha: Ficha;
  source: ServerDataSource;

    constructor(http: HttpClient, private fichaService: FichasService) {
      this.source = new ServerDataSource(http, { endPoint: 'http://localhost/ficha' });
      this.ficha = new Ficha();
    }


  settings = {   
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i (click)="create()" class="nb-checkmark" ></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark" ></i> ',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
      
    },
    columns: {
      id: {
        title: 'ISBN',
        type: 'string',
      },
        titulo: {
        title: 'Nombre del Libro',
        type: 'string',
        
      },
        last_n: {
        title: 'Apellido(s)',
        type: 'string',
        
      },
        name: {
        title: 'Primer nombre',
     
        type: 'string',
      },
        mid_m: {
        title: 'Segundo nombre',
        type: 'string',
        
      },
      years: {
        title: 'Año de publicación',
        type: 'string',
      },

      ciudad: {
        title: 'Ciudad',
        type: 'string',
      },
      editorial: {
        title: 'Editorial',
        type: 'string',
      },
    },
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      const id = {"id" : event.data.id};
      event.confirm.resolve(this.delete(id));
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      //call to remote api, remember that you have to await this
      const data = {"nombre" : event.newData.nombre,
                "a_paterno" : event.newData.a_paterno
                };
      event.confirm.resolve(this.create(data));
    } else {
      event.confirm.reject();
    }
  }
  onEditConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      //call to remote api, remember that you have to await this
      const newdata = {"id": event.data.id ,nombre : event.newData.nombre,
                a_paterno : event.newData.a_paterno
                };
      event.confirm.resolve(this.edit(newdata));
    } else {
      event.confirm.reject();
    }
  }

  
  

  create(data: any) {
    const fichaData = {
      name: data.name,
      mid_n: data.mid_n,
      last_n: data.last_n,
      titulo: data.titulo,
      years: data.years,
      ciudad: data.ciudad,
      editorial: data.editorial,
    };
    this.fichaService.createFicha(fichaData).subscribe();
  }

  edit(data: any) {
    const fichaData = {
      name: data.name,
      mid_n: data.mid_n,
      last_n: data.last_n,
      titulo: data.titulo,
      years: data.years,
      ciudad: data.ciudad,
      editorial: data.editorial,
    };
    this.fichaService.editFicha(fichaData).subscribe();
  }

  delete(id_m: any) {
    this.fichaService.deleteFicha(id_m).subscribe();
    //this.get();
  }
}

