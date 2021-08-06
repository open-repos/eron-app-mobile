export class FormationApprenant {
    constructor(
       public id:string,
       public title: string,
       public imageUrl: string,
       public moduleSate: string,
       public progressSate: string,
       public deadline: string | Date,
       public  timeSpend: string,
      ) {}
}