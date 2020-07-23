import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../services/tables.service'
import { ZonesService } from '../../services/zones.service'
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalModule, BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZoneComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  displayedColumnsTables: string[] = ['id', 'name', 'size'];
  private tables = [];
  private zones = [];
  private zonesTable = [];
  private info_row = null;
  private form;
  private zoneName;

  constructor(
    private tablesService: TablesService,
    private zonesService: ZonesService,
    private http: HttpClient,
    public modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {

    this.form = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    
  }

  async ngOnInit() {
    
    await this.refreshData();

  }

  async refreshData(){
    this.zonesService.getAllZones().subscribe((result:any)=>{
      this.zones = result;
      console.log(result)
    });
  }

  async delete(item){
    await this.zonesService.deleteAZone(item.id).subscribe((result:any)=>{
      this.refreshData();
    });
  }

  loadInfo(item){
    this.form.value.name = item.name;
    this.form.value.size = item.description;
  }

  loadInfoTables(element){
    console.log(element.tables)
    this.zonesTable = element.tables;
    this.zoneName = element.name;
  }

  async submit(){

    if(this.form.valid){

      let data = {
        "name":this.form.value.name,
        "description":this.form.value.description,
        "isActive":true,
      }

      if(this.info_row!=null)
        data["id"] = this.info_row.id;


      await this.zonesService.saveZone(data).subscribe(async (result:any)=>{
        console.log(result)
        await this.refreshData();
        this.modalRef.hide();
      });

    }
  }



  modalRef: BsModalRef;
  openModal(info:any, modalTable): void {
    this.modalRef = this.modalService.show(modalTable);
    this.info_row = info;
  }

}
