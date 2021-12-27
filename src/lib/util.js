/**
 * Created by zhy on 2016/12/25.
 */
/**
 * 深度拷贝对象
 * @param target
 * @param arg
 * @returns {*}
 * @constructor
 */
export function p_ObjectCopy_DEEP(target, arg) {
  for (let arg_item in arg) {
    let type = typeof arg[arg_item];
    if (!target[arg_item] || (type !== 'Object' && type !== 'object')) {
      target[arg_item] = arg[arg_item];
      continue;
    } else {
      target[arg_item] = p_ObjectCopy_DEEP(target[arg_item], arg[arg_item]);
    }
  }
  return target;
};
/**
 * 解析url参数
 */
export function p_urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    })
  }
  return obj;
};

export function stopEvent(e) {
  if (!e) {
    return;
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
  if (e.stopPropagation) {
    e.stopPropagation();
  }
};

/**
 * mathchRegPicText
 * @param {*} str
 * @returns
 */
export function mathchRegPicText(str) {
  if (str == null || str === '') return null
  // let regex = /\!\[[\u4e00-\u9fa5_a-zA-Z0-9]{1,18}\.(jpg|png|gif)\]\([1-9]{1,9}\)/gm;
  let regex = /\!\[[\s\S]{1,100}\.(jpg|png|gif)\]\([1-9]{1,9}\)/gm;
  return str.match(regex)
}
