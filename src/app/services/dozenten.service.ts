import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DozentenService {
  private items = [
    {
      id: 1,
      name: 'Jacqui the Doll',
      avatar: 'Jacqui.png',
      description:
        'Ein Dozent der Neuzeit. Beschäftigt sich mit mörderischem Code in blutroter Farbe. Verlangt seinen Schülern alles ab, auch wenn sie bis zum Tode verzweifeln, aber dennoch ist der Unterricht höllisch gut.',
    },
    {
      id: 2,
      name: 'Ali Mustafa',
      avatar: 'Ali_Mustafa.png',
      description: 'Ali gut',
    },
    {
      id: 3,
      name: 'Roque Spanios',
      avatar: 'Roque_Spanios.png',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.',
    },
    {
      id: 4,
      name: 'Bugs Bunny',
      avatar: 'Bugs_Bunny.png',
      description:
        'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph',
    },
    {
      id: 5,
      name: 'Jacqui the Doll',
      avatar: 'dummy.png',
      description:
        'Ein Dozent der Neuzeit. Beschäftigt sich mit mörderischem Code in blutroter Farbe. Verlangt seinen Schülern alles ab, auch wenn sie bis zum Tode verzweifeln, aber dennoch ist der Unterricht höllisch gut.',
    },
    {
      id: 6,
      name: 'Jacqui the Doll',
      avatar: 'Jacqui.png',
      description:
        'Ein Dozent der Neuzeit. Beschäftigt sich mit mörderischem Code in blutroter Farbe. Verlangt seinen Schülern alles ab, auch wenn sie bis zum Tode verzweifeln, aber dennoch ist der Unterricht höllisch gut.',
    },
    {
      id: 7,
      name: 'Jacqui the Doll',
      avatar: 'dummy.png',
      description:
        'Ein Dozent der Neuzeit. Beschäftigt sich mit mörderischem Code in blutroter Farbe. Verlangt seinen Schülern alles ab, auch wenn sie bis zum Tode verzweifeln, aber dennoch ist der Unterricht höllisch gut.',
    },
    {
      id: 8,
      name: 'Jacqui the Doll',
      avatar: 'dummy.png',
      description:
        'Ein Dozent der Neuzeit. Beschäftigt sich mit mörderischem Code in blutroter Farbe. Verlangt seinen Schülern alles ab, auch wenn sie bis zum Tode verzweifeln, aber dennoch ist der Unterricht höllisch gut.',
    },
    {
      id: 9,
      name: 'Jacqui the Doll',
      avatar: 'dummy.png',
      description:
        'Ein Dozent der Neuzeit. Beschäftigt sich mit mörderischem Code in blutroter Farbe. Verlangt seinen Schülern alles ab, auch wenn sie bis zum Tode verzweifeln, aber dennoch ist der Unterricht höllisch gut.',
    },
    {
      id: 10,
      name: 'Jacqui the Doll',
      avatar: 'dummy.png',
      description:
        'Ein Dozent der Neuzeit. Beschäftigt sich mit mörderischem Code in blutroter Farbe. Verlangt seinen Schülern alles ab, auch wenn sie bis zum Tode verzweifeln, aber dennoch ist der Unterricht höllisch gut.',
    },
  ];

  getItems() {
    return this.items;
  }

  constructor() {}
}
