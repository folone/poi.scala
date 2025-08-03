window.BENCHMARK_DATA = {
  "lastUpdate": 1754209819323,
  "repoUrl": "https://github.com/folone/poi.scala",
  "entries": {
    "JMH Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "folone",
            "username": "folone"
          },
          "committer": {
            "name": "folone",
            "username": "folone"
          },
          "id": "53417a16d30c3af4d4d6cccf6d68f2ad46fd1b30",
          "message": "Refactor into separate modules.",
          "timestamp": "2025-07-30T18:17:56Z",
          "url": "https://github.com/folone/poi.scala/pull/330/commits/53417a16d30c3af4d4d6cccf6d68f2ad46fd1b30"
        },
        "date": 1754205820576,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.90749973473295,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.05124185266883,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3821988470329512,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23829894146598737,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.173702644799553,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.021869401486906,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.357546317067195,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1839137396341886,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.08978533431123964,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09118187854353757,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09223698267449207,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 497.29871009099804,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 37.022893567668596,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.583579152175528,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.3976652854716961,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3752536838104298,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.47989800696743445,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14875215357455807,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1490887390759272,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.14756877684507616,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 558.9857810680633,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.49074582620598,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.969854210566785,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.0275836025986105,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17158351318865855,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.032583697797452196,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.169356459271404,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5947418401687043,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11667927765753053,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.010329377559778,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5028965164888942,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0910971363594843,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 516.547794225791,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 57.5202385979131,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.168533376571785,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 637.835846372179,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 649.1583396426433,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 638.6667531164178,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.958454585541685,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5244382441621596,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10085373537475532,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022798738455573515,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022717240142622108,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7687186460666775,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.224414877487461,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07152721414968248,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5115137945706587,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23131049516760913,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.887503751494139,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.932865311825646,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.068887490375856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.092787276178267,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001987974113005144,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021394893008077814,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11793750739584322,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.306952195339755,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4631925737740206,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.6779548141917124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.806198927505434,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.563061701139491,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 6.982228652083334,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.002764847186906914,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019184893800482373,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09156936895499772,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.48584730984963354,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.916510833859981,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.622914760606058,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.13716109810907978,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6413448251117149,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.678856360907048,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16187590924775677,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9982456802283348,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.949050660117056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001638269325322729,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016326793623273075,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08328551727262831,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0015942657083587656,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015131060648441521,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.001506031750718307,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16571982852926018,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.924551193479481,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.934680408051836,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "folone",
            "username": "folone"
          },
          "committer": {
            "name": "folone",
            "username": "folone"
          },
          "id": "2544f6727ee82e5ec9af77a84eec071806f264d0",
          "message": "Refactor into separate modules.",
          "timestamp": "2025-07-30T18:17:56Z",
          "url": "https://github.com/folone/poi.scala/pull/330/commits/2544f6727ee82e5ec9af77a84eec071806f264d0"
        },
        "date": 1754209289942,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.198131029239065,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.37075337867962,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3781313613352886,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22936284326785278,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.567519448685413,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.832788726767491,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.4486186102453065,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1414011294863315,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.08959693879449795,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09119213312168131,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0915850902118582,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 497.9307778164017,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.68400658203366,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.676904759487943,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.39864557214129503,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.40816900949416,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.41249063503213546,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.15009410737868126,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14724165236745548,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1347976010495221,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 548.5854885473179,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.395829610456985,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.829082733078033,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9585481219921808,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16836548557668912,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.032693876404640804,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.2677265610788,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.574403146329713,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11472471487925766,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.861823179445599,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.483286664026539,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09303710676113906,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 610.3278205162749,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.79113344993458,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.570815471654148,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 606.3749901659169,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 638.087439615706,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 638.4520636730315,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.702023130506545,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5293227749620698,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09884534106637555,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02251547674024001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02298524424003709,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7421617723643374,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.299121895861413,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07323368395723241,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49115512768226166,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2299657507106029,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8836788454019077,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.032050245054943,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.187943418289638,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.038836767588787,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.00201370976803209,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022900788046595958,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1211218035248944,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.3774607621696346,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0296415789929676,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.887507785695384,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.903201958852148,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.96774911890982,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.104157297088203,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001793856847992915,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01958341065204661,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09310666466307516,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5050425499045844,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.823723391007485,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.09079958030303,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14303906986353038,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6629095675546282,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.699481101101949,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16042400602042306,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0255153954819343,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.582028578497807,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016228036823010457,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01625776627506596,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08706382153502505,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001358197116308473,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015406759105205399,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0015247802640766792,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17679262258357256,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8954157967619376,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.917720877841973,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "folone",
            "username": "folone"
          },
          "committer": {
            "name": "folone",
            "username": "folone"
          },
          "id": "887f3c8aaa5d5a009eab444a49aafaaf49409633",
          "message": "Improve benchmarks.",
          "timestamp": "2025-07-30T18:17:56Z",
          "url": "https://github.com/folone/poi.scala/pull/332/commits/887f3c8aaa5d5a009eab444a49aafaaf49409633"
        },
        "date": 1754209818906,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.94863024559151,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.72836952855746,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3382859652845958,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23923135467355866,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.854458371227029,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.059139192090295,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.366665818104749,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.167564598909046,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09027178852601836,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09092749621330418,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09191793562469466,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 496.1148901369758,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.85013884340551,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.32284109467433,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4438394599404221,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4181431896135469,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.44129527496138377,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14919882414699243,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13770540608744855,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.13712197723281946,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 558.4472460122082,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 54.7558598301477,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.172449125363839,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.0310559146258127,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17048027438692984,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.03262840676933849,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.0281250323608075,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5999919817380858,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1171190985740134,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.016464888468473,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.500967681011402,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09122334508730619,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 612.5704697852705,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.88157418305045,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.204411229453175,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 605.5414675325476,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 713.9333864990907,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 642.1766851000449,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.744338723721251,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5334754553178922,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09856926926549281,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022642685701997782,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023089632802908842,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7338038700009624,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.187196971065695,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07415093267254605,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5273241040657688,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23299438351872168,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8540939434744231,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.991172308910652,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.126656051245423,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.105370193100976,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0019926749850796314,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02292532595770238,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11593781025113079,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.2837830695751165,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.5140283949810462,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 3.3643322742377784,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.226849549640288,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.744560711450208,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.1673043198458375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0018144346657371743,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019504907846875336,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11677509205790775,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.500592315659068,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.814849645468131,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.10926851988636,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14357374270836193,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7029335055542725,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.81613481902001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16431266039938536,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.041454252375797,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.072283874725276,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016352416286473232,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0161107645550345,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.084971776298159,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001694260596546981,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001475695567147444,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0016371142388419187,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1760795716995285,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.849330466545036,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.726681415368295,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}