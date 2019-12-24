import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'; // add class row to hosting element
  @Input() article: Article;

  constructor() {
    // Agora o artigo vem do input
  }

  voteUp() {
    this.article.votes += 1;
    return false;
  }

  voteDown() {
    this.article.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
