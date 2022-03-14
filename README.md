<div align="center">
 
# SI PERPUS
![Author](https://img.shields.io/badge/Author-ibnusyawall-blue.svg?style=for-the-badge&logo=github)
<p>Aplikasi Sistem Informasi Perpustakaan Sekolah dibuat menggunakan Laravel dan VueJS</p>
</div>

## Installation

Use the package manager (composer) for installing

```bash
> git clone https://github.com/ibnusyawall/si-perpus.git
> cd si-perpus
> composer update
> npm install
> copy .env.example .env
> php artisan key:generate
```

## Setup

Lakukan perintah dibawah ini jika sudah setting database di .env

```bash
> php artisan migrate:fresh --seed
> php artisan passport:install
> php artisan passport:client --personal --name=perpus
```

## Run

```bash
> npm run dev
> php artisan serve
```

pergi ke halaman login dengan akses url: http://localhost:8000/login

## Demo Account
Username: admin
Password: Admin12345

## Screenshot

<p align="center">
  <img alt="halaman-login" src="https://github.com/ibnusyawall/si-perpus/blob/master/screenshots/halaman-login.png"/>
  <img alt="halaman-dashboard" src="https://github.com/ibnusyawall/si-perpus/blob/master/screenshots/halaman-dashboard.png"/>
  <img alt="halaman-buku" src="https://github.com/ibnusyawall/si-perpus/blob/master/screenshots/halaman-buku.png"/>
  <img alt="halaman-jenis-buku" src="https://github.com/ibnusyawall/si-perpus/blob/master/screenshots/halaman-jenis-buku.png"/>
  <img alt="halaman-kelas" src="https://github.com/ibnusyawall/si-perpus/blob/master/screenshots/halaman-kelas.png"/>
  <img alt="halaman-peminjam" src="https://github.com/ibnusyawall/si-perpusblob/master/screenshots/halaman-peminjam.png"/>
</p>

## Contact Me

<a href="https://wa.me/6282299265151"><img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp%20-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>
