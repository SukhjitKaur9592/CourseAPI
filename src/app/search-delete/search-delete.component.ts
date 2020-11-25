import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { TopicAdditionService } from '../topic-addition.service';
@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  messageDelete:any="Not deleted yet";
  topicFetched:any;
  topic:Topic=new Topic("","","");
  topicId:string;
  topictoFetch:string;
  message:any="";
  constructor(private service:TopicAdditionService) { }

  ngOnInit(): void {
  }

  public doSearchDelete()
  {
    this.messageDelete="";
    let response = this.service.doSearchDelete(this.topicId);
    response.subscribe((data)=>this.messageDelete=data);
  }

  public doUpdateTopic()
  {
    this.message="";
    let response = this.service.doUpdateTopic(this.topic);
    response.subscribe((data)=>this.message=data);
  }
  public doSearchTopic()
  {
    this.topicFetched=[];
    let response = this.service.doSearchTopic(this.topictoFetch);
    response.subscribe((data)=>this.topicFetched=data);
  }
}
