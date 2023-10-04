//Promise
import helloWorld from './helloWorld';
async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}
messages(); // Panggil function messages
// Code di luar blok 
console.log("Pesan di luar blok kode messages");

//fetch
import ambilDataUser from './ambilDataUser';
ambilDataUser().then((userData) => {
  console.log(userData);
}).catch((error) => {
  console.error("Terjadi kesalahan:", error);
});

//Async Await
import ambilDataUserAsync from './ambilDataUserAsync';
ambilDataUserAsync().then((userData) => {
  console.log(userData);
}).catch((error) => {
  console.error("Terjadi kesalahan:", error);
});


