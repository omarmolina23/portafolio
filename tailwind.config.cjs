module.exports = {
    content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx,vue}', // Asegúrate de incluir todos los tipos de archivos que usas
    ],
    theme: {
      extend: {
        fontFamily: {
            signika: ['"Signika"', 'sans-serif'], // Asegúrate de usar comillas dobles
          },
      },
    },
    plugins: [],
  };