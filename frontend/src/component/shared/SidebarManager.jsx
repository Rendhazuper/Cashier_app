import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.clear()
        navigate('/')
        window.location.reload()
    }

    return (
        <div>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

        <div class="min-h-screen flex flex-row bg-gray-100">
          <div class="flex flex-col w-60 bg-white overflow-hidden">
            <div class="flex items-center justify-center h-20 shadow-md">
              <h1 class="text-3xl uppercase text-indigo-500">Logo</h1>
            </div>
            <ul class="flex flex-col py-4">
              <li>
                <a href="/" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-user"></i></span>
                  <span class="text-sm font-medium">Home</span>
                </a>
              </li>
              <li>
                <a href="data_transaksi" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-food-menu"></i></span>
                  <span class="text-sm font-medium">Data Transaksi</span>
                </a>
              </li>
              <li>
                <a href="#" onClick={handleLogout} class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                  <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-log-out"></i></span>
                  <span class="text-sm font-medium">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>

    )
}