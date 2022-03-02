import {Component, OnInit} from '@angular/core';
import {UploadService} from '../../shared/services/upload.service';
import {ManagedUpload} from 'aws-sdk/lib/s3/managed_upload';
import SendData = ManagedUpload.SendData;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  images: {key: string, location: string}[] = [];

  constructor(private uploadService: UploadService) {
  }

  ngOnInit(): void {
  }

  files: File[] = [];

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
    event.addedFiles.map((file: File) => {
      this.uploadService.addFile(file).promise().then((data: SendData) => {
        console.log('Data', data);
        this.images.push({key: data.Key, location: data.Location});
      });
    })
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
