export const copyToClipboard = (text, callback) => {
  navigator.clipboard.writeText(text).then(() => {
    if (callback) callback();
  });
};