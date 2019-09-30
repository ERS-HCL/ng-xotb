const FILE_EXT_REG = /(^[.]\w*)$/m;

export function isFileTypeAccepted(accept: string | string[], file: File) {
  if (typeof accept === 'string') {
    accept = accept.split(',');
  }

  return accept.some(acc => {
    if (FILE_EXT_REG.test(acc)) {
      return acc === `.${file.name.split('.').pop()}`;
    } else {
      return new RegExp(acc.replace('*', '.*')).test(file.type);
    }
  });
}
