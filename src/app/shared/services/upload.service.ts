import {Injectable} from '@angular/core';
import {S3} from 'aws-sdk';
import {environment} from '../../../environments/environment';
import {ManagedUpload} from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private bucket: S3;
  private defaults = {Bucket: 'images-volocub', ACL: 'public-read'}

  constructor() {
    this.bucket = new S3({
      region: environment.s3_region,
      accessKeyId: environment.s3_access_key_id,
      secretAccessKey: environment.s3_secret_access_key
    });
  }

  addFile(file: File): ManagedUpload {
    const type = file.type;
    const key = Math.random().toString(36).substr(2, 9);
    const params = Object.assign({}, this.defaults, {
      Key: key, ContentType: type, Body: file
    });
    return this.bucket.upload(params, (error: any, data: any) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log('Success', data);
      return;
    });
  }
}
