export const menuColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "nama_menu",
    headerName: "Nama Menu",
    width: 630,
  },
  {
    field: "harga",
    headerName: "Harga",
    width: 230,
  },
];

export const pelangganColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "nama",
    headerName: "Nama Pelanggan",
    width: 380,
  },
  {
    field: "alamat",
    headerName: "Alamat",
    width: 230,
  },
  {
    field: "no_telp",
    headerName: "No Telp",
    width: 230,
  },
];

export const memesanColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "id_menu",
    headerName: "Nama Menu",
    width: 380,
  },
  {
    field: "jumlah_pemesanan",
    headerName: "Jumlah Pesanan",
    width: 230,
  },
  {
    field: "id_pelanggan",
    headerName: "Dipesan Oleh",
    width: 230,
  },
];

export const resepColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "id_menu",
    headerName: "Nama Menu",
    width: 380,
  },
  {
    field: "id_bahan_baku",
    headerName: "Bahan Baku",
    width: 230,
  },
  {
    field: "tata_cara",
    headerName: "Tata Cara",
    width: 230,
  },
];

export const bahanbakuColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "nama_bahan_baku",
    headerName: "Nama Menu",
    width: 380,
  },
];
export const pembelianbahanColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "id_bahan_baku",
    headerName: "Bahan Baku",
    width: 380,
  },
  {
    field: "harga",
    headerName: "Harga",
    width: 380,
  },
];
export const detailbelanjaColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "tanggal",
    headerName: "Tanggal",
    width: 380,
  },
  {
    field: "total_harga",
    headerName: "Total Harga",
    width: 380,
  },
  {
    field: "id_pembelian",
    headerName: "Pembelian",
    width: 380,
  },
];
export const pembayaranColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "id_pelanggan",
    headerName: "Tanggal",
    width: 380,
  },
  {
    field: "metode_pembayaran",
    headerName: "Total Harga",
    width: 380,
  },
  {
    field: "id_pembelian",
    headerName: "Pembelian",
    width: 380,
  },
];
