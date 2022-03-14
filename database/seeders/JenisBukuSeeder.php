<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class JenisBukuSeeder extends Seeder
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
                'nama_jenis' => 'Buku Fiksi'
            ],
            [
                'nama_jenis' => 'Buku Pelajaran'
            ],
            [
                'nama_jenis' => 'Buku Cerita'
            ],
            [
                'nama_jenis' => 'Buku Jurusan RPL'
            ],
            [
                'nama_jenis' => 'Buku Enterpreneur'
            ]
        ];

        foreach ($buku as $v) {
            DB::table('jenis_bukus')->insert($v);
        }
    }
}
