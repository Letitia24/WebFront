function ambilDataUser() {
    return fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data); // Menampilkan key 'data' saja
        return data.data;
      });
  }
  
  export default ambilDataUser;
  