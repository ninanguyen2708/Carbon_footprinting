import { doc, writeBatch } from 'firebase/firestore';
import { getDB } from '../constants/firebase';
import { carbonActivities } from '../data/carbonActivities';

export const uploadDataToFirestore = async () => {
  try {
    const db = getDB();
    const batch = writeBatch(db);

    console.log('Starting upload to Firestore...');

    // Tạo categories
    const categories = {
      transport: { name: 'Transport', icon: 'car', color: '#6366f1', activities: {} as any },
      food: { name: 'Food', icon: 'restaurant', color: '#10b981', activities: {} as any },
      energy: { name: 'Energy', icon: 'flash', color: '#f59e0b', activities: {} as any },
      waste: { name: 'Waste', icon: 'trash', color: '#ef4444', activities: {} as any },
      other: { name: 'Other', icon: 'cube', color: '#8b5cf6', activities: {} as any }
    };

    // Nhóm activities theo category
    carbonActivities.forEach(activity => {
      const categoryKey = activity.category as keyof typeof categories;
      if (categories[categoryKey]) {
        categories[categoryKey].activities[activity.id] = {
          name: activity.name,
          carbonValue: activity.carbonValue,
          unit: activity.unit,
          description: activity.description || ''
        };
      }
    });

    // Upload categories
    batch.set(doc(db, 'categories', 'default'), categories);

    // Upload sample articles
    batch.set(doc(db, 'articles', 'carbon-basics'), {
      title: 'What is a Carbon Footprint?',
      subtitle: 'Learn about carbon footprints and why they matter',
      category: 'Basics',
      content: 'A carbon footprint measures greenhouse gas emissions...',
      readTime: 5,
      published: true,
      createdAt: new Date().toISOString()
    });

    batch.set(doc(db, 'articles', 'reduce-emissions'), {
      title: '10 Ways to Reduce Emissions',
      subtitle: 'Simple actions you can take today',
      category: 'Tips',
      content: 'Simple daily actions to reduce your carbon footprint...',
      readTime: 8,
      published: true,
      createdAt: new Date().toISOString()
    });

    // Upload default settings
    batch.set(doc(db, 'defaults', 'userSettings'), {
      settings: {
        notifications: true,
        darkMode: false,
        preferredUnit: 'metric',
        language: 'en'
      },
      goals: {
        daily_target: 15.0,
        weekly_target: 105.0,
        monthly_target: 450.0,
        yearly_target: 5400.0
      },
      createdAt: new Date().toISOString()
    });

    await batch.commit();
    
    console.log(`Upload completed! ${carbonActivities.length} activities uploaded.`);
    
    // Return success status for hook
    return { 
      success: true, 
      activitiesCount: carbonActivities.length,
      message: 'Data uploaded successfully'
    };

  } catch (error) {
    console.error('Upload failed:', error);
    
    // Return error status for hook
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Upload failed'
    };
  }
};