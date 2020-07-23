import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../services/tables.service'
import { ZonesService } from '../../services/zones.service'
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalModule, BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'size', 'zone', 'isActive', 'actions'];
  private tables = [];
  private zones = [];
  private info_row = [];
  private form;

  constructor(
    private tablesService: TablesService,
    private zonesService: ZonesService,
    private http: HttpClient,
    public modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {

    this.form = formBuilder.group({
      name: [''],
      size: [''],
      zone: [''],
      isActive: [''], 
    });

    
  }

  async ngOnInit() {
    await this.tablesService.getAllTables().subscribe((result:any)=>{
      this.tables = result;
      console.log(result)
    });

    this.zonesService.getAllZones().subscribe((result:any)=>{
      this.zones = result;
      console.log(result)
    })
  }



  modalRef: BsModalRef;
  openModal(info:any, modalTable): void {
    this.modalRef = this.modalService.show(modalTable);
    this.info_row = info;
  }

}

@Component({
  selector: 'app-tables-dialog',
  templateUrl: 'tables-dialog.html',
})
export class DialogContentExampleDialog {}