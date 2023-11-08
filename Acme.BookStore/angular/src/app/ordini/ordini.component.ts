import { ordineDto, ordineService } from '@proxy/ordini-dto';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ordini',
  templateUrl: './ordini.component.html',
  styleUrls: ['./ordini.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class OrdiniComponent implements OnInit{
  ordine = { items: [], totalCount: 0 } as PagedResultDto<ordineDto>;
  

  isModalOpen = false;

  form: FormGroup;
 
  selectedordine = {} as ordineDto;


  constructor(
    public readonly list: ListService,
    private ordineService: ordineService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    public router : Router
  ) {}

  ngOnInit(): void {
    const authorStreamCreator = (query) => this.ordineService.getList(query);

    this.list.hookToQuery(authorStreamCreator).subscribe((response) => {
      this.ordine = response;
      //console.dir(this.ordine)
    });
   
  }

  createOrdine() {
    this.selectedordine = {} as ordineDto;
    //console.log(this.selectedordine)
    this.buildForm();
    this.isModalOpen = true;
  }

  editOdrine(id: string) {
    this.ordineService.get(id).subscribe((author) => {
      this.selectedordine = author;
      this.buildForm();
      this.isModalOpen = true;
      this.router.navigate(["Edit"])
    });
  }
  Dettaglio(id: string)
  {
    this.router.navigate(["DettagliOrdini" ,{ id: id}])
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedordine.name || null,Validators.required],
      publishDate: [this.selectedordine.publishDate ? new Date(this.selectedordine.publishDate) : null,Validators.required],
      price: [this.selectedordine.price || null,Validators.required],
      shippingDate: [this.selectedordine.shippingDate ? new Date(this.selectedordine.shippingDate) : null,Validators.required],
    });
    
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedordine.id) {
      this.ordineService
        .update(this.selectedordine.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.ordineService.create(this.form.value).subscribe(() => {
        this.isModalOpen = false;
        this.form.reset();
        this.list.get();
      });
    }
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure')
        .subscribe((status) => {
          if (status === Confirmation.Status.confirm) {
            this.ordineService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}
