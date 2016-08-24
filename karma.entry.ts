import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/jasmine-patch';

const testContext = (<{ context?: Function }>require).context('./src', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);

const coverageContext = (<{ context?: Function }>require).context(
  './src',
  true,
  /^(?=(?!.*[.]spec\.ts))(?=(?!.*[.]d\.ts))(?=(?!\.\/bootstrap\.ts$))(?=(?!\.\/vendor\.ts$)).*\.ts$/
);
coverageContext.keys().forEach(coverageContext);
