import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  photoCover: string = ""
  contentTitle: string = ""
  contentTags: string = ""
  contentDescription: string = ""
  private id: string|null = "1"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(
      article => article.id.toString() == id
    )[0]
    console.log(dataFake)
    console.log(result)
    this.contentTitle = result.title
    this.contentTags = result.tags
    this.photoCover = result.photo
    this.contentDescription = result.description

  }

}

