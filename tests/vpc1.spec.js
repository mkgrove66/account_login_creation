import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://learn.stage.josce.mil/moodle/login/index.php');
  await page.goto('https://federation.prod.cce.af.mil/pool/sso/authenticate/msg/19?RelayState=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Flogin.php%3Fwants%26idp%3D19973d0e02ad4fb25eef9bbf50587ee6%26passive%3Doff&SAMLRequest=nZLLTsMwEEV%2FJfI%2BdpJWJLXaSqUVohKPihYWbJCxJ62RYwePw%2BPvcVMQIAELdtZ47p0zVzNG0ZiWz7qws1fw2AGG5KUxFnn%2FMSGdt9wJ1MitaAB5kHw9Oz%2FjBc14611w0hnyRfK3QiCCD9pZkiwXE3IHdTaqSwVVmQ%2Fy7GiQg6iGVVmWQ6VGhSyrQX2kclDVkCQ34DEqJyQaRTliB0uLQdgQS1kxTLMqLUabvOCDEc%2BKW5Is4jbaitCrdiG0yBmrQYHvazTyKyolUFHTRhvWOmcYomP7RZiImYANWooAJJl9kM%2Bdxa4Bvwb%2FpCVcX519ehsQ3tLItAX64DA6720b55SB3q93Lhi2h0cqJNJ21%2F4sJMnqPeBjbZW227%2BzvT80IT%2FdbFbp6nK9IdPxfgzvs%2FLTf1A2EIQSQewhx%2Byr2fhwOBcRY7lYOaPla3LifCPC75Q5zfuKVmndt%2FLOYgtS1xpUjNgY9zz3EPOekOA7IGx6GPr9QKdv&u=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Fsp%2Fmetadata.php');
  await page.getByRole('button', { name: 'I Agree' }).click();
  await page.goto('https://federation.prod.cce.af.mil/pool/sso/federate?RelayState=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Flogin.php%3Fwants%26idp%3D19973d0e02ad4fb25eef9bbf50587ee6%26passive%3Doff&SAMLRequest=nZLLTsMwEEV%2FJfI%2BdpJWJLXaSqUVohKPihYWbJCxJ62RYwePw%2BPvcVMQIAELdtZ47p0zVzNG0ZiWz7qws1fw2AGG5KUxFnn%2FMSGdt9wJ1MitaAB5kHw9Oz%2FjBc14611w0hnyRfK3QiCCD9pZkiwXE3IHdTaqSwVVmQ%2Fy7GiQg6iGVVmWQ6VGhSyrQX2kclDVkCQ34DEqJyQaRTliB0uLQdgQS1kxTLMqLUabvOCDEc%2BKW5Is4jbaitCrdiG0yBmrQYHvazTyKyolUFHTRhvWOmcYomP7RZiImYANWooAJJl9kM%2Bdxa4Bvwb%2FpCVcX519ehsQ3tLItAX64DA6720b55SB3q93Lhi2h0cqJNJ21%2F4sJMnqPeBjbZW227%2BzvT80IT%2FdbFbp6nK9IdPxfgzvs%2FLTf1A2EIQSQewhx%2Byr2fhwOBcRY7lYOaPla3LifCPC75Q5zfuKVmndt%2FLOYgtS1xpUjNgY9zz3EPOekOA7IGx6GPr9QKdv&did_auth=1&m=&r=&u=https%3A%2F%2Flearn.stage.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Fsp%2Fmetadata.php');
  await page.goto('https://learn.stage.josce.mil/moodle/');
  await page.getByRole('menuitem', { name: 'Dashboard' }).click();
  await page.getByLabel('User menu').click();
  
});