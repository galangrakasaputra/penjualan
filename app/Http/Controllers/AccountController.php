<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class AccountController extends Controller
{
    public function register(Request $request){
        DB::table('users')->insert([
            'nama' => $request->nama,
            'password' => Hash::make($request->password),
            'posisi' => $request->posisi
        ]);

        return response()->json(['message' => "Berhasil Registrasi"], 203);
    }
}
