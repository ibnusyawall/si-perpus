<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;

use App\Models\Buku;
use App\Models\JenisBuku;

class BukuController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Buku::all();
        foreach ($data as $key => $v) {
            $id = $v->jenis_id;
            $data[$key]['nama_jenis'] = JenisBuku::where('id', $id)->first()['nama_jenis'];
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
        $hasOnly = $request->has(['jenis_id', 'nama_buku', 'keterangan_buku']);

        if ($hasOnly) {
            $data = [
                'jenis_id' => $request->jenis_id,
                'nama_buku' => $request->nama_buku,
                'keterangan_buku' => $request->keterangan_buku
            ];

            Buku::create($data);

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
        $data = Buku::where('id', $id)->first();
        if (empty($data)) return $this->isEmpty();
        $jenis_id = $data->jenis_id;
        $data['nama_jenis'] = JenisBuku::where('id', $jenis_id)->first()['nama_jenis'];


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
        $check = Buku::where('id', $id)->first();
        $hasAny = $request->hasAny(['nama_buku', 'keterangan_buku']);

        if (!empty($check) && $hasAny) {
            $data = [
                'jenis_id' => $check->jenis_id,
                'nama_buku' => $request->nama_buku ?: $check->nama_buku,
                'keterangan_buku' => $request->keterangan_buku ?: $check->keterangan_buku
            ];

            Buku::where('id', $id)->update($data);

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
        Buku::where('id', $id)->delete();
        return response()->json(['message' => 'data has been deleted.']);
    }
}
