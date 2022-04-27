export class createToDoDto {
  readonly userId: string;
  readonly title: string;
  readonly completed: boolean;
}

export class updateToDoDto {
  readonly userId: string;
  readonly title: string;
  readonly completed: boolean;
}
