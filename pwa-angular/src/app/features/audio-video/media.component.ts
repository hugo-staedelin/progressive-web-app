import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-video',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  constraint: object = {
    audio: true,
    video: true
  }

  constructor() { }

  ngOnInit(): void {
    this.askPermission();
  }

  askPermission() : void {
    navigator.mediaDevices.getUserMedia(this.constraint).then((result) => {
      console.log(result);
    })
  }

  getUserMedia(constraints: object) {
    if (navigator.mediaDevices) {
      return navigator.mediaDevices.getUserMedia(constraints);
    } return null;
  }

  getStream(media: string) {
    this.getUserMedia(this.constraint)?.then((stream) => {
      let mediaControl: any = document.querySelector(media);
      if ('srcObject' in mediaControl) {
        mediaControl.srcObject = stream;
      }
      mediaControl.play();
    })
  }
}
