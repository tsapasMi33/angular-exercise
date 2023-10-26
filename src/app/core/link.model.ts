export class Link {

  constructor(public title: string,
              public url?: string,
              public children?: Link[],
              public isVisible?: boolean) {
  }
}
