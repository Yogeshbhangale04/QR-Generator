// Get references to the elements
const inputText = document.getElementById('inputText');
const generateBtn = document.getElementById('generateBtn');
const qrCodeDisplay = document.getElementById('qrCodeDisplay');
const downloadBtn = document.getElementById('downloadBtn');

// Create a QRCode instance
const qrcode = new QRCode(document.getElementById('qrCodeDisplay'), {
    width: 200,
    height: 200
});
// Generate QR code when the Generate button is clicked
generateBtn.addEventListener('click', () => {
    
    const text = inputText.value;
    
    if (text.trim() !== '') {
        qrcode.makeCode(text);
        downloadBtn.classList.remove('hidden');
    } else {
        // Handle empty input
        alert('Please enter text or URL.');
    }
});

// Download QR code image when the Download button is clicked
downloadBtn.addEventListener('click', () => {
    const qrCodeImage = qrCodeDisplay.querySelector('img');
    if (qrCodeImage) {
        const link = document.createElement('a');
        link.href = qrCodeImage.src;
        link.download = 'qrcode.png';
        link.click();
    }
});
