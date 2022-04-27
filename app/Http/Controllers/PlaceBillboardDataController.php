<?php

namespace App\Http\Controllers;

use App\Models\PlaceBillboardData;
use Illuminate\Http\Request;

class PlaceBillboardDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $place_billboards = PlaceBillboardData::paginate(20);

        return \response($place_billboards);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PlaceBillboardData  $placeBillboardData
     * @return \Illuminate\Http\Response
     */
    public function show(PlaceBillboardData $placeBillboardData)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PlaceBillboardData  $placeBillboardData
     * @return \Illuminate\Http\Response
     */
    public function edit(PlaceBillboardData $placeBillboardData)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PlaceBillboardData  $placeBillboardData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PlaceBillboardData $placeBillboardData)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PlaceBillboardData  $placeBillboardData
     * @return \Illuminate\Http\Response
     */
    public function destroy(PlaceBillboardData $placeBillboardData)
    {
        //
    }
}
