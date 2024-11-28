module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Używamy babel-jest do przetwarzania plików JSX/TSX
  },
  setupFilesAfterEnv: ["./jest.setup.js"], // Upewnij się, że masz odpowiednią konfigurację setupFiles
};
