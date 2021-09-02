import { Component, OnInit } from '@angular/core';
import { contentAccordionItem } from 'src/app/models/content-accordion-item.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  itemsFaq: contentAccordionItem[] = [
    {
      title: 'Comment obtenir mon attestation de formation ?',
      content: "Votre attestation de formation vous sera délivrée par mail environ deux mois après la fin de la session. Pensez à bien vérifier vos spams et contactez-nous si vous n’avez rien reçu passé ce délai !"
    },
    {
      title: 'Comment percevoir mon indemnisation ?',
      content: 'Votre indemnisation vous est versée dans les deux mois suivants la fin de la session de formation sur le RIB préalablement renseigné sur votre compte mondpc.fr. Pour tout changement de coordonnées bancaires, veuillez vous adresser directement à l’Agence Nationale du DPC pour le leur signaler.',
    },
    {
      title: 'Quelles sont les conditions à respecter pour valider sereinement ma formation ? ',
      content: 'Pour valider votre formation, vous devez veiller à effectuer toutes les activités de chaque module proposé et effectuer un temps de formation de 7h à 10h selon son format.',
    },
    {
      title: 'J’ai effectué un module mais je ne parviens pas à accéder au suivant, que faire ?',
      content: "Conformément aux directives de l'andpc, Pour éviter tout problème lors de l’envoi des dossiers à l’ANDPC pour indemnisation, nous avons rajouté des restrictions de passage.  , vous devez passer un minimum de temps dans chaque module afin de débloquer le module suivant. Grâce à ce système, vous êtes assurés de rester suffisamment de temps sur la plateforme, et donc, de valider votre formation. N’hésitez pas à nous contacter pour que nous puissions vous apporter l’assistance nécessaire !"
    },
    {
      title: 'Je ne pourrais pas terminer ma formation dans les temps, que puis-je faire ?',
      content: " Nous pouvons vous reporter sur une session ultérieure pour vous permettre de terminer votre formation. Votre progression ne sera pas perdue et vous bénéficierez alors de nouveau de 45 jours pour la terminer."
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
