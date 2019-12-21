export const environment = {
  production: true,
  graphThemes: {
    cpu: {
      lineColor: 'rgba(0,130,207,0.82)',
      gridColor: 'rgba(10,27,43,0.23)',
      areaColor: 'rgba(13,137,255,0.17)'
    },
    memory: {
      lineColor: 'rgb(114,31,152)',
      gridColor: 'rgba(55,17,68,0.23)',
      areaColor: 'rgba(115,12,156,0.16)'
    },
    wifi: {
      lineColor: 'rgba(143,42,0,0.94)',
      gridColor: 'rgba(143,42,0,0.27)',
      areaColor: 'rgba(134,32,0,0.29)'
    }
  },
  syncInfo: {
    FirebaseProjectId: '',
    BaseUrl: 'https://system-stats<FIREBASE_PROJECT_ID>.firebaseio.com/',
    CpuRoute: 'cpu_info.json',
    MemoryRoute: 'memory_info.json',
    WifiRoute: 'wifi_info.json',
    syncAfterEveryMilliSeconds: 3000
  }
};
