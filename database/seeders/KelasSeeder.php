<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class KelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kelas = [
            [
                'nama_kelas' => 'XII RPL A'
            ],
            [
                'nama_kelas' => 'XII RPL B'
            ],
            [
                'nama_kelas' => 'XII RPL C'
            ],
            [
                'nama_kelas' => 'XII TKJ A'
            ],
            [
                'nama_kelas' => 'XII TKJ B'
            ],
            [
                'nama_kelas' => 'XII TKJ C'
            ],
            [
                'nama_kelas' => 'XII MM A'
            ],
            [
                'nama_kelas' => 'XII MM B'
            ],
            [
                'nama_kelas' => 'XII MM C'
            ],
        ];

        foreach($kelas as $v) {
            DB::table('kelas')->insert($v);
        }
    }
}
