
import { ProdottoDto } from '@proxy/prodotti'; 
import { ProdottoService, } from './../proxy/prodotti/prodotto.service';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class ProdottiComponent implements OnInit{ 
  prodotto = { items: [], totalCount: 0 } as PagedResultDto<ProdottoDto>;

  isModalOpen = false;

  form: FormGroup;



  selectedAuthor = {} as ProdottoDto;


  constructor(
    public readonly list: ListService,
    private ProdottoService: ProdottoService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    public router : Router
  ) {}

  ngOnInit(): void {
    const authorStreamCreator = (query) => this.ProdottoService.getList(query);

    this.list.hookToQuery(authorStreamCreator).subscribe((response) => {
      this.prodotto = response;
    });
  }

  createAuthor() {
    this.selectedAuthor = {} as ProdottoDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editAuthor(id: string) {
    this.ProdottoService.get(id).subscribe((prodotto) => {
      this.selectedAuthor = prodotto;
      this.buildForm();
      this.isModalOpen = true;
      
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedAuthor.name || '', Validators.required],
      price: [this.selectedAuthor.price || '', Validators.required],
      
    });
  
  }
  save() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedAuthor.id) {
      this.ProdottoService
        .update(this.selectedAuthor.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.ProdottoService.create(this.form.value).subscribe(() => {
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
            this.ProdottoService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}

