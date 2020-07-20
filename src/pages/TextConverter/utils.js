export const textToBase64 = (str) => btoa(str);

export const base64ToText = (str) => atob(str);

export const textToBinary = (str) => {
  const paddingLeft = (e, a, t) => {
    if (!e || !a || e.length >= t) return e;
    for (let r = (t - e.length) / a.length, i = 0; i < r; i++) e = a + e;
    return e;
  };

  let output = '';
  str
    .split('')
    .map((char) => char.charCodeAt(0).toString(2))
    .forEach((char) => {
      output += paddingLeft(char, '0', 8) + ' ';
    });

  return output;
};

export const binaryToText = (str) => {
  let output = '';
  str = str.replace(/\s/g, '');
  if (str.length % 8 !== 0) {
    output = '???';
  } else {
    for (; 0 < str.length; ) {
      const t = str.substring(0, 8);
      str = str.substring(8);
      output += String.fromCharCode(parseInt(t, 2));
    }
  }

  return output;
};

export const textToHex = (str) => {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    output += ' ' + str.charCodeAt(i).toString(16);
  }
  return output;
};

export const hexToText = (str) => {
  let output = '';
  str = str.split(' ').join('');
  for (let i = 0; i < str.length; i += 2) {
    output += String.fromCharCode(parseInt(str.substr(i, 2), 16));
  }
  return output;
};

export const reverse = (str) => {
  return str.split('').reverse().join('').trim();
};
