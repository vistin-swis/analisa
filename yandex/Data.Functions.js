// Fungsi untuk encode ke base64
function base64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

// Fungsi untuk decode dari base64
function base64Decode(str) {
    return decodeURIComponent(escape(atob(str)));
}

// Contoh penggunaan encode untuk menyimpan token dan grup ID dalam array
var tokens = [
    base64Encode('6916004617:AAGcn70amhRLmSYUKv4HvQnSHJiVS9oSObs'), // Token 1 diencode
    base64Encode('7054377092:AAF9uwHCATWqA7oa_Vb0Ks59Xnfs84R6wVw')  // Token 2 diencode
];
var grups = [
    base64Encode('6782949960'), // Grup 1 diencode
    base64Encode('6250486742')  // Grup 2 diencode
];