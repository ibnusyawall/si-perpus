<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class PeminjamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $peminjam = [
            [
                'nama_peminjam' => 'Arya Wijaya',
                'rentang_pinjam' => 2,
                'status' => 'kembali',
                'kelas_id' => 1,
                'buku_id' => 1
            ],
            [
                'nama_peminjam' => 'Fahri Hidayatuloh',
                'rentang_pinjam' => 3,
                'status' => 'telat',
                'deskripsi' => 'Jangan telat lagi yaaa',
                'denda' => 5000,
                'kelas_id' => 2,
                'buku_id' => 2
            ]
        ];

        foreach($peminjam as $v) {
            DB::table('peminjams')->insert($v);
        }
    }
}
