export const isEmpty = (value: unknown): value is '' | null | undefined => {
  return (
    value === undefined || value === null || (typeof value === 'string' && value.trim() === '')
  );
};
