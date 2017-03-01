/*
 * Created by richardkahakui on 2/28/17.
 */
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});