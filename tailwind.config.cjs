/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
      },
      boxShadow: {
        neo: "6px 6px 0px 0px rgba(0, 0, 0, 1)", // Shadow untuk efek Neobrutalism
      },
    },
    neobrutalism: {
      primary: "#FF6B6B", // Warna utama
      secondary: "#4ECDC4", // Warna sekunder
      accent: "#FFE66D", // Warna aksen
      neutral: "#2C3E50", // Warna netral
      "base-100": "#FFFFFF", // Warna latar belakang
      info: "#3498DB", // Warna info
      success: "#2ECC71", // Warna sukses
      warning: "#F1C40F", // Warna peringatan
      error: "#E74C3C", // Warna error
    },
  },
};
