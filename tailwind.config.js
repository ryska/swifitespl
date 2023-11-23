/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,scss}"],
  theme: {
    extend: {
      colors: {
        'tsblue': '#c2e2e4',
        'tslilac': '#bea7c4'
      }
    },
  },
  plugins: [],
}

// module.exports = {
//   content: ['./index.html'],
//   theme: {
//     extend: {
//       primary : '#243c5a', 
//       secondary : {
//         100: '#243c5a',
//       },
//       colors: {
//         'tsblue': '#c2e2e4',
//         'tslilac': '#bea7c4'
//       }
//     },
//   },
//   plugins: [],
// }