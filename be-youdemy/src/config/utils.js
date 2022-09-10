const validateDTO = (raw, keys) => {
  const rawKeys = Object.keys(raw);
  for (const key of keys) {
    if (!rawKeys.includes(key)) throw new Error(`Missing: ${key}`);
  }
};

export { validateDTO };
