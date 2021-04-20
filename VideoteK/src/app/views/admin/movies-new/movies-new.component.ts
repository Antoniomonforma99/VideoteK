import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/languaje.service';

@Component({
  selector: 'app-movies-new',
  templateUrl: './movies-new.component.html',
  styleUrls: ['./movies-new.component.css']
})
export class MoviesNewComponent implements OnInit {

  langs;
  currentTranslation = 'es';

  newMovieForm = new FormGroup({
    title_en: new FormControl(''),
    description_en: new FormControl(''),
    title_es: new FormControl(''),
    description_es: new FormControl(''),
    title_fr: new FormControl(''),
    description_fr: new FormControl(''),
    title_it: new FormControl(''),
    description_it: new FormControl('')
  });


  constructor(private langService: LanguageService) {
    this.langs = this.langService.getLangs();
  }

  ngOnInit(): void {
  }

}
