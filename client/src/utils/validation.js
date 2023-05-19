export const isEmpty = (val) => {
  return val.trim().length == 0;
};

export const isLength = (val, mn, mx) => {
  let len = val.trim().length;
  if (mn) {
    if (len < mn) return true;
  }
  if (mx) {
    if (len > mx) return true;
  }
  return false;
};
