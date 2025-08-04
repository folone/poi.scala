window.BENCHMARK_DATA = {
  "lastUpdate": 1754308431164,
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
          "id": "0f16a7d6ba0ecf5e5bc5294ed5edf17eb4da3b15",
          "message": "Improve benchmarks.",
          "timestamp": "2025-08-03T08:30:51Z",
          "url": "https://github.com/folone/poi.scala/pull/332/commits/0f16a7d6ba0ecf5e5bc5294ed5edf17eb4da3b15"
        },
        "date": 1754211490926,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.100404838972565,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.607784587511944,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.2913731982138452,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23444600031857837,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.808594453978253,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9826203739574435,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.429502342440751,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1416099691969124,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09295040927895064,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09088694294976793,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0929865159459984,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 503.72020297991384,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.59033112522751,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.60016324628182,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.41369375938892805,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4120046061286363,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.37444624236065743,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.15056563871244782,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14251900079340046,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1390229873509658,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 552.8413970515544,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 50.881733157628105,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.081918494701307,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9178535052736876,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1688743315103776,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.032653108538741156,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.006295854959513,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5819372903963054,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11442502999849864,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.149020497768413,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49931082165671564,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08679103518263478,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 607.5706675729948,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.36406803439227,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.542973089902144,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 606.3622037360992,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 693.2235731314429,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 665.0649698981822,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.695775705547222,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5300557625674982,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10187180827145362,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02260546216145757,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02258391511639667,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7754273813758266,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.179268349432308,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07095429213472547,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4886507909072352,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23298344095094112,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8497113659495168,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.908508543289201,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.107237808241758,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.788036690379776,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.002019384634009888,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02289523777214877,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11717594431963889,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.2373198533537533,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4621386729079395,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.2425738253209637,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.6962515112943395,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.318663385455999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.544786471006498,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0018066140696914937,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017834365336513,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09469439078618262,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4960976430048726,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.876393447553033,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.089412247632584,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14289826189059082,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7083438140170535,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.805780037054703,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16512880310300998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9865284497839297,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.289869427377848,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016202750995547935,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016352671464638736,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08004468729803525,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001681740896383428,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015372879184567198,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0016023474326454193,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17672718180864347,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9024455321228484,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.05142090251942,
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
          "id": "a7f07b2c38992b248d53a06c3f2dac69b71a4067",
          "message": "Improve benchmarks.",
          "timestamp": "2025-08-03T08:30:51Z",
          "url": "https://github.com/folone/poi.scala/pull/332/commits/a7f07b2c38992b248d53a06c3f2dac69b71a4067"
        },
        "date": 1754211581279,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.26278905346632,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.51666702447215,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3009465543377914,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23377367760624784,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.86721075167624,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.004206395541362,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.203811748027657,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.170981621504565,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0901027871521011,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09185409394105684,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09174237361089053,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 501.7942428724913,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.40578273734608,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.600249898974528,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4197698078565927,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.41869840175527084,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.309618503341364,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.15147274115640763,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14196623448143014,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1360680244071647,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 556.3463708252677,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.883783357500775,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.269974469717075,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9572903649198878,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1681673559555851,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.032578661483223074,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.050992896976018,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5957449744071651,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.12051037565632747,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.966296623427996,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5000227497553921,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08816599818675463,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 611.6865645686485,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.41747003090901,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.95911941800947,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 598.9164118843576,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 636.1506486411658,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 631.8557626491391,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.549533219893939,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5334249861602961,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10195177213047435,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023027432532036703,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023220258537571516,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7550607253914755,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.193565553660554,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07029604020582458,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5366444894374081,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23160144190534973,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8548268884560193,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.05282382090407,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.204201692746569,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.994163547873864,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001984749156063027,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021593939850092083,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.12139453385361001,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.348771049336344,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4568473756982736,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.797431206644641,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.79661653635501,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.226830516995368,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.229646237435955,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001822089947286239,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01786978808150504,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09287644202120954,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5045847217667874,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.873603779059934,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.290991570549245,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.13665717512031245,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6964189505580318,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.57984334752981,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.15885911952114543,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.045007990726712,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.369393650367154,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016212178795415113,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01651658116259871,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0865496306324819,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016323565319901906,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015776093633519885,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0014943597926391481,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17660187649611714,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9001270135433583,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.806850920056428,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "folone@users.noreply.github.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b8fc879cbeb4ce7c0b5191470ad93d5c4b4f7ae",
          "message": "Improve benchmarks. (#332)",
          "timestamp": "2025-08-03T09:05:13Z",
          "tree_id": "a08f5cc404b5b6ab2128310a423523aa2669b627",
          "url": "https://github.com/folone/poi.scala/commit/1b8fc879cbeb4ce7c0b5191470ad93d5c4b4f7ae"
        },
        "date": 1754213453351,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.57343137675972,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.76853847483533,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3497333680117376,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23205365929848773,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.072705586658113,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.083008668826028,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.300930336870837,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1568253098497447,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09027105688885813,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09162323046379252,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09099927418228124,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 503.69192143287637,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 45.94322762189521,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.61859859054465,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.36056120993937363,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3985985724054893,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.38799447247504076,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1479268984010882,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14457148290184157,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1411206805183513,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 559.1484601959257,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.65367231192677,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.387348802060934,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.0071128000166913,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17298794323631028,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0318607687371595,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.212479231067446,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5938970450871583,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11383005165691132,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.225650525676448,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5002289544669642,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09278687389773635,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 615.2681196386536,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.487737902887034,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.161214671775506,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 684.2833341791307,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 662.2654562872734,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 662.9536743177002,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.8768631417540895,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5372675500620085,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10250765017522831,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022794329975936077,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022921122394551047,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.747567674417739,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.20618907646625,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07561622889220705,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5054079787883883,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2296248981436157,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8848640113541493,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.09253640897436,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.131974330866909,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.907459952699861,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0020164841508764084,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021537133040270894,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11475790326899529,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 3.1049417708796856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.652922762701564,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.3754968538128827,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.9025073494945675,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.961757423679333,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 6.777218354054054,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0018151035426703863,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02114840773814534,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08904361419428244,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5037160765358631,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.863042066397549,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.702525574777184,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14284689781384463,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7363777795982063,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.416879664166668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16200164408187456,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9782230964464482,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.826204477886034,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001640912463747558,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016192402494142645,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08625941056427962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0014859510536720667,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015362716858754956,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0016581186877109584,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1722370555680773,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8685912772777573,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.2329918379731,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "51f323e9f6aadcc7dafcc18e2edb3c479bc8d295",
          "message": "Don't forget to checkout the repo",
          "timestamp": "2025-08-04T08:55:57Z",
          "url": "https://github.com/folone/poi.scala/commit/51f323e9f6aadcc7dafcc18e2edb3c479bc8d295"
        },
        "date": 1754299092041,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.03434297118402,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.4247612118595,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.334622492825903,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2419513956603685,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.364672428645884,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.033205265033981,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.173642405631762,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1566247531749851,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09298118401420404,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09261971174488667,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09513919422926485,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 512.1028172639349,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 47.46299464922966,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.828921015114549,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4267352475579328,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.42156055781824736,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.47035363383306583,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.15193355157090713,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14030809957923523,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.15407221128343687,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 587.3430518520629,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.784179909503266,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.192400326670594,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9785417423622573,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1770813793296461,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.03346679753983332,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.389146042396544,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6106530143388339,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11642640888681292,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.2372111910583,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5100270873512425,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09504316713081477,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 615.8017068893239,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 62.17571363985009,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.358976513955183,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 641.4032515147941,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 673.497925620368,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 666.0446330023766,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.984827967261242,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5479348572354141,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10828635855482309,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022611939407064484,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022562061959138686,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7295212119897865,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.2089066993756985,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07108335029150577,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4795536665830779,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23341223202242062,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8820304257623937,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.007268855433242,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.861882387488112,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.803332309261936,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.00202050749753566,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021392586805250653,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1161053416716477,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.512837275813204,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.6201146661498,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.4363449936670056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.646060517146102,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.795129817232028,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.305454418606294,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0017804955846171364,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017842897946227995,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09227148355912695,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.508829090609314,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.012094288574044,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.077894097821968,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14088494447685398,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.712835284814354,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.93675855551212,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17046625125833972,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.062483198758589,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 15.11095763575688,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016895594812329422,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01721845201382956,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08625460993010216,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016549008256705338,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016755850976445455,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.001630104325299995,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1794489313180532,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.030415204352261,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 13.692890358750066,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "51f323e9f6aadcc7dafcc18e2edb3c479bc8d295",
          "message": "Don't forget to checkout the repo",
          "timestamp": "2025-08-04T08:55:57Z",
          "url": "https://github.com/folone/poi.scala/commit/51f323e9f6aadcc7dafcc18e2edb3c479bc8d295"
        },
        "date": 1754299308227,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.627024377972816,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.863242486811416,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3689464731075671,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23868011383997065,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.177018674819404,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8886201809533325,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.367438378855569,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1535583659937234,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09259133152175368,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09116074220962994,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09156074997567487,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 492.7722237741182,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 45.853698196885816,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.633681423416823,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4011426841078697,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.42921734993288296,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.34084689679280356,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1477596096922766,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1516789727737775,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1456889818332932,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 549.2911483467008,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.70824051513428,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.11101404162589,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9220631865383262,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17036512971348955,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.03228933474962036,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.961254907051369,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5940476474082257,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11663896157667256,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.048743856163835,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4956527409302547,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08830084059695563,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 618.1197101422894,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.20381798741096,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.823984983993686,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 598.4160624804553,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 639.1804635955192,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 647.5196068278289,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.795362550639444,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5344726809112297,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09733260029846157,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.02224486442563062,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02247204880003878,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7427580847079581,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.341187537760563,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0761249444280108,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.504222084992116,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23089893239756018,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8582276706655799,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.995224690301004,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.024404902520304,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.094121614334554,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.002022258505250143,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022881623443735153,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.12752022865319831,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.4447858869162618,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.6187062131208316,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.72140313827663,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.814417193284612,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.796617995330024,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.2582132678709215,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0018281328953997245,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019524556219514363,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09154248968046781,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5271831940923244,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.818805557973664,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.376634482954547,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14403485864847504,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7035334738612504,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.716924227816357,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16819695572383897,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9974399060977006,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.169968652305721,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016167961716487375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017018474327804428,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0827760910923855,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016350339062896559,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015350771194662268,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0015030413368883233,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1729979155302056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8392984443766545,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.744909319826883,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "51f323e9f6aadcc7dafcc18e2edb3c479bc8d295",
          "message": "Don't forget to checkout the repo",
          "timestamp": "2025-08-04T08:55:57Z",
          "url": "https://github.com/folone/poi.scala/commit/51f323e9f6aadcc7dafcc18e2edb3c479bc8d295"
        },
        "date": 1754299362236,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.72828068802553,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.39490256342919,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3268316717993234,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2336126678574389,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.44496130833798,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8873346099453383,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.276165735476871,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1672711535787093,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.08986353783291916,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09032104311950197,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0919956349644238,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 503.03166642911157,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.53433503408945,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.634163502618202,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.36613365857053537,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3549249964372712,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.41763994755483946,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14768878075860517,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1473041154963291,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.14145321314682197,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 557.9786944234204,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.752561863390135,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.62457540744184,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9661112439240374,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17153060243501544,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.03164009532540627,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.946720000672334,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5945982135680923,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11706012262098708,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.03499597518883,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5045049889946522,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09027446152059468,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 607.3775785940272,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.89504097599005,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.29624828304433,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 694.0039748563273,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 643.9736046124652,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 653.7177477654534,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.710477611954067,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5298567793465676,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10145728103583807,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022868414655085927,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023043242145487915,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7621492357458312,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.291196921235322,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07236050753188002,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4980877824411737,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23021777996568232,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8615076683620195,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.095454067467728,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.08357749133089,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.871836078342684,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001981993285339315,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021481225786785657,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.12074494551210499,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.112500205863527,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.5160113315210375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.1005822938435723,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.317364279408653,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.843830327481131,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 6.741207523734808,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0017832751326784945,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01808482885052031,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09587733915254464,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5120299939340492,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.895348614154967,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.86889394108932,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14212792078950048,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6781610734385226,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.11650863036547,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17303500888467563,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0467157279710735,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.276407765002276,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016467609220106136,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016478668928961448,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08285419788070977,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.002411824924796831,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014746531572783935,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0015690587070997322,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16972485864096634,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8887021037486402,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.216600482349609,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "babd4d27914579a170ffe8a6b1163ae14621670a",
          "message": "Update README and Makefile",
          "timestamp": "2025-08-04T09:47:42Z",
          "url": "https://github.com/folone/poi.scala/commit/babd4d27914579a170ffe8a6b1163ae14621670a"
        },
        "date": 1754301163838,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.35797363975172,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.32702926181962,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3764534475991614,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.24038276819871895,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 14.259071732971359,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0153460327789934,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.267533786013616,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1655672637362249,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09082533468311599,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08969939772462657,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09043657582838725,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 503.4917611559651,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.36529975498916,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.640906868049298,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4141373394034781,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.41634046153667076,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.44144982639060126,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1524268214473457,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1403663476335399,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1455362898672567,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 560.8015343375127,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.544319030864756,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.19735314973827,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.8421346947780606,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17210452672270352,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.031734450393030064,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.810873735223424,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.599514772813732,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11484431059120696,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.010269513524466,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4848993053671447,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09302575617444737,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 612.5632179077938,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.32361412132641,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.571850275809862,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 668.0272376828901,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 666.5334761321983,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 646.1950194937294,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.9258763937690615,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5335671650827745,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10332018188418535,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022406578490393937,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022892670592432447,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7665108904697947,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.1705769894740055,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07397880113988693,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5412913466537748,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23753926094387592,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8900217774553891,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.999271994397995,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.837588430107528,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.99718721237458,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0020266399519815056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02297190124595091,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11759313895652099,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.3818183650030087,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.8644951441763142,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.1961821742637375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.855691582983878,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.020412093858958,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.155448196798379,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0017592032829971932,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01804840978987884,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0908024122404252,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5352904718125113,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.866172925087662,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.10714435340909,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14507880549969707,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6729589043612503,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.487314344430994,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1678257758003745,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9976504291382369,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.904796789539505,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001598089447615364,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017892452132038692,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.082545314144684,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016674597431555406,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016163664260840105,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0015825235297364936,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1730039278942675,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8621077384295184,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.029769040908032,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "babd4d27914579a170ffe8a6b1163ae14621670a",
          "message": "Update README and Makefile",
          "timestamp": "2025-08-04T09:47:42Z",
          "url": "https://github.com/folone/poi.scala/commit/babd4d27914579a170ffe8a6b1163ae14621670a"
        },
        "date": 1754301345936,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.32779204544934,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.04778099350902,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3851500185360872,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23686861732552997,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.903055995414382,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.995600428760167,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.3337487136198165,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1528198312598765,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09035990335396939,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09108193292430825,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09162259471567454,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 503.26391570483673,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.74637921730378,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.494218448568931,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4423148371684614,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3790907215980229,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.38237095867619886,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14814982145449568,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1466447590943966,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1361121529031149,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 561.3276501404948,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.861556234816305,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.70080912181685,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9345319399257224,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1716678548014207,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.032582402529110675,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.122496076877608,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.622453566324394,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11626213404097421,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.951674230044722,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5018907236055428,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09059484408601495,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 611.2515672291802,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.743327846003865,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.343226809264376,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 596.9922025460638,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 596.7310676337636,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 622.4591313725102,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.597466872706492,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5255620579073809,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.101423675049136,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0228709634398595,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022843865141475787,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.75479745771704,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.248443250147415,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07041327628216024,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4820878112739968,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2338582250809244,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8835044091181337,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.229377932309317,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.963393598351647,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.972361990647396,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0020259506573271956,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02289699499747517,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11649756222392735,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.4527888351468854,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.3248497563682116,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.2990542733713673,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.725469682894854,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.557838845250828,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.087297635291181,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001828000254555616,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01796980032534063,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09019200299855964,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5084462774352522,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.759445244047553,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.75822465151515,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14748217250257206,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6854587293272985,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.580555250032868,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16701986803673513,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.987545574650206,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.053314514250506,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016484316127415312,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016431649209584474,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0823417300940763,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0014918689095598733,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001614912423986617,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0014739715957480608,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17348299364482436,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8753186496710819,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.831555078479525,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "babd4d27914579a170ffe8a6b1163ae14621670a",
          "message": "Update README and Makefile",
          "timestamp": "2025-08-04T09:47:42Z",
          "url": "https://github.com/folone/poi.scala/commit/babd4d27914579a170ffe8a6b1163ae14621670a"
        },
        "date": 1754302461624,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 44.03376457627458,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.50507354524975,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3869280516513853,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2409304844474852,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.675417293424214,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9588261555015205,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.428472141955756,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1597904732334199,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.08877498019116384,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09037129717885314,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09119031439729111,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 492.5317069322471,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.460695783383414,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.257882525599943,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.39839864108392276,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4004416422648471,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.3627464569922542,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.15066204120887006,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13897259168234838,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1459004474088287,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 563.6064020467172,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 54.75340367857967,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.695729853786895,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.0093070366204673,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1468284587867778,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.03218981434594239,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.944866030380825,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5836578014054179,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11450109937519712,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.919303473911843,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5029367382876841,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09157268320016158,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 610.0083864221879,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.68399675516512,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.068292839471123,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 601.5005104320617,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 670.8346718413916,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 645.2290268809242,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.714640652267564,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5407432220448951,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10262498456373699,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023108151398431743,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02310729966760809,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7333455402200986,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.256283961125425,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07098066193508572,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.486578846588511,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23084026806481578,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8673768167425182,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.985754134483994,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.03448176043956,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.310264001493872,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.002030119716994994,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.022541406991419995,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11591973839948928,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.2316368256814223,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 3.0794365122612124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.4372309947827073,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.844224630230174,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.751311246032107,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.0563883726337036,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0018169684367513924,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.018154268361369758,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09318280189332415,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.526315314368883,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.743828068528033,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.96860744545454,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1445337879714189,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7216026639357493,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.529955916407433,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16776738715011774,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0439991427681243,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.19048560686475,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001646384644429336,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016163468032237442,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08334481906271725,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016790483024719163,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001558966686930108,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.001563408656079825,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17010925958583883,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8681436712068429,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.841157706596231,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "5207a57574a5490edff2258b767d1b4150428ca4",
          "message": "More robust way to get a PR number",
          "timestamp": "2025-08-04T10:17:39Z",
          "url": "https://github.com/folone/poi.scala/commit/5207a57574a5490edff2258b767d1b4150428ca4"
        },
        "date": 1754304256061,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.276695125910514,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.02858232337802,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3243871074482396,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22173216220768827,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.276640063220029,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8769702230475886,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.019178144828838,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.0759157654261273,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0906245090136786,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08900471236714644,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0877933049518017,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 491.6142010622997,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.443308490476454,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.260315507051239,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4326943688406818,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.36288900001807073,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.3244211970967297,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1315107491301661,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.13350956463650376,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.12233912524738003,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 561.8298316984606,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.61055268259473,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.0175234169803,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9924047844991022,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16584627785555933,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.03043365912191596,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.972252128238553,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5958314972789759,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11735419000570416,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.966196023289406,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.47925273435986904,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.07871077961991127,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 610.7871380372734,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.485541931008186,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.119452619692126,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 618.3452448052376,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 597.7340298310312,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 654.974252369277,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.757766899352655,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5329868279771828,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08902414109038054,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023537651355083313,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023949957466945178,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7678153971161924,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.781696138779933,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07664647069030002,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49063594273572936,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.24773387801603963,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.9183329002941205,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.300938894878845,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.346763799743787,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.250230262550255,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.002013556802510777,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0217727923321195,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11677110557235652,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.4756670958613896,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4194964562364603,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.693390379220926,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 9.077621709802203,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.904448309657224,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.499997593784792,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0018260850041916994,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017710984646318477,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08932644088774314,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.508849310331558,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.098410126618095,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 33.4298767058957,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1451499129769686,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.7273595715757115,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.675230080279668,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16921509075224145,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.1009768051743274,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.44391452880759,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016349217999546805,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016285760073662014,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08088787081550505,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001659470403523078,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016021306687592075,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0015675612713277887,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17434397196416732,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9318699151902048,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.332039814813019,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "3386de22085e6c420b57c157f1559b2a554cf8a5",
          "message": "Checkout before other operations (but after debug)",
          "timestamp": "2025-08-04T10:48:21Z",
          "url": "https://github.com/folone/poi.scala/commit/3386de22085e6c420b57c157f1559b2a554cf8a5"
        },
        "date": 1754306066725,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.671851487056955,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.75228609014974,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3187253658516813,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2298370954545316,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.344657126913484,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8123231309619832,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.218681513317668,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1274994777625502,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0900216234093985,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08638156960174935,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08842971030303033,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 495.7715477645441,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.662315028765676,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.483728433879616,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.37737179616342625,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3931402091989303,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.37696934832042905,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.13363339600664356,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1337033706225808,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.127774488353814,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 564.2267400238336,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.848378883791234,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.694238513514444,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9055423753334146,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16990824802103727,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.031589177182051696,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.945504199021258,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5724778480830255,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1066846835703376,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.912083677097792,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.4905932776205927,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08368375528992558,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 609.518503806089,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.36572837816249,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.117230563224965,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 603.3796743115297,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 691.7705855562378,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 645.2652092158291,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.714943165084915,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5331421812547252,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09172202408937327,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023141609457303963,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02307820748709373,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7834801495768067,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.293144839919384,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0743430465219341,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.531333662107303,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23216489417772862,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8644224923437948,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.971736925394168,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.188898185398608,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.993263274832648,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0020757872280778855,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021412935114264876,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11556322588296626,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.5081750538678045,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.033693799308713,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.460831997211785,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.000178102524375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.0098831918510545,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.503603345881416,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0018148180806365545,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.018012786343000495,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09158730653724201,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5256219177122872,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.822764611900999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 32.24864435352822,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14227819686531493,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6753013300973705,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.677134240366613,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1682966004579615,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0253905969418944,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.474494998396352,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016357234070987607,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017659016553740865,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08312006043097506,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001611265927217899,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0015984317133325425,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0015848857212565613,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1730825644816151,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8786367677371203,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.394016095233948,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "committer": {
            "name": "George Leontiev",
            "username": "folone",
            "email": "george.leontiev@reddit.com"
          },
          "id": "3386de22085e6c420b57c157f1559b2a554cf8a5",
          "message": "Checkout before other operations (but after debug)",
          "timestamp": "2025-08-04T10:48:21Z",
          "url": "https://github.com/folone/poi.scala/commit/3386de22085e6c420b57c157f1559b2a554cf8a5"
        },
        "date": 1754306111899,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 42.70389780168621,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.38294261254267,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.294339865725396,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.20095490628382873,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.091083536156301,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.860743056507345,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.219505546485444,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1249473966846708,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.08839942285281688,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08648768511826407,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08745269451931476,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 492.3189199904873,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.42648472853443,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.347281670377088,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.37209936871166754,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3586429370719797,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.42268256373608304,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.12510532670349603,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.12522333595797436,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11293325592904682,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 552.235558519909,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.87766611573943,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.815654913276877,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9677365637134483,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.16380512721841797,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.029089263339557248,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.832232498041644,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.619838962221098,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11445147056505531,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.05822818756522,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49135897912049414,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0881291434763941,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 612.4933424076685,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.59229694706628,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.026244651245792,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 600.8027943046071,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 643.1324081544199,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 678.2399125063506,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.660944756833491,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.531017163236702,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09885943650796573,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022991470704985317,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02320759728478923,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7374695536774153,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.219268996508781,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07286574069804647,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5251763236797049,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23208548327060946,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.866104163045564,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.12039726870574,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.097849305604395,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.567007078160916,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0020140343022397277,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021462123112801438,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11695203798547575,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.17771255260214,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.541060956906599,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.8097009712052587,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.277684177882169,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.752547296180554,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.334673245755765,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0018182858624924852,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01792394793697292,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09218136061006801,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5303651523682754,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.0306504475904275,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.605725374621215,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.13601375888477538,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.681707340588127,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.523373975966882,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16755561149117687,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9799475674587677,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.53777586282834,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016337602720168033,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016181396860362095,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08267699900408744,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.00165842225024222,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014745143557564,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.001590558245332932,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17166848586877634,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.89939935121314,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.635595992046515,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0f7e53458db83b76f52b5ab2f1826ea24a517243",
          "message": "Update sbt-assembly to 2.3.1 (#333)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-04T11:18:55Z",
          "url": "https://github.com/folone/poi.scala/commit/0f7e53458db83b76f52b5ab2f1826ea24a517243"
        },
        "date": 1754307923800,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.1892219425237,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 42.76391847944695,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3294967443814003,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2279147663963912,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.899568312883025,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8955113566165998,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.367642570227496,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1449086760683571,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09017619408598779,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0919877185069851,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09319589387031364,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 496.59178305966816,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.51366542647254,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.573946763171389,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.3837353725923305,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.40171104407009645,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.4108744014920596,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.13876926224446545,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14770876131476707,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.13691032322116398,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 560.1572636212017,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 51.3933311327768,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.888707276012802,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.7606657093204316,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1721321166133815,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.03224998002373659,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.906872851849843,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5908432869610216,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11449541699432145,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.027842285976964,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5028519440761301,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09066258730451036,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 608.1503706075084,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.19817017868176,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.602106894174295,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 435.6439637569394,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 599.999926990162,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 589.1327309154846,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.789692294143973,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5395347640603355,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10222692628755473,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023079692215254945,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023186822385700363,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7650303085742641,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.302419117234322,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07350970699237729,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5305715717177427,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2289342516081056,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8709440529502432,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.862533813674615,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.055362919780219,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.217689873233459,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001991784349697798,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021464811894579335,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11589017978340999,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.6441105536685434,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4969830161909847,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.565311524757105,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.689560410838853,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.990908167050516,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.145693777436675,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001811839625230064,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.01952325114543465,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09220420549204154,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5118509653659197,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.892959416313726,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.002164015151514,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14475307672426832,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6491805719700312,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.507701092927714,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16545210741989375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0506456165586338,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.035161744457714,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.00164810454035279,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016496265068868525,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08621513822511684,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016540448694041608,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016748878051152858,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.001568872544647206,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1684863795790575,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.837787553445071,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.763207974617973,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0f7e53458db83b76f52b5ab2f1826ea24a517243",
          "message": "Update sbt-assembly to 2.3.1 (#333)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-04T11:18:55Z",
          "url": "https://github.com/folone/poi.scala/commit/0f7e53458db83b76f52b5ab2f1826ea24a517243"
        },
        "date": 1754307964605,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.73008359066293,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.43338732011518,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.3408776503925919,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.2325424128807078,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.517979084760857,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.853392296035628,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.223554504933867,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1546351161336428,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09251224998507959,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.08923187736788757,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08900548276039841,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 503.8488418161966,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.51540533207014,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.7863983270535,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4216032406219199,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.3962927852988322,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.407941056078114,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1443056046736299,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1419698446106453,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.13605324753208536,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 552.8998484634461,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 50.55812738570647,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.963074110100642,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9131876282805276,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17348147368494618,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.031990123997446926,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.802758367227375,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5816151289932667,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11741114110080227,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.068710388680975,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.49509191288219156,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08911646711333847,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 626.9022142796991,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 61.34408395411617,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.910373227624557,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 423.9956473343088,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 637.5187270700173,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 663.7260891114983,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.9347366960946495,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5251674630642984,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09673454250806399,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022989258717202487,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.023052103525445962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7822080368692624,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.193644627032259,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07387118652638577,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5421889600530104,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2376055489183694,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8684209255723072,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.172358648189764,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.019326199056378,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.521942571669276,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0019887884612460917,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021420396062432536,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11597784563257503,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.2800105599547886,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.584979712240071,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.3160740438367116,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.754109264615641,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.91409621535211,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 7.273250209792634,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0017929170214974002,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02302995246255366,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08841913856970522,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.494893380446059,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.8301337604604,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.580856795454544,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1459518811162068,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6742042404846487,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.674107585974514,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.16411264014036267,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9868057081062465,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.332231512460845,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016257385107312338,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.016434515411747723,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08473724218731857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0015877394885174094,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0016137017132577612,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0015324274252995081,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1764389558291601,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8400974609609322,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.77453833148717,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0f7e53458db83b76f52b5ab2f1826ea24a517243",
          "message": "Update sbt-assembly to 2.3.1 (#333)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-04T11:18:55Z",
          "url": "https://github.com/folone/poi.scala/commit/0f7e53458db83b76f52b5ab2f1826ea24a517243"
        },
        "date": 1754308407337,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.913032375777334,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.96463579749629,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.325035553070684,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.23662043987712025,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.769434085082105,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8886052382635647,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.461301545885496,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1754541018368516,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.09234534090060062,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09070643713295848,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09043430042287667,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 496.6676059666067,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 44.52771561549549,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.651528791499008,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.43245370991007287,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.37920705179551184,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.37728264262867284,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14797489345206935,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14373868051110725,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1374399773951526,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 558.4075860816379,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 56.07792134173934,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.194238565942083,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.5409564492596752,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.17303003994087318,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.03176650473747895,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 7.068268080024319,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.6086181051709033,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11553349371941968,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.9395275720955585,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5035088370429195,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09294263060307172,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 617.323959834516,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.92510538454887,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.120096281614988,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 624.2658400979346,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 654.1129766996717,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 616.5690452578559,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.884272292524381,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5157924632051265,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.10141519236180523,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.022600010382860268,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02246321219079709,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7641852495570371,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.217628783974096,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07490799208660619,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5259344100058081,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.23008926047791345,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8830732323723047,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 10.890690486898082,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.947591894565218,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.066503731953604,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0020151902379645197,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021370054348570998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11557237453065874,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.662771119950033,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.189282021272773,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.517237473939205,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.7314521100671145,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.868224263449849,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 6.725130465530202,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0017779588345300835,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017757785268045796,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09032525166386962,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.497255279316847,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.873286819866615,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 31.29393131524621,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14423031828300806,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6548231634210626,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.842455241325377,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1611120277041436,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.011951762365411,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.91810845978261,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0016839217133609529,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.015890794890047823,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.08182056131465508,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0014694381649341761,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.0014305368182605939,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0015764266166593092,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1757210856267885,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.8878712565055171,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.582422492210338,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "scala-steward-bot",
            "username": "scala-steward-bot",
            "email": "2517319+scala-steward-bot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0f7e53458db83b76f52b5ab2f1826ea24a517243",
          "message": "Update sbt-assembly to 2.3.1 (#333)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-04T11:18:55Z",
          "url": "https://github.com/folone/poi.scala/commit/0f7e53458db83b76f52b5ab2f1826ea24a517243"
        },
        "date": 1754308430864,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 43.443546759805976,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 43.3186423109488,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.318982129790216,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.22945168564098323,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 13.63065740904877,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.9285013078131457,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 4.268856340607013,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.1654862455058717,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.08897078811660618,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.09077958669271605,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0919226757899316,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 496.7974336064067,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 46.71397488658675,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.396158352225694,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.4190926193275441,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.33169132328207496,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.43268075007697293,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.14463240301547356,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.14482282904499194,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.13734649800130805,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 558.0914813376347,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 55.30220942696487,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.62616476676611,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 1.9446616238239733,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.1747136872005318,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.03143584735133303,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.901131187161326,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5985028232353169,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.1168217948312887,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.9929517633663405,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.495107679943865,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09004427176043336,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 599.6329816487261,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 60.849840028833185,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 12.271344758307158,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 608.1493957623264,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 635.5615456815474,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 655.109026292832,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 5.706940524199844,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5215086806371014,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09792773872005968,
            "unit": "ops/ms",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.023028614759521084,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.createWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.02338910030100993,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.7613268277494464,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.loadWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 4.267107439805594,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.07367837112502737,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.processDataStreamAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.5280942966829916,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.2335685515631613,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.AsyncPoiBenchmarks.saveWorkbookAsyncBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.8947539210790783,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 11.161072610382762,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 11.10958346980464,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.bulkDataProcessingBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 10.874985037131838,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001983635400587649,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.021551005545898776,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.11626211286244155,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 2.28792223930548,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.4333284481252884,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.cellLookupBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 2.373526291282746,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 6.819401253452968,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.830792161304662,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.dataTransformationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 6.728310931041115,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0017913606638561741,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.017589642193588127,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.formulaCellsBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.09179243121912868,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.5113068228522366,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 5.84622131066797,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.memoryIntensiveBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 30.847844796780304,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.13963147668787518,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.6663398749006855,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.rowCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 8.437715048675996,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.1673683560039293,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 2.0367540435236124,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.sheetCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 11.651516918813977,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.001630688614862426,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.019066988860231615,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.unicodeDataBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0813646939370061,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.0015869861312661558,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 0.001606343572976863,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCombinationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 0.0016154749421785578,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"100\"} )",
            "value": 0.17450396499056292,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 1.874205612147365,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.PoiBenchmarks.workbookCreationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 9.812371637013928,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      }
    ],
    "JMH Memory Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "folone@users.noreply.github.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b8fc879cbeb4ce7c0b5191470ad93d5c4b4f7ae",
          "message": "Improve benchmarks. (#332)",
          "timestamp": "2025-08-03T09:05:13Z",
          "tree_id": "a08f5cc404b5b6ab2128310a423523aa2669b627",
          "url": "https://github.com/folone/poi.scala/commit/1b8fc879cbeb4ce7c0b5191470ad93d5c4b4f7ae"
        },
        "date": 1754212164688,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 8.4178034,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 19.407160400000002,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 32.7926722,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 20.300485400000003,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 20.776902999999997,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 24.8469318,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "folone@users.noreply.github.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d1c660dc4b7de6d9beec3dc7d1e856855b291cd9",
          "message": "Introduce a separate benchmark workflow. (#334)\n\n* Introduce a separate benchmark workflow.\n\n* Simplify",
          "timestamp": "2025-08-03T15:41:27+01:00",
          "tree_id": "27c45acfba056f92167d15e02a0ed08cb73e2670",
          "url": "https://github.com/folone/poi.scala/commit/d1c660dc4b7de6d9beec3dc7d1e856855b291cd9"
        },
        "date": 1754232336177,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.768570600000001,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 15.0935542,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 35.622502,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 22.2564,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.687226799999998,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 25.920528400000002,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "distinct": true,
          "id": "b357aeac71baf4275b063c9a0fb17a8ae18d1f30",
          "message": "Fix benchmark upload path",
          "timestamp": "2025-08-03T16:20:08+01:00",
          "tree_id": "c18ada0f0e560e7a70671596788440c254e28c3a",
          "url": "https://github.com/folone/poi.scala/commit/b357aeac71baf4275b063c9a0fb17a8ae18d1f30"
        },
        "date": 1754234664558,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 8.6420882,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 20.591723599999998,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 32.619930999999994,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 27.279424800000005,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 27.4991408,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 37.6830442,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "distinct": true,
          "id": "0d8d4bd206ca290c1b9c0d7b0a9c2d8970ea753f",
          "message": "Fix up benchmark download",
          "timestamp": "2025-08-03T16:55:02+01:00",
          "tree_id": "8751195335203b315cf563d3dc53a3a69c8bdcc6",
          "url": "https://github.com/folone/poi.scala/commit/0d8d4bd206ca290c1b9c0d7b0a9c2d8970ea753f"
        },
        "date": 1754236753371,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 10.0941762,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 17.045168800000003,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 34.5278226,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 18.1251288,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.253723200000003,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 23.850914999999997,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "folone@users.noreply.github.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "439f36aa17e833ae970874f4e907a16e6920fb20",
          "message": "Module for cats support. (#335)",
          "timestamp": "2025-08-04T07:53:00+01:00",
          "tree_id": "870b48eec42ca369b8254378109ca3047f5f7fa2",
          "url": "https://github.com/folone/poi.scala/commit/439f36aa17e833ae970874f4e907a16e6920fb20"
        },
        "date": 1754290650185,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 9.1927414,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 19.878716,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 40.3919446,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 18.8775682,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.1556874,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 25.3218376,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "distinct": true,
          "id": "52d934adb21604922a995777c559dd056a5367d4",
          "message": "Try to fix the comment publishing workflow",
          "timestamp": "2025-08-04T09:18:39+01:00",
          "tree_id": "84773b2b9d1b80d0a47eaa8d8a66f32a1b131d7f",
          "url": "https://github.com/folone/poi.scala/commit/52d934adb21604922a995777c559dd056a5367d4"
        },
        "date": 1754295784001,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.9434406,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.939196,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 29.507662399999997,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 20.4037274,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.495926,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 34.769728,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "distinct": true,
          "id": "51f323e9f6aadcc7dafcc18e2edb3c479bc8d295",
          "message": "Don't forget to checkout the repo",
          "timestamp": "2025-08-04T09:55:57+01:00",
          "tree_id": "961d2b240d62eab6d36218415a1f25fd602be672",
          "url": "https://github.com/folone/poi.scala/commit/51f323e9f6aadcc7dafcc18e2edb3c479bc8d295"
        },
        "date": 1754298018108,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 6.222439,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 17.2828464,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 35.5592176,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 19.6878112,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 24.124883599999997,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 31.072349000000003,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "folone@users.noreply.github.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf96eef8e7ed6a5015d667047ff07ef9f8dbd1df",
          "message": "Refactor packages. (#336)\n\n* Refactor packages.",
          "timestamp": "2025-08-04T10:29:23+01:00",
          "tree_id": "e375431db70a21bec25989828e4f72e908e14eee",
          "url": "https://github.com/folone/poi.scala/commit/bf96eef8e7ed6a5015d667047ff07ef9f8dbd1df"
        },
        "date": 1754300040907,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 9.4439792,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.826441,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 29.4548564,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 18.2333664,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 23.8241816,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 25.908817600000003,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "distinct": true,
          "id": "babd4d27914579a170ffe8a6b1163ae14621670a",
          "message": "Update README and Makefile",
          "timestamp": "2025-08-04T10:47:42+01:00",
          "tree_id": "e475dfe39c7b3da733538f27f79d0f6748d1c666",
          "url": "https://github.com/folone/poi.scala/commit/babd4d27914579a170ffe8a6b1163ae14621670a"
        },
        "date": 1754301157766,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.4000928,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 20.2144104,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 30.579780399999997,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 22.404076999999997,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.347028,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 22.6783748,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "distinct": true,
          "id": "5207a57574a5490edff2258b767d1b4150428ca4",
          "message": "More robust way to get a PR number",
          "timestamp": "2025-08-04T11:17:39+01:00",
          "tree_id": "16afbf0afb94d43a28e418d11fc11afab6c3d86a",
          "url": "https://github.com/folone/poi.scala/commit/5207a57574a5490edff2258b767d1b4150428ca4"
        },
        "date": 1754302949431,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 8.352876400000001,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 15.6284556,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 23.1222354,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 18.8470116,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 22.5264116,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 27.193342,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "committer": {
            "email": "george.leontiev@reddit.com",
            "name": "George Leontiev",
            "username": "folone"
          },
          "distinct": true,
          "id": "3386de22085e6c420b57c157f1559b2a554cf8a5",
          "message": "Checkout before other operations (but after debug)",
          "timestamp": "2025-08-04T11:48:21+01:00",
          "tree_id": "0688cf6a19072fb4ead712b9558d950c6e6405c3",
          "url": "https://github.com/folone/poi.scala/commit/3386de22085e6c420b57c157f1559b2a554cf8a5"
        },
        "date": 1754304773311,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 7.569681,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 15.3205712,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 33.9831112,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 20.1369482,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.032300000000003,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 23.6443424,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2517319+scala-steward-bot@users.noreply.github.com",
            "name": "scala-steward-bot",
            "username": "scala-steward-bot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f7e53458db83b76f52b5ab2f1826ea24a517243",
          "message": "Update sbt-assembly to 2.3.1 (#333)\n\nCo-authored-by: George Leontiev <folone@users.noreply.github.com>",
          "timestamp": "2025-08-04T12:18:55+01:00",
          "tree_id": "236953a647748b5239eb6cf1341ec31d3edc4786",
          "url": "https://github.com/folone/poi.scala/commit/0f7e53458db83b76f52b5ab2f1826ea24a517243"
        },
        "date": 1754306611667,
        "tool": "jmh",
        "benches": [
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 8.394159799999999,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 21.9613522,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryAllocationBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 34.596268800000004,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"1000\"} )",
            "value": 17.910976,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"5000\"} )",
            "value": 20.993465800000003,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "info.folone.scala.poi.benchmarks.MemoryBenchmarks.memoryEfficiencyBenchmark ( {\"dataSize\":\"10000\"} )",
            "value": 25.273378,
            "unit": "ms/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}