export const formatterCurrency = ({
  nominal,
  style,
  suffix,
  prefix,
}: {
  nominal: number;
  style?: 'currency';
  suffix?: ',-';
  prefix?: 'Rp. ';
}) => {
  const data = new Intl.NumberFormat('id-ID', {
    style: style,
    currency: 'IDR',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(nominal);
  return `${prefix !== undefined ? prefix : ''}${data}${
    suffix !== undefined ? suffix : ''
  }`;
};

export const handleChangeFormatRupiah = (
  value: string,
  prefix?: 'Rp. ',
  suffix?: ',-',
) => {
  const currentValue = value.replace(/[^\d]/g, '');
  if (currentValue === '') {
    return '';
  }
  return formatterCurrency({ nominal: parseInt(currentValue), prefix, suffix });
};
