const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://learn.stage.josce.mil/moodle/login/index.php');
  await page.goto('https://federation.prod.cce.af.mil/pool/sso/authenticate/msg/19?RelayState=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Flogin.php%3Fwants%26idp%3D19973d0e02ad4fb25eef9bbf50587ee6%26passive%3Doff&SAMLRequest=nZJbbxMxEIX%2Fysrva%2B%2Bt2cRKIoVGiEgFoibtAy9oYs82Rl578Xi5%2FHucDYgiQR94s8ZzznxzNEuC3g5yM8azu8fPI1LMvvXWkZw%2BVmwMTnogQ9JBjySjkofN2ztZ8UIOwUevvGXPJC8rgAhDNN6xbLddsY%2BqXZyaU9vNC1UUs0XZdkUJdV3flLPFzbxp23ZWV7rRULHsEQMl5YoloyQnGnHnKIKLqVRUTV7M82p%2BLCvZ1LIpPrBsm7YxDuKkOsc4kBSiQ41hqvHEr7lSyKHjvbFi8N4KIi8uiwhImaCLRkFElm1%2Bkd96R2OP4YDhi1H4cH%2F329siBMcT0xPyT56S88W2915bnPwm50rQcH3koIgP5%2BHvQpbtfwb8yjht3NPL2Z6uTSTfHI%2F7fP%2F%2BcGTr5WWMnLIK6%2F%2Bg7DGChggXyKV4bra8Hs67hLHb7r016nv22oce4r8pS15OFaPzbmqVo6MBlekM6hSxtf7rbcCU94rFMCIT6%2BvQPw90%2FQM%3D&u=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Fsp%2Fmetadata.php');
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.goto('https://federation.prod.cce.af.mil/pool/sso/federate?RelayState=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Flogin.php%3Fwants%26idp%3D19973d0e02ad4fb25eef9bbf50587ee6%26passive%3Doff&SAMLRequest=nZJbbxMxEIX%2Fysrva%2B%2Bt2cRKIoVGiEgFoibtAy9oYs82Rl578Xi5%2FHucDYgiQR94s8ZzznxzNEuC3g5yM8azu8fPI1LMvvXWkZw%2BVmwMTnogQ9JBjySjkofN2ztZ8UIOwUevvGXPJC8rgAhDNN6xbLddsY%2BqXZyaU9vNC1UUs0XZdkUJdV3flLPFzbxp23ZWV7rRULHsEQMl5YoloyQnGnHnKIKLqVRUTV7M82p%2BLCvZ1LIpPrBsm7YxDuKkOsc4kBSiQ41hqvHEr7lSyKHjvbFi8N4KIi8uiwhImaCLRkFElm1%2Bkd96R2OP4YDhi1H4cH%2F329siBMcT0xPyT56S88W2915bnPwm50rQcH3koIgP5%2BHvQpbtfwb8yjht3NPL2Z6uTSTfHI%2F7fP%2F%2BcGTr5WWMnLIK6%2F%2Bg7DGChggXyKV4bra8Hs67hLHb7r016nv22oce4r8pS15OFaPzbmqVo6MBlekM6hSxtf7rbcCU94rFMCIT6%2BvQPw90%2FQM%3D&did_auth=1&m=&r=&u=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Fsp%2Fmetadata.php');
  await page.goto('https://learn.stage.josce.mil/moodle/');
  await page.locator('#frontpage-slider').getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('User menu').click();
  await page.getByRole('menuitem', { name: 'Log out' }).click();

});