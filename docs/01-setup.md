# 01 - Setup

Langkah awal untuk memulai proyek secara low-level:

## 1. Inisialisasi & Instalasi
1. Jalankan `npm init -y` untuk membuat `package.json`.
2. Instal Webpack:
   ```bash
   npm install --save-dev webpack webpack-cli webpack-dev-server
   ```
3. Instal Loaders untuk CSS dan Assets:
   ```bash
   npm install --save-dev css-loader style-loader
   ```
4. Instal pustaka pendukung:
   ```bash
   npm install date-fns
   ```

## 2. Struktur Folder
Buatlah struktur berikut di dalam root folder:
```
/
├── dist/ (otomatis dihasilkan)
├── src/
│   ├── logic/      (Todo.js, Project.js, storage.js)
│   ├── dom/        (render.js, ui.js)
│   ├── style.css
│   └── index.js    (entry point)
├── package.json
└── webpack.config.js
```

## 3. Pengaturan `package.json`
Ubah bagian `scripts` di `package.json` agar mudah menjalankan perintah:
```json
"scripts": {
  "build": "webpack",
  "start": "webpack serve --open"
},
```

## 4. Konfigurasi `webpack.config.js`
Buat file `webpack.config.js` di root folder:
```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
```

## 5. Mengapa Konfigurasi Ini?
- **Loaders:** Webpack butuh `css-loader` untuk membaca CSS dan `style-loader` untuk menyuntikkannya ke DOM.
- **Asset Modules:** `type: 'asset/resource'` menangani file gambar/SVG tanpa perlu loader tambahan.
- **`webpack serve`:** Server lokal yang menyediakan *live reload*.
