const API_URL = 'https://digitalmoney.digitalhouse.com/';

export const httpPost = async (endpoint: string, body: object) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Failed to post ${endpoint}`);
  }
  return res.json();
};
