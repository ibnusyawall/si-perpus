<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeminjamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('peminjams', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nama_peminjam');
            $table->text('deskripsi')->nullable();
            $table->integer('rentang_pinjam');
            $table->integer('denda')->nullable();
            $table->enum('status', ['pinjam', 'kembali', 'telat']);
            $table->foreignId('kelas_id');
            $table->foreignId('buku_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('peminjams');
    }
}
