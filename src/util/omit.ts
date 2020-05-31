type Dictionary = { [k: string]: unknown };

export const omit = (target: unknown, fields: string[]) => {
  const keys = Object.keys(target as Dictionary).filter(
    (f) => !fields.includes(f)
  );

  let newTarget: typeof target = {};
  for (let k of keys) {
    (newTarget as Dictionary)[k] = (target as Dictionary)[k];
  }

  return newTarget;
};
