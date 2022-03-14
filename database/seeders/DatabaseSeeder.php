<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use JenisSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            UserSeeder::class,
            JenisBukuSeeder::class,
            BukuSeeder::class,
            KelasSeeder::class,
            PeminjamSeeder::class,
        ];

        $this->call($seeds);
    }
}
