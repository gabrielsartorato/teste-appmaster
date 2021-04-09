function checkValues(values: object, q: string) {
  for (let value of Object.values(values)) {
    if (Array.isArray(value)) {
      if (value.includes(q)) return true;
      continue;
    }

    if (!value) continue;

    const check = value.localeCompare(q, undefined, {
      sensitivity: 'accent',
    });

    if (check === 0) return true;
  }
}

export { checkValues };
