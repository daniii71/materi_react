import React from "react";

const makanans = [
  {
    nama: "Es Kopi",
    harga: 4000,
  },
  {
    nama: "Rames",
    harga: 8000,
  },
  {
    nama: "Pecel",
    harga: 10000,
  },
  {
    nama: "Nasi Ruwet",
    harga: 11000,
  },
  {
    nama: "Jengkol",
    harga: 4000,
  },
];

// Reduce
const total_bayar = makanans.reduce(
  (total_harga, makanan) => total_harga + makanan.harga,
  0
);

const Tugas = () => {
  const allMakanans = makanans.map((makanan, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{makanan.nama}</td>
      <td>{makanan.harga}</td>
    </tr>
  ));

  const filteredMakanans = makanans
    .filter((makanan) => makanan.harga < 10000)
    .map((makanan, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{makanan.nama}</td>
        <td>{makanan.harga}</td>
      </tr>
    ));

  return (
    <div style={{ padding: "50px" }}>
      <h2> Menu Makanan</h2>

      <table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>{allMakanans}</tbody>
      </table>

      <h3>Daftar Makanan Di Bawah Rp 10.000</h3>
      <table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Makanan</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>{filteredMakanans}</tbody>
      </table>

      <h1>Total Harga Makanan : {total_bayar}</h1>
    </div>
  );
};

export default Tugas;
