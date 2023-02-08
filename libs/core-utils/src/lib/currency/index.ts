export const formatNumberToRupiah = (number?: number): string => {
  if (!number) return 'Rp 0';

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};
