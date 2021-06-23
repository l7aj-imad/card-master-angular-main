import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/service/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: [
    './add-card.component.css',
    './th.css',
    './thh.css'
  ]
})
export class AddCardComponent implements OnInit {
  id = 0;
  @Input()
  card = new Card();

  constructor(private route: ActivatedRoute, private cardService:CardService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  public addCard(): void {
    this.cardService.addCard(this.card).subscribe(
      (card) => {
       console.log("added")
      }
    );
  }

}
