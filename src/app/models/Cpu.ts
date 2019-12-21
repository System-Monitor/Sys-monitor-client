export interface Cpu {
  BaseSpeedInGHz: number;
  L1CacheInKB: number;
  L2CacheInKB: number;
  L3CacheInKB: number;
  Name: string;
  NumberOfCores: number;
  NumberOfLogicalProcessors: number;
  NumberOfProcesses: number;
  SpeedInGHz: number;
  Utilization: number;
}
