<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;

use App\Models\Peminjam;
use App\Models\Kelas;
use App\Models\Buku;

class PeminjamController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Peminjam::all();
        foreach ($data as $key => $v) {
            $kelas_id = $v->kelas_id;
            $buku_id = $v->buku_id;

            $data[$key]['nama_kelas'] = Kelas::where('id', $kelas_id)->first()['nama_kelas'];
            $data[$key]['nama_buku'] = Buku::where('id', $buku_id)->first()['nama_buku'];
        }
        return $this->sendResponse(true, $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $hasOnly = $request->has(['kelas_id', 'buku_id', 'nama_peminjam', 'rentang_pinjam', 'deskripsi', 'denda', 'status']);

        if ($hasOnly) {
            $data = [
                'kelas_id' => $request->kelas_id,
                'buku_id' => $request->buku_id,
                'nama_peminjam' => $request->nama_peminjam,
                'rentang_pinjam' => $request->rentang_pinjam ?: NULL,
                'deskripsi' => $request->deskripsi,
                'denda' => $request->denda,
                'status' => $request->status
            ];

            Peminjam::create($data);

            return $this->sendResponse(true, $data);
        } else {
            return $this->wasWrong();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Peminjam::where('id', $id)->first();
        if (empty($data)) return $this->isEmpty();
        $kelas_id = $data->kelas_id;
        $buku_id = $data->buku_id;

        $data['nama_kelas'] = Kelas::where('id', $kelas_id)->first()['nama_kelas'];
        $data['nama_buku'] = Buku::where('id', $buku_id)->first()['nama_buku'];

        return $this->sendResponse(true, $data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $check = Peminjam::where('id', $id)->first();
        $hasAny = $request->hasAny(['nama_peminjam', 'rentang_pinjam', 'deskripsi', 'denda', 'status']);

        if (!empty($check) && $hasAny) {
            $data = [
                'nama_peminjam' => $request->nama_peminjam ?: $check->nama_peminjam,
                'rentang_pinjam' => $request->rentang_pinjam ?: $check->rentang_pinjam,
                'deskripsi' => $request->deskripsi ?: $check->deskripsi,
                'denda' => $request->denda ?: $check->denda,
                'status' => $request->status ?: $check->status
            ];

            Peminjam::where('id', $id)->update($data);

            return $this->sendResponse(true, $data);
        } else {
            return $this->wasWrong();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Peminjam::where('id', $id)->delete();
        return response()->json(['message' => 'data has been deleted.']);
    }
}
