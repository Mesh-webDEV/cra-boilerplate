import merge from 'lodash/merge';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export async function objectMergeAsync(obj1, obj2) {
  return new Promise((resolve, reject) => {
    try {
      const mergedObj = merge(obj1, obj2);
      return resolve(mergedObj);
    } catch (error) {
      reject('Internal error - ERR-MERGEOBJ');
    }
  });
}

export function formatDate(date) {
  try {
    return dayjs(date).format('DD/MM/YYYY hh:mm A');
  } catch (error) {
    console.log('error formatting date', error.message);
    return 'Error formatting';
  }
}
export function fromDate(date) {
  try {
    return dayjs(date).fromNow();
  } catch (error) {
    console.log('error formatting date', error.message);
    return 'Error formatting';
  }
}
