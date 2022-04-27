"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const PORT = process.env.PORT || 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: { origin: '*' } });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Swag')
        .setDescription('Test')
        .setVersion('1.0')
        .addTag('Tags')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(PORT, () => console.log(`App listen on port ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map