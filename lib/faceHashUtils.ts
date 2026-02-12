// Generate pseudo hash from filename
export function generateFaceHash(filename: string): string {
  let hash = '';
  for (let i = 0; i < filename.length; i++) {
    hash += filename.charCodeAt(i).toString(16);
  }
  // Take first 16 characters and format
  return hash.substring(0, 16).toLowerCase();
}

// Search criminal database by hash
export async function searchCriminalDB(hash: string) {
  const criminalDB = await import('@/data/criminalDB.json');
  return criminalDB.default.find((record) => record.hash === hash) || null;
}
