import { AIResponse } from '@/types/api';
import { searchInsuranceInfo } from './insuranceService';

export async function mockQueryAI(prompt: string): Promise<AIResponse> {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const result = searchInsuranceInfo(prompt);
  
  return {
    text: result.content,
    confidence: result.confidence,
    sources: [result.source]
  };
}