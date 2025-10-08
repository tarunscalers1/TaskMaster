const cache = new Map();

export const getCachedData = (key, fetchFn, ttl = 300000) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < ttl) {
    return cached.data;
  }
  const data = fetchFn();
  cache.set(key, { data, timestamp: Date.now() });
  return data;
};