import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://learn.stage.josce.mil/moodle/login/index.php');
  await page.goto('https://federation.prod.cce.af.mil/pool/sso/authenticate/msg/19?RelayState=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Flogin.php%3Fwants%26idp%3D19973d0e02ad4fb25eef9bbf50587ee6%26passive%3Doff&SAMLRequest=nZJPb9swDMW%2FiqG7Jf9J3VlIAqQNhgVot6BJe9il4CS6USFLrih327ef4mxYC2w99CZQfI8%2FPnBO0NtBrsZ4cDf4NCLF7EdvHcnpY8HG4KQHMiQd9EgyKrlbXV%2FJihdyCD565S17IXlbAUQYovGOZZv1gt3XbT0ry6oGKCssukqfqVLjObR1U86gaXVbaGyac92w7A4DJeWCJaMkJxpx4yiCi6lUVLO8%2BJDXxb48k1Ur6%2Bory9ZpG%2BMgTqpDjANJITrUGKYaT%2FyaK4UcOt4bKwbvrSDy4riIgJQJumgURGTZ6g%2F5pXc09hh2GJ6Nwtubq7%2FeFiE4npgekD96Ss5H2957bXHym5wrQcPpkYMiPhyGfwtZtv0d8IVx2riHt7P9dmoi%2BWm%2F3%2BbbL7s9W86PY%2BSUVVi%2Bg7LHCBoiHCHn4qXZ%2FHQ4nxPGZr311qif2Ucfeoj%2Fpyx5OVWMzrupVY6OBlSmM6hTxNb675cBU94LFsOITCxPQ18f6PIX&u=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Fsp%2Fmetadata.php');
  await page.getByRole('button', { name: 'I Agree' }).click();
 
});