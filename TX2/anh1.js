// const bangGia = {
//   6: 1000000,
//   5: 800000,
//   4: 700000,
//   3: 600000,
//   1: 400000,
// };
// function capnhatphong() {
//   const loai = document.getElementById("loaiphong").value;
//   document.getElementById("price").value = bangGia[loai] || " ";
//   document.getElementById("result").value = " ";
// }
// function tinh() {
//   const loai = document.getElementById("loaiphong").value;
//   const gia = bangGia[loai];
//   const ngay = document.getElementById("songaythue").value;

//   if (!isNaN(loai) && !isNaN(gia) && !isNaN(ngay)) {
//     const tien = ngay * gia;
//     document.getElementById("result").value = tien.toLocaleString() + " VND ";
//   } else {
//     alert(" vui long nhap lai !");
//   }
// }

const bangGia = {
  6: 1000000,
  5: 800000,
  4: 700000,
  3: 500000,
  1: 400000,
};
function capnhatphong() {
  const loai = document.getElementById("loaiphong").value;
  document.getElementById("price").value = bangGia[loai] || " ";
  document.getElementById("result").value = " ";
}
function tinh() {
  const loai = document.getElementById("loaiphong").value;
  const gia = bangGia[loai];
  const ngay = document.getElementById("songaythue").value;
  if (!isNaN(loai) && !isNaN(gia) && !isNaN(ngay)) {
    const tien = gia * ngay;
    document.getElementById("result").value = tien.toLocaleString() + " VND ";
  } else {
    alert(" vui long nhap lai !");
  }
}
function xoa() {
  document.getElementById("name").value = " ";
  document.getElementById("price").value = " ";
  document.getElementById("songaythue").value = " ";
  document.getElementById("result").value = " ";
}
