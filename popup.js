document.getElementById('generate').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let url = tab.url;
  let qr = qrcode(0, 'M');
  qr.addData(url);
  qr.make();
  let dataURL = qr.createDataURL(4);
  chrome.downloads.download({
    url: dataURL,
    filename: 'qrcode.png'
  });
});