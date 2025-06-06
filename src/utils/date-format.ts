export const dateFormat = (date: string) => {
  return new Date(date).toLocaleString("id-ID", {
    weekday: "long", // contoh: Senin
    year: "numeric", // contoh: 2025
    month: "long", // contoh: Juni
    day: "numeric", // contoh: 6
    hour: "2-digit", // contoh: 13
    minute: "2-digit", // contoh: 45
    second: "2-digit", // contoh: 30
    hour12: false, // gunakan format 24 jam
    timeZone: "Asia/Jakarta", // pastikan waktu sesuai zona Indonesia
  });
};
