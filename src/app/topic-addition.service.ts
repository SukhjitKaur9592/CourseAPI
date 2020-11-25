import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicAdditionService {

  constructor(private http: HttpClient) { }

  public doAddition(topic)
  {
     return this.http.post('http://localhost:8000/topics',topic,{responseType:'text' as 'json'});
  }

  public doSearchDelete(topicId:string)
  {
    return this.http.delete('http://localhost:8000/topics/'+topicId); 
  }

  public doUpdateTopic(topic)
  {
     return this.http.put('http://localhost:8000/topics/'+topic.id,topic,{responseType:'text' as 'json'});
  }
  public doSearchTopic(topicId)
  {
     return this.http.get('http://localhost:8000/topics/'+topicId);
  }
}
