export const downloadFile = (text: string, fileName: string) => {
  const a = window.document.createElement('a');
  a.href = window.URL.createObjectURL(new Blob([text], {type: 'text/plain'}));
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
