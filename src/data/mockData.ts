export interface ABTestData {
      testId: string;
      testName: string;
      status: 'running' | 'completed' | 'paused';
      startDate: string;
      endDate?: string;
      description: string;
      variants: {
            control: VariantData;
            variant: VariantData;
      };
      timeline: TimelineData[];
      metadata: {
            device: 'desktop' | 'mobile' | 'all';
            trafficSplit: number;
            significance: number;
            estimatedDuration: number;
      };
}

export interface VariantData {
      name: string;
      visitors: number;
      conversions: number;
      revenue: number;
      conversionRate: number;
      averageOrderValue: number;
      bounceRate: number;
      timeOnPage: number;
}

export interface TimelineData {
      date: string;
      controlConversions: number;
      variantConversions: number;
      controlRevenue: number;
      variantRevenue: number;
}

export const mockABTests: ABTestData[] = [
      {
            testId: 'test-001',
            testName: 'Product Page Hero Section',
            status: 'running',
            startDate: '2025-08-10',
            description: 'Testing new hero section with video vs static image',
            variants: {
                  control: {
                        name: 'Original Hero (Static Image)',
                        visitors: 15643,
                        conversions: 1109,
                        revenue: 67890,
                        conversionRate: 7.09,
                        averageOrderValue: 61.23,
                        bounceRate: 42.1,
                        timeOnPage: 127
                  },
                  variant: {
                        name: 'New Hero (Video Background)',
                        visitors: 15521,
                        conversions: 1289,
                        revenue: 78340,
                        conversionRate: 8.31,
                        averageOrderValue: 60.78,
                        bounceRate: 38.9,
                        timeOnPage: 145
                  }
            },
            timeline: [
                  { date: '2025-08-10', controlConversions: 89, variantConversions: 103, controlRevenue: 5430, variantRevenue: 6240 },
                  { date: '2025-08-11', controlConversions: 134, variantConversions: 156, controlRevenue: 8190, variantRevenue: 9480 },
                  { date: '2025-08-12', controlConversions: 167, variantConversions: 189, controlRevenue: 10220, variantRevenue: 11490 },
                  { date: '2025-08-13', controlConversions: 201, variantConversions: 234, controlRevenue: 12300, variantRevenue: 14220 },
                  { date: '2025-08-14', controlConversions: 243, variantConversions: 287, controlRevenue: 14860, variantRevenue: 17450 },
                  { date: '2025-08-15', controlConversions: 275, variantConversions: 320, controlRevenue: 16890, variantRevenue: 19460 }
            ],
            metadata: {
                  device: 'all',
                  trafficSplit: 50,
                  significance: 94.2,
                  estimatedDuration: 14
            }
      },
      {
            testId: 'test-002',
            testName: 'Checkout Button Color',
            status: 'completed',
            startDate: '2025-07-28',
            endDate: '2025-08-08',
            description: 'Testing green vs orange checkout button',
            variants: {
                  control: {
                        name: 'Green Button',
                        visitors: 23456,
                        conversions: 2103,
                        revenue: 126180,
                        conversionRate: 8.97,
                        averageOrderValue: 60.01,
                        bounceRate: 35.2,
                        timeOnPage: 156
                  },
                  variant: {
                        name: 'Orange Button',
                        visitors: 23389,
                        conversions: 1987,
                        revenue: 119220,
                        conversionRate: 8.49,
                        averageOrderValue: 59.99,
                        bounceRate: 36.8,
                        timeOnPage: 149
                  }
            },
            timeline: [],
            metadata: {
                  device: 'mobile',
                  trafficSplit: 50,
                  significance: 97.8,
                  estimatedDuration: 10
            }
      }
];

export const currentTest = mockABTests[0];

// Additional utility data
export const revenueImpactCalculation = {
      projectedLift: 15.4, // percentage
      projectedMonthlyIncrease: 12450, // dollars
      confidenceInterval: {
            lower: 8.2,
            upper: 22.6
      }
};