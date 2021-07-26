import { CHANGE_USERNAME } from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function onSubmitForm(event, data) {
  console.log(event, data, 'hello');
}
