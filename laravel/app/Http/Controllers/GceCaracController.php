<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Gce_Caracteristicas;
use Illuminate\Http\Request;

class GceCaracController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $caracteristicas = Gce_Caracteristicas::all();
        return response()->json($caracteristicas);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $equipos = Gce_Caracteristicas::create([
            'gce_nombre_equipo' => $request->gce_nombre_equipo,
            'gce_board' => $request->gce_board,
            'gce_case' => $request->gce_case,
            'gce_procesador' => $request->gce_procesador,
            'gce_grafica' => $request->gce_grafica,
            'gce_ram' => $request->gce_ram,
            'gce_disco_duro' => $request->gce_disco_duro,
            'gce_teclado' => $request->gce_teclado,
            'gce_mouse' => $request->gce_mouse,
            'gce_pantalla' => $request->gce_pantalla,
            'gce_estado' => $request->gce_estado,
        ]);
        return response()->json(['message' => 'Formulario guardado con éxito', 'formulario' => $equipos], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $caracteristicas = Gce_Caracteristicas::find($id);
        if($caracteristicas){
            return response()->json($user);
        }else{
            return response()->json(['error => caracteristicas not found'], 404);
        }
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
        $caracteristicas = Gce_Caracteristicas::find($id);
        if ($caracteristicas) {
            $caracteristicas->update($request->all());
            return response()->json($caracteristicas);
        } else {
            return response()->json(['error' => 'caracteristicas not found'], 404);
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
        $caracteristicas = Gce_Caracteristicas::find($id);
        if ($caracteristicas) {
            $caracteristicas->delete();
            return response()->json(['message' => 'caracteristicas deleted']);
        } else {
            return response()->json(['error' => 'caracteristicas not found'], 404);
        }
    }
}
