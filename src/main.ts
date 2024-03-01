import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import helmet from 'helmet'
import { HttpExceptionFilter } from 'src/exceptions/http.exception.filter'
import { TransformInterceptor } from 'src/interceptors/transform.interceptor'
import { ValidationPipe } from 'src/pipes/validate.pipe'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule, { cors: true })

    const port = process.env.APP_PORT || 9001

    // middleware
    app.use(helmet())

    // global prefix
    app.setGlobalPrefix('/api')

    // global interceptors
    // transform
    app.useGlobalInterceptors(new TransformInterceptor())

    // global filters
    app.useGlobalFilters(new HttpExceptionFilter())

    // global pipes
    app.useGlobalPipes(new ValidationPipe())

    // swagger api
    const config = new DocumentBuilder()
        .setTitle('The ACS-Web API')
        .setDescription('The ACS-Web API description')
        .setVersion('1.0')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/docs', app, document)

    await app.listen(port)
}
bootstrap()
