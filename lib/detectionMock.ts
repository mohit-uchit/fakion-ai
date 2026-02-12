// Simulate deepfake detection with random probability
export async function detectDeepfake(file: File): Promise<{
  result: 'fake' | 'real';
  confidence: number;
}> {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Random detection result (weighted more toward authentic)
  const isFake = Math.random() > 0.7;
  const confidence = Math.floor(Math.random() * 20) + (isFake ? 75 : 80);

  return {
    result: isFake ? 'fake' : 'real',
    confidence,
  };
}

// Simulate criminal face search
export async function searchCriminal(faceHash: string) {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Import criminal database
  const criminalDB = await import('@/data/criminalDB.json');
  
  // Search for match (random chance)
  const found = Math.random() > 0.8;
  
  if (found && criminalDB.default.length > 0) {
    // Return random criminal from database
    const randomIndex = Math.floor(Math.random() * criminalDB.default.length);
    return {
      found: true,
      data: criminalDB.default[randomIndex],
    };
  }

  return {
    found: false,
    data: null,
  };
}
