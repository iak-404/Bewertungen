import {
  Component,
  ElementRef,
  inject,
  viewChild,
  viewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Dozent, Rating } from '../../models/rating';
import { RatingFetchService } from '../../services/ratingfetch.service';
import { DozentenService } from '../../services/dozenten.service';

@Component({
  selector: 'app-rating',
  imports: [ReactiveFormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  private audio = new Audio('assets/sounds/character.mp3');
  private choose_rating = new Audio('assets/sounds/choose.mp3');
  private submit_sound = new Audio('assets/sounds/submit.mp3');
  ratingForm!: FormGroup;
  ratings: Rating[] = [];
  dozent: Dozent[] = [];
  setRating = inject(RatingFetchService);
  dozenten = inject(DozentenService);
  description = viewChildren<ElementRef>('info');
  maxLength = 255;
  coll = viewChild<ElementRef>('collapse');
  formDiv = viewChild<ElementRef>('form');
  toggleForm = false;
  infobox = viewChild<ElementRef>('infobox');
  dozWahlgetaetigt = false;
  ausgewaehlterDozent: any = null;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
    this.dozent = this.dozenten.getItems();
    this.playSound();
  }

  playSound() {
    this.audio.volume = 0.2;
    this.audio.play();
  }

  clickRating() {
    const collapse = this.coll();
    const el = collapse?.nativeElement;
    this.ratingForm.get('dozent')?.setValue(this.ausgewaehlterDozent.name);

    this.toggleForm = true;

    if (el?.classList.contains('show')) {
      el.classList.replace('show', 'hide');
    }

    this.choose_rating.play();
    this.choose_rating.volume = 0.5;
  }

  private initForm(): void {
    this.ratingForm = this.fb.group({
      name: ['', Validators.required],
      mail: ['', Validators.required],
      dozent: ['', Validators.required],
      fach: ['', Validators.required],
      sterne: ['', Validators.required],
      kommentar: ['', Validators.maxLength(this.maxLength)],
    });
  }

  get charCount(): number {
    return this.ratingForm.get('kommentar')?.value?.length || 0;
  }

  submit() {
    if (this.ratingForm.invalid) {
      alert('Bitte alle Felder ausfüllen!');
      return;
    }

    const rawValue = this.ratingForm.value;
    const dozent: string = rawValue.dozent?.toString() ?? '';
    const NewName = dozent.trim().replace(/\s+/g, '_');

    const newRating = {
      ...rawValue,
      dozent: NewName,
    };

    console.log(JSON.stringify(newRating));

    this.setRating.setRatingData(newRating).subscribe({
      next: () => {
        this.submit_sound.play();
        this.submit_sound.volume = 0.5;
        alert('Erfolgreich abgeschickt!');
      },
      error: (err) => {
        alert('Es ist ein Fehler aufgetreten: ' + err);
      },
    });
  }

  onClickCancel() {
    const collapse = this.coll();
    const el = collapse?.nativeElement;

    this.toggleForm = false;

    if (el?.classList.contains('hide')) {
      el.classList.replace('hide', 'show');
    }
  }

  dozClick(index: number) {
    this.dozWahlgetaetigt = true;
    this.ausgewaehlterDozent = this.dozent[index];

    const info = this.infobox();

    if (info) {
      info.nativeElement.style.display = 'flex';
    }
  }

  closePopup() {
    this.description().forEach((el) => {
      const overlay = el.nativeElement as HTMLElement;
      const infoBox = overlay.querySelector('.doz-info') as HTMLElement;

      overlay.style.display = 'none';
      if (infoBox) {
        infoBox.style.display = 'none';
      }
    });
  }
}
