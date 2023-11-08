import { AuthorRoutingModule } from './../author/author-routing.module';
import { AuthorService, } from './../proxy/authors/author.service';

import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorDto,   } from '@proxy/authors';

@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class EditAuthorsComponent {
  Authori = { items: [], totalCount: 0 } as PagedResultDto<AuthorDto>;

  form: FormGroup;

  selectedAuthor = {} as AuthorDto;

  isModalOpen = false;
  id = ""
  public Authors = [];
  @ViewChild('Author') Author : TemplateRef<any>;
  @ViewChild('Author1') Author1 : TemplateRef<any>;
  @ViewChild('Author2') Author2 : TemplateRef<any>;

  constructor(
    public readonly list: ListService,
    private AuthorService: AuthorService,
    private fb: FormBuilder,
    private confirmation: ConfirmationService,
    public route : ActivatedRoute,
    public router : Router
  ) {
    
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    const AuthorStreamCreator = (query) => this.AuthorService.getList(query);

    this.list.hookToQuery(AuthorStreamCreator).subscribe((response) => {
      this.Authori = response;
      //console.dir(this.id)
      this.editAuthors(this.id)
    });
  }
  mostraAuthors(){
    //console.log(this.Author)
    this.Authors = [this.Author, this.Author1, this.Author2]
  }

  createAuthor() {
    this.selectedAuthor = {} as AuthorDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editAuthors(id: string) {
    console.log(id)
    this.AuthorService.get(id).subscribe((author) => {
      this.selectedAuthor = author;
      this.buildForm();
     this.mostraAuthors()
    });
  }

  buildForm() {
    this.form = this.fb.group({
    
      name: [this.selectedAuthor.name || null, Validators.required],
      shortbio: [this.selectedAuthor.shortBio || null, Validators.required],
      birthDate: [
        this.selectedAuthor.birthDate ? new Date(this.selectedAuthor.birthDate) : null,
        Validators.required,
      ],
     
    });
  }

      save() {
        if (this.form.invalid) {
          return;
        }
    
        const request = this.selectedAuthor.id
          ? this.AuthorService.update(this.selectedAuthor.id, this.form.value)
          : this.AuthorService.create(this.form.value);
    
        request.subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
      }
    
      delete(id: string) {
        this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
          if (status === Confirmation.Status.confirm) {
            this.AuthorService.delete(id).subscribe(() => this.list.get());
          }
        });
  
    }
    close() {
      this.router.navigate(["authors"])
     
  }
}