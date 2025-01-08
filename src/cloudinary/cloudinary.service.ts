import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: 'dvvg2hcv5',
      api_key: '229158938891146',
      api_secret: 'c4Kz0fLsMbO-Gjpa9hcWXzyiZdY',
    });
  }

  async uploadImage(
    file: string): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(file, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    });
  }
}
