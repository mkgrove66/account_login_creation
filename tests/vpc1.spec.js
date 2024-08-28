import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://learn.stage.josce.mil/moodle/login/index.php');
  await page.goto('https://federation.prod.cce.af.mil/pool/sso/authenticate/msg/19?RelayState=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Flogin.php%3Fwants%26idp%3D19973d0e02ad4fb25eef9bbf50587ee6%26passive%3Doff&SAMLRequest=nZJbaxsxEIX%2FyqL3lfaKXWEbnJgSQ9qa2O1DXsJYmo1VtNJGo%2B3l31depzSFNg95E6M5Z745zIKgt4Ncj%2FHk7vBpRIrZj946ktPHko3BSQ9kSDrokWRUcr%2F%2BcCsrXsgh%2BOiVt%2ByF5HUFEGGIxjuWbTdL9tAilO%2B6oqixqdtaaSib2bxVzUy1s2PVNrru1FEdm7Zm2RcMlJRLloySnGjEraMILqZSUTV5Mc%2Br%2BaGcy7aRZXnPsk3axjiIk%2BoU40BSiA41hqnGE7%2FmSiGHjvfGisF7K4i8OC8iIGWCLhoFEVm2%2Fk1%2B7R2NPYY9hm9G4ee72z%2FeFiE4npgekX%2F1lJzPtr332uLkNzlXgobLIwdFfDgN%2FxaybPcc8JVx2rjH17M9XppI3hwOu3z3aX9gq8V5jJyyCqs3UPYYQUOEM%2BRCvDRbXA7nY8LYbnbeGvUze%2B9DD%2FH%2FlCUvp4rReTe1ytHRgMp0BnWK2Fr%2F%2FTpgynvJYhiRidVl6N8HuvoF&u=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Fsp%2Fmetadata.php');
  await page.getByRole('button', { name: 'I Agree' }).click();

});