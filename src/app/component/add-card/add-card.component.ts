import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/service/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  
  @Input()
  card = new Card();

  constructor(private route: ActivatedRoute, private cardService:CardService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.card.theme_id = id;
    console.log(id);
  }

  public addCard(): void {
    this.cardService.addCard(this.card).subscribe(
      (card) => {
       console.log("added")
      }
    );
  }

}
