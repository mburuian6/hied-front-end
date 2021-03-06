import {format, formatDistanceToNow} from "date-fns";

export const isPersistedState = stateName =>{
  return sessionStorage.getItem(stateName);
}

export const persistedState = stateName =>{
  return sessionStorage.getItem(stateName);
}

export const persistState = (key, value) => {
  sessionStorage.setItem(key, value);
  return key;
}

export const isLoggedIn = () =>{
  var sessionState = sessionStorage.getItem('access_token');
  if (sessionState) return true;
  return false;
}

export const timeFormatWithTimeZone= time => {
  return format(new Date(time),'Pp [zzzz]')
}

export const timeFormat= time => {
  return format(new Date(time),'Pp ')
}

export const timeFormatHuman = time => {
  return formatDistanceToNow(new Date(time), {addSuffix:true})
}

export const clearStorage = () => {
  var keys = ['username','access_token', 'expires_in','refresh_token','created_at']
  keys.forEach(element => {
    sessionStorage.removeItem(element);
  });
}

const isIndexDbSupported = () => {
  if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
    return false;
  }
  return true;
}

// export const openIndexDB = () => {
//   'use strict';
//   if (isIndexDbSupported()){
//     var dbPromise = idb.open('hied',1, (upgradeDb) => {
//       if (!upgradeDb.objectStoreNames.contains('posts')) {
//         upgradeDb.createObjectStore(
//             'posts',
//             {autoIncrement: true}
//         );
//       }
//     });
//   }
// }