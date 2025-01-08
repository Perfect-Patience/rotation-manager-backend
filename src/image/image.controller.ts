import { Controller, Post, UseInterceptors, UploadedFile  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';


@Controller('image')
export class ImageController {
    constructor(private readonly cloudinaryService: CloudinaryService){}


    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile() file: Express.Multer.File){
        try{
            const result = await this.cloudinaryService.uploadImage(file.path)
            return {
                statusCode: 200,
                message: 'Image uploaded successfully',
                data: result
            }
        }
        catch(error){
            return {
                statusCode: 500,
                message: 'Error uploading image',
                error
            }
        }
    }

}
