export interface Rating {
  id: number;
  name: string;
  mail: string;
  dozent: string;
  fach: string;
  sterne: number;
  kommentar: string;
}

export interface Dozent {
  id: number;
  name: string;
  avatar: string;
  description: string;
}
