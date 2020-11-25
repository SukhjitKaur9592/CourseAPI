import { Component, OnInit } from '@angular/core';
import { TopicAdditionService } from '../topic-addition.service';
import { Topic } from '../topic';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {
  topic : Topic=new Topic("","","");
  message:any="";
  constructor(private service:TopicAdditionService) { }

  ngOnInit(): void {

  }

  public doAdd()
  {
    let response = this.service.doAddition(this.topic);
    response.subscribe((data)=>this.message=data);
  }
}
