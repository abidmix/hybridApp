module.exports = {
  "development": {
    "store": {
      "host": "localhost",
      "port": 63790
    },
    "assets": {
      "accessKeyId": "<your-access-key-goes-here>",
      "secretAccessKey": "<your-secret-access-key-goes-here>",
      "bucket": "<your-bucket-name>"
    }
  },

  "staging": {
    "buildEnv": "staging",
    "store": {
      "host": "staging-redis.firstiwaslike.com",
      "port": 6379
    },
    "assets": {
      "accessKeyId": "AKIAI6GL2I3A2GBFBI3A",
      "secretAccessKey": "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",
      "bucket": "abidmix",
      "prefix": "<optional-remote-prefix>",
      "gzipExtensions": ["js", "css", "svg", "json"]
    }
  }
}