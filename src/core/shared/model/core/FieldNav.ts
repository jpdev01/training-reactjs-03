export class FieldNav {
  title: string;
  image: string;
  link: string;
  enable = true;
  action: any;
  newTab: boolean;

  constructor(options: {
    name?: string;
    image?: string;
    link?: string;
    action?: any;
    newTab?: boolean;
  } = {}){
    this.title = options.name!;
    this.image = options.image!;
    this.link = options.link!;
    this.action = options.action!;
    this.newTab = options.newTab!;
  }

}
