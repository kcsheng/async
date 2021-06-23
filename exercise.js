// getCustomer(1, (customer) => {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log("Top movies: ", movies);
//       sendEmail(customer.email, movies, () => {
//         console.log("Email sent...");
//       });
//     });
//   }
// });

async function sendCustomerTopMovies() {
  try {
    const customer = await getCustomer(1);
    console.log(customer);
    if (customer.isGold) {
      const topMovies = await getTopMovies();
      console.log(topMovies);
      const email = await sendEmail();
      console.log(email);
    }
  } catch (err) {
    console.log(err);
  }
}

sendCustomerTopMovies();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("email sent");
    }, 4000);
  });
}
