let colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: colors.slate,
        positive: colors.green,
        urge: colors.violet,
        warning: colors.yellow,
        info: colors.blue,
        critical: colors.red,
      }
    },
  },
  plugins: [
    require("a17t")
  ],
}
