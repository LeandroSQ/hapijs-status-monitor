module.exports = {
  path: '/status',
  strings: {
    title: 'hapi.js Status',
    "cpu_usage": "CPU Usage",
    "memory_usage": "Memory Usage",
    "one_minute_load_average": "One Minute Load Avg",
    "response_time": "Response Time",
    "requests_per_second": "Requests Per Second",
    "status_codes": "Status Codes",
    "footer": "Made with &#9829; with Socket.io & Chart.js"
  },
  spans: [
    {
      interval: 1,
      retention: 60,
      responses: [],
    },
    {
      interval: 5,
      retention: 60,
      responses: [],
    },
    {
      interval: 15,
      retention: 60,
      responses: [],
    },
  ],
  websocket: null,
  routeConfig: {}, // https://github.com/hapijs/hapi/blob/master/API.md#route-options
};
