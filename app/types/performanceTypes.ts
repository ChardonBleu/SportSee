interface PerformanceData {
  value: number;
  kind: number;
}

interface Kind {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}

export interface Performance {
  userId: number;
  kind: Kind;
  data: Array<PerformanceData>;
}
