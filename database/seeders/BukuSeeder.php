<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class BukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $buku = [
            [
                'nama_buku' => 'Buku Pemrograman Dasar',
                'keterangan_buku' => 'Buku dasar pemrograman untuk pemula',
                'jenis_id' => 1
            ],
            [
                'nama_buku' => 'Buku Fisika',
                'keterangan_buku' => 'Buku pembelajaran Fisika untuk kelas 10',
                'jenis_id' => 2
            ]
        ];
        foreach($buku as $v) {
            DB::table('bukus')->insert($v);
        }
    }
}
