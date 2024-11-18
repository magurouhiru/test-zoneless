import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.zoneless.config';
import { AppZonelessComponent } from './app/app.zoneless.component';

bootstrapApplication(AppZonelessComponent, appConfig).catch((err) =>
  console.error(err),
);
