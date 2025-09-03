export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  displayName: string | null;
  university?: string;
  course?: string;
  createdAt: number;
};

export type CarbonCategory = 'transport' | 'food' | 'energy' | 'waste' | 'other';

export type CarbonEntry = {
  id: string;
  userId: string;
  date: string; // ISO date string
  category: CarbonCategory;
  activity: string;
  carbonValue: number; // in kg CO2e
  notes?: string;
  createdAt: number;
};

export type DailyTotal = {
  date: string;
  total: number;
  transport: number;
  food: number;
  energy: number;
  waste: number;
  other: number;
};

export type WeeklyTotal = {
  weekStart: string;
  weekEnd: string;
  total: number;
  transport: number;
  food: number;
  energy: number;
  waste: number;
  other: number;
};

export type MonthlyTotal = {
  month: string; // YYYY-MM
  total: number;
  transport: number;
  food: number;
  energy: number;
  waste: number;
  other: number;
};

export type CarbonActivity = {
  id: string;
  name: string;
  category: CarbonCategory;
  carbonValue: number;
  unit: string;
  description?: string;
};