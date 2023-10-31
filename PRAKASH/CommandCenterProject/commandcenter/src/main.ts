import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('License Key');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

