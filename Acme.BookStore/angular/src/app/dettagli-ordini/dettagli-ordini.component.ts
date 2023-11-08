import { DettaglioService } from './../proxy/dettagli/dettaglio.service';
import { ordineService } from '@proxy/ordini-dto';
import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Router, ActivatedRoute } from '@angular/router';
import { DettaglioDto, ProdottiLookupDto } from '@proxy/dettagli';
import { Prodotti } from '@proxy';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dettagli-ordini',
  templateUrl: './dettagli-ordini.component.html',
  styleUrls: ['./dettagli-ordini.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class DettagliOrdiniComponent implements OnInit {
  Dettaglio = { items: [], totalCount: 0 } as PagedResultDto<DettaglioDto>;
  

  isModalOpen = false;

  form: FormGroup;
 
  selectedDettaglio = {} as DettaglioDto;
  Prodotti$: Observable<ProdottiLookupDto[]>;
 
  ordId : string = this.route.snapshot.paramMap.get('id');


  constructor(
    public readonly list: ListService,
    private DettaglioService: DettaglioService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    public router : Router,
    public route : ActivatedRoute
  ) {
    this.Prodotti$= DettaglioService.getProdottiLookup().pipe(map((r) => r.items));
  }

  ngOnInit(): void {
    //const authorStreamCreator = (query) => this.DettaglioService.getList(query);
    const authorStreamCreator = (query) => this.DettaglioService.getListFiltered(query, this.ordId);

    this.list.hookToQuery(authorStreamCreator).subscribe((response) => {
      this.Dettaglio = response;
      //console.dir(this.ordine)
    });
   
  }

  createDettaglio() {
    this.selectedDettaglio = {} as DettaglioDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editDettaglio(id: string) {
    this.DettaglioService.get(id).subscribe((Dettaglio) => {
      this.selectedDettaglio = Dettaglio;
      this.buildForm();
      this.isModalOpen = true;
      
    });

  }

  buildForm() {
    this.form = this.fb.group({

      prodottiId: [this.selectedDettaglio.prodottiId || null, Validators.required],
      quantità: [this.selectedDettaglio.quantità || null, Validators.required],
      price: [this.selectedDettaglio.price || null, Validators.required],
      ordiniId : this.ordId,
    });

  }
  save() {
    console.dir(this.form.value)
    if (this.form.invalid) {
      return;
    }

    if (this.selectedDettaglio.id) {
      this.DettaglioService
        .update(this.selectedDettaglio.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
    } else {
      this.DettaglioService.create(this.form.value).subscribe(() => {
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
            this.DettaglioService.delete(id).subscribe(() => this.list.get());
          }
	    });
  }
}
