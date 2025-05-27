import {
  Component,
  ElementRef,
  inject,
  viewChild,
  viewChildren,
} from '@angular/core';
import { DozentenService } from '../../services/dozenten.service';
import { Dozent, Rating } from '../../models/rating';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RatingFetchService } from '../../services/ratingfetch.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
