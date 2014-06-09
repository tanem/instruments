module.exports = {

  dev: {
    streams: [
      {
        level: 'trace',
        stream: process.stdout
      },
      {
        level: 'warn',
        stream: process.stderr
      },

    ]
  },

  test: {
    streams: [
      {
        level: 'warn',
        stream: process.stderr
      }
    ]
  },

  demo: {
    streams: [
      {
        level: 'info',
        stream: process.stdout
      },
      {
        level: 'warn',
        stream: process.stderr
      }
    ]
  }

};