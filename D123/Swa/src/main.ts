import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { HardikComponent } from './app/hardik/hardik.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

